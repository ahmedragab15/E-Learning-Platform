import Image from "next/image";
import React from "react";
import logo from "../../../public/images/Logo.png";
import { Facebook, Twitter, Instagram } from "lucide-react";
import Link from "next/link";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const Footer = () => {
  return (
    <footer className="bg-[#D7E3FB] min-h-96 px-16 py-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-7 gap-8 items-center justify-center">
      <div className="space-y-8 xl:col-span-2">
        <div className="space-y-2 ">
          <Image src={logo} alt="logo" width={100} height={100} />
          <p>Online learning platform anytime and anywhere</p>
        </div>
        <div className="flex gap-4 lg:gap-12">
          <Facebook />
          <Twitter />
          <Instagram />
        </div>
      </div>
      <div className="space-y-6">
        <h3 className="font-medium">Courses</h3>
        <ul className="space-y-2">
          <li>
            <Link href={"#"}>Business</Link>
          </li>
          <li>
            <Link href={"#"}>Design</Link>
          </li>
          <li>
            <Link href={"#"}>Technologhy</Link>
          </li>
          <li>
            <Link href={"#"}>Languages</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-6">
        <h3 className="font-medium">Company</h3>
        <ul className="space-y-2">
          <li>
            <Link href={"#"}>Contact Us</Link>
          </li>
          <li>
            <Link href={"#"}>Addres</Link>
          </li>
          <li>
            <Link href={"#"}>Email</Link>
          </li>
          <li>
            <Link href={"#"}>About Us</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-6">
        <h3 className="font-medium">Service</h3>
        <ul className="space-y-2">
          <li>
            <Link href={"#"}>Support</Link>
          </li>
          <li>
            <Link href={"#"}>Payment</Link>
          </li>
          <li>
            <Link href={"#"}>Help</Link>
          </li>
          <li>
            <Link href={"#"}>Blog</Link>
          </li>
        </ul>
      </div>
      <div className="space-y-4 lg:col-span-2">
        <h3 className="font-medium">Subscribe Me</h3>
        <div className="flex items-center max-w-xs">
          <Input placeholder="Enter Email Address" className=" bg-white placeholder:text-gray-400 placeholder:font-medium" />
          <Button>Subscribe</Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
