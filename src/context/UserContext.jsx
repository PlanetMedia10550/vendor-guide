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
  const { errors,setErrors, renderFieldError, navigate } = useForm();
  useEffect(() => {
    const loadUserFromCookies = async () => {
      // const token = Cookies.get('token');
      setIsLoding(true);
      if (token) {
        console.log("Got a token in the cookies, let's see if it is valid");
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`; // Set the Authorization header for Axios
        try {
          const response = await axios.post(`${process.env.BASE_API_URL}user-info`); // Assuming you want to make a GET request for user info
          // console.log(response.data)
          setUser(response.data); // Assuming the user data is in the response
          setIsLogin(true);
        } catch (error) {
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
      await axios.post(`${process.env.BASE_API_URL}${requestUrl}/login`, data).then(response => {
        // console.log(response.data.data);
        if(response.data.success==true) {
          var token_new = response.data.data.token;
          if (token_new) {
                  setUser(response.data.data); 
                  setCookie('token', token_new);
                  setCookie('is_module_type', requestUrl);
                  // console.log(user.data.name);
                  router.push(`/${requestUrl}/dashboard`);
                  setIsLoding(false);
              }
          }
      }).catch(error => {
          // console.log(error.response);
          if(error?.response?.data?.data.errors) {
              if (error.response.data.data.errors) {
                  setErrors(error.response.data.data.errors);
                  
              }
          }
          setIsLoding(false);
      });
  };
  
  const register = async (requestUrl,data) => {
      setErrors(null);
      setIsLoding(true);
      await axios.post(`${process.env.BASE_API_URL}${requestUrl}/register`, data).then(response => {
        // console.log(response.data.data);
        if(response.data.success==true) {
            router.push(`/${requestUrl}/login`);
            setIsLoding(false);
        }
      }).catch(error => {
          // console.log(error.response);
          if(error?.response?.data?.data) {
              if (error.response.data.data) {
                  setErrors(error.response.data.data);
                  
              }
          }
          setIsLoding(false);
      });
  };

  const logout = (e) => {
    e.preventDefault();
    if(hasCookie('token')){
      deleteCookie('token')
      deleteCookie('is_maneger')
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
