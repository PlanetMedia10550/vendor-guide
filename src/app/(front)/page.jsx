import BannerSectionCard from "@/components/Front/BannerSectionCard";
import Carousel from "@/components/Front/Carousel";
import FeaturSection from "@/components/Front/FeaturSection";
import PartnerSection from "@/components/Front/PartnerSection";
import SearchBar from "@/components/Front/searchBar";
import Link from "next/link";

export default function Home() {
  const BCardimages = [
    "/images&icons/img1.png",
    "/images&icons/img2.png",
    "/images&icons/img3.png",
    "/images&icons/img4.png",
    "/images&icons/img5.jpg",
  ];

  const CarouselImages = [
    "/images&icons/banner1.jpg",
    "/images&icons/banner1.jpg",
    "/images&icons/banner1.jpg",
  ];

  return (
    <>
      <section id="hero_section" className="sm:relative">
        <div className="hero_section_content relative h-[38vh]  sm:h-[45vh] md:h-[55vh] lg:h-[65vh] xl:h-[69vh]  bg-[url('/images&icons/banner1.jpg')] bg-cover bg-no-repeat  before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#0000007d] before:h-[38vh] before:sm:h-[45vh]  before:md:h-[55vh] before:lg:h-[65vh] before:xl:h-[69vh] bg:opacity-25">
          <SearchBar
            title="Find the perfect vendor for the job."
            btnTitle="Search"
          />
        </div>
      </section>
      <section id="banner_section">
        <div className="container mx-auto py-3 px-8 md:py-4">
          <div className="grid grid-cols-5 items-center justify-center gap-5 md:gap-5 sm:mt-4 md:mt-0">
            {BCardimages.map((src, i) => {
              return (
                <BannerSectionCard key="key-1" imgsrc={src} imgalt={src} />
              );
            })}
          </div>
        </div>
      </section>
      <section id="featurs_section" className="lg:py-16 lg:pt-12 xl:pt-20">
        <div className="overflow-hidden bg-white lg:py-4 lg:py-7 px-4 lg:ps-12">
          <h2 className="text-2xl lg:hidden block text-center md:text-3xl  font-semibold leading-7 text-grey-500 mb-8 uppercase">
            In The News
          </h2>
          <div className="mx-auto xl:max-w-[90rem] lg:max-w-7xl px-2 sm:px-7">
            <FeaturSection
              mainTitle="In The News"
              rightSection={true}
              firstText="Powerful Reach, Profitable Results:"
              secondText=" Drive Success for Multifamily Vendors through High-Performing Ad Spaces."
              img="images&icons/news1.png"
            />
            <FeaturSection
              leftSection={true}
              firstText="Mastering Multifamily Marketing:"
              secondText=" The Key to Unlocking Market Potential."
              img="images&icons/news2.png"
            />
            <FeaturSection
              rightSection={true}
              firstText="The Winning Formula:"
              secondText="Leveraging Data and Insights for Effective Multifamily Advertising."
              img="images&icons/news3.png"
            />
            <div className="py-9 md:py-12 lg:float-right text-center">
              <Link
                href=""
                className="text-center tracking-wide flex-none rounded-md bg-[#221F20] px-5 sm:px-10 py-3 text-sm sm:text-lg lg:text-xl font-normal  font-lato text-white shadow-sm hover:bg-[#221F20] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#221F20] lg:mr-9"
              >
                Explore Our Resource Library
              </Link>
            </div>
          </div>
        </div>
        <PartnerSection
          title="Partner with Vendor Guide."
          content="Take the step to join our esteemed community by signing up today and becoming a valued member of our trusted vendor network."
          btnTitle="Get Started"
        />
      </section>
    </>
  );
}
