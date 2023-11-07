import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import your carousel component
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight ,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles if required

const DetailsCarosuel = (props) => {
  const [vendorData, setVendorData] = useState([
    {
      img: "/images&icons/search_result/planetmedia.jpg",
    },
    {
      img: "/images&icons/search_result/postcard.jpg",
    },
    {
      img: "/images&icons/search_result/businesscard.jpg",
    },
  ]);

  const customRenderThumb = (children) =>
    children.map((row, index) => (
      // Customize how thumbnails are rendered here
      <img
      key={index}
      src={vendorData[index].img} // Use the URL from the vendorData array
      alt={`Image of ${vendorData[index].img}`}
      className="thumbnail w-full h-full object-cover" // Add any custom CSS class for styling
      width="100" // Adjust the width and height as needed
      height="100"
    />
    ));

    

  return (
    <div className="relative">
      <button className="custom-prev-button">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    <Carousel autoplay showIndicators={false}   showStatus={false} showThumbs={true} renderThumbs={customRenderThumb} >
      {vendorData.map((item) => (
        <div key={item.img}>
          <Image
            src={item.img}
            alt={`Image of ${item.img}`}
            className="h-full w-full object-cover"
            width="100"
            height="100"
          />
        </div>
      ))}
 
    </Carousel>
    <button className="custom-next-button">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default DetailsCarosuel;
