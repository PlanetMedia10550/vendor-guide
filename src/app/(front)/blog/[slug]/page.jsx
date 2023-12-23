import PageComponent from "./pageComponent";

// or Dynamic metadata
export async function generateMetadata({params}) {
  const seoMetaData = await fetch(`${process.env.BASE_API_URL}seo-meta-show/blog_single_page`).then((res) => res.json());
  var metaData = seoMetaData?.data;
  if(metaData==null){
    const blogData = await fetch(`${process.env.BASE_API_URL+'blog'}/${params.slug}`).then((res) => res.json());
    var metaData = blogData?.data;
  }
  return {
    title: `${metaData?.title}`,
    description: `${metaData?.short_description}`,
    openGraph:{
      title: `${metaData?.title}`,
      description: `${metaData?.short_description}`,
      url: `/blog/${metaData?.slug}`,
      images: [
        {
          url: `${metaData?.image_url}`,
        }
      ],
    },
    twitter: {
      title: `${metaData?.title}`,
      description: `${metaData?.short_description}`,
      url: `/blog/${metaData?.slug}`,
      images: [`${metaData?.image_url}`],
    },
  }
}

export default function Page({params}) {
  return (
    <PageComponent slug={params.slug} />
  );
};