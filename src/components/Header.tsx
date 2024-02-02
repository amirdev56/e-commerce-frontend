"use client";
import React, { useState, useEffect } from "react";
import logo from "../../public/allbird-icon.png";
import Image from "next/image";
import Link from "next/link";
import { CustomIcon } from "../helpers/icons";

const Categories = [
  { label: "MEN", url: "/men" },
  { label: "Women", url: "/women" },
  { label: "Kids", url: "/kids" },
  { label: "Socks", url: "/socks" },
  { label: "Sale", classes: "text-[#ad1f00]", url: "sale" },
];

const Options = [
  { label: "sustainability", url: "/sustainability" },
  { label: "rerun", url: "/rerun" },
  { label: "stores", url: "/stores" },
];

const Icons = [
  { icon: "SearchIcon" },
  { icon: "UserIcon1" },
  { icon: "HelpIcon1" },
  { icon: "CartIcon" },
];

const Header = () => {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const isVisible = currentScrollPos <= 0;

      setPrevScrollPos(currentScrollPos);
      setVisible(isVisible);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const headerStyle = {
    transition: "transform 0.3s ease-in-out",
    transform: visible ? "translateY(0px)" : "translateY(-40px)",
  };

  return (
    <div className="w-full fixed z-[1000]">
      <div className="h-[40px] w-full flex justify-center items-center bg-black text-white text-[11px]">
        Warm Up In Year-Of-The-Dragon Inspired Shoes For The Whole Family.
      </div>
      <div
        className="w-full h-[60px] bg-white text-black flex justify-between items-center"
        style={headerStyle}
      >
        <div className="w-full h-full">
          <div className="h-full ml-[12px] flex items-center">
            {Categories.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={`ml-[18px] hover:underline`}
              >
                <p
                  className={`${
                    item.classes || "text-[#212a2f]"
                  }  mx-[9px] text-[12px] font-[700] uppercase leading-7 tracking-[1.7px] `}
                >
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
        </div>
        <Link
          href={"/"}
          className="w-[400px] h-full flex items-center relative "
        >
          <Image
            src={logo}
            alt={"logo image"}
            fill
            style={{ objectFit: "contain", cursor: "pointer" }}
          />
        </Link>
        <div className="w-full h-full flex justify-end mr-[12px]">
          <div className="h-full  flex items-center justify-end">
            {Options.map((item, index) => (
              <Link
                key={index}
                href={item.url}
                className={`mr-[18px] hover:underline`}
              >
                <p
                  className={`
                    "text-[#212a2f]"
                   mx-[9px] text-[12px] font-[700] uppercase leading-7 tracking-[1.7px]`}
                >
                  {item.label}
                </p>
              </Link>
            ))}
          </div>
          <div className="flex items-center mr-[6px]">
            {Icons.map((item, index) => (
              <CustomIcon
                iconName={item.icon}
                iconProps={{ size: 25, className: "mr-[12px]" }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
