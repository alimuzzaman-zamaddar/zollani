import Navbar from "@/Components/PageComponents/mainPages/companys/Navbar";
import React from "react";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>
        <Navbar/>
        {children}
        </main>
    </>
  );
};

export default MainLayout;
