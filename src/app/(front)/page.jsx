import { getBlogs, getVendors } from "@/app/lib/server-api";
import HomeComponent from "./homecomponent";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/home`).then((res) => res.json());
  var metaData = seoMetaData?.data;

  return {
    alternates: {
      canonical: '/',
      languages: {
        'en-US': '/'
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
      url: '/',
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
      locale: 'en',
      type: 'website',
    },
    twitter: {
      card:`${metaData?.title}`,
      title: `${metaData?.title}`,
      description: `${metaData?.description}`,
      url: '/',
      images: [`${metaData?.image_url}`],
      siteId: process.env.SITE_ID,
    },
  }
}



export default async function Home() {
  const blogs = await getBlogs();
  const vendors = await getVendors();
  return (
    <HomeComponent blogs={blogs} vendors={vendors} />
  );
}



