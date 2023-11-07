
import BannerSectionCard from "@/components/Front/BannerSectionCard";
import Carouselbanner from "@/components/Front/Carouselbanner";
import FeaturSection from "@/components/Front/FeaturSection";
import PartnerSection from "@/components/Front/PartnerSection";
import SearchBar from "@/components/Front/SearchBar";
import Link from "next/link";

const Home = () => {

  return (
    <>
      <section id="hero_section" className="sm:relative">
        <Carouselbanner />
      </section>
      <section id="banner_section">
        <div className="container mx-auto py-3 px-8 md:py-4">
            <BannerSectionCard  />
        </div>
      </section>
      <section id="featurs_section" className="lg:py-16 lg:pt-12 xl:pt-20">
        <div className="overflow-hidden bg-white lg:py-4 lg:py-7 px-4 lg:ps-12">
          <h2 className="text-2xl lg:hidden block text-center md:text-3xl  font-semibold leading-7 text-grey-500 mb-8 uppercase">
            In The News
          </h2>
          <div className="mx-auto xl:max-w-[90rem] lg:max-w-7xl px-2 sm:px-7">
                  <FeaturSection />
            <div className="py-9 md:py-12 lg:float-right text-center">
              <Link
                href="blog"
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

export default Home;


