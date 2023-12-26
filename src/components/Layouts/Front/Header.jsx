"use client";
import Link from "next/link";
import Logo from "/public/images&icons/SVG/logo.svg";
import Image from "next/image";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useAuth } from "@/context/UserContext";
import { getCookie } from 'cookies-next';
import { usePathname,useRouter } from "next/navigation";
import HeaderDropdown from "./HeaderDropdown";
import Loading from "@/app/loadingScreen";
import { Button } from "primereact/button";
import { useEffect } from "react";

import RequestQuotebtn from "@/components/Front/RequestQuotebtn";

  const Header = (props) => {
  const {user,isLoding,isInfoLoding,logout,sitesetting}  = useAuth();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const [profileUrl, setProfileUrl] = useState("");
  const cookie = getCookie('token');
  const pathname = usePathname()
  const  UserType  = getCookie('user-type');
  // console.log(pathname)
    // if(cookie && pathname=='/manager/login'){
    //   router.push('/manager/dashboard')

    // }
    // if(!cookie && pathname=='/manager/dashboard'){
    //   router.push('/manager/login')
    // }
  useEffect(()=>{
    if(getCookie('user-type')==1){
      setProfileUrl('/manager/dashboard');
    }else if(getCookie('user-type')==2){
      setProfileUrl('/company/dashboard');
    }else if(getCookie('user-type')==0){
      setProfileUrl('/vendor/dashboard');
    }
  },[])
  const toggleClass = () => {
    setIsActive(!isActive);
  };


 
    const [showMenu, setShowMenu] = useState(true);
    const toggleMenu = (event) => {
        setShowMenu((current) => !current);
        // event.target.parentNode.nextElementSibling.classList.toggle("hidden");
    };

    

  return (
    <>
      <header>
        <nav className="bg-white border-gray-200 px-4 lg:px-6 p-4 ">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xxl py-3">
            {isInfoLoding ? (
              <Link href="/" className="flex items-center md:ps-8 lg:ps-10">
                  <div className="loading-wave flex justify-center items-end">
                    <div className="loading-bar bg-[#B13634] rounded-[5px] "></div>
                    <div className="loading-bar bg-[#B13634] rounded-[5px]"></div>
                    <div className="loading-bar bg-[#B13634] rounded-[5px]"></div>
                    <div className="loading-bar bg-[#B13634] rounded-[5px]"></div>
                  </div>
              </Link>
            ):(
            <Link href="/" className="flex items-center md:ps-8 lg:ps-10">
              <Image
                src={sitesetting?.sidelogo_url?sitesetting?.sidelogo_url:Logo}
                className="mr-3 h-6 sm:h-9 w-auto"
                alt="Vendor Guide Logo"
                id="Vendor_Guide_Logo"
                width= "100"
                height ="100"
              />
            </Link>
            )}
            {UserType == 1 || !user ? (
              <RequestQuotebtn user={user} />
            ): ''}

            <div
              className={`  ${
                !isActive ? "hidden " : " "
              } lg:ml-auto justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className={`flex items-center flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0 text-base text-[#221F20] ${UserType == 1 || !user ? " " : "pr-10"}`}>
                <li className="hidden " id="Vendor_Guide_Logo2">
                  <Link
                    href="/"
                    className="flex items-center px-4 pb-4 lg:ps-4"
                  >
                    <Image
                      src={Logo}
                      className="mr-3 h-6 sm:h-9 w-auto"
                      alt="Vendor Guide Logo"
                      id="Vendor_Guide_Logo2"
                    />
                  </Link>
                </li>

                <li >
                  <Link
                    href="/advertise"
                    className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-grey-300  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0"
                  >
                    Advertise
                  </Link>
                </li>
                <li >
                  <Link
                    href="/about"
                    className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0"
                  >
                    About
                  </Link>
                </li>
                <li >
                  <Link
                    href="/contact-us"
                    className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0"
                  >
                    Contact
                  </Link>
                </li>
                <li >
                  <div className="head_dropdown inline-block relative lg:pb-2">
                    <button
                      type="button"
                      className="text-base text-[#221F20] font-semibold flex items-center  dropdown-toggle pl-3"
                      id="page-header-user-dropdown"
                      data-bs-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="true"
                    >
                      <span className="fw-medium  xl:block pr-2">
                        Resources
                      </span>
                      <FontAwesomeIcon
                        icon={faAngleDown}
                        className="text-[#B13634]"
                      />
                    </button>
                    <ul className="head_dropdown-menu absolute hidden text-gray-700 pt-1 w-[8rem] z-50 bg-white mt-2 shadow-solid-primary ">
                      <li className="py-1 hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                        <Link
                          className="px-3 text-sm font-bold block "
                          href="/resources"
                        >
                          <i className="mdi mdi-lock text-16 align-middle mr-1"></i>
                          Blog
                        </Link>
                      </li>
                      <li className="hover:bg-gray-50/50 dark:hover:bg-zinc-700/50">
                        <div className="head_pulbication_dropdown inline-block relative pb-2 pr-8">
                          <button
                            type="button"
                            className="text-base text-[#221F20] font-semibold flex items-center  dropdown-toggle  dark:border-zinc-600  pl-3"
                            id="page-header-user-dropdown"
                            data-bs-toggle="dropdown"
                            aria-haspopup="true"
                            aria-expanded="true"
                          >
                            <span className="pl-1 text-sm font-bold xl:block pr-2">
                              Publication
                            </span>
                            <FontAwesomeIcon
                              icon={faAngleRight}
                              className="text-[#B13634]"
                            />
                          </button>
                          <HeaderDropdown />
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                {user?.name ?
                (<li>
                  <div className="head_profile_dropdown relative lg:pb-2">
                  <button
                    type="button"
                    className="flex gap-x-4 items-center border-gray-50 text-white "
                    id="page-header-user-dropdown"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="true"
                    onClick={toggleMenu}
                  >
                    {/* <Image
                      width="100"
                      height="100"
                      className="h-8 w-8 rounded-full ltr:xl:mr-2 rtl:xl:ml-2"
                      src="/../../images&icons/profile.png"
                      alt="Header Avatar"
                    /> */}
                    <div>
                      <span className=" align-text-bottom text-[#221F20] text-base font-lato">
                        {isLoding ? (
                            <span>Loading...</span>
                        ) : user?.name } 
                        <FontAwesomeIcon icon={faAngleDown}  className="ps-2 text-[#B13634]"/>
                      </span>
                      {/* <span className="text-white block text-xs">
                        Portfolio Manager
                      </span> */}
                    </div>
                  </button>
                  <div
                    className="head_profile_dropdown-menu absolute top-[2rem] left-0 z-40 w-28 list-none rounded bg-white  hidden shadow-solid-primary"
                    id="profile/log"
                    data-popper-placement=""
                  >
                    <div
                      className="border border-gray-50  "
                      aria-labelledby="navNotifications"
                    >
                      <div className="dropdown-item ">
                        <Link
                          className="px-3 py-2 hover:bg-gray-50/50 block"
                          href={profileUrl}
                        >
                          <i
                            className="fa fa-user text-16 align-middle mr-1"
                            aria-hidden="true"
                          ></i>
                          Dashboard
                        </Link>
                      </div>
                      <hr className="border-gray-50 " />
                      <div className="dropdown-item ">
                        <Button
                          className="p-3 hover:bg-gray-50/50 block"
                          onClick={logout}
                        >
                          <i
                            className="fa fa-sign-out text-16 align-middle mr-1"
                            aria-hidden="true"
                          ></i>
                          Logout
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
                  {/* <Link
                    href=""
                    className="text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0   -700 lg:p-0"
                    onClick={logout}
                  >
                    Logout
                  </Link> */}
                </li>) :
                (
                  <li>
                    <Link
                      href="/login"
                      className="lg:pb-2 text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0   -700 lg:p-0          "
                    >
                      Login
                    </Link>
                  </li>
                )
                }
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
