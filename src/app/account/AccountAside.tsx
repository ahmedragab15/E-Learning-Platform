import ActiveLink from "@/components/shared/ActiveLink";
import { user } from "@/dummyData";
import { NotepadText, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";

const AccountAside = () => {
  return (
    <aside className="col-span-12 lg:col-span-3 bg-white p-8 rounded-md">
      <div className="flex flex-col lg:space-y-8">
        <div className="mx-auto space-y-2">
          <Image src={user.avatar} alt="user avatar" width={200} height={200} className="w-16 h-16 rounded-full object-cover mx-auto" />
          <h3 className="text-2xl font-semibold">{user.name}</h3>
        </div>
        <div className="flex flex-row lg:flex-col justify-center space-y-4">
          <ActiveLink href={"/account"} activeClassName="text-primary">
            <h4 className="flex flex-col sm:flex-row items-center gap-4 p-4 hover:bg-gray-100 font-medium hover:text-primary rounded-md">
              <NotepadText />
              <span>My Class</span>
            </h4>
          </ActiveLink>
          <ActiveLink href={"/account/settings"} activeClassName="text-primary">
            <h4 className="flex flex-col sm:flex-row items-center gap-4 p-4 hover:bg-gray-100 font-medium hover:text-primary rounded-md">
              <Settings />
              <span>Settings</span>
            </h4>
          </ActiveLink>
        </div>
      </div>
    </aside>
  );
};

export default AccountAside;
