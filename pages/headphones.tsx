import React from "react";
import Menu from "../components/Menu/Menu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../constants/ImagePaths";

const headphones = () => {
  return (
    <div className="">
      <div className="bg-lightBlack h-[17em] flex flex-col">
        <div className="px-[3em] md:px-[7em]">
          <Menu />
        </div>
        <div className="flex flex-col items-center m-auto">
          <h2 className="uppercase text-white text-2xl font-semibold">
            headphones
          </h2>
        </div>
      </div>
      <div className="px-[3em] md:px-[7em]">
        <div className="grid grid-cols-1 md:grid-cols-2 my-[5em]">
          <div className="bg-[#F1F1F1] flex justify-center w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.xx99MarkII}
              alt="af-banner"
              effect="blur"
              className="h-full m-auto py-8"
            />
          </div>
          <div className="flex flex-col items-start m-auto space-y-4">
            <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span>
            <span className="text-3xl w-[6em]">XX99 Mark II Headphones</span>
            <p className="text-sm w-[23em]">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button className="uppercase bg-brown p-4 text-xs text-white">
              see product
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default headphones;
