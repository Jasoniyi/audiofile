import React from "react";
import banner from "../../public/banner.svg";
import cart from "../../public/cart.svg";
import bar from "../../public/bar.svg";
import TopNav from "./TopNav";
import Image from "next/image";
import Link from "next/link";

const Menu = () => {
  return (
    <>
      {/* desktop menu */}
      <div className="hidden text-white md:flex flex-col md:flex-row justify-between py-6">
        {/* <Link href=""> */}
        <div className="cursor-pointer">
          <Image src={banner} alt="audiofile" />
        </div>
        {/* </Link> */}

        <TopNav />
        <div className="cursor-pointer">
          <Image src={cart} alt="cart" />
        </div>
      </div>
      {/* mobile menu */}
      <div className="md:hidden flex items-center py-6 justify-between sm:max-md:justify-start">
        <div className="cursor-pointer">
          <Image src={bar} alt="" />
        </div>
        <div className="sm:relative sm:left-6">
          <Image src={banner} alt="audiofile" />
        </div>
        <div className="sm:relative sm:left-[24em] cursor-pointer">
          <Image src={cart} alt="cart" />
        </div>
      </div>
      <div className="border border-b-[.01px] border-white"></div>
    </>
  );
};

export default Menu;
