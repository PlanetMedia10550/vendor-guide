"use client";
import Link from "next/link";
import Logo from "/public/images&icons/SVG/logo.svg";
import Image from "next/image";
import { useAuth } from "@/context/UserContext";
import { getCookie } from "cookies-next";
import Modal from "@/components/Modal";
import PropartyForm from "@/components/PropartyForm";
import { useState } from "react";

const RequestQuotebtn = ({user,categories}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [vendorId, setVendorId] = useState(0);
    const  UserType  = getCookie('user-type');

    // for model code
    const openModal = () => {
        setIsModalOpen(true);
        
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    

  return (
    <>
 
    <Link
      href="/search"
      className="text-white bg-[#B13634]
    hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-sm xl:text-[1.100rem] px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 md:mr-2 focus:outline-none"
    onClick={(e)=>{e.preventDefault(); openModal()}}
    >
      Get Quotes Now
    </Link>
   
  
  <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="request_title text-3xl font-medium" >Request a Quote !</h1>
        {user!=null ? (
            UserType !== '0' ? (
                <PropartyForm user={user} vendor_id={vendorId} onClose={closeModal} categoryData={categories} />
              ) : (
                <div className="mt-10 -tracking-2">This feature is not available for Vendor</div>
              )
          
        ) : (
          <>
            <p className="request_paragraph text-xl mt-2">Kindly login or register to request a quote</p>
            <div className="request_button flex justify-center gap-x-2 mt-4 sm:mt-10">
              <Link className="text-white bg-[#B13634] block   hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-2 sm:px-4 lg:px-4 py-2 lg:py-2 md:mr-2 focus:outline-none" href="/login" onClose={closeModal}>Login</Link>
              <Link className="text-white bg-[#B13634] block   hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-2 sm:px-4 lg:px-4 py-2 lg:py-2 md:mr-2 focus:outline-none" href='/register' onClose={closeModal}>Register</Link>
            </div>
            <div className="request_button_guest flex justify-center gap-x-2 mt-2">
              <Link className="text-white bg-[#B13634] block   hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-2 sm:px-4 lg:px-6 py-2 lg:py-2 focus:outline-none" href='/register' onClose={closeModal}>Continue to Guest</Link>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default RequestQuotebtn;