import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../../constants/ImagePaths";

const index = () => {
  return (
    <div className="">
      <div className="">
        <div className="relative flex flex-col -bottom-[12em] md:-bottom-[15em] left-[3em] md:left-[6em] z-10">
          <span className="text-md sm:text-xl md:text-3xl font-semibold mb-4">
            ZX7 SPEAKER
          </span>
          <div className="uppercase text-center py-2 text-white bg-black w-[9em] md:w-[11em] text-xs sm:text-sm">
            see product
          </div>
        </div>
        <div className="z-0">
          <LazyLoadImage
            src={afImages.zx7Speakers}
            effect="blur"
            className="h-[27em] relative md:-bottom-[0.4rem]"
          />
        </div>
      </div>
    </div>
  );
};

export default index;
