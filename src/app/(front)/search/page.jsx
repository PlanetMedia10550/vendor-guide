
import Searchpage from "@/app/(front)/search/Searchpage";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/vendor_listing`).then((res) => res.json());
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
      url: `/search`,
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
      description: `${metaData?.description}`,
      url: `/search`,
      images: [`${metaData?.image_url}`],
      siteId: process.env.SITE_ID,
    },
  }
}

const Page = () => {
  return (
    <>
      <Searchpage/>
    </>
  );
};

export default Page;
