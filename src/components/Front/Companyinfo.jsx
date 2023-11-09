import { usePathname, useSearchParams,useRouter } from "next/navigation";
import { useState,useEffect } from "react";
import { Label } from "reactstrap";
import { getResponse } from "@/app/lib/load-api";
import { getCookie } from "cookies-next";

const Companyinfo = (params) => {
  const [searchInput, setSearchInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [zipCodeInput, setZipcodeInput] = useState(params.postalCode);
  const [categoryData, setCategoryData] = useState([]);
  // const [getLatitude, setLatitude] = useState('');
  // const [getLongitude, setLongitude] = useState('');
  // console.log(params.postalCode)
  const Router = useRouter();
  const Pathname = usePathname();
  const searchParams = useSearchParams();
  const [urlString,setUrlString] = useState("");
  const urlParams = new URLSearchParams(searchParams)
 
  // if(params.searchWord){ setSearchInput(params.searchWord); }
  useEffect(() => {
    if(params?.searchWord){ setSearchInput(params.searchWord); }
    categoriesResult();
  }, [params.searchWord])
  const handleSearch = (e) => {
    e.preventDefault();
    params.setIsLoding(true);
    
    if(searchInput) {urlParams.set('key_word',searchInput) }else{ urlParams.delete('key_word') }
    // setUrlString(urlParams.toString());
    // var urlString2 = urlParams.toString();
    Router.push(Pathname+'?'+urlParams.toString(), { scroll: false })
    
    const vendorResponse = async () => {
      // params.setIsLoding(true)
      // urlParams.set('limit',5)
      // urlParams.set('offset',0)
      urlParams.set('latitude',params.latitude);
      urlParams.set('longitude',params.longitude);
      
      if(categoryInput) {urlParams.set('category_id',categoryInput) }else{ urlParams.delete('category_id') }
      if(zipCodeInput) {urlParams.set('zip_code',zipCodeInput) }else{ urlParams.delete('zip_code') }
      // const vendorResult = await getResponse('vendor?' + urlParams.toString())
      const response = await fetch(`${process.env.BASE_API_URL}vendor?${urlParams.toString()}`,{
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${getCookie('token')}`
            },
            
        })

      if (!response.ok) {
        throw new Error('Failed to submit the data. Please try again.')
      }
      var vendorResult = await response.json();
      params.setVendorData(vendorResult.data)
      params.setIsLoding(false)
    }
    vendorResponse()
  };

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


  return (
    <>
      <section className="search-section bg-[#f7f9f8]">
        <div className=" isolate px-6   lg:px-8">
          <div className="mx-auto max-w-2xl py-5 lg:py-12 md:pt-10  lg:pt-8">
            <div className="text-center">
              <h1 className="xl:text-5xl  lg:text-4xl text-3xl font-bold tracking-tight text-[#221F20] md:text-4xl">
                Search Results
              </h1>
              <p className="lg:mt-2 mt-3 lg:text-xl text-sm leading-3 text-[#221F20] font-semibold">
                { (params.searchWord) ? `${params.locality} in ${params.searchWord}` : "" }
              </p>
            </div>
          </div>
        </div>
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
                    Company Name
                  </label>
                  <div className="col-span-7 lg:ml-3">
                    <input
                      type="text"
                      className="w-full lg:w-[9rem] h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black  pl-2"
                      
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
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
                    
                    <select className="w-full lg:w-[9rem] h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black pl-2" value={categoryInput} onChange={(e) => setCategoryInput(e.target.value)}>
                      <option value="">Select Category</option>
                      {categoryData && categoryData.map((row,i)=>{
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
                      value={zipCodeInput}
                      onChange={(e) => setZipcodeInput(e.target.value)}
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
      </section>
    </>
  );
};

export default Companyinfo;
