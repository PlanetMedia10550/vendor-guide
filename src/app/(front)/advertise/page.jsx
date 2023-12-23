import Advertisepage from "./Advertisepage";


// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/advertise`).then((res) => res.json());
  var metaData = seoMetaData?.data;

  return {
    title: `${metaData?.title}`,
    description: `${metaData?.description}`,
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: `/advertise`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: `/advertise`,
      images: [`${metaData?.image_url}`],
    },
  }
}

const Advertise = () => {
 
  return (
     
      <Advertisepage />
    
  );
};

export default Advertise;


