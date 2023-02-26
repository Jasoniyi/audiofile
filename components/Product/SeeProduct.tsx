import React from "react";

import { seeProduct } from "../Product/Typed";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Image from "next/image";

const SeeProduct = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-8 gap-[7em] py-[11em]">
      {seeProduct.map(({ image, title }, i) => (
        <div className="" key={`shop-products-${i}`}>
          <div className="flex flex-col items-center justify-center bg-lightGrey rounded-md h-[14em]">
            <span className="my-[3em]">
              <LazyLoadImage
                src={image}
                alt={title}
                className="h-[10em]"
                effect="blur"
              />
            </span>
          </div>
          <div className="flex flex-col space-y-4 items-center">
            <span className="uppercase font-semibold pt-5">{title}</span>
            <button className="bg-brown px-4 py-2 text-white text-sm">
              {" "}
              see product
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SeeProduct;
