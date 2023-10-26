

import LeftSide from "@/components/Front/VendorguideEditlisting/LeftSide"
import RightSide from "@/components/Front/VendorguideEditlisting/RightSide"

const Search = () =>{
    return (
        <>
           <section id="featurs_section" style={{ backgroundSize: `100% 100%`}} className="py-9 md:py-5" > 
                <div className="container mx-auto overflow-hidden pt-5 md:pt-0 px-5 md:px-10 xl:px-0 pb-12">
                    <div className="mx-auto max-w-7xl">
                        <div className="lg:mx-auto  max-w-4xl grid grid-cols-2  lg:max-w-none">
                            <div className="md:col-span-1 col-span-3  lg:mr-[-6rem] order-2 sm:order-1 mr-20">
                                <LeftSide/>
                            </div>
                            <div className="md:col-span-1 col-span-2   order-1 sm:order-2  sm:gap-x-5 lg:ps-28">
                                <RightSide/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Search