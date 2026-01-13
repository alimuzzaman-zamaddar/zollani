import Link from "next/link";
import React from "react";

const AuthLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-[#E9E9E4]">
      <div className="h-16  bg-[#8EC3B3] flex items-center px-10">
        <div className="w-300 mx-auto">
          <Link href="/">
            <img
              src="https://i.ibb.co.com/MxNgk75F/ZOLLANI-COM.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
      {children}
    </main>
  );
};

export default AuthLayout;
