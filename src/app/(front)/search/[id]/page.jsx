import SearchPage from "@/app/(front)/search/[id]/SearchPage";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/vendor_single_page`).then((res) => res.json());
  var metaData = seoMetaData?.data;
  
  if(metaData==null){
    const blogData = await fetch(`${process.env.BASE_API_URL}vendor/${params.id}`).then((res) => res.json());
    var metaData = blogData?.data;
  }
  // console.log(metaData);
  return {
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/en-US'
      },
    },
    title: `${metaData?.title?metaData?.title:metaData?.name}`,
    description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
    robots: {
      index: true,
      follow: true,
      nocache: true,
    },
    openGraph:{
      title: `${metaData?.title?metaData?.title:metaData?.name}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/blog/${metaData?.slug}`,
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
      card:`${metaData?.title?metaData?.title:metaData?.name}`,
      title: `${metaData?.title?metaData?.title:metaData?.name}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/blog/${metaData?.slug}`,
      images: [`${metaData?.image_url}`],
      siteId: process.env.SITE_ID,
    },
  }
}

export default function Details({params}) {

  return (
    <SearchPage slug={params.id} />
  );
};

