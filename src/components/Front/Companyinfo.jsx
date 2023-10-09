import { Label } from "reactstrap";

const Companyinfo = () => {
  return (
    <>
      <section className="search-section bg-[#f7f9f8]">
        <div class=" isolate px-6   lg:px-8">
          <div class="mx-auto max-w-2xl py-5 lg:py-12 md:pt-10  lg:pt-8">
            <div class="text-center">
              <h1 class="xl:text-5xl  lg:text-4xl text-3xl font-bold tracking-tight text-[#221F20] md:text-4xl">
                Search Results
              </h1>
              <p class="lg:mt-2 mt-3 lg:text-xl text-sm leading-3 text-[#221F20] font-semibold">
                Twin Cities Plumbers
              </p>
            </div>
          </div>
        </div>
        <div className="lg:flex md:block justify-center  px-10 sm:px-20 md:px-28 lg:px-8 xl:px-12 text-sm items-center">
          <div className="lg:flex xl:text-sm text-xs items-center ">
            <div className="px-4 py-3 bg-black w-[10rem] mx-auto lg:mx-0 mb-4 lg:mb-0">
              <p className="font-bold text-white">Advanced Search</p>
            </div>
            <div className="bg-white px-4 py-6 lg:py-3 rounded-xl lg:rounded-none">
              <form className="lg:flex gap-8 text-sm lg:pr-[0.1rem] xl:pr-[1.1rem] pr-4">
                <div className="grid grid-cols-12  items-center  lg:mb-0 mb-4">
                  <label
                    for="horizontal-firstname-input"
                    className="col-span-5 font-bold xl:text-sm text-sm text-[#221F20]"
                  >
                    Company Name
                  </label>
                  <div className="col-span-7 lg:ml-3">
                    <input
                      type="text"
                      className="w-full lg:w-[9rem] h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black  pl-2"
                      id="horizontal-password-input"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12 items-center lg:pl-0 lg:mb-0 mb-4">
                  <label
                    for="horizontal-email-input"
                    className="col-span-5 font-bold xl:text-sm text-sm text-[#221F20] "
                  >
                    Category
                  </label>
                  <div className="col-span-7 lg:ml-1">
                    <input
                      type="text"
                      className="w-full lg:w-[9rem] h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black pl-2"
                      id="horizontal-email-input "
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="grid grid-cols-12  items-center lg:pl-0 lg:mb-0 mb-4">
                  <label
                    for="horizontalzip-input"
                    className="col-span-5 font-bold xl:text-sm text-sm text-[#221F20]"
                  >
                    Zip Code
                  </label>
                  <div className="col-span-7 lg:ml-4">
                    <input
                      type="text"
                      className="w-full lg:w-20 h-[1.6rem] placeholder:text-sm border-solid rounded border-[1px] border-black pl-2 "
                      id="horizontalzip-input"
                      placeholder=""
                    />
                  </div>
                </div>
                <div className="pl-4" role="group ">
                  <div className="flex text-left justify-end gap-x-6">
                    <a
                      href="#"
                      className="rounded-full px-8 lg:px-5 py-1 lg:py-0.5 xl:text-sm text-xs border-solid  border-[1px] border-black font-semibold text-black shadow-sm"
                    >
                      Search
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Companyinfo;
