import HomeComponent from "./homecomponent";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/home`).then((res) => res.json());
  var metaData = seoMetaData?.data;

  return {
    title: `${metaData?.title}`,
    description: `${metaData?.description}`,
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: `/`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: `/`,
      images: [`${metaData?.image_url}`],
    },
  }
}

const Home = () => {
  return (
    <HomeComponent/>
  );
}

export default Home;


