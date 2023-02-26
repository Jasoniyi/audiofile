import React from "react";
import Menu from "../components/Menu/Menu";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { afImages } from "../constants/ImagePaths";
import { markI } from "../constants/constants";
import SeeProduct from "../components/Product/SeeProduct";
import Product from "../components/Product/Product";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const markIEarphone = () => {
  return (
    <div className="">
      <div className="bg-lightBlack px-[3em] md:px-[7em] h-[4.5em] ">
        <Menu />
      </div>
      <div className="px-[3em] md:px-[7em] flex flex-col space-y-8">
        <span className="py-[2em] text-gray-500 cursor-pointer">Go back</span>
        {/* XX99 Mark II */}
        <div className="grid grid-cols-1 md:grid-cols-2 my-[5em]">
          <div className="bg-[#F1F1F1] flex justify-center md:w-[33em] rounded-md">
            <LazyLoadImage
              src={afImages.xx99MarkI}
              alt="af-banner"
              effect="blur"
              className="h-[15em] md:h-full m-auto py-8"
            />
          </div>
          <div className="flex flex-col items-center md:items-start mx-auto space-y-4 mt-8 md:mt-[4em]">
            {/* <span className="uppercase text-brown tracking-[.6em] text-xs">
              new product
            </span> */}
            <span className="text-center md:text-left text-2xl sm:text-3xl w-[6em] font-semibold">
              XX99 Mark I Headphones
            </span>
            <p className="text-xs sm:text-sm text-center md:text-left sm:max-md:w-[38em] md:w-[29em] text-gray-500">
              As the gold standard for headphones, the classic XX99 Mark I
              offers detailed and accurate audio reproduction for audiophiles,
              mixing engineers, and music aficionados alike in studios and on
              the go.
            </p>
            <span className="font-medium">$ 1,750</span>

            <div className="flex space-x-6">
              <div className=" bg-[#F1F1F1] p-4 text-sm text-black flex justify-between w-[9em]">
                <span className="cursor-pointer ">-</span>
                <span className="">4</span>
                <span className="cursor-pointer">+</span>
              </div>
              <button className="uppercase bg-brown p-4 text-xs text-white px-7">
                add to cart
              </button>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[4em] mt-[2em]">
          <div className="flex flex-col space-y-8">
            <span className="uppercase text-2xl">features</span>
            <p className="text-sm">
              As the headphones all others are measured against, the XX99 Mark I
              demonstrates over five decades of audio expertise, redefining the
              critical listening experience. This pair of closed-back headphones
              are made of industrial, aerospace-grade materials to emphasize
              durability at a relatively light weight of 11 oz.
            </p>
            <p className="text-sm py-1">
              From the handcrafted microfiber ear cushions to the robust metal
              headband with inner damping element, the components work together
              to deliver comfort and uncompromising sound. Its closed-back
              design delivers up to 27 dB of passive noise cancellation,
              reducing resonance by reflecting sound to a dedicated absorber.
              For connectivity, a specially tuned cable is included with a
              balanced gold connector.
            </p>
          </div>
          <div className="mx-auto">
            <span className="uppercase text-2xl">in the box</span>
            <span className="mt-[1em]">
              {markI.map((item, i) => (
                <div className="flex space-x-6 py-2" key={`xx99MArkII-${i}`}>
                  <span className="text-brown font-medium text-sm">
                    {item.id}
                  </span>
                  <span className="text-sm text-gray-500">{item.desc}</span>
                </div>
              ))}
            </span>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-1 sm:grid-cols-2 my-[5em] relative">
            <div className="flex flex-col space-y-4">
              <div className="">
                <LazyLoadImage
                  src={afImages.markIsample1}
                  alt="af-banner"
                  effect="blur"
                  className="w-full"
                />
              </div>
              <div className="">
                <LazyLoadImage
                  src={afImages.markIsample2}
                  alt="af-banner"
                  effect="blur"
                  className="h-full"
                />
              </div>
            </div>
            <div className="relative sm:-left-[8em]">
              <LazyLoadImage
                src={afImages.markIsample3}
                alt="af-banner"
                effect="blur"
                className="h-full -left-[8em] bg-cover"
              />
            </div>
          </div>
        </div>
        {/* nmn */}
        <SeeProduct />
        <div className="relative -top-[9em]">
          <Product />
        </div>
        <div className="relative -top-[9em]">
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default markIEarphone;
