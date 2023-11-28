import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const FeaturSection2 = (props) => {

  const [advertise2Data, setAdvertise2Data] = useState();
  const [isLoading, setIsLoading] = useState(true);
  // console.log(advertise2Data);

  useEffect(() => {
    const  loadData = async () =>{
      try{
        const response22 =  await fetch(`${process.env.BASE_API_URL}advertisement`,{
          method:'GET'
        });
        if (!response22.ok) {
          throw new Error('Failed to submit the data. Please try again.');
        }
          const dropData1 = await response22.json();
          // console.log(dropData1);
          setAdvertise2Data(dropData1.data);
      }catch (error){
        console.error(error);
      }
  }
  loadData();
  setIsLoading(false);

  }, [])


  return (
    <>
     {advertise2Data && advertise2Data.map((row, i) => {
         if (row.id % 2 !== 0) {
          return(
        <div key={i} className="lg:mx-auto grid max-w-4xl grid-cols-1 items-center  gap-x-2 gap-y-8 md:gap-y-16  lg:max-w-none md:grid-cols-2">
          <div className="lg:pt-4 text-center md:text-left order-last md:order-first">
            <p className="md:mt-6 lg:leading-10 md:text-sm  lg:text-[1.40rem]  text-[#221F20] font-normal  font-maven">
              <span className="text-2xl lg:text-3xl text-[#C1272D]  font-bold font-lato">
                {row.title}
              </span>
              <br /> {row.description}
            </p>
          </div>
          <div
            className="relative w-full md:ml-4 order-first md:order-last"
            style={{ position: "relative" }}
          >
            <Image
              src={row.image_url}
              alt="Product screenshot"
              className="mx-auto max-w-none rounded-xl  ring-1 ring-gray-400/10 xl:w-[30rem] lg:h-[17rem] w-full sm:w-[25rem] md:w-[20rem] lg:w-[25rem] sm:h-[15rem]"
              width="100"
              height="100"
            />
          </div>
        </div>
          )}
          else {
            return (
        <div key={i} className="my-10 lg:my-40 lg:mx-auto grid max-w-4xl grid-cols-1 gap-y-8 md:gap-y-16  lg:max-w-none md:grid-cols-2 ">
          <div className="relative w-full" style={{ position: "relative" }}>
            <Image
              src={row.image_url}
              alt="Product screenshot"
              className="mx-auto max-w-none rounded-xl  ring-gray-400/10 xl:w-[30rem] lg:h-[17rem]  w-full sm:w-[25rem] md:w-[20rem]  lg:w-[25rem]  sm:h-[15rem]  md:-ml-4 lg:-ml-0 md:float-left"
              width="100"
              height="100"
            />
          </div>
          <div className="">
            <div className="lg:ml-[-2rem] md:ml-[0rem] text-center md:text-left">
              <p className="lg:leading-10 md:text-sm  lg:text-[1.40rem]  text-[#221F20] font-normal  font-maven md:pr-8">
                <span className="text-xl lg:text-3xl text-[#C1272D] font-bold font-lato">
                  {row.title}
                </span>
                <br />
                {row.description}
              </p>
            </div>
          </div>
        </div>
            )}

    })}
    </>
  );
};

export default FeaturSection2;
