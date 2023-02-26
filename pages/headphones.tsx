import React from "react";
import Menu from "../components/Menu/Menu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../constants/ImagePaths";
import Product from "../components/Product/Product";
import Testimonails from "../components/Testimonials";
import Footer from "../components/Footer";
import Link from "next/link";

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
        {/* XX99 Mark II */}
        <div className="grid grid-cols-1 md:grid-cols-2 my-[5em]">
          <div className="bg-[#F1F1F1] flex justify-center md:w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.xx99MarkII}
              alt="af-banner"
              effect="blur"
              className="h-[15em] md:h-full m-auto py-8"
            />
          </div>
          <div className="flex flex-col items-center md:items-start mx-auto space-y-4 mt-8 md:mt-[4em]">
            <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span>
            <span className="text-center md:text-left text-2xl sm:text-3xl w-[6em] font-semibold">
              XX99 Mark II Headphones
            </span>
            <p className="text-xs sm:text-sm text-center md:text-left sm:max-md:w-[38em] md:w-[23em] text-gray-500">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <Link href="/xx99markIIProduct">
              <button className="uppercase bg-brown p-4 text-xs text-white">
                see product
              </button>
            </Link>
          </div>
        </div>

        {/* XX99 Mark I */}
        <div className="flex flex-col-reverse md:flex-row my-[5em]">
          <div className="flex flex-col items-center md:items-start md:ml-[0em] m-auto space-y-4 mt-8 md:mt-[4em]">
            <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span>
            <span className="text-2xl sm:text-3xl w-[6em] font-semibold">
              XX99 Mark I Headphones
            </span>
            <p className="text-xs sm:text-sm text-center md:text-left sm:max-md:w-[38em] md:w-[23em] text-gray-500">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <button className="uppercase bg-brown p-4 text-xs text-white">
              see product
            </button>
          </div>
          <div className="bg-[#F1F1F1] flex justify-center md:w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.xx99MarkI}
              alt="af-banner"
              effect="blur"
              className="h-[15em] md:h-full m-auto py-8"
            />
          </div>
        </div>

        {/* xx59 */}
        <div className="grid grid-cols-1 md:grid-cols-2 my-[5em]">
          <div className="bg-[#F1F1F1] flex justify-center md:w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.xx59}
              alt="af-banner"
              effect="blur"
              className="h-[15em] md:h-full m-auto py-8"
            />
          </div>
          <div className="flex flex-col items-center md:items-start mx-auto space-y-4 mt-8 md:mt-[4em]">
            <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span>
            <span className="text-2xl sm:text-3xl w-[6em] font-semibold text-center md:text-left">
              XX59 Headphones
            </span>
            <p className="text-xs sm:text-sm text-center md:text-left sm:max-md:w-[38em] md:w-[23em] text-gray-500">
              Enjoy your audio almost anywhere and customize it to your specific
              tastes with the XX59 headphones. The stylish yet durable versatile
              wireless headset is a brilliant companion at home or on the move.
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

export default headphones;
