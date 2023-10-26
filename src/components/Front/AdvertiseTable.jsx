"use client";
import { useState } from "react";

const AdvertiseTable = (props) => {
  const [advertiseData, setAdvertiseData] = useState([
    {
      col1: "Ranking Priority",
      col2: "Tier 1",
      col3: "Tier 2",
      col4: "Tier 3",
    },
    {
      col1: "Logos",
      col2: "Yes",
      col3: "Yes",
      col4: "Not Included",
    },
    {
      col1: "Photos",
      col2: "12",
      col3: "3",
      col4: "Not Included",
    },
    {
      col1: "Website Link",
      col2: "Yes",
      col3: "Yes",
      col4: "Not Included",
    },
    {
      col1: "Request a Bid",
      col2: "Yes",
      col3: "Yes",
      col4: "Not Included",
    },
  ]);
  return (
    <>
      <table className="table-responsive w-full text-sm md:text-lg font-bold text-left text-[#221F20] font-lato">
        <thead className="text-3xl text-[#221F20] font-bold  border-[#221F20] font-lato">
          <tr className="text-center">
            <th scope="col" className="px-3 py-3 border-collapse"></th>
            <th
              scope="col"
              className="text-lg sm:text-xl md:text-2xl bg-[#C1272D] text-white px-3 py-3 border-2 border-[#221F20]"
            >
              Elite <br />{" "}
              <span className="text-sm sm:text-lg md:text-xl font-medium font-lato whitespace-nowrap">
                Starting at $224/month
              </span>
            </th>
            <th
              scope="col"
              className="text-lg sm:text-xl md:text-2xl bg-[#C1272D] bg-opacity-40 px-3 py-3 border-2 border-[#221F20] "
            >
              Pro <br />
              <span className="text-sm sm:text-lg md:text-xl font-medium font-lato whitespace-nowrap">
                Starting at $224/month
              </span>
            </th>
            <th
              scope="col"
              className="text-lg sm:text-xl md:text-2xl bg-[#C1272D] bg-opacity-10 px-3 py-3 border-2 border-[#221F20]"
            >
              Standard
              <br />
              <span className="text-sm sm:text-lg md:text-xl font-medium font-lato whitespace-nowrap">
                Starting at $224/month
              </span>
            </th>
          </tr>
        </thead>
        <tbody className="text-xl md:text-2xl border-3 border-[#221F20]">
          {advertiseData.map((row, i) => {
            return (
              <tr
                className="bg-white border-2 border-[#221F20]  text-center"
                key={i}
              >
                <th
                  scope="row"
                  className="px-6 py-4 border-2 border-[#221F20]  font-semibold text-gray-900 whitespace-nowrap lg:text-2xl md:text-lg text-sm"
                >
                  {row.col1}
                </th>
                <td className="px-6 py-4 border-2 border-[#221F20] font-medium lg:text-2xl md:text-lg text-sm">
                  {row.col2}
                </td>
                <td className="px-6 py-4 border-2 border-[#221F20] font-medium lg:text-2xl md:text-lg text-sm">
                  {row.col3}
                </td>
                <td className="px-6 py-4 border-2 border-[#221F20] font-medium lg:text-2xl md:text-lg text-sm">
                  {row.col4}
                </td>
              </tr>
            );
          })}
          <tr className=" border-collapse  text-center">
            <th
              scope="row"
              className="px-6 py-3.5 border-collapse dark:border-zinc-600 font-semibold text-gray-900 whitespace-nowrap"
            ></th>
            <td className="pt-8 md:px-0 py-3.5 border-collapse">
              <a
                href=""
                className="text-center flex-none rounded-md bg-[#B13634] px-4 md:px-11 py-3 md:py-4 text-base md:text-xl text-sm tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#B13634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B13634]"
              >
                Sign Up Today
              </a>
            </td>
            <td className="pt-8 md:px-0 py-3.5 border-collapse ">
              <a
                href=""
                className="text-center flex-none rounded-md bg-[#B13634] px-4 md:px-11 py-3 md:py-4 text-base md:text-xl text-sm tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#B13634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B13634]"
              >
                Sign Up Today
              </a>
            </td>
            <td className="pt-8 md:px-0 py-3.5 border-collapse">
              <a
                href=""
                className="text-center flex-none rounded-md bg-[#B13634] px-4 md:px-11 py-3 md:py-4 text-base md:text-xl text-sm tracking-wide font-medium font-lato text-white shadow-sm hover:bg-[#B13634] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B13634]"
              >
                Sign Up Today
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
export default AdvertiseTable;
