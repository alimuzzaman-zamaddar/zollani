import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return <main className="bg-bg-primary">
      <div className="h-16  bg-[#8EC3B3] flex items-center px-10">
          <div className="w-[1200px] mx-auto">
            <img src="https://i.ibb.co.com/MxNgk75F/ZOLLANI-COM.png" alt="logo" />
          </div>
      </div>
    {children}
    </main>;
};

export default AuthLayout;
