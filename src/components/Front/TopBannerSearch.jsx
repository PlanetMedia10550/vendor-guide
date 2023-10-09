import ResourceBannerSection from "./ResourceBannerSection";
import SignUpcard from "./SignUpcard";

const TopBannerSearch = (props) => {
  return (
    <>
      <section className="top_banner sm:relative">
        <div
          className="top_banner_content relative h-[38vh]  sm:h-[45vh] md:h-[62vh] lg:h-[75vh] xl:h-[75vh] bg-cover bg-no-repeat  before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#0000007d] before:h-[38vh] before:sm:h-[45vh]  before:md:h-[62vh] before:lg:h-[75vh] before:xl:h-[75vh] bg:opacity-25"
          style={{ backgroundImage: `url(${props.image})` }}
        >
          <SignUpcard title="Featured Suppliers" />
        </div>
      </section>
    </>
  );
};

export default TopBannerSearch;
