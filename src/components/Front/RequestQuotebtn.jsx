
import Link from "next/link";
import Logo from "/public/images&icons/SVG/logo.svg";
import Image from "next/image";
import { useAuth } from "@/context/UserContext";
import { getCookie } from "cookies-next";
import Modal from "@/components/Modal";
import PropartyForm from "@/components/PropartyForm";
import { useEffect, useState } from "react";

const RequestQuotebtn = ({user}) => {
    // console.log(user);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categoryData, setCategoryData] = useState([]);
    const [isActive, setIsActive] = useState(false);
    const [vendorId, setVendorId] = useState(0);
    const  UserType  = getCookie('user-type');
    // setUserType(res.data.data.type);
// console.log(setUserType);
    useEffect(() => {
        const categoriesResult = async () => {
          var response2 = await fetch(`${process.env.BASE_API_URL}category`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`
            },
              
          })
      
          if (!response2.ok) {
          throw new Error('Failed to submit the data. Please try again.')
          }
          var categoryResult = await response2.json();
          setCategoryData(categoryResult.data)
          // console.log(vendorResult)
        }
        categoriesResult();
        
      }, [])

      const toggleClass = () => {
        setIsActive(!isActive);
      };
    

    // for model code
    const openModal = () => {
        setIsModalOpen(true);
        
      };
    
      const closeModal = () => {
        setIsModalOpen(false);
      };
    

  return (
    <>
    <div className="lg:ml-8 flex items-center lg:order-2">
    <Link
      href="/search"
      className="text-white bg-[#B13634]
    hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 md:mr-2 focus:outline-none"
    onClick={(e)=>{e.preventDefault(); openModal()}}
    >
      Get Quotes Now
    </Link>
    <button
      data-collapse-toggle="mobile-menu-2"
      type="button"
      className="inline-flex items-center p-1 sm:p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400    dark:focus:ring-gray-600"
      aria-controls="mobile-menu-2"
      aria-expanded="false"
      onClick={toggleClass}
    >
      <span className="sr-only">Open main menu</span>
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
          clipRule="evenodd"
        ></path>
      </svg>
      <svg
        className="hidden w-6 h-6"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
          clipRule="evenodd"
        ></path>
      </svg>
    </button>
  </div>
  
  <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-3xl font-medium" >Request a Quote !</h1>
        {user!=null ? (
            UserType !== '0' ? (
                <PropartyForm user={user} vendor_id={vendorId} onClose={closeModal} categoryData={categoryData} />
              ) : (
                <div className="mt-10 -tracking-2">This feature is not available for Vendor</div>
              )
          
        ) : (
          <>
            <p className="text-xl mt-2">Kindly login or register to request a quote</p>
            <div className="flex justify-center gap-x-2 mt-10">
              <Link className="text-white bg-[#B13634] block   hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-2 sm:px-4 lg:px-4 py-2 lg:py-2 md:mr-2 focus:outline-none" href="/login" >Login</Link>
              <Link className="text-white bg-[#B13634] block   hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-2 sm:px-4 lg:px-4 py-2 lg:py-2 md:mr-2 focus:outline-none" href='/register' >Register</Link>
            </div>
          </>
        )}
      </Modal>
    </>
  );
};

export default RequestQuotebtn;