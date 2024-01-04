
const HeroSection = (props) => {
  
  return (
    <section
      id="hero_section"
      className=" bg-cover bg-no-repeat bg-left relative before:content[''] before:absolute before:top-0 before:right-0 before:bottom-0 before:left-0 before:bg-[#2e252594] xl:h-[80vh] lg:h-[80vh] md:h-[65vh] sm:h-[65vh] h:[40vh]"
      style={{
        backgroundImage: `url(${props.src})`,
        backgroundPosition: `top center`,
      }}
    >
      <div className="sm:h-[65vh] md:h-[65vh] lg:h-[80vh] h-[40vh] w-full flex items-center justify-center text-center">
        <main className="px-4 sm:px-6 lg:px-8 z-10 lg:pb-8">
          <div className="text-center2">
            <h1 className="text:sm sm:text-lg md:text-2xl lg:text-3xl xl:text-[2.50rem] -tracking-tight md:leading-10 lg:leading-[3.5rem] font-semibold  text-white   font-lato lg:px-10">
              {props.title}
            </h1>
          </div>
        </main>
      </div>
    </section>
  );
};

export default HeroSection;
