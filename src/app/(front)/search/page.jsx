
import Searchpage from "@/app/(front)/search/Searchpage";
import { getVendors,getPostMeta } from "@/app/lib/server-api";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/vendor_listing`).then((res) => res.json());
  var metaData = seoMetaData?.data;

  return {
    alternates: {
      canonical: `/${metaData?.slug?metaData?.slug:'search'}`,
      languages: {
        'en-US': `/${metaData?.slug?metaData?.slug:'search'}`
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
      url: `/${metaData?.slug?metaData?.slug:'search'}`,
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
      url: `/${metaData?.slug?metaData?.slug:'search'}`,
      images: [`${metaData?.image_url}`],
      siteId: process.env.SITE_ID,
    },
  }
}

const Page = async () => {
  const vendors = await getVendors();
  const pageMeta = await getPostMeta();
  // console.log(pageMeta.data.search);
  return (
    <>
      <Searchpage vendors={vendors} bannerContent={pageMeta?.data.search}/>
    </>
  );
};

export default Page;
