"use client";
import Container from "@/Components/Common/Container";
import { SearchSvg } from "@/Components/Svg/SvgContainer";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="w-full bg-gradient-to-r from-[#8EC3B3] to-[#8EC3B3] px-6 md:px-12">
      <Container>
        <div className="relative flex items-center justify-between h-16 md:h-20">
          <div className="">
            <img src="https://i.ibb.co.com/MxNgk75F/ZOLLANI-COM.png" alt="logo" />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <SearchSvg />
            <button
              className="text-white text-xs font-medium leading-[18px] tracking-[0.24px]
 transition rounded-[6px] border border-white px-[14px] py-[10px]
 hover:bg-white hover:text-[#2F5F55]"
            >
              LOGIN
            </button>
            <button
              className="text-white text-xs font-medium leading-[18px] tracking-[0.24px]
 transition rounded-[6px]
  bg-[#F7CA89] px-[14px] py-[10px] 
               hover:bg-transparent border border-[#F7CA89] hover:border-[#F7CA89] hover:text-[#F7CA89]"
            >
              SIGN UP
            </button>
          </div>
          <div className="md:hidden relative">
            <button
              onClick={() => setOpen(!open)}
              className="h-10 w-10 flex items-center justify-center rounded-full border border-white/30 text-white"
            >
              ☰
            </button>

            {open && (
              <div className="absolute right-0 mt-2 w-40 rounded-lg bg-[#8EC3B3] shadow-lg overflow-hidden z-50">
                <button className="w-full px-4 py-3 text-left text-white text-sm hover:bg-white hover:text-[#2F5F55] transition">
                  LOGIN
                </button>
                <button className="w-full px-4 py-3 text-left bg-[#F7CA89] text-[#2F2A1F] text-sm font-semibold hover:opacity-90 transition">
                  SIGN UP
                </button>
              </div>
            )}
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
