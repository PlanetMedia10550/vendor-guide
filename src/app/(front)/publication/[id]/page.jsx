'use client';
// components/Pagefloop.js
import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import HTMLFlipBook from 'react-pageflip';
import axios from 'axios';

const PageCover = React.forwardRef((props, ref) => {
  
  return (
    <div className="page page-cover" ref={ref} data-density="hard">
      <div className="page-content h-full">
        <div className="h-full">{props.children}</div>
      </div>
    </div>
  );
});

PageCover.displayName = 'PageCover';

const Page = React.forwardRef((props, ref) => {
       
  return (
    <div className="page" ref={ref}>
      <div className="page-content h-full">
        <div className="page-image h-full">
          {props.children}
        </div>
        <div className="page-text"></div>
        <div className="page-footer">{props.number + 1}</div>
      </div>
    </div>
  );
});

Page.displayName = 'Page';

const Pagefloop = ({params}) => {
  const id = params.id;
  const bookRef = useRef(null);
  const [totalPage, setTotalPage] = useState(0);
  const [flipData, setFlipData] = useState([]);
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
      const pageFlip = bookRef.current.pageFlip();  
      setCurrentPageIndex(pageFlip.pages.currentPageIndex);
      pageFlip.flipNext(); 
      trackPublication();
     
    }
  };

  const prevButtonClick = () => {
    if (bookRef.current) { 
      const pageFlip = bookRef.current.pageFlip();  
      setCurrentPageIndex(pageFlip.pages.currentPageIndex); 
      pageFlip.flipPrev();
      trackPublication();
    }
  };

  if (loading) {
    return <div className="container mx-auto text-center pb-4">Loading...</div>;
  }

  return (
    <div className="demo-block bg-light pt-3 pb-3 overflow-hidden" id="demoBlock">
      <div className="container mx-auto" style={{ position: 'relative' }}>
        <div className="flip-book html-book demo-book stf__parent" style={{ display: 'block' }}>
        {flipData && flipData.length > 0 ? (
            <HTMLFlipBook  lipBook
              width={100}
              height={100}
              size="stretch"
              minWidth={400}
              maxWidth={600}
              minHeight={400}
              maxHeight={600}
              maxShadowOpacity={0.5}
              showCover={true}
              mobileScrollSupport={true}
              className="demo-book"
              ref={bookRef}
              
            >
              <PageCover>
              <Image
                src={frontCover}
                alt="image 1"
                className="h-full w-full object-fill"
                width="100" height="100"
              />
            </PageCover>

             {flipData.map((item, index) => (
                <Page key={index} number={index + 1}>
                    <Image
                      src={item}
                      alt={`Image ${index + 1}`}
                      className="h-full w-full object-fill"
                      width="100" height="100"
                    />
                </Page>
              ))}

            <PageCover>
              <Image
                src={endCover}
                alt="image 1"
                className="h-full w-full object-fill"
                width="100" height="100"
              />
            </PageCover>

            </HTMLFlipBook>
          ) : (
            <div>No data available.</div>
          )}

        </div>
      </div>
      <div className="container mx-auto py-14">
        <div className="flex justify-center gap-4">
          <button type="button" onClick={prevButtonClick} style={{ fontWeight: 700}}>
            Previous page
          </button>
          <button type="button" onClick={nextButtonClick} style={{ fontWeight: 700}}>
            Next page
          </button>
        </div>
        <div />
      </div>
    </div>
  );
};

export default Pagefloop;
