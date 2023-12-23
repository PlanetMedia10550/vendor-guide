import SearchPage from "@/app/(front)/search/[id]/SearchPage";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/vendor_single_page`).then((res) => res.json());
  var metaData = seoMetaData?.data;
  
  if(metaData==null){
    const blogData = await fetch(`${process.env.BASE_API_URL}vendor/${params.id}`).then((res) => res.json());
    var metaData = blogData?.data;
  }
  console.log(metaData);
  return {
    title: `${metaData?.title?metaData?.title:metaData?.name}`,
    description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
    openGraph:{
      title: `${metaData?.title?metaData?.title:metaData?.name}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/blog/${metaData?.slug}`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title?metaData?.title:metaData?.name}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/blog/${metaData?.slug}`,
      images: [`${metaData?.image_url}`],
    },
  }
}

export default function Details({params}) {

  return (
    <SearchPage slug={params.id} />
  );
};

