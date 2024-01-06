import Right from "@/components/Front/Auth/Right";
// import LoginForm from "./LoginForm";
import ForgetPasswordForm from "./ForgetPasswordForm";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/forget`).then((res) => res.json());
  var metaData = seoMetaData?.data;
  return {
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US'
      },
    },
    title: `${metaData?.title}`,
    description: `${metaData?.description}`,
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: `/${metaData?.slug}`,
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: `${metaData?.image_url}`,
          secure_url: `${metaData?.image_url}`,
          width: 725,
          height: 405,
          alt: `${metaData?.title}`,
        }
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card:`${metaData?.title}`,
      title: `${metaData?.title}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/${metaData?.slug}`,
      images: [`${metaData?.image_url}`],
      siteId: process.env.SITE_ID,
    },
  }
}

const Page = () => {
  return (
    <>

      <div className="container mx-auto overflow-hidden xl:px-24 lg:px-8 md:px-12 ">
        <div className="mx-auto max-w-7xl">
          <div className="lg:mx-auto  max-w-4xl grid grid-cols-2 md:gap-x-16 md:gap-y-16 lg:max-w-none">

            <ForgetPasswordForm  />
            <Right />

          </div>
        </div>
      </div >





    </>
  );
};

export default Page;