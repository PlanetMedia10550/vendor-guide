"use client";
import Image from "next/image";
import HTMLFlipBook from "react-pageflip";
import React, { Component, useEffect, useRef, useState } from 'react';
import axios from 'axios';



const PageCover = React.forwardRef((props, ref) => {
  return (
    <div className="page page-cover " ref={ref} data-density="hard" style={{ height:'500px'}}>
      <div className="page-content" style={{ boxShadow:"inset -7px 0 30px -7px rgba(0,0,0,.4)"}}>
        <h2>{props.children}</h2>
      </div>
    </div>
  );

});
PageCover.displayName = 'PageCover';

const Page = React.forwardRef((props, ref) => {
  return (
    <div className="page " ref={ref}>
      <div className="page-content" style={{ boxShadow:"inset -7px 0 30px -7px rgba(0,0,0,.4)"}}>
        <div className="page-image">{props.children}</div>
      </div>
    </div>
  );

});
Page.displayName = 'Page';


function Flipbook({slug}) {

  const id = slug;
  const bookRef = useRef(null);
  const [totalPage, setTotalPage] = useState(0);
  const [flipData, setFlipData] = useState([]);
  const [isPortrait, setIsPortrait] = useState(false);
  // console.log(flipData);
  const [loading, setLoading] = useState(true);
  const [frontCover, setFrontData] = useState([]);
  const [endCover, setEndData] = useState([]);

  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState(''); 
  const [currentPageIndex, setCurrentPageIndex] = useState(''); 


  const trackPublication =  () => {
    const currentUrl = window.location.href;
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude); 
        }, 
      );
    }
    if(latitude){
      const data = {
        'url' : currentUrl,
        'latitude' : latitude,
        'longitude' : longitude, 
        'page_visit' : currentPageIndex,  
      }; 
      const response = axios.post(`${process.env.BASE_API_URL}track-publication`,data)
    }
   

  };
  useEffect(() => { 
    trackPublication();  
  }, [latitude]);
  
  useEffect(() => {
    axios.get(`${process.env.BASE_API_URL}magazine/${id}`)
      .then(function (response) {
        const result = response.data;
        // Check if result.data has an 'images' property and if it's an array
        if (Array.isArray(result.data.pages)) {
          setFlipData(result.data.pages);
          // console.log(result.data.pages);
        } else {
          console.error('API response data does not contain an array of images:', result.data);
        }
        setFrontData(result.data.frontimage_url);
        setEndData(result.data.endimage_url);
        setLoading(false);
      })
      .catch(function (error) {
        console.error('Error fetching data:', error);
      });
  }, []);

  useEffect(() => {
    if (bookRef.current) {
      setTotalPage(bookRef.current.pageFlip());
    }
  }, [flipData]);

  const nextButtonClick = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipNext();
      trackPublication();
    }
  };

  const prevButtonClick = () => {
    if (bookRef.current) {
      bookRef.current.pageFlip().flipPrev();
      trackPublication();
    }
  };

  const onChangeOrientation = () => {
    setIsPortrait((prevState) => !prevState);
  };
  

  if (loading) {
    return <div className="container mx-auto text-center">Loading...</div>;
  }

  return (
    <div className="demo-block bg-light pt-3 pb-3 overflow-hidden" id="demoBlock">
      <div className="container mx-auto" style={{ position: 'relative' }}>
      <div className="flip-book html-book demo-book stf__parent" style={{ display: 'block' }}>
      {flipData && flipData.length > 0 ? (
          <HTMLFlipBook 
          width={500} 
          height={500}
          minWidth={400}
          minHeight={400}
          maxWidth={1000}
          showCover={true}
          maxHeight={1000}
          className="bg-red-800 mx-auto"
          ref={bookRef}
          flippingTime={2500}
          usePortrait={isPortrait}
          onChangeOrientation={onChangeOrientation}
          maxShadowOpacity={0.5}
          style={{ backgroundImage: "url(/images&icons/background.jpg)" }}
          >
      
               <PageCover>
              <Image
                src={frontCover}
                alt="image 1"
                className="h-full w-full object-fill max-w-none"
                width="100" height="100"
                style={{ height:'500px'}}
              />
            </PageCover>
      {flipData.map((item, index) => (
                <Page key={index} number={index + 1}>
                    <Image
                      src={item}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full max-w-none object-fill"
                      width="100" height="100"
                      style={{ height:'500px'}}
                    />
                </Page>
              ))}
              <PageCover>
              <Image
                src={endCover}
                alt="image 1"
                className="h-full w-full object-fill max-w-none"
                width="100" height="100"
                style={{ height:'500px'}}
              />
            </PageCover>
    </HTMLFlipBook>
      ) : (
        <div>No data available.</div>
      )}
      </div>
    </div>
      <div className="container mx-auto">
        <div className="flex justify-center gap-4 py-4 font-semibold">
          <button type="button" onClick={prevButtonClick}>
            Previous page
          </button>
          <button type="button" onClick={nextButtonClick}>
            Next page
          </button>
        </div>
      </div>
    </div>
  );
}
export default Flipbook;