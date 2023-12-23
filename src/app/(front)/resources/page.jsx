import Resourcespage from "./Resourcepage";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/resources`).then((res) => res.json());
  var metaData = seoMetaData?.data;

  return {
    title: `${metaData?.title}`,
    description: `${metaData?.short_description}`,
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.short_description}`,
      url: `/resources`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title}`,
      description: `${metaData?.short_description}`,
      url: `/resources`,
      images: [`${metaData?.image_url}`],
    },
  }
}

export default function Page({params}){

  return (
    <Resourcespage />
  );
};

