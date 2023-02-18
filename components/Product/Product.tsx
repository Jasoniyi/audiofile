import React from "react";
import arrow from "../../public/arrow.svg";
import { product } from "../Product/Typed";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";

const Product = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 gap-[7em] py-[11em]">
      {product.map(({ image, title }, i) => (
        <div
          className="flex flex-col items-center bg-lightGrey rounded-md h-[13em] sm:max-md:h-[11em]"
          key={`shop-products-${i}`}
        >
          <span className="relative -top-[4.5em]">
            <LazyLoadImage
              src={image}
              alt={title}
              className="h-[11em]"
              effect="blur"
            />
          </span>
          <div className="flex flex-col space-y-2 items-center relative -top-[4em] md:-top-[4em]">
            <span className="uppercase">{title}</span>
            <div className="flex space-x-2 ">
              <span className="">shop</span>
              <Image src={arrow} alt="shop" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Product;
