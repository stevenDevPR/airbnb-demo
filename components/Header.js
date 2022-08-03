import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react//solid";

function Header() {
  return (
    <header className="bg-white sticky p-5 top-0 z-50 grid grid-cols-3 shadow-md md:px-10">
      <div className="relative flex items-center h-10 cursor-pointer my-auto">
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm sm:shadow-md">
        <input
          type="text"
          placeholder="Start your search"
          className="placeholder-gray-400 flex-grow bg-transparent pl-5 outline-none text-gray-600"
        />
        <SearchIcon className="hidden md:inline-flex h-8 bg-red-400 text-white rounded-full p-1.5 cursor-pointer mx-auto  md:mx-2" />
      </div>

      <div className="flex space-x-4 items-center justify-end text-gray-500 cursor-pointer ">
        <p className="hidden md:inline">Become a Host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex border-2 border-gray-300 rounded-full cursor-pointer items-center space-x-2 p-2">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
