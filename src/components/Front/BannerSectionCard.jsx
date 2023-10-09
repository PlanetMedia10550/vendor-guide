import Image from "next/image";

const BannerSectionCard = ({ imgsrc, imgalt, imgclass }) => {
  return (
    <>
      <div className="col-span-4 sm:col-span-2 lg:col-span-1">
        <div className="sm:mt-0 flex justify-center md:justify-end">
          <Image
            src={imgsrc}
            alt={imgalt}
            className="w-full"
            width="100"
            height="100"
          />
        </div>
      </div>
    </>
  );
};

export default BannerSectionCard;
