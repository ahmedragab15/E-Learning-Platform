import ActiveLink from "@/components/shared/ActiveLink";
import { NotepadText, Settings } from "lucide-react";
import { cookies } from "next/headers";
import Image from "next/image";
import React from "react";
import { getUserFromToken } from "@/lib/verifyJWT";


const AccountAside = async () => {
   const token = (await cookies()).get("jwtToken")?.value;
   console.log(token);
       const decoded = await getUserFromToken()
       const userName = decoded?.fullName
   
  // const user2 = await getUserAction(userId);
  //  if (!user2) {
  //    return <div>User not found or you don&apos;t have permission</div>;
  //  }
   
  return (
   
      <div className="flex flex-col lg:space-y-8">
        <div className="mx-auto space-y-2">
          <Image src={decoded?.avatar as string || "http://dergipark.org.tr/assets/app/images/buddy_sample.png"} alt="user avatar" width={200} height={200} className="w-16 h-16 rounded-full object-cover mx-auto" />
          <h3 className="text-2xl font-semibold">{userName || "User Name"}</h3>
        </div>
        <div className="flex flex-row lg:flex-col justify-center space-y-4">
          <ActiveLink href={"/account"} exact activeClassName="text-primary">
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
  );
};

export default AccountAside;
