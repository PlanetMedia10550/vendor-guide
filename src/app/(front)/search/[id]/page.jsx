"use client";

import DetailsCarosuel from "@/components/Front/DetailsCarosuel";
import DetailsHero from "@/components/Front/DetailsHero";
import Modal from "@/components/Modal";
import TopBarImage from "public/images&icons/search_result/VendorGuideMagazine.jpg";
import { useState,useEffect } from "react";
import DetailsForm from "@/components/Front/DetailsForm";
import DetailsRight from "@/components/Front/DetailsRight";
import { getCookie } from "cookies-next";


const Details = (params) => {
  const vendorId = params.params.id;
  // console.log(id);
  const [filterData, setFilterData] = useState([]);
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const fetchData  = async () => {
      try {
        const response2 = await fetch(`${process.env.BASE_API_URL}vendor/${vendorId}`, {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${getCookie('token')}`
          },
        });
        // console.log('done');
        if (!response2.ok) {
          throw new Error('Failed to submit the data. Please try again.');
        }

        // Handle response if necessary
        const dataProp = await response2.json();
        setFilterData(dataProp.data);
        // setRequestsQuotes(dataProp);
      } catch (error) {
        // Capture the error message to display to the user
        console.error(error);
        // console.log('error123');
      }
    }
    fetchData ();
  }, []);  // Add 'id' to the dependency array to trigger the effect when it changes


  
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>

      <DetailsHero src={TopBarImage.src} filterData={filterData} />
      <section id="featurs_section" className="py-9 md:py-5">
        <div className="container mx-auto overflow-hidden pt-5 md:pt-12 px-5 md:px-8 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:mx-auto  max-w-4xl grid grid-cols-2 md:gap-x-16 md:gap-y-16 lg:max-w-none">
              <div className="md:col-span-1 col-span-12 lg:-mr-16 order-2 sm:order-1 ">
                <div className="lg:pt-4 text-center md:text-left ">
                  <DetailsCarosuel />
                </div>
              </div>
              {/* right section  */}
              <DetailsRight filterData={filterData} />
            </div>

            <div className="mt-12">
              <div>
                <div>
                  <p className="text-[#647589] text-lg font-medium font-lato leading-8">
                    {filterData.description}
                  </p>
                </div>

                {filterData.multifamily ? (
                  <div className="my-10">
                    <label
                      for=""
                      className="text-[#7A7A7A] text-[1.2rem] font-medium font-lato"
                    >
                      Multifamily Description
                    </label>
                    <p className="text-[#647589] text-lg font-medium font-lato leading-8">
                      <span>{filterData.multifamily}</span>
                    </p>
                  </div>
                ) : (
                  <div>
                    {/* Content to display when filterData.multifamily does not exist */}
                    <p className="text-[#7A7A7A] text-lg font-medium font-lato leading-8">
                      No Multifamily Description Available
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* end next section */}
           <DetailsForm/>
        </div>
      </section>
    </>
  );
};

export default Details;
