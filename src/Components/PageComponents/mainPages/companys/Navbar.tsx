"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenuAlt2, HiX } from "react-icons/hi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { label: "Search", href: "/search" },
    { label: "Top 20", href: "/top-20" },
    { label: "Calendar", href: "/calendar" },
    { label: "Wishlist", href: "/wishlist" },
  ];

  return (
    <>
      <nav className="w-full h-16 bg-[#4D918F] flex items-center justify-between px-6 xl:px-12">
        <div className="w-[1200px] mx-auto flex items-center justify-between">
          {/* LEFT */}
          <div className="text-white font-semibold tracking-widest text-sm cursor-pointer">
            ZOLLANI.COM
          </div>
          <div className="hidden md:flex items-center gap-8 text-white text-sm tracking-[2px]">
            {navItems.map((item) => {
              const isActive = pathname === item.href;

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`cursor-pointer transition ${
                    isActive
                      ? "text-[#F5C27A] font-semibold border-b-2 border-[#F5C27A]"
                      : "opacity-80 hover:opacity-100"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>
          <div className="hidden md:flex items-center gap-3 cursor-pointer">
            <span className="text-white text-sm tracking-[2px]">
              softy hijabi
            </span>
            <img
              src="https://i.pravatar.cc/32"
              alt="avatar"
              className="w-8 h-8 rounded-full"
            />
          </div>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-white text-2xl cursor-pointer"
          >
            <HiMenuAlt2 />
          </button>
        </div>
      </nav>

      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      <div
        className={`fixed top-0 left-0 h-full w-[260px] bg-[#4D918F] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="h-16 flex items-center justify-between px-6 border-b border-white/20">
          <span className="text-white font-semibold tracking-widest text-sm">
            ZOLLANI.COM
          </span>
          <button
            onClick={() => setOpen(false)}
            className="text-white text-2xl cursor-pointer"
          >
            <HiX />
          </button>
        </div>
        <div className="flex flex-col mt-6 px-6 gap-6 text-white tracking-[2px] text-sm">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                className={`cursor-pointer transition ${
                  isActive
                    ? "text-[#F5C27A] font-semibold"
                    : "opacity-80 hover:opacity-100"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="absolute bottom-6 left-6 flex items-center gap-3 cursor-pointer">
          <img
            src="https://i.pravatar.cc/40"
            alt="avatar"
            className="w-10 h-10 rounded-full"
          />
          <span className="text-white text-sm tracking-[2px]">
            softy hijabi
          </span>
        </div>
      </div>
    </>
  );
}
