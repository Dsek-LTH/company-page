import React, { PropsWithChildren } from "react";
import MainNav from "./Nav";

const MainLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="h-screen w-full">
      <MainNav />
      <main className="relative p-4 pt-8">{children}</main>
    </div>
  );
};

export default MainLayout;
