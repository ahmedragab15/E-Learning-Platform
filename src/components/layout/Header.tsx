"use client";
import Image from "next/image";
import Link from "next/link";
import { Input } from "../ui/input";
import { Bell, Menu, Search, ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import ActiveLink from "../shared/ActiveLink";
import { images } from "../shared/Images";
import { userLogoutAction } from "@/actions/userActions";
import { redirect } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { navItems } from "@/constants";
import { useAppSelector } from "@/redux/hooks";

const Header = ({ user }: { user: JwtPayload | null }) => {
  const cart = useAppSelector((state) => state.cart);
  const handleLogout = async () => {
    await userLogoutAction();
    redirect("/login");
  };
  return (
    <header className="flex items-center justify-between lg:justify-evenly lg:gap-8 py-4 px-4 lg:px-10 bg-white border shadow rounded-4xl my-8 max-w-10/12 xl:max-w-8/12 mx-auto">
      <div>
        <Link href="/" className="cursor-pointer">
          <Image src={images.logo} alt="logo" width={100} height={100} />
        </Link>
      </div>
      <nav className="hidden md:block">
        <ul className="flex items-center gap-6 px-6">
          {navItems.map((item, index) => (
            <li className="relative" key={index}>
              <ActiveLink
                href={item.href}
                className="font-medium duration-200 hover:text-primary"
                activeClassName="text-primary after:absolute after:-bottom-3 after:left-1/2 after:w-2 after:h-2 after:bg-primary after:rounded-full"
              >
                {item.name}
              </ActiveLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="flex items-center relative lg:border-1 border-gray-300 rounded-2xl lg:flex-1 ml-auto">
        <Input placeholder="Search Courses..." className="hidden lg:block placeholder:text-gray-400 placeholder:font-medium" />
        <Button
          size={"icon"}
          variant={"outline"}
          className="hidden md:block absolute right-0 border-0 hover:bg-transparent bg-white lg:bg-transparent shadow-none"
        >
          <Search className="text-primary" />
        </Button>
      </div>
      <div className="flex items-center gap-1 md:gap-4">
        <Link href={"/cart"} className="relative">
          <ShoppingCart className="text-primary p-1 hover:bg-primary hover:text-white rounded-full" size={30} />
          <span className="absolute -top-0.5 right-0 text-xs bg-primary text-white w-4 h-4 flex items-center justify-center rounded-full pointer-events-none">
            {cart.length}
          </span>
        </Link>
        {user && (
          <>
            <Bell className="text-primary hover:bg-primary p-1 hover:text-white rounded-full" size={30} />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Image
                  src={(user?.avatar as string) || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"}
                  alt="user avatar"
                  width={200}
                  height={200}
                  className="w-8 h-8 rounded-full object-cover mx-auto cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-46" align="center">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuGroup>
                  <DropdownMenuItem>
                    <Link href="/account" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <Link href="/account/settings" className="w-full">
                      Settings
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </>
        )}
        {!user && (
          <h3>
            <ActiveLink href="/login" className="font-medium duration-200 hover:text-primary" activeClassName="text-primary">
              Sign In
            </ActiveLink>
          </h3>
        )}
      </div>
      <Menu className="md:hidden text-primary hover:bg-primary p-1 hover:text-white rounded-full" size={30} />
    </header>
  );
};

export default Header;
