import React from "react";
import banner from "../../public/banner.svg";
import Image from "next/image";

const index = () => {
  return (
    <div className="px-[1em] md:px-[7em] bg-black grid grid-row-4 sm:grid-rows-3 text-white mt-[11em]">
      <div className="flex flex-col md:flex-row justify-between py-[3em] space-y-6 md:space-y-0">
        <div className="">
          <Image src={banner} alt="logo" className="" />
        </div>

        <span className="">
          <ul className="uppercase text-xs flex space-x-6">
            <li className="hover:text-brown cursor-pointer">home</li>
            <li className="hover:text-brown cursor-pointer">headphones</li>
            <li className="hover:text-brown cursor-pointer">speakers</li>
            <li className="hover:text-brown cursor-pointer">earphones</li>
          </ul>
        </span>
      </div>
      <p className="text-sm w-[33em] text-gray-500">
        Audiophile is an all in one stop to fulfill your audio needs. We're a
        small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we’re open 7 days a week.
      </p>
      <div className="flex flex-col sm:flex-row justify-between sm:max-md:-pt-4em">
        <p className="py-[1em]  text-gray-500">
          Copyright 2021. All Rights Reserved
        </p>
        <div className="flex space-x-4 md:relative md:bottom-[4em]">
          <span className="text-2xl hover:text-brown cursor-pointer">
            <i className="fab fa-facebook-square"></i>
          </span>
          <span className="text-2xl hover:text-brown cursor-pointer">
            <i className="fa-brands fa-instagram"></i>
          </span>
          <span className="text-2xl hover:text-brown cursor-pointer">
            <i className="fab fa-twitter"></i>
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
