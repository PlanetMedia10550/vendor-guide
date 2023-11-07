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

  const Header = (props) => {
  const {user,isLoding,logout}  = useAuth();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const cookie = getCookie('token');
  const pathname = usePathname()
  // console.log(pathname)
    // if(cookie && pathname=='/manager/login'){
    //   router.push('/manager/dashboard')

    // }
    // if(!cookie && pathname=='/manager/dashboard'){
    //   router.push('/manager/login')
    // }
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
            <Link href="/" className="flex items-center md:ps-8 lg:ps-10">
              <Image
                src={Logo}
                className="mr-3 h-6 sm:h-9 w-auto"
                alt="Vendor Guide Logo"
                id="Vendor_Guide_Logo"
              />
            </Link>

            <div className="lg:ml-8 flex items-center lg:order-2">
              <Link
                href="#"
                className="text-white bg-[#B13634]
              hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-normal rounded-lg text-xs sm:text-base lg:text-[1.100rem] px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 md:mr-2 focus:outline-none"
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
            <div
              className={`  ${
                !isActive ? "hidden " : " "
              } lg:ml-auto justify-between items-center w-full lg:flex lg:w-auto lg:order-1`}
              id="mobile-menu-2"
            >
              <ul className="flex items-center flex-col mt-4 font-semibold lg:flex-row lg:space-x-8 lg:mt-0 text-base text-[#221F20]">
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
                    href="advertise"
                    className="text-base text-[#221F20] font-semibold block py-2 lg:pb-2 pr-4 pl-3  border-b border-grey-300  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:p-0"
                  >
                    Advertise
                  </Link>
                </li>
                <li >
                  <Link
                    href="about"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="lg:pb-2 text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0   -700 lg:p-0"
                  >
                    About
                  </Link>
                </li>
                <li >
                  <Link
                    href="contact"
                    onClick={(e) => {
                      e.preventDefault();
                    }}
                    className="lg:pb-2 text-base text-[#221F20] font-semibold block py-2 pr-4 pl-3  border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0   -700 lg:p-0"
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
                          href=""
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
                          <ul className="head_pulbication_dropdown-menu absolute left-[8.2rem] top-0  hidden w-[8rem] text-gray-700 pt-1 mt-2 z-50 bg-white shadow-solid-primary ">
                            <li className="py-1">
                              <Link
                                className="px-3 pt-2 text-sm font-bold hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50"
                                href=""
                              >
                                <i className="mdi mdi-face-man text-16 align-middle mr-1"></i>
                                Minnesota
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="px-3 text-sm font-bold hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50"
                                href=""
                              >
                                <i className="mdi mdi-lock text-16 align-middle mr-1"></i>
                                Missouri
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="px-3 text-sm font-bold hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50"
                                href=""
                              >
                                <i className="mdi mdi-logout text-16 align-middle mr-1"></i>
                                Virginia
                              </Link>
                            </li>
                            <li className="py-1">
                              <Link
                                className="px-3 pb-2 text-sm font-bold hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50"
                                href=""
                              >
                                <i className="mdi mdi-lock text-16 align-middle mr-1"></i>
                                Louisiana
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </li>
                    </ul>
                  </div>
                </li>
                {user?.data ?
                (<li>
                  <div className="dropdown relative lg:pb-2">
                  <button
                    type="button"
                    className="flex gap-x-4 items-center border-gray-50 text-white dropdown-toggle"
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
                        ) : user?.data.name } 
                        <FontAwesomeIcon icon={faAngleDown}  className="ps-2 text-[#B13634]"/>
                      </span>
                      {/* <span className="text-white block text-xs">
                        Portfolio Manager
                      </span> */}
                    </div>
                  </button>
                  <div
                    className={`dropdown-menu absolute top-[3.5rem] left-0 z-40 w-40 list-none rounded bg-white shadow ${showMenu? 'hidden': ""}`}
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
                          href="/manager/dashboard"
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
                        <Link
                          className="p-3 hover:bg-gray-50/50 block"
                          href="#"
                          onClick={logout}
                        >
                          <i
                            className="fa fa-sign-out text-16 align-middle mr-1"
                            aria-hidden="true"
                          ></i>
                          Logout
                        </Link>
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
                      href="/manager/login"
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
