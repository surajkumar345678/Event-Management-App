import React from "react";
import MenuItem from "./MenuItem";
import { IoSearchSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHeart } from "react-icons/io";
import { FaUser } from "react-icons/fa6";
import HeaderFavBtn from "./HeaderFavBtn";
import HeaderProfileBtn from "./HeaderProfileBtn";

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-screen-2xl mx-auto">
      <div className="mr-4">
        <MenuItem title="BookUsNow" address="/" />
      </div>
      <div className="flex gap-4 items-center">
        <div className="hidden sm:flex items-center">
          <button className="flex items-center bg-black text-white py-2 px-4 rounded-md">
            <GiHamburgerMenu className="text-white mr-1" />
            <span>Categories</span>
          </button>
          <div className="relative ml-4">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 mr-10 w-[30rem] border rounded-md border-border-color focus:outline-none focus:border-blue-500"
            />
            <IoSearchSharp className="absolute right-12 top-1/2 transform -translate-y-1/2 text-header-icon-color" />
          </div>
        </div>
        <div className="sm:hidden">
          <IoSearchSharp className="text-header-icon-color" />
        </div>
        <HeaderFavBtn
          title="favourites"
          address="/favourites"
          Icon={IoMdHeart}
        />
        <HeaderProfileBtn title="sign in" address="/profile" Icon={FaUser} />
      </div>
    </div>
  );
}
