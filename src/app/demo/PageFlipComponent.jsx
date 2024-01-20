// PageFlipComponent.js
"use client"; 
import { useEffect, useRef } from 'react';
import { PageFlip } from 'page-flip';
import pageimage from "@/../../public/images&icons/resources/Asset1.jpg";
import pageimage2 from "@/../../public/images&icons/resources/Asset2.jpg";
import filpcss  from  "@/app/demo/Style.module.css";
import Image from 'next/image';

const PageFlipComponent = () => {
  const bookRef = useRef(null);

  useEffect(() => {
    const pageFlip = new PageFlip(bookRef.current, {
      width: 550,
      height: 733,
      size: "stretch",
      minWidth: 315,
      maxWidth: 1000,
      minHeight: 420,
      maxHeight: 1350,
      maxShadowOpacity: 0.5,
      showCover: true,
      mobileScrollSupport: false,
    });

    pageFlip.loadFromHTML(document.querySelectorAll(`.${filpcss.page}`));

    document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    // document.querySelector(`.${filpcss['page-orientation']}`).innerText = pageFlip.getOrientation();

    document.querySelector(".btn-prev").addEventListener("click", () => {
      pageFlip.flipPrev();
    });

    document.querySelector('.btn-next').addEventListener("click", () => {
      pageFlip.flipNext();
    });

    pageFlip.on("flip", (e) => {
      document.querySelector(".page-current").innerText = e.data + 1;
    });

    // pageFlip.on("changeState", (e) => {
    //   document.querySelector(`.${filpcss['page-state']}`).innerText = e.data;
    // });

    // pageFlip.on("changeOrientation", (e) => {
    //   document.querySelector(`.${filpcss['page-orientation']}`).innerText = e.data;
    // });

    return () => {
      // Clean up event listeners or any resources when the component is unmounted
      document.querySelector(".btn-prev").removeEventListener("click", pageFlip.flipPrev);
      document.querySelector("btn-next").removeEventListener("click", pageFlip.flipNext);
    };
  }, []); // Run the effect only once on mount

  // const combinedClasses = [filpcss.page, filpcss.page-cover, filpcss.page-cover-top].join(' ');

  return (
    <>
   <div class={`${filpcss['demo-block']}`} id="demoBlock">
   <div className="mx-auto">
    <div className={`${filpcss['container-md']}`} style={{position: `relative`}}>
      <div className={`${filpcss['flip-book']}`} id="demoBookExample" ref={bookRef}>
          <div className={`${filpcss.page} ${filpcss['page-cover']} ${filpcss['page-cover-top']}`}  data-density="hard">
              <div className={`${filpcss['page-content']}`}>
                  {/* <h2>BOOK TITLE</h2> */}
                  <div className={`${filpcss['page-image']}`} >
                    <img
                      src={pageimage2.src}
                      alt="image 1"
                      className={`${filpcss.page_images}`}
                    />
                  </div>
              </div>
          </div>
          <div className={`${filpcss.page}`}>
              <div className={`${filpcss['page-content']}`}>
                  {/* <h2 className={`${filpcss['page-header']}`}>Page header 1</h2> */}
                  <div className={`${filpcss['page-image']}`}>
                    <img
                      src={pageimage.src}
                      alt="image 1"
                      className={`${filpcss.page_images}`}
                    />
                  </div>
                  <div className={`${filpcss['page-footer']}`}>1</div>
              </div>
          </div>
          
          <div className={`${filpcss.page}`}>
              <div className={`${filpcss['page-content']}`}>
                  {/* <h2 className={`${filpcss['page-header']}`}>Page header - 2</h2> */}
                  <div className={`${filpcss['page-image']}`} >
                  <img
                    src={pageimage.src}
                    alt="image 1"
                    className={`${filpcss.page_images}`}
                  />
                  </div>
                  <div className={`${filpcss['page-footer']}`}>2</div>
              </div>
          </div>
          <div className={`${filpcss.page}`}>
              <div className={`${filpcss['page-content']}`}>
                  {/* <h2 className={`${filpcss['page-header']}`}>Page header - 3</h2> */}
                  <div className={`${filpcss['page-image']}`}>
                    <img
                      src={pageimage.src}
                      alt="image 1"
                      className={`${filpcss.page_images}`}
                    />
                  </div>
                  <div className={`${filpcss['page-footer']}`}>3</div>
              </div>
          </div>
          <div className={`${filpcss.page} ${filpcss['page-cover']} ${filpcss['page-cover-bottom']}`} data-density="hard">
              <div className={`${filpcss['page-content']}`}>
                  {/* <h2>THE END</h2> */}
                  <div className={`${filpcss['page-image']}`}>
                    <img
                      src={pageimage2.src}
                      alt="image 1"
                      className={`${filpcss.page_images}`}
                    />
                  </div>
              </div>
          </div>
        </div>
 
    </div>
    <div className={`${filpcss.container}`}>
      <div>
          <button type="button" id={`${filpcss.buttons}`} className="btn-prev">Previous page</button>
          [<span className="page-current">1</span> of <span className="page-total">-</span>]
          <button type="button" id={`${filpcss.buttons}`} className="btn-next">Next page</button>
      </div>
      {/* <div>
          State: <i className={`${filpcss['page-state']}`}>read</i>, orientation: <i className={`${filpcss['page-orientation']}`}>landscape</i>
      </div> */}
    </div>
    </div>
    </div>
    </>
  );
};

export default PageFlipComponent;
