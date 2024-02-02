import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { Label } from "reactstrap";
import { getResponse } from "@/app/lib/load-api";
import { getCookie } from "cookies-next";

const Companyinfo = (props) => {

  const Router = useRouter();
  const Pathname = usePathname();
  const searchParams = useSearchParams();
  const [urlString,setUrlString] = useState("");
  
  const handleSearch = async (e) => {
    e.preventDefault();
    props.setIsLoding(true);
    
    // vendorResponse()
    props.bannerResponse();
  };
  




  return (
    <>
      <div className="search-section bg-[#f7f9f8]">
        <div className=" isolate px-6   lg:px-8">
          <div className="mx-auto max-w-2xl py-5 lg:py-12 md:pt-10  lg:pt-8">
            <div className="text-center">
              <h1 className="xl:text-5xl  lg:text-4xl text-3xl font-bold tracking-tight text-[#221F20] md:text-4xl">
                Search Results
              </h1>
              <p className="lg:mt-2 mt-3 lg:text-xl text-sm leading-3 text-[#221F20] font-semibold">
              
                {props.searchWord && (props.locality ? `${props.searchWord} near ${props.locality}` : props.searchWord)}

              </p>
            </div>
          </div>
        </div>
        <div className="text-sm text-center">Latitude: {props.latitude}, Longitude: {props.longitude}</div>
        <div className="lg:flex md:block justify-center  px-10 sm:px-20 md:px-28 lg:px-8 xl:px-12 text-sm items-center">
          <div className="lg:flex xl:text-sm text-xs items-center ">
            <div className="px-4 py-3 bg-black w-[10rem] mx-auto lg:mx-0 mb-4 lg:mb-0">
              <p className="font-bold text-white">Advanced Search</p>
            </div>
            <div className="bg-white px-4 py-6 lg:py-3 rounded-xl lg:rounded-none">
              <form className="lg:flex gap-8 text-sm lg:pr-[0.1rem] xl:pr-[1.1rem] pr-4" onSubmit={handleSearch}>
                <div className="grid grid-cols-12  items-center  lg:mb-0 mb-4">
                  <label
                    
                    className="col-span-5 font-bold xl:text-sm text-sm text-[#221F20]"
                  >
                    Company/Keyword
                  </label>
                  <div className="col-span-7 lg:ml-3">
                    <input
                      type="text"
                      className="w-full lg:w-[9rem] h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black  pl-2"
                      value={props.searchWord}
                      onChange={(e) => props.setSearch(e.target.value)}
                    />
                    
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center lg:pl-0 lg:mb-0 mb-4">
                  <label
                    
                    className="col-span-5 font-bold xl:text-sm text-sm text-[#221F20] "
                  >
                    Category
                  </label>
                  <div className="col-span-7 lg:ml-1">
                    
                    <select className="w-full lg:w-[9rem] h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black pl-2" value={props.categoryInput} onChange={(e) => props.setCategoryInput(e.target.value)}>
                      <option value="">Select Category</option>
                      {props.categoryData && props.categoryData.map((row,i)=>{
                        return(
                          <option key={i} value={row.id}>{row.title}</option>
                        )
                      })}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-12  items-center lg:pl-0 lg:mb-0 mb-4">
                  <label
                    
                    className="col-span-5 font-bold xl:text-sm text-sm text-[#221F20]"
                  >
                    Zip Code 
                  </label>
                  <div className="col-span-7 lg:ml-4">
                    <input
                      type="text"
                      className="w-full lg:w-20 h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black pl-2 "
                      value={props.postalCode}
                      onChange={(e) => props.setPostalCode(e.target.value)}
                    />
                  </div>
                </div>
                <div className="pl-4" role="group ">
                  <div className="flex text-left justify-end gap-x-6">
                    
                    <button type="submit" className="rounded-full px-8 lg:px-5 py-1 lg:py-0.5 xl:text-sm text-xs border-solid  border-[1px] border-black font-semibold text-black shadow-sm">Search</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Companyinfo;
