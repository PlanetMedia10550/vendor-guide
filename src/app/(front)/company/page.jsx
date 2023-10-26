import CommanButton from "@/components/Front/Company/CommanButton"
import CommanTable from "@/components/Front/Company/CommanTable"
import DotMenus from "@/components/Front/Company/DotMenus"
import TableCheckbox from "@/components/Front/Company/TableCheckbox"


const bidRequests = {
        collums:['','Vender','Job','Date'],
        rows:[
            [
                <TableCheckbox key="checkbox-1"/>,
                'All Inc.',
                'Cabinet Refresh',
                '04/10/2023'
            ],
            [
                <TableCheckbox key="checkbox-2"/>,
                'TubFusioN',
                'Refinishing 2 Units, #315, #405',
                '03/10/2023'
            ],
            [
                <TableCheckbox key="checkbox-3"/>,
                '',
                'Maintenance Polos x25',
                '02/10/2023'
            ],
            [
                <TableCheckbox key="checkbox-4"/>,
                '',
                'Summer Price Request',
                '01/10/2023'
            ]
        ]
    }



    const favoriteVendors = {
        collums:['Vender','Company Contact','Phone'],
        rows:[
            [
                'All Kind Painting',
                'Lily Nguyen',
                '(952) 555-0123'
            ],
            [
                `America's Floor Source`,
                'Marcus Blackwell',
                '(952) 555-0123'
            ],
            [
                '',
                'Isabel Rodriguez',
                '(952) 555-0123'
            ],
            [
                '',
                'William Wallace',
                '(952) 555-0123'
            ]
        ]
    }

    const requestorInfo = () =>{
        return(
            <div>
                Amy Sandler
                <span
                    className="text-[0.5rem] font-medium block leading-[.65rem] italic">Senior
                    Property Manager,<br />
                    Cedarwood Place</span>
            </div>
        )
    }

    const bidRequestOthers = {
        collums:['','Requestor','Vender','Job','Date'],
        rows:[
            [
                <TableCheckbox key="checkbox-5"/>,
                requestorInfo(),
                'All Inc.',
                'Cabinet Refresh',
                '04/10/2023'
            ],
            [
                <TableCheckbox key="checkbox-6"/>,
                requestorInfo(),
                'TubFusioN',
                'Refinishing 2 Units, #315, #405',
                '03/10/2023'
            ],
        ]
    }
   
    const myProperties = {
        collums:['User','Job Title','Property'],
        rows:[
            [
                'Maxine Green',
                'Property Manager',
                'Riverfront Gardens'
            ],
            [
                'Marcus Cole',
                'Property Manager',
                'Cedarwood Place'
            ],
        ]
    }

