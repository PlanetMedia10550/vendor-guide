import TopBarImage from "public/images&icons/advertise/banner1.jpg";
import FeaturSection2 from "@/components/Front/FeaturSection2";
import AdvertiseTable from "@/components/Front/AdvertiseTable";
import Link from "next/link";
import HeroSection from "@/components/Front/HeroSection";
import PartnerSection2 from "@/components/Front/PartnerSection2";

const Advertise = () => {
  return (
    <>
      <HeroSection
        src={TopBarImage.src}
        title={[
          "We connect multifamily vendors with",
          <br key="2" className="lg:block hidden" />,
          "the property management professionals who need them.",
        ]}
      />
      <section id="featurs_section" className="py-10 sm:pt-14 md:pt-8">
        <div className="overflow-hidden bg-white md:py-8 lg:py-12 px-3 xl:ps-16">
          <div className="mx-auto max-w-7xl px-4 md:px-9">
            <FeaturSection2
              rightSection={true}
              firstText="Effortless Management & Bid Requests"
              secondText="Managing your listing has never been simpler! Through your
                        VendorGuide account and dashboard, easily update your
                        information and receive valuable bid requests. Stay in control
                        of your opportunities and make meaningful connections with
                        property managers in need of your services."
              img="images&icons/advertise/img1.png"
            />
            <FeaturSection2
              leftSection={true}
              firstText="Effortless Management & Bid Requests"
              secondText="Managing your listing has never been simpler! Through your
                        VendorGuide account and dashboard, easily update your
                        information and receive valuable bid requests. Stay in control
                        of your opportunities and make meaningful connections with
                        property managers in need of your services."
              img="images&icons/advertise/img1.png"
            />
            <FeaturSection2
              rightSection={true}
              firstText="Effortless Management & Bid Requests"
              secondText="Managing your listing has never been simpler! Through your
                            VendorGuide account and dashboard, easily update your
                            information and receive valuable bid requests. Stay in control
                            of your opportunities and make meaningful connections with
                            property managers in need of your services."
              img="images&icons/advertise/img1.png"
            />
          </div>
        </div>
      </section>
      <section
        id="advertise_section"
        style={{
          backgroundImage: `url(images&icons/advertise/pattern.png)`,
        }}
        className="bg-bottom-left
        bg-no-repeat bg-contain"
      >
        <div className="py-5 lg:py-12 md:px-16 md:ps-16 overflow-x-auto">
          <div className="max-w-7xl lg:px-9 grid grid-cols-12 gap-5">
            <div className="col-span-12 xl:col-span-12">
              <div className="card ">
                <div className="card-body pb-8 md:pb-14">
                  <h6 className="mb-1 text-xl  lg:text-4xl md:text-2xl text-[#221F20] font-bold font-lato">
                    Choose Your Advertising Package:
                  </h6>
                </div>
                <div className="card-body">
                  <div className="relative overflow-x-auto overflow-y-hidden">
                    <AdvertiseTable />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PartnerSection2
          title="Don&#39;t miss this chance to grow your business – get in
                    touch with us now!"
          btnTitle="Contact Us Today"
        />
      </section>
    </>
  );
};

export default Advertise;
