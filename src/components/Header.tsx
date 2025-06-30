import Image from "next/image";
import React from "react";
import logo from "../../public/images/Logo.png";
import Link from "next/link";
import { Input } from "./ui/input";
import { Bell, Menu, Search, ShoppingCart, UserRound } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between lg:justify-evenly lg:gap-8 py-4 px-4 lg:px-10 bg-white rounded-4xl my-8 max-w-10/12 xl:max-w-8/12 mx-auto">
      <div>
        <Link href="/" className="cursor-pointer">
          <Image src={logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 px-6">
          <li className="relative">
            <Link
              href="#"
              className="font-medium duration-200 hover:after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full hover:text-primary active:text-primary"
            >
              Home
            </Link>
          </li>
          <li className="relative">
            <Link
              href="#"
              className="font-medium duration-200 hover:after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full hover:text-primary active:text-primary"
            >
              Category
            </Link>
          </li>
          <li className="relative">
            <Link
              href="#"
              className="font-medium duration-200 hover:after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full hover:text-primary active:text-primary"
            >
              Courses
            </Link>
          </li>
          <li className="relative">
            <Link
              href="#"
              className="font-medium duration-200 hover:after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full hover:text-primary active:text-primary"
            >
              Tech With Us
            </Link>
          </li>
        </ul>
      </nav>
      <div className="flex items-center relative lg:border-1 border-gray-300 rounded-2xl lg:flex-1 ml-auto">
        <Input placeholder="Search Courses..." className="hidden lg:block placeholder:text-gray-400 placeholder:font-medium" />
        <Button size={"icon"} variant={"outline"} className="hidden md:block absolute right-0 border-0 bg-white lg:bg-transparent">
          <Search className="text-primary" />
        </Button>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <ShoppingCart className="text-primary  p-1 hover:bg-primary hover:text-white rounded-full" size={30} />
        <Bell className="text-primary hover:bg-primary  p-1 hover:text-white rounded-full" size={30} />
        <UserRound className="text-primary hover:bg-primary  p-1 hover:text-white rounded-full" size={30} />
      </div>
      <Menu className="md:hidden text-primary hover:bg-primary  p-1 hover:text-white rounded-full" size={30} />
    </header>
  );
};

export default Header;
