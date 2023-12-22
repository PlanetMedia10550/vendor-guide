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
  }
}

export default function Page({params}) {
  return (
    <PageComponent slug={params.slug} />
  );
};