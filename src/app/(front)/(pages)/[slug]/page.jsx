
import ContentPages from "./pagecontent";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/${params.slug}`).then((res) => res.json());
  var metaData = seoMetaData?.data;
  if(metaData==null){
    const blogData = await fetch(`${process.env.BASE_API_URL}page/${params.slug}`).then((res) => res.json());
    var metaData = blogData?.data;
  }
  return {
    title: `${metaData?.title}`,
    description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/${metaData?.slug}`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title}`,
      description: `${metaData?.short_description?metaData?.short_description:metaData?.description}`,
      url: `/${metaData?.slug}`,
      images: [`${metaData?.image_url}`],
    },
  }
}

const SlugPages = ({params}) => {

  return (
    <>
      <ContentPages params={params}/>
    </>
  );
};

export default SlugPages;
