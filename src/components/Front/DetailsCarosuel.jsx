import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel'; // Import your carousel component
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight ,faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles if required

const DetailsCarosuel = ({filterData}) => {
      
      const vendoreimgedit = filterData?.vendoreimgedit || [];
      
      const extractedData = vendoreimgedit.map((item, index) => {
        return item.vendorimageview.image_url;
      });
    
      // console.log(extractedData);

      const customRenderThumb = (children) =>
      children.map((row, index) => (
        <img
          key={index}
          src={extractedData[index]}
          alt={`Image of ${extractedData[index]}`}
          className="thumbnail w-full h-full object-cover border border-gray-400"
          width="100"
          height="100"
        />
      ));
    
  return (
    <div className="relative h-full">
      <button className="custom-prev-button">
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
          {extractedData.length > 0 ? (
          <Carousel
            autoplay
            showIndicators={false}
            showStatus={false}
            showThumbs={true}
            
            renderThumbs={customRenderThumb}
          >
            {extractedData.map((item, index) => (
              <div key={index} className="h-full">
                <Image
                  src={item}
                  alt={`Image of ${item}`}
                  className="h-full w-full object-fill"
                  width="100"
                  height="100"
                />
              </div>
            ))}
          </Carousel>
        ) : (
          // Render a default image or a message when no images are available
          <div className="h-full flex items-center justify-center">
            {/* <p>No images available</p> */}
            {/* or render a default image */}
            <Image
              src="/images&icons/search_result/planetmedia.jpg"
              alt="Default Image"
              className="h-full w-full object-fill"
              width="100"
              height="100"
            />
          </div>
        )}
      <button className="custom-next-button">
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    </div>
  );
};

export default DetailsCarosuel;
