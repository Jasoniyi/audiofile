import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../../constants/ImagePaths";

const index = () => {
  return (
    <div className="bg-brown grid grid-cols-1 md:grid-cols-2">
      <div className="">
        <LazyLoadImage
          src={afImages.zx9Speakers}
          effect="blur"
          className="h-[20em] pl-[4em] sm:pl-[8em] md:pl-[0em] md:h-[27em] relative md:-bottom-[0.4rem]"
        />
      </div>
      <div className="flex flex-col items-center md:items-start md:justify-center space-y-6 text-white pb-[4em] md:pb-[0em]">
        <span className="font-medium text-4xl w-[4em] text-center md:text-left md:text-6xl md:w-[5em] sm:max-md:pt-[4em]">
          ZX9 SPEAKER
        </span>
        <span className="text-xs sm:max-md:text-sm md:text-base text-center md:text-left w-[18em] sm:max-md:w-[19em] sm:max-md:py-[2em] md:w-[22em] ">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </span>
        <button className="bg-btnBlack uppercase text-xs py-2 w-[9em]">
          see product
        </button>
      </div>
    </div>
  );
};

export default index;