const Dashboard = () => {
    return (
        <section id="featurs_section" className="pb-9 bg-[#F6F7F8]">
            <div className="container overflow-hidden mx-auto lg:pt-4 text-left md:px-0 px-5">
                <div className="py-3 md:px-8 md:text-left text-center">
                    <h6 className="mb-1 text- font-semibold text-[#171717]">Welcome to Your Vendor Management Dashboard!</h6>
                </div>
                {/* single grid   */}
                <div className="grid grid-cols-2 gap-5">
                    {/* first table  */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="card  bg-white shadow-sm rounded-xl h-full relative">
                            <div className="card-body pb-6 pt-2 px-4">
                                <div className="flex items-baseline">
                                    <h6 className="mb-1 text-sm font-bold text-[#171717]">Your Submitted Bid Requests</h6>
                                    <DotMenus />
                                </div>
                            </div>
                            <CommanTable data={bidRequests} />
                            <div className="card-body px-3 py-5">
                                <div className="" role="group">
                                    <div className="flex items-center justify-end gap-x-4 md:text-center absolute bottom-0 right-0 pb-5 px-3">
                                        <CommanButton label='Contact Vendor' />
                                        <CommanButton label='Add to Favorites' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end first table  */}
                    {/* start second table  */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="card  bg-white shadow-sm rounded-xl h-full relative">
                            <div className="card-body pb-6 pt-2 px-4">
                                <div className="flex items-baseline">
                                    <h6 className="mb-1 text-sm font-bold text-[#171717]">Favorite Vendors</h6>
                                    <DotMenus />
                                </div>
                            </div>
                            <CommanTable data={favoriteVendors} />
                            
                        </div>
                    </div>
                    {/* end second table  */}
                </div>
                {/* end single grid   */}
                {/* -- single grid   */}
                <div className="grid grid-cols-2 gap-5 pt-8">
                    {/* first table  */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="card  bg-white shadow-sm rounded-xl h-full relative">
                            <div className="card-body pb-6 pt-2 px-4">
                                <div className="flex items-baseline">
                                    <h6 className="mb-1 text-sm font-bold text-[#171717]">Bid Requests Submitted By Others</h6>
                                    <DotMenus />
                                </div>
                            </div>
                            <CommanTable data={bidRequestOthers} />
                            <div className="card-body px-3 py-5">
                                <div className="" role="group">
                                    <div className="flex items-center justify-end gap-x-4 md:text-center absolute bottom-0 right-0 pb-5 px-3">
                                        <CommanButton label='Contact Vendor' />
                                        <CommanButton label='Add to Favorites' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end first table  */}
                    {/* start second table  */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="card  bg-white shadow-sm rounded-xl h-full relative">
                            <div className="card-body pb-6 pt-2 px-4">
                                <div className="flex items-baseline">
                                    <h6 className="mb-1 text-sm font-bold text-[#171717]">My Properties</h6>
                                    <a href="javaqscript:void();" className=" ml-auto text-red-600">
                                        <span className=" text-red-700  text-2xl">.</span>
                                        <span className=" text-red-600  text-2xl">.</span>
                                        <span className=" text-red-600  text-2xl">.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-body px-4 pb-5">
                                <div className="relative overflow-x-auto rounded-lg">
                                    <div>
                                        <p className="text-[#171717] text-xs font-semibold py-1 tracking-wider"><span>Riverfront Gardens
                                            -</span>123 Main Street, Hastings, MN 55033</p>
                                        <p className="text-[#171717] text-xs font-semibold py-1 tracking-wider"><span>Cedarwood Place
                                            -</span>456 Elm Avenue, Roseville, MN 55113</p>
                                        <p className="text-[#171717] text-xs font-semibold py-1 tracking-wider"><span>Parkside Heights
                                            -</span>789 Oakwood Drive, Woodbury, MN 55125</p>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-4 pt-6 py-5">
                                <div className="" role="group">
                                    <div className="lg:flex flex md:block items-center justify-end gap-x-4 md:text-center">
                                        <div className="lg:mt-0 md:mt-3 mt-0 absolute bottom-0 right-0 pb-5 px-3"> <a href="#"
                                            className="rounded-xl md:inline-block px-7 py-[0.2rem] text-[0.65rem] border-solid  border border-black font-normal text-[#171717] shadow-sm">Add/Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end second table  */}
                </div>
                {/* end single grid   */}
                {/* -- single grid   */}
                <div className="grid grid-cols-2 gap-5 pt-8">
                    {/* first table  */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="card  bg-white shadow-sm rounded-xl h-full relative">
                            <div className="card-body pb-6 pt-2 px-4">
                                <div className="flex items-baseline">
                                    <h6 className="mb-1 text-sm font-bold text-[#171717]">Company Details</h6>
                                    <a href="javaqscript:void();" className=" ml-auto text-red-600">
                                        <span className=" text-red-700  text-2xl">.</span>
                                        <span className=" text-red-600  text-2xl">.</span>
                                        <span className=" text-red-600  text-2xl">.</span>
                                    </a>
                                </div>
                            </div>
                            <div className="card-body px-3 pb-5">
                                <div className="relative overflow-x-auto rounded-lg">
                                    <div className='grid gap-2.5 grid-cols-2'>
                                        <div className='col-span-1'>
                                            <ul className='flex flex-col nav_list text-sm'>
                                                <li className="text-[#171717] text-xs font-semibold py-1">Suburban Twin Cities Property
                                                    Management</li>
                                                <li className="text-[#171717] text-xs font-semibold py-1">1234 Oak Street</li>
                                                <li className="text-[#171717] text-xs font-semibold py-1">Maplewood, MN 55109</li>
                                            </ul>
                                        </div>
                                        <div className='col-span-1'>

                                            <ul className='flex flex-col nav_list text-sm'>
                                                <li className="text-[#171717] text-xs font-semibold py-1">Phone: 555- 555-5555</li>
                                                <li className="text-[#171717] text-xs font-semibold py-1">Email: hello@STCPM.com</li>
                                                <li className="text-[#171717] text-xs font-semibold py-1">website: www.companywebsite.com</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card-body px-3 pb-5 py-5 ">
                                <div className="" role="group">
                                    <div className="lg:flex flex md:block items-center justify-end gap-x-4 md:text-center">
                                        <div className="lg:mt-0 md:mt-3 mt-0 absolute bottom-0 right-0 pb-5 px-3"> <a href="#"
                                            className="rounded-xl md:inline-block px-8 py-[0.2rem] text-[0.65rem] border-solid  border border-black font-normal text-black shadow-sm">Edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* end first table  */}
                    {/* start second table  */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="card  bg-white shadow-sm rounded-xl h-full relative">
                            <div className="card-body pb-6 pt-2 px-4">
                                <div className="flex items-baseline">
                                    <h6 className="mb-1 text-sm font-bold text-[#171717]">My Properties</h6>
                                    <DotMenus />
                                </div>
                            </div>
                            <CommanTable data={myProperties} />
                            <div className="card-body px-3 py-5">
                                <div className="" role="group">
                                    <div className="flex items-center justify-end gap-x-4 md:text-center absolute bottom-0 right-0 pb-5 px-3">
                                        <CommanButton label='Add/Edit' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* end second table  */}
            </div>
            {/* end single grid   */}
        </section>
    )
}

export default Dashboard