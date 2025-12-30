"use client";

import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { AiOutlineCloud } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsYoutube } from "react-icons/bs";
import { MdOutlineGavel } from "react-icons/md";
import { RiRobot2Line } from "react-icons/ri";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function WhatToWatchSection() {
  const [open, setOpen] = useState(true);

  const insights = [
    {
      title: "Search Revenue",
      desc: "Core search advertising showing resilience despite AI disruption concerns",
      icon: <FiSearch size={16} className="text-[#4D918F]" />,
    },
    {
      title: "YouTube Growth",
      desc: "YouTube Shorts monetization improving; total revenue up 15% expected",
      icon: <BsYoutube size={16} className="text-[#4D918F]" />,
    },
    {
      title: "Cloud Profitability",
      desc: "Google Cloud margins expanding as enterprise deals scale",
      icon: <AiOutlineCloud size={16} className="text-[#4D918F]" />,
    },
    {
      title: "AI Overviews",
      desc: "Search AI features may impact ad load; monitoring click-through rates",
      icon: <RiRobot2Line size={16} className="text-[#4D918F]" />,
    },
    {
      title: "Regulatory Risk",
      desc: "Antitrust rulings could force changes to distribution agreements",
      icon: <MdOutlineGavel size={16} className="text-[#4D918F]" />,
    },
  ];

  return (
    <>
      <div className="bg-[#E9E9E4] ">
        <div className="max-w-7xl  mx-auto flex items-center justify-between border-y border-[#CFCFCF] py-6 px-4 sm:px-6">
          <p className="text-[#707070] font-montserrat text-[12px] tracking-[3px] font-bold uppercase">
            EPS SURPRISE
          </p>

          <span className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F7AD97]/40 text-[#4D918F] font-koho text-[12px] font-semibold tracking-[2px]">
            ↗ +2.53% Beat
          </span>
        </div>
      </div>
      <div
        className="bg-no-repeat bg-cover bg-[#E9E9E4] bg-blend"
        style={{
          backgroundImage: "url('https://i.ibb.co.com/3ykkSP2j/Group-1-3.png')",
          backgroundPosition: "center 30px",
        }}
      >
        <section className="w-full  pt-4 pb-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-0">
            <div className="relative mt-10 rounded-2xl bg-[rgba(255,255,255,0.50)] border border-white/40 backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
              <div className="relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center">
                      <HiOutlineLightBulb
                        size={18}
                        className="text-[#4D918F]"
                      />
                    </span>
                    <h3 className="text-[#031226] font-montserrat text-[20px] sm:text-[24px] font-bold tracking-[2px]">
                      What To Watch
                    </h3>
                  </div>

                  <FiChevronDown
                    className={`text-[#031226] transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    size={20}
                  />
                </div>

                <p className="mt-3 text-[#707070] font-koho text-[12px] tracking-[2px]">
                  Demo insights
                </p>
                {open && (
                  <div className="mt-8 space-y-5">
                    {insights.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-[#F7AD97]/10 hover:bg-[#F7AD97]/20 transition cursor-pointer"
                      >
                        <span className="w-10 h-10 rounded-xl bg-[#F7AD97]/30 flex items-center justify-center shrink-0">
                          {item.icon}
                        </span>

                        <div>
                          <h4 className="text-[#031226] font-montserrat text-[14px] sm:text-[16px] font-bold tracking-[2px]">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-[#707070] font-koho text-[12px] sm:text-[13px] tracking-[2px] leading-[20px]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            <div className="relative mt-10 rounded-2xl bg-[rgba(255,255,255,0.50)] border border-white/40 backdrop-blur-sm p-6 sm:p-8 overflow-hidden">
              <div className="relative">
                <div
                  onClick={() => setOpen(!open)}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-xl bg-white/60 flex items-center justify-center">
                      <HiOutlineLightBulb
                        size={18}
                        className="text-[#4D918F]"
                      />
                    </span>
                    <h3 className="text-[#031226] font-montserrat text-[20px] sm:text-[24px] font-bold tracking-[2px]">
                      Last Earnings Call Highlights
                    </h3>
                  </div>

                  <FiChevronDown
                    className={`text-[#031226] transition-transform duration-300 ${
                      open ? "rotate-180" : "rotate-0"
                    }`}
                    size={20}
                  />
                </div>

                <p className="mt-3 text-[#707070] font-koho text-[12px] tracking-[2px]">
                  Q4 2025. Demo Data
                </p>
                {open && (
                  <div className="mt-8 space-y-5">
                    {insights.map((item) => (
                      <div
                        key={item.title}
                        className="flex items-start gap-4 p-4 rounded-xl bg-[#F7AD97]/10 hover:bg-[#F7AD97]/20 transition cursor-pointer"
                      >
                        <span className="w-10 h-10 rounded-xl bg-[#F7AD97]/30 flex items-center justify-center shrink-0">
                          {item.icon}
                        </span>

                        <div>
                          <h4 className="text-[#031226] font-montserrat text-[14px] sm:text-[16px] font-bold tracking-[2px]">
                            {item.title}
                          </h4>
                          <p className="mt-1 text-[#707070] font-koho text-[12px] sm:text-[13px] tracking-[2px] leading-[20px]">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
