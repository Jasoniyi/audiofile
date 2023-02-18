import React from "react";
import banner from "../public/banner.svg";
import cart from "../public/cart.svg";
import bar from "../public/bar.svg";
import { afImages } from "../constants/ImagePaths";
import TopNav from "../components/Menu/TopNav";
import Product from "../components/Product/Product";
import Zx9Speakers from "../components/zx9speakers";
import Zx7Speakers from "../components/zx7Speakers";
import Yx1Earphones from "../components/yx1Earphones";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import Image from "next/image";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Menu from "../components/Menu/Menu";

export default function Home() {
  return (
    <div className="">
      <div className="bg-lightBlack flex flex-col px-[3em] md:px-[7em]">
        {/* desktop menu */}
        <Menu />
        {/* Menu ends */}

        <div className="flex flex-col-reverse md:flex-row justify-between my-[5em]">
          <div className="flex flex-col items-center md:items-start text-white space-y-6 -mt-[16em] sm:max-md:-mt-[18em] md:mt-[6em] max-sm:relative z-10">
            <span className="text-xs uppercase tracking-[.7em]">
              new product
            </span>
            <span className="text-4xl md:text-7xl w-[6em]">
              XX99 Mark II Headphones
            </span>
            <p className="text-xs md:text-md w-[20em] md:w-[23em] text-center md:text-left md:text-base">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <button className="bg-lightBrown py-2 w-[11em] uppercase text-sm">
              see product
            </button>
          </div>
          <div className="">
            <LazyLoadImage
              src={afImages.bannerImg}
              alt="af-banner"
              effect="blur"
              className="h-full md:h-[35em] bg-cover"
            />
          </div>
        </div>
      </div>
      <div className="px-[1em] md:px-[7em]">
        <Product />
        <Zx9Speakers />
        <div className="-mt-[3em] md:-mt-[3em]">
          <Zx7Speakers />
        </div>

        <div className="sm:max-md:-mt-[12em] -mt-[15em] md:mt-[0em]">
          <Yx1Earphones />
          <Testimonials />
        </div>
      </div>
      <Footer />
    </div>
  );
}
