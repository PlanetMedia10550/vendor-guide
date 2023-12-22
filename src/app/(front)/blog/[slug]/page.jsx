import PageComponent from "./pageComponent";

// or Dynamic metadata
export async function generateMetadata( {params} ) {
  const product = await fetch(`${process.env.BASE_API_URL+'blog'}/${params.slug}`).then((res) => res.json())
  // optionally access and extend (rather than replace) parent metadata
  const metaData = product?.data;
  // console.log(product.data.title)
  return {
    title: `${metaData?.title}`,
    description: 'The Vendor Guide for need you are work',
    openGraph:{
      title: 'Next.js',
      description: 'The React Framework for the Web',
      url: 'https://nextjs.org',
      images: [
        {
          url: '..\images&icons\advertise\img3.png',
          width: 800,
          height: 600,
        },
        {
          url: '..\images&icons\advertise\img3.png',
          width: 1800,
          height: 1600,
          alt: 'My custom alt',
        },
      ],
    },
    twitter: {
      title: 'Next.js',
      description: 'The React Framework for the Web',
      url: 'https://nextjs.org',
      images: ['..\images&icons\advertise\img3.png'],
    },
  }
}

export default function Page({params}) {
  return (
    <PageComponent slug={params.slug} />
  );
};