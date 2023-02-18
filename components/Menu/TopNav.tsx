import React from "react";
import { NavbarLinks } from "../../constants/constants";

const topNav = () => {
  return (
    <>
      <div className="flex space-x-10 uppercase text-base">
        {NavbarLinks.map((nav, i) => (
          <div className="" key={`top-menu-${i}`}>
            <a href={nav.path}>
              <span className="cursor-pointer">{nav.title}</span>
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default topNav;
