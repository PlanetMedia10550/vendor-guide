
import Searchpage from "./SearchAllData";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/vendor_listing`).then((res) => res.json());
  var metaData = seoMetaData?.data;

  return {
    title: `${metaData?.title}`,
    description: `${metaData?.description}`,
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: `/search`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: `/search`,
      images: [`${metaData?.image_url}`],
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
