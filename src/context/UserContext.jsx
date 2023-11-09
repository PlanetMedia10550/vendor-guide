"use client";
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios properly
import { setCookie,getCookie,deleteCookie,hasCookie } from 'cookies-next';
import { NextResponse } from 'next/server';
import {useForm} from "@/hooks/useForm";
import { useRouter } from 'next/navigation'

const UserContext = createContext();

export function UserProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  // const [formErrors, setFormErrors] = useState(false);
  const token = getCookie('token');
  const is_module_type = getCookie('is_module_type');
  
  // console.log(is_module_type)
  const { errors,setErrors, renderFieldError, navigate } = useForm();

  
  useEffect(() => {
    const loadUserFromCookies = async () => {

      // const token = Cookies.get('token');
      setIsLoding(true);
      if (token) {
        // console.log("Got a token in the cookies, let's see if it is valid");
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the Authorization header for Axios
        try {
          const response = await axios.post(`${process.env.BASE_API_URL}user-info`); // Assuming you want to make a GET request for user info
          // const result = await response.json();
          // console.log(response.data)
          setUser(response.data); // Assuming the user data is in the response
          setIsLogin(true);
          setCookie('token', token,{maxAge: 3600 });
          setCookie('is_module_type', is_module_type,{maxAge: 3600 });
        } catch (error) {
          // console.log(error.response.status)
          if(error?.response?.status==401){
            if(hasCookie('token')){
              deleteCookie('token');
              deleteCookie('is_module_type');
              setUser(null);
              router.push(`/`);
            }
          }
          console.error('Error loading user info', error);
          setUser(null); // Handle errors by setting user to null or implement error handling as needed.
        }
        
      }
    }

    loadUserFromCookies();
    setIsLoding(false);
  }, [token]);



  const login = async (requestUrl,data) => {
      setErrors(null);
      setIsLoding(true);
      deleteCookie('token')
      deleteCookie('is_maneger')
      setUser(null); 
      setIsLogin(false);
      await axios.post(`${process.env.BASE_API_URL}${requestUrl}/login`, data).then(response => {
        // console.log(response.data.data);
        setIsLoding(false);
        if(response.data.success==true) {
          var token_new = response.data.data.token;
          if (token_new) {
                  setUser(response.data.data); 
                  setCookie('token', token_new,{maxAge: 3600 });
                  setCookie('is_module_type', requestUrl,{maxAge: 3600 });
                  // console.log(user.data.name);
                  router.push(`/${requestUrl}/dashboard`);
                  
              }
          }
      }).catch(error => {
        setIsLoding(false);
          // console.log(error.response);
          if(error?.response?.data?.data.errors) {
              if (error.response.data.data.errors) {
                  setErrors(error.response.data.data.errors);
                  
              }
          }
          
      });
  };
  
  const register = async (requestUrl,data) => {
      setErrors(null);
      setIsLoding(true);
      await axios.post(`${process.env.BASE_API_URL}${requestUrl}/register`, data).then(response => {
        // console.log(response.data.data);
        setIsLoding(false);
        if(response.data.success==true) {
            router.push(`/${requestUrl}/login`);
            
        }
      }).catch(error => {
        setIsLoding(false);
          // console.log(error.response);
          if(error?.response?.data?.data) {
              if (error.response.data.data) {
                  setErrors(error.response.data.data);
                  
              }
          }
          
      });
  };

  const logout = (e) => {
    e.preventDefault();
    if(hasCookie('token')){
      deleteCookie('token')
      deleteCookie('is_maneger')
      deleteCookie('is_module_type')
      setUser(null); 
      setIsLogin(false);
      router.push(`/`);
    }
  };

  return (
    <UserContext.Provider value={{user,isLogin,login,register,logout,renderFieldError,isLoding,navigate}}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  return useContext(UserContext);
}
