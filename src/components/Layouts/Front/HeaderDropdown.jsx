"use client";
import Link from "next/link";
import Logo from "/public/images&icons/SVG/logo.svg";
import Image from "next/image";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState,useEffect } from "react";
import { useAuth } from "@/context/UserContext";
import { getCookie } from 'cookies-next';
import { usePathname,useRouter } from "next/navigation";
import axios from 'axios';

const HeaderDropdown = (props) => {
  const {user,isLoding,logout}  = useAuth();
  const router = useRouter();
  const [isActive, setIsActive] = useState(false);
  const cookie = getCookie('token');
  const pathname = usePathname();
  const [loading, setLoading] = useState(true);
  const [DropData, setDropData] = useState();
  // console.log(DropData);

  useEffect(() => {
    axios.get(`${process.env.BASE_API_URL}magazine`)
      .then(function (response) {
        const result = response.data;
        // console.log(result.data);
        // Check if result.data is an array
        if (Array.isArray(result.data)) {
          setDropData(result.data);
        } else {
          console.error('API response data is not an array:', result.data);
        }
  
        setLoading(false);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error.message); // Log the error message
        setLoading(false);
      });
  }, []);




  return (
    <>
       <ul className="head_pulbication_dropdown-menu absolute left-[8.2rem] top-0  hidden w-[8rem] text-gray-700 pt-1 mt-2 z-50 bg-white shadow-solid-primary ">
              
              {DropData && DropData.map((item, index) => (
                <li className="py-1" key={index}>
                <Link
                  className="px-3 pt-2 text-sm font-bold hover:bg-gray-50/50 block dark:hover:bg-zinc-700/50"
                  href={`/publication/${item.slug}`}
                >
                  <i className="mdi mdi-face-man text-16 align-middle mr-1"></i>
                  {item.title}
                </Link>
              </li>
              ))}               
          </ul>
    </>
  );
};

export default HeaderDropdown;
