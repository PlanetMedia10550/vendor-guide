import TopBarImage from "public/images&icons/advertise/banner1.jpg";
import FeaturSection2 from "@/components/Front/FeaturSection2";
import AdvertiseTable from "@/components/Front/AdvertiseTable";
import Link from "next/link";
import HeroSection from "@/components/Front/HeroSection";

const AllPages = () => {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="col-span-1">
          <ul className="mt-4 font-medium  m-10 font-lato ">
            <h2 className="mb-4 font-semibold text-2xl ">REACT PAGES</h2>
            <li className="flex gap-2">
              <Link
                href="/"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-grey-300  hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Home
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="resources"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Resources
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="search"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Search Result
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="advertise"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Advertise
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="signup"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Sign Up
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/pmDashboard"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pm Dashboard Screen-1
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/pmDashboardProperty"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Pm Dashboard Screen-2
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="vendorguideEditlisting"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Vendor Guide Edit Listing
              </Link>
            </li>
            
            <li className="flex gap-2">
              <Link
                href="newregional/quotePopupRegionalManagerDashboard"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Quote Popup (new_regional_manager)Dashborad
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/quotePopupRegionalManagerProperties"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Quote Popup (new_regional_manager) Property
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/quotePopupRegionalManagerEmployees"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Quote Popup (new_regional_manager) Employee
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/individualnewregionalmanagerDashboard"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Individual (new_regional_manager) Dashboard
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/individualnewregionalmanagerProperty"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Individual (new_regional_manager) Property
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/individualnewregionalmanagerEmployee"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Individual (new_regional_manager) Employee
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/managementCompanyDashboard"
                target="_blank"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {" "}
                Managment Dashboard
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/managementCompanyDashboardTwo"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {" "}
                Managment Property
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/managementCompanyDashboardThree"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {" "}
                Managment Employee
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/propertyManagerDashboard"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Property-Manager Dashboard
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/propertyManagerDashboardProperty"
                className=" pr-2 text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                {" "}
                Property-Manager Property
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/propertyStaffDashboard"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                New Regional Manager Property Staff Popup-1
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/propertyStaffProperties"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                New_Regional_Manager_Property_Staff_Popup-2
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/propertyStaffEmployees"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                New_Regional_Manager_Property_Staff_Popup-3
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/vendor_dashboard"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Dashboard New Look Dashboard
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/dashboardNewLookCompanyEditListing"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Dashboard New Look Company Edit Listing
              </Link>
            </li>
            <li className="flex gap-2">
              <Link
                href="newregional/dashboard_new_look_employee"
                className="text-xl text-[#221F20] font-bold block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-blue-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700"
              >
                Dashboard New Look Employee
              </Link>
            </li>
          </ul>
        </div>
      
      </div>
    </>
  );
};

export default AllPages;
