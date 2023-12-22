
import ContentPages from "./pagecontent";

export const metadata = {
  title: 'Vendor Guide | Page'
}

const SlugPages = ({params}) => {

  return (
    <>
      <ContentPages params={params}/>
    </>
  );
};

export default SlugPages;
