import React from "react";
import Menu from "../components/Menu/Menu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../constants/ImagePaths";
import Product from "../components/Product/Product";
import Testimonails from "../components/Testimonials";
import Footer from "../components/Footer";

const speakers = () => {
  return (
    <div>
      <div className="bg-lightBlack h-[17em] flex flex-col">
        <div className="px-[3em] md:px-[7em]">
          <Menu />
        </div>
        <div className="flex flex-col items-center m-auto">
          <h2 className="uppercase text-white text-2xl font-semibold">
            speakers
          </h2>
        </div>
      </div>
      <div className="px-[3em] md:px-[7em]">
        {/* ZX9 SPEAKERS */}
        <div className="grid grid-cols-1 md:grid-cols-2 my-[5em]">
          <div className="bg-[#F1F1F1] flex justify-center md:w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.zx9Speakers1}
              alt="af-banner"
              effect="blur"
              className="h-[15em] md:h-full m-auto py-8"
            />
          </div>
          <div className="flex flex-col items-center md:items-start mx-auto space-y-4 mt-8 md:mt-[4em]">
            <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span>
            <span className="text-center md:text-left text-2xl sm:text-3xl w-[6em] font-semibold uppercase">
              zx9 speakers
            </span>
            <p className="text-xs sm:text-sm text-center md:text-left sm:max-md:w-[38em] md:w-[23em] text-gray-500">
              Upgrade your sound system with the all new ZX9 active speaker.
              It’s a bookshelf speaker system that offers truly wireless
              connectivity -- creating new possibilities for more pleasing and
              practical audio setups.
            </p>
            <button className="uppercase bg-brown p-4 text-xs text-white">
              see product
            </button>
          </div>
        </div>

        {/* ZX7 SPEAKERS */}
        <div className="flex flex-col-reverse md:flex-row my-[5em]">
          <div className="flex flex-col items-center md:items-start md:ml-[0em] m-auto space-y-4 mt-8 md:mt-[4em]">
            <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span>
            <span className="text-2xl sm:text-3xl w-[6em] font-semibold uppercase">
              zx7 speakers
            </span>
            <p className="text-xs sm:text-sm text-center md:text-left sm:max-md:w-[38em] md:w-[23em] text-gray-500">
              Stream high quality sound wirelessly with minimal loss. The ZX7
              bookshelf speaker uses high-end audiophile components that
              represents the top of the line powered speakers for home or studio
              use.
            </p>
            <button className="uppercase bg-brown p-4 text-xs text-white">
              see product
            </button>
          </div>
          <div className="bg-[#F1F1F1] flex justify-center md:w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.zx7Speaker}
              alt="af-banner"
              effect="blur"
              className="h-[15em] md:h-full m-auto py-8"
            />
          </div>
        </div>
        <Product />
        <Testimonails />
      </div>
      <Footer />
    </div>
  );
};

export default speakers;
