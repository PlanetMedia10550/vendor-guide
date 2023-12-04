import TopBarImage from "/public/images&icons/signup/banner1.jpg";
import HeroSection from "@/components/Front/HeroSection";
import FeatureSectionBgImage from "../../../../public/images&icons/signup/pattern1.png";
import ImageANDText from "@/components/Front/ImageANDTextBox";
import Input from "@/components/Front/Input";
import Label from "@/components/Front/Label";
import Signupform from "@/components/Front/SignUpForm";
import PartnerSection2 from "@/components/Front/PartnerSection2";
const Signup = () => {
  return (
    <>
      <HeroSection
        src={TopBarImage.src}
        title={["Supercharge Your Business with Vendor Guide Advertising!."]}
      />
      <section
        id="featurs_section"
        style={{
          backgroundImage: `url(${FeatureSectionBgImage.src})`,
          backgroundSize: `100% 100%`,
        }}
        className="py-9 md:py-5 bg-[#F6F7F8]"
      >
        <div className="container mx-auto overflow-hidden pt-5 md:pt-12 px-5 md:px-8 xl:px-10">
          <div className="mx-auto max-w-7xl">
            <div className="lg:mx-auto  max-w-4xl grid grid-cols-2 md:gap-x-16 md:gap-y-16 lg:max-w-none">
              <div className="md:col-span-1 col-span-12 lg:-mr-16 order-2 sm:order-1 ">
                <div className="lg:pt-4 text-center md:text-left ">
                  <p className="lg:mt-1 md:mt-6 sm:mt-0 mt-10 lg:leading-10 md:text-[1.02rem] text-[1.02rem] lg:text-[1.45rem]  text-[#221F20] font-medium  font-maven">
                    <span className="text-xl lg:text-[1.80rem] text-[#B13634] font-bold font-lato">
                      Ready to take your business to new heights?
                    </span>
                    <br />
                    Join Vendor Guide&#39;s exclusive network and propel your
                    brand forward. Our platform offers you the tools and
                    opportunities you need to effortlessly manage your listings
                    and secure valuable bid requests.
                  </p>
                </div>
                <ImageANDText
                  width="100"
                  height="100"
                  src="/images&icons/signup/icon1.png"
                  title={[
                    <span
                      key="key-1"
                      className="text-xl lg:text-[1.95rem] text-[#221F20]  font-bold font-lato"
                    >
                      Unparalleled Exposure
                      <br key="key-2" className="md:block hidden" />& Impact
                    </span>,
                    <br key="key-7" />,
                    `Join Vendor Guide's exclusive network and propel your brand
                            forward. Our platform offers you the tools and opportunities
                            you need to effortlessly manage your listings and secure
                            valuable bid requests..`,
                  ]}
                />
                <ImageANDText
                  width="100"
                  height="100"
                  src="/images&icons/signup/icon2.png"
                  title={[
                    <span
                      key="key-3"
                      className="text-xl lg:text-[1.95rem] text-[#221F20]  font-bold font-lato"
                    >
                      Effortless Management
                      <br key="key-4" className="md:block hidden" /> & Bid
                      Requests
                    </span>,
                    <br key="key-8" />,
                    `Through your intuitive Vendor Guide dashboard, you can easily update your information and receive bid requests that matter and make meaningful connections with property managers actively seeking your services.`,
                  ]}
                />
                <ImageANDText
                  width="100"
                  height="100"
                  src="/images&icons/signup/icon3.png"
                  title={[
                    <span
                      key="key-5"
                      className="text-xl lg:text-[1.95rem] text-[#221F20]  font-bold font-lato"
                    >
                      Empowerment through
                      <br key="key-6" className="md:block hidden" />
                      Data Insights
                    </span>,
                    <br key="key-9" />,
                    `Gain a competitive edge with Vendor Guide's
                                        insights. Understand trends, preferences, and
                                        demands within your industry, enabling you to tailor
                                        your offerings effectively.`,
                  ]}
                />
              </div>
              {/* right section  */}
              <Signupform heading="Get Started Today" btnTitle="Send Inquiry" />
            </div>
          </div>
          {/* next section  */}
          <PartnerSection2
            title="Don&#39;t miss this chance to grow your business – get in
                    touch with us now!"
            btnTitle="Contact Us Today"
          />
          {/* end next section */}
        </div>
      </section>
    </>
  );
};

export default Signup;
