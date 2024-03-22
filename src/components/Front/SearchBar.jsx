"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = ({homeMeta,categories,states}) => {
  const [searchInput, setSearchInput] = useState("");
  const [searchCategory, setSearchCategory] = useState("");
  const [SearchState, setSearchState] = useState("");
  const Router = useRouter();
  const Pathname = usePathname();

  const handleSearch = (e) => {
    e.preventDefault();
    var serchKey = Pathname + 'search?key_word=' + searchInput;
    if (searchCategory) {
      serchKey = serchKey+ '&category='+searchCategory
    }
    if (SearchState) {
      serchKey = serchKey+'&state='+SearchState
    }
    if (searchInput) {
      Router.push(serchKey)
    }
  };
  return (
    <div className="home_position absolute z-40 lg:top-40 md:top-[5.5rem] top-[2.5rem] w-full mx-auto text-center">
      <div className="px-4 sm:px-6 lg:px-10 z-10 lg:w-[58rem] md:w-[35rem]  mx-auto">
        <div className="text-center">
          <h1 className="text-center sm:text-full md:text-2xl tracking-tight leading-10 font-semibold text-white  lg:text-[2.55rem] pe-5 ">
            {homeMeta?.hero_title}
          </h1>

          <div className="mt-1 sm:mt-3 md:mt-7 sm:justify-center">
            <div className="rounded-md ">
              <form onSubmit={handleSearch}>
                {/* <div className="relative flex sm:flex  justify-center gap-5 md:gap-7"> */}
                  <div className="grid md:grid-cols-3 lg:grid-cols-4   lg:pl-0 lg:mb-0  mb-3 company_search mt-3">
                    <div className=" px-2 md:col-span-3 lg:col-span-1">
                      <input
                        type="text"
                        name="keyword"
                        id="default-search"
                        className="leading-5 block w-full p-1 sm:p-2 lg:p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:outline-none placeholder-text-lg "
                        required
                        placeholder="search by company name..."

                        value={searchInput}
                        onChange={(e) => setSearchInput(e.target.value)}

                      />
                    </div>
                    <div className=" px-2 mt-3 lg:mt-0 ">
                      <select className="leading-7 w-full p-1 sm:p-2 lg:p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:outline-none placeholder-text-lg placeholder-text-gray-900" value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)}>
                        <option className="" value="">Select Category</option>
                        {categories?.data && categories?.data.map((row,i)=>{
                          return(
                            <option key={i} value={row.id}>{row.title}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className=" px-2  mt-3 lg:mt-0 ">
                      <select className="leading-7 w-full p-1 sm:p-2 lg:p-3 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:outline-none  placeholder-text-lg placeholder-text-gray-900 " value={SearchState} onChange={(e) => setSearchState(e.target.value)}>
                        <option className=" " value="">Select States</option>
                        {states?.data && states?.data.map((row,i)=>{
                          return(
                            <option key={i} value={row.id}>{row.name}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className=" px-2  mt-3 lg:mt-0 md:text-right">
                      <button
                      type="submit"
                      className="text-white tracking-wide bg-[#B13634] hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-[#B13634] font-normal rounded-lg text-sm sm:text-lg lg:text-xl  sm:mt-0 px-4 sm:px-6 py-1 lg:py-2  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-[#B13634]"
                    >
                      Search</button>
                    </div>
                  </div>

                  
                {/* </div> */}
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
