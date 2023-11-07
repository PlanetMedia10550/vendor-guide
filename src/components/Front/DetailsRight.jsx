import Image from "next/image";
import Link from "next/link";
import vendorDefult from "@/../../public/images&icons/vendor-default.jpg"


const DetailsRight = ({filterData}) => {
  const imageUrl = filterData.image_url;
  // console.log(imageUrl);
  return (
    <>
    <div className="brand-star md:col-span-1 col-span-12   order-1 sm:order-2  sm:gap-x-5 md:px-16">
    <div className=" rounded-2xl overflow-hidden  flex flex-col  bg-white">
      <div className="text-center pb-6">
        <div className="">
          <Image
            width="100"
            height="100"
            src={imageUrl ? imageUrl : vendorDefult.src}
            alt="Product screenshot"
            className="mx-auto md:mx-0 w-[20rem]"
          />
        </div>
        <div className="py-8  lg:py-7 gap-x-4 block text-left">
          <h3 className="text-lg font-lato font-bold   text-[#647589]">
          {filterData.address}
          </h3>
          <h3 className="text-lg font-lato font-bold text-[#647589] py-3">
          {filterData.country} , {filterData.postal_code}
          </h3>
          <h3 className="text-lg font-lato font-bold   text-[#647589]">
          Phone Number : {filterData.mobile}
          </h3>
        </div>
        <div className="block text-left">
          <Link
            href="#"
            className="px-10 lg:px-6 md:px-5 py-3 text-center inline-block rounded-md bg-[#c13e27] lg:text-lg md:text-lg text-sm tracking-wide font-semibold font-lato text-white shadow-sm hover:bg-[#783426] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20] mr-4"
          >
            Request quote
          </Link>
          <Link
            href="#"
            className="px-10 lg:px-6 md:px-5 py-3 text-center inline-block rounded-md bg-[#c13e27] lg:text-lg md:text-lg text-sm tracking-wide font-semibold font-lato text-white shadow-sm hover:bg-[#783426] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20]"
          >
            Website
          </Link>
        </div>
      </div>
    </div>
  </div>
    </>
  );
};

export default DetailsRight;
