import { Container } from "@/components";
import React from "react";
import AccountAside from "./AccountAside";

const AccountLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container className="px-0">
      <div className="grid md:grid-cols-12 gap-4 lg:gap-8">
        <AccountAside/>
        {children}
      </div>
    </Container>
  );
};

export default AccountLayout;
