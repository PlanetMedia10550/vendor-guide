import Link from "next/link";
import { useAuth } from "@/context/UserContext";
const DetailsHero = ({src , filterData}) => {
  const {metaData,loading} = useAuth(); 
  const vendor_details  = metaData?.vendor_details;
  // console.log(vendor_details);

  return (
    <>
    <section
      id="hero_section"
      className=" bg-cover bg-center bg-no-repeat relative before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#986363] xl:h-[40vh] lg:h-[40vh] md:h-[40vh] sm:h-[40vh] h:[40vh]"
      style={{
        backgroundImage: `url(${vendor_details?.details_background})`,
      }}
    >
      <div className="sm:h-[40vh] md:h-[40vh] lg:h-[40vh] h-[40vh] w-full max-w-5xl mx-auto">
        <div className="magazine_breadcrumb relative">
          <div className="breadcrumb text-white py-4 text-lg">
            <Link href="#">Vendor Guide</Link>
            <span className="seprater"> / </span>
            <span className="current text-xl font-lato">{filterData?.name}</span>
          </div>
        </div>
        <main className="magazine_heading px-4 sm:px-6 lg:px-8 z-10 lg:py-12 relative text-center">
          <h2 className="text:sm sm:text-lg md:text-2xl lg:text-3xl xl:text-[3rem] font-lato -tracking-tight md:leading-10 lg:leading-[3.5rem] font-semibold  text-white   font-lato lg:px-10">
            {filterData?.name}
          </h2>
        </main>
      </div>
    </section>
    </>
  );
};

export default DetailsHero;
