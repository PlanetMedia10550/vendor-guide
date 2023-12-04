
import Right from "@/components/Front/Auth/Right";

export const metadata = {
  title: 'Vendor Guide | Sign UP',
}

const Page = () => {

  return (
    <>

      <div className="container mx-auto overflow-hidden px-24">
        <div className="mx-auto max-w-7xl">
          <div className="lg:mx-auto  max-w-4xl grid grid-cols-2 md:gap-x-16 md:gap-y-16 lg:max-w-none">

            <div className="md:col-span-2 lg:col-span-1 col-span-12 lg:-mr-16 order-2 sm:order-1 ">
              <div className="container mx-auto overflow-hidden p-12 md:pt-12 px-12 md:px-12 xl:px-12">
                <div className="">
                  <div className="absolute inset-x-0 top-[-10rem] -z-10 transhtmlForm-gpu overflow-hidden blur-3xl sm:top-[-20rem]" aria-hidden="true">
                  </div>
                  <div className=" text-left">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl  text-left">Vendor Registration</h2>
                  </div>
                </div>
              </div>
            </div>
            <Right />

          </div>
        </div>
      </div >
    </>
  );
};


export default Page;
