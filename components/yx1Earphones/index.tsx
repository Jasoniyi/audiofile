import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../../constants/ImagePaths";

const index = () => {
  return (
    <div className="my-2">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4">
        <div className="">
          <LazyLoadImage
            src={afImages.yx1Earphones}
            effect="blur"
            className="h-[27em] relative md:-bottom-[0.4rem]"
          />
        </div>
        <div className="bg-lightGrey h-[11em] -mt-[5em] sm:max-md:mt-[8em] md:h-[22em]  md:mt-[3em] rounded-md">
          <div className="flex flex-col relative sm:max-md:top-[4em] top-[3em] md:top-[7em] left-[2em] sm:max-md:left-[2em] md:left-[4em]">
            <div className="text-2xl sm:max-md:text-lg">YX1 EARPHONES</div>
            <div className="my-4 uppercase bg-black w-[9em] text-white text-sm py-2 text-center">
              see product
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
