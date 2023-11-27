"use client";
import React, { createContext, use, useContext, useEffect, useState } from 'react';
import axios from 'axios'; // Import Axios properly
import { setCookie,getCookie,deleteCookie,hasCookie } from 'cookies-next';
import { NextResponse } from 'next/server';
import {useForm} from "@/hooks/useForm";
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserContext = createContext();

export function UserProvider({ children }) {
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [sitesetting, setSiteSetting] = useState();
  const [metaData, setMetaData] =useState();
  const [isLogin, setIsLogin] = useState(false);
  const [isLoding, setIsLoding] = useState(false);
  const [isInfoLoding, setIsInfoLoding] = useState(true);
  const [loading, setLoading] = useState(true);
  // const [formErrors, setFormErrors] = useState(false);
  const token = getCookie('token');
  const is_module_type = getCookie('is_module_type');
  
  // console.log(is_module_type)
  const { errors,setErrors, renderFieldError, navigate } = useForm();

  
  useEffect(() => {
    const  loadMetaData = async () =>{
      try{
        const response22 =  await fetch(`${process.env.BASE_API_URL}post-meta`,{
          method:'GET'
        });
        if (!response22.ok) {
          throw new Error('Failed to submit the data. Please try again.');
        }
          const dropData1 = await response22.json();
          // console.log(dropData);
          setMetaData(dropData1.data);
      }catch (error){
        console.error(error);
      }
  }
  loadMetaData();
  setLoading(false);

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
          setUser(response.data.data); // Assuming the user data is in the response
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


  // header footer dynamic code
  useEffect(() => { 
    const loadUserCommonInfo = async () => {

        try {
          const response2 = await fetch(`${process.env.BASE_API_URL}site_setting`, {
            method: 'GET',
          });
          // console.log('done');
          if (!response2.ok) {
            throw new Error('Failed to submit the data. Please try again.');
          }
          // Handle response if necessary
          const dataProp = await response2.json();
          // console.log(dataProp.data);
          setSiteSetting(dataProp.data); 
        } catch (error) {
          console.error(error)
        }
      
    }
    loadUserCommonInfo();
    setIsInfoLoding(false);
  }, []);




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
          }else{
            toast.error(response.data.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
          }
      }).catch(error => {
        setIsLoding(false);
          // console.log(error.response.data);
          if(error?.response?.data?.data?.errors) {
              if (error.response.data.data.errors) {
                  setErrors(error.response.data.data.errors);
                  
              }
          }else{
            toast.error(error?.response?.data?.message, {
              position: "top-right",
              autoClose: 5000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: "colored",
              });
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
    <UserContext.Provider value={{user,isLogin,login,register,logout,renderFieldError,isLoding,isInfoLoding,navigate,sitesetting,metaData,loading}}>
      {children}
    </UserContext.Provider>
  );
}

export function useAuth() {
  return useContext(UserContext);
}
