"use client";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Modal from "@/components/Modal";
import { useAuth } from "@/context/UserContext";
import EditForm from "../EditForm";

const Page = ({ params }) => {
  const {user,renderFieldError,isLoding}  = useAuth();
  const id = params.id;
  const [propertie, setPropertie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  
  useEffect(() => {
    const getPropertie = async () => {
      try {
        const response2 = await fetch(`${process.env.BASE_API_URL}property/${id}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getCookie('token')}`
          },
        })
        if (!response2.ok) {
          throw new Error('Failed to submit the data. Please try again.')
        }
    
        // Handle response if necessary
        var dataProp = await response2.json()
        setPropertie(dataProp.data);
        // const propertyRow = dataProp.data;
        console.log(dataProp.data)
        // console.log(propertie)
      } catch (error) {
        // Capture the error message to display to the user
        console.error(error)
      }
      
    }
    
    getPropertie();
    // console.log(propertie)
    // console.log(propertie)
  }, [])
  return (
    <section className="py-14 bg-[#F6F7F8]">
      <div className="px-10 md:px-16">
        <div className="grid grid-cols-2 gap-x-20 text-sm font-medium text-center border border-black  text-[#171717] p-5 bg-white">
          <div className="col-span-2 md:col-span-1 lg:pl-3">
            <div className="text-xl font-semibold text-[#171717] text-left leading-[1.5rem]">
              <p className="lg:text-[1.5rem] md:text-xl text-xl font-medium">{propertie?.property_name}</p>
              <p>{propertie?.address}</p>
            </div>
            <div className="flex pt-16 text-left font-semibold">
              {/* <ul className="pr-10 text-lg leading-[1.4rem]">
                <li>Regional Manager</li>
                <li>Property Manager</li>
                <li>Leasing Manager</li>
              </ul>
              <ul className="text-lg leading-[1.4rem]">
                <li>Clay Brooks</li>
                <li>Noah Bennet</li>
                <li>Jordyn Hamilton</li>
              </ul> */}
            </div>
            <div className="my-10">
              <form>
                <div className="flex text-center justify-center gap-x-6  lg:pr-16">
                  {/* <SaveEditButton name="Add/Edit" /> */}
                  <Link
                  href="#"
                  onClick={openModal}
                  className="rounded-[0.7rem]  px-7 py-1 text-sm border-solid  border border-gray-500 font-semibold text-black shadow-sm hover:bg-[#B13634 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >Edit</Link>
                </div>
              </form>
            </div>
          </div>
          <div className="col-span-2 md:col-span-1">
            {/* <div className="text-base leading-5 font-semibold text-[#171717] text-right pb-4 pr-3">
              <p>(952) 746-5343</p>
              <p className=""> manager@solsticesprings.com</p>
              <p className="">hello@solsticesprings.com</p>
            </div> */}
            <div className="">
              <Image width="100" height="100"
                src={propertie?.image_url}
                alt=""
                className="w-[30rem] h-75 float-right mx-auto"
              />
            </div>

          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <EditForm user={user} onClose={closeModal} id={id} />
      </Modal>
    </section>
  );
};

export default Page;
