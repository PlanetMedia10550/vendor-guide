import Link from "next/link";
import Image from "next/image";
const FeaturSection2 = (props) => {
  return (
    <>
      {props.rightSection && (
        <div className="lg:mx-auto grid max-w-4xl grid-cols-1 items-center  gap-x-2 gap-y-8 md:gap-y-16  lg:max-w-none md:grid-cols-2">
          <div className="lg:pt-4 text-center md:text-left order-last md:order-first">
            <p className="md:mt-6 lg:leading-10 md:text-sm  lg:text-[1.40rem]  text-[#221F20] font-normal  font-maven">
              <span className="text-2xl lg:text-3xl text-[#C1272D]  font-bold font-lato">
                {props.firstText}
              </span>
              <br /> {props.secondText}
            </p>
          </div>
          <div
            className="relative w-full md:ml-4 order-first md:order-last"
            style={{ position: "relative" }}
          >
            <Image
              src={props.img}
              alt="Product screenshot"
              className="mx-auto max-w-none rounded-xl  ring-1 ring-gray-400/10 xl:w-[30rem] lg:h-[17rem] w-full sm:w-[25rem] md:w-[20rem] lg:w-[25rem] sm:h-[15rem]"
              width="100"
              height="100"
            />
          </div>
        </div>
      )}
      {props.leftSection && (
        <div className="my-10 lg:my-40 lg:mx-auto grid max-w-4xl grid-cols-1 gap-y-8 md:gap-y-16  lg:max-w-none md:grid-cols-2 ">
          <div className="relative w-full" style={{ position: "relative" }}>
            <Image
              src={props.img}
              alt="Product screenshot"
              className="mx-auto max-w-none rounded-xl  ring-gray-400/10 xl:w-[30rem] lg:h-[17rem]  w-full sm:w-[25rem] md:w-[20rem]  lg:w-[25rem]  sm:h-[15rem]  md:-ml-4 lg:-ml-0 md:float-left"
              width="100"
              height="100"
            />
          </div>
          <div className="">
            <div className="lg:ml-[-2rem] md:ml-[0rem] text-center md:text-left">
              <p className="lg:leading-10 md:text-sm  lg:text-[1.40rem]  text-[#221F20] font-normal  font-maven md:pr-8">
                <span className="text-xl lg:text-3xl text-[#C1272D] font-bold font-lato">
                  {props.firstText}
                </span>
                <br />
                {props.secondText}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeaturSection2;
