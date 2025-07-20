import { Container } from "@/components";
import React from "react";
import AccountAside from "./AccountAside";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="px-0">
      <div className="grid md:grid-cols-12 gap-4 lg:gap-8">
        <aside className="col-span-12 lg:col-span-3 bg-white p-8 rounded-md">
          <AccountAside />
        </aside>
        <div className="bg-white p-6 rounded-md min-h-screen col-span-12 lg:col-span-9">{children}</div>
      </div>
    </Container>
  );
};

export default AccountLayout;
