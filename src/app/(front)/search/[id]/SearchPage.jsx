"use client";

import DetailsCarosuel from "@/components/Front/DetailsCarosuel";
import DetailsHero from "@/components/Front/DetailsHero";
import { useState,useEffect } from "react";
import DetailsRight from "@/components/Front/DetailsRight";
import { getCookie } from "cookies-next";

const SearchPage = ({slug}) => {
  const vendorId = slug;
  const [isLoading, setIsLoading] = useState(true);
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
        setIsLoading(false)
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
  // console.log(filterData);

  return (
    <>
{isLoading ? (
  <div className="container mx-auto overflow-hidden pt-5 md:pt-12 px-5 md:px-8 xl:px-24">
    <div className="my-10 text-center text-gray-500">Loading...</div>
  </div>
) : (
<>
      <DetailsHero  filterData={filterData} />
      <section id="featurs_section" className="py-9 md:py-5">
        <div className="container mx-auto overflow-hidden pt-5 md:pt-12 px-5 md:px-8 xl:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="lg:mx-auto  max-w-4xl grid grid-cols-2 md:gap-x-16 md:gap-y-16 lg:max-w-none">
              <div className="md:col-span-1 col-span-12 lg:-mr-16 order-2 sm:order-1 ">
                <div className="lg:pt-4 text-center md:text-left ">
                  <DetailsCarosuel filterData={filterData}/>
                </div>
              </div>
              {/* right section  */}
              {filterData.length >0 && <DetailsRight filterData={filterData} />}
            </div>

            <div className="mt-12">
              <div>
                <div>
                  <p className="text-[#647589] text-lg font-medium font-lato leading-8">
                    {filterData?.description}
                  </p>
                </div>
                {isLoading ? (
                    <div className="my-10 text-center text-gray-500">Loading...</div>
                  ) : (
                    filterData?.multi_family !== 0 ? (
                      <div className="my-10">
                        <label
                          htmlFor=""
                          className="text-[#c13e27] text-[1.2rem] font-medium font-lato"
                        >
                          Multifamily Description
                        </label>
                        <p className="text-[#647589] text-lg font-medium font-lato leading-8">
                          <span>{filterData?.multi_family_description}</span>
                        </p>
                      </div>
                    ) : (
                      <div className="my-10">
                      </div>
                    )
                  )}
             {/* commerciel data */}
             {isLoading ? (
                    <div className="my-10 text-center text-gray-500">Loading...</div>
                  ) : (
                    filterData?.commercial !== 0 ? (
                      <div className="my-10">
                        <label
                          htmlFor=""
                          className="text-[#c13e27] text-[1.2rem] font-medium font-lato"
                        >
                          Commercial Description
                        </label>
                        <p className="text-[#647589] text-lg font-medium font-lato leading-8">
                          <span>{filterData?.commercial_description}</span>
                        </p>
                      </div>
                    ) : (
                      <div className="my-10">
                      </div>
                    )
                  )}
                {/* residential data */}
             {isLoading ? (
                    <div className="my-10 text-center text-gray-500">Loading...</div>
                  ) : (
                    filterData?.residential !== 0 ? (
                      <div className="my-10">
                        <label
                          htmlFor=""
                          className="text-[#c13e27] text-[1.2rem] font-medium font-lato"
                        >
                          Residential Description
                        </label>
                        <p className="text-[#647589] text-lg font-medium font-lato leading-8">
                          <span>{filterData?.residential_description}</span>
                        </p>
                      </div>
                    ) : (
                      <div className="my-10">
                      </div>
                    )
                  )}
              
              </div>
            </div>
          </div>
          {/* end next section */}
           {/* <DetailsForm/> */}
        </div>
      </section>
      </>
      )}
    </>
  );
};

export default SearchPage;
