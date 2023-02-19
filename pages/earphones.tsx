import React from "react";
import Menu from "../components/Menu/Menu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../constants/ImagePaths";
import Product from "../components/Product/Product";
import Testimonails from "../components/Testimonials";
import Footer from "../components/Footer";

const earphones = () => {
  return (
    <div className="">
      <div className="bg-lightBlack h-[17em] flex flex-col">
        <div className="px-[3em] md:px-[7em]">
          <Menu />
        </div>
        <div className="flex flex-col items-center m-auto">
          <h2 className=" text-white text-2xl font-semibold uppercase">
            earphones
          </h2>
        </div>
      </div>
      <div className="px-[3em] md:px-[7em]">
        <div className="grid grid-cols-1 md:grid-cols-2 my-[5em]">
          <div className="bg-[#F1F1F1] flex justify-center md:w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.yx1earphone}
              alt="af-banner"
              effect="blur"
              className="h-[15em] md:h-full m-auto py-8"
            />
          </div>
          <div className="flex flex-col items-center md:items-start mx-auto space-y-4 mt-8 md:mt-[4em]">
            <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span>
            <span className="text-center md:text-left text-2xl sm:text-3xl w-[9em] font-semibold">
              YX1 WIRELESS EARPHONES
            </span>
            <p className="text-xs sm:text-sm text-center md:text-left sm:max-md:w-[38em] md:w-[29em] text-gray-500">
              Tailor your listening experience with bespoke dynamic drivers from
              the new YX1 Wireless Earphones. Enjoy incredible high-fidelity
              sound even in noisy environments with its active noise
              cancellation feature.
            </p>
            <button className="uppercase bg-brown p-4 text-xs text-white">
              see product
            </button>
          </div>
        </div>
        <Product />
        <Testimonails />
      </div>
      <Footer />
    </div>
  );
};

export default earphones;
