import Flipbook from "./Flipbook";


// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/publication_single_page`).then((res) => res.json());
  var metaData = seoMetaData?.data;
  if(metaData==null){
    const blogData = await fetch(`${process.env.BASE_API_URL+'magazine'}/${params.id}`).then((res) => res.json());
    var metaData = blogData?.data;
  }
  return {
    title: `${metaData?.title}`,
    description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/publication/${metaData?.slug}`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/publication/${metaData?.slug}`,
      images: [`${metaData?.image_url}`],
    },
  }
}

const Page = ({params}) => {
  return (
       <Flipbook slug={params.id} />  
  );
}
export default Page;