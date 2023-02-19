import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../../constants/ImagePaths";

const index = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row md:justify-between ">
      <div className="md:my-auto sm:max-md:order-1">
        <div className="text-xl sm:text-3xl font-semibold uppercase sm:max-md:w-[18em] md:w-[11em] py-4 text-center md:text-left sm:pl-[4em] md:px-[0em] px-[2em]">
          Bringing you the <span className="text-brown">best</span> audio gear
        </div>
        <div className="text-sm md:w-[30em] sm:w-[40em] text-gray-500 text-center md:text-left sm:pl-[4em] md:pl-[0em] px-[2em]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </div>
      </div>
      {/* desktop view */}
      <div className="hidden md:flex">
        <LazyLoadImage
          src={afImages.testimonials}
          effect="blur"
          className="h-[37em] sm:max-md:w-[20em]"
        />
      </div>

      {/* tablet view */}
      <div className="md:hidden sm:max-md:order-last">
        <LazyLoadImage
          src={afImages.tabletTest}
          effect="blur"
          className="w-full"
        />
      </div>
    </div>
  );
};

export default index;
