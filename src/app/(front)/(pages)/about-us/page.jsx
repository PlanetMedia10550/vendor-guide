
import ContentPage from "@/app/(front)/(pages)/ContentPage";
import { getPages,getPostMeta } from "@/app/lib/server-api";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/about-us`).then((res) => res.json());
  var metaData = seoMetaData?.data;
  if(metaData==null){
    const blogData = await fetch(`${process.env.BASE_API_URL}page/about-us`).then((res) => res.json());
    var metaData = blogData?.data;
  }
  return {
    alternates: {
      canonical: `/${metaData?.slug?metaData?.slug:'about-us'}`,
      languages: {
        'en-US': `/${metaData?.slug?metaData?.slug:'about-us'}`
      },
    },
    title: `${metaData?.title}`,
    description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
    robots: {
      index: false,
      follow: false,
      nocache: false,
    },
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/${metaData?.slug?metaData?.slug:'about-us'}`,
      siteName: process.env.SITE_NAME,
      images: [
        {
          url: `${metaData?.image_url?metaData?.image_url:''}`,
          secure_url: `${metaData?.image_url?metaData?.image_url:''}`,
          width: 725,
          height: 405,
          alt: `${metaData?.title}`,
        }
      ],
      locale: 'en',
      type: 'website',
    },
    twitter: {
      card:`${metaData?.title}`,
      title: `${metaData?.title}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/${metaData?.slug?metaData?.slug:'about-us'}`,
      images: [`${metaData?.image_url?metaData?.image_url:''}`],
      siteId: process.env.SITE_ID,
    },
  }
}

const SlugPages = async ({params}) => {
  const pages = await getPages('about');
  const pageMeta = await getPostMeta();

  return (
    <>
      <ContentPage page='about-us' pageData={pages?.data} bannerContent={pageMeta?.data}/>
    </>
  );
};

export default SlugPages;
