"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const SearchBar = ({homeMeta}) => {
  const [searchInput, setSearchInput] = useState("");
  const Router = useRouter();
  const Pathname = usePathname();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchInput) {
      Router.push(Pathname + 'search?key_word=' + searchInput)
    }
  };
  return (
    <div className="home_position absolute z-40 lg:top-40 md:top-[5.5rem] top-[2.5rem] w-full mx-auto text-center">
      <div className="px-4 sm:px-6 lg:px-10 z-10 lg:w-[50rem] md:w-[35rem]  mx-auto">
        <div className="text-center">
          <h1 className="text-base sm:text-xl md:text-3xl tracking-tight leading-10 font-semibold text-white  lg:text-[2.65rem] px-5 ">
            {homeMeta?.hero_title}
          </h1>

          <div className="mt-1 sm:mt-3 md:mt-7 sm: justify-center">
            <div className="rounded-md ">
              <form onSubmit={handleSearch}>
                <div className="relative flex sm:flex  justify-center gap-5 md:gap-7">
                  <input
                    type="text"
                    name="keyword"
                    id="default-search"
                    className="block w-full sm:w-80 md:w-[40rem] p-1 sm:p-2 lg:p-3 pl-4 sm:pl-5 md:pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-gray-300 placeholder-text-lg"
                    required
                    placeholder="search by category or company name..."

                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}

                  />

                  <button
                    type="submit"
                    className="text-white tracking-wide bg-[#B13634] hover:bg-red-800 focus:ring-1 focus:outline-none focus:ring-[#B13634] font-normal rounded-lg text-sm sm:text-lg lg:text-xl  sm:mt-0 px-4 sm:px-6 py-1 sm:py-2 lg:py-3 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-[#B13634]"
                  >
                    Search
                  </button>
                </div>
                
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
