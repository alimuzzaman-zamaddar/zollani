"use client";

import { useState } from "react";
import Container from "@/Components/Common/Container";
import { FiSearch } from "react-icons/fi";

export default function EarningsSearchPage() {
  const [activeTicker, setActiveTicker] = useState("AAPL");

  const tickers = [
    "AAPL",
    "MSFT",
    "GOOGL",
    "AMZN",
    "NVDA",
    "TSLA",
    "META",
    "NFLX",
  ];

  return (
    <div className="bg-[#EFEDE7] xl:h-[92.8vh]">
      <Container>
        <div className="flex flex-col lg:flex-row py-10 sm:py-14 xl:py-16 gap-12 xl:gap-0">
          {/* LEFT */}
          <div
            className="
              flex-1
              bg-[url('https://i.ibb.co.com/mrPb87rV/380063456-26b18f4b-316c-41b1-80ae-a66c3e13b029-1.png')]
              bg-no-repeat
              bg-contain
              bg-bottom
             
            "
          >
            <div className="mt-10 sm:mt-14 xl:mt-20 flex flex-col items-center xl:items-start ">
              <h1 className="text-[#031226] font-montserrat font-extrabold tracking-[6px]
                text-[22px] sm:text-[36px] xl:text-[56px]">
                ZOLLANI.COM
              </h1>

              <p className="mt-4 sm:mt-6 max-w-md text-[#707070] font-koho tracking-[2px]
                text-[14px] sm:text-[16px] leading-[26px] sm:leading-[28px]">
                Fast, clean earning data for any stock. Search a ticker to see
                upcoming dates, estimates, and historical results
              </p>

              {/* Search */}
              <div className="mt-6 flex items-center gap-3 w-full max-w-md border border-[#4D918F] rounded-full px-5 py-3">
                <FiSearch className="text-[#4D918F]" />
                <input
                  type="text"
                  placeholder="Search any Ticker (AAPL, MSFT, GOOGL...)"
                  className="w-full bg-transparent outline-none font-koho text-sm tracking-[2px] text-[#031226]"
                />
              </div>

              <button className="mt-5 w-full max-w-md bg-[#9BCDBD] text-white py-3 rounded-full font-koho tracking-[2px] font-semibold hover:opacity-90 transition">
                Search Stock
              </button>

              {/* Image only for mobile & tablet */}
              <img
                className="mt-8 w-full xl:hidden"
                src="https://i.ibb.co.com/mrPb87rV/380063456-26b18f4b-316c-41b1-80ae-a66c3e13b029-1.png"
                alt=""
              />
            </div>
          </div>

          {/* DIVIDER (XL ONLY) */}
          <div className="hidden xl:flex flex-col items-center gap-7">
            <div className="w-[2px] h-[320px] bg-[#C2C2C2]" />
            <div className="w-[2px] h-[320px] bg-[#C2C2C2]" />
          </div>

          {/* RIGHT */}
          <div className="flex-1 xl:w-[60%] mt-6 sm:mt-10 xl:mt-20 px-0 xl:pl-8">
            <p className="text-[#707070] font-koho font-bold tracking-[2px]
              text-base sm:text-lg leading-[28px] sm:leading-[30px] text-center">
              Enter a ticker above to see upcoming earnings <br className="hidden sm:block" />
              data
            </p>

            <p className="mt-2 text-[#707070] font-koho tracking-[2px]
              text-base sm:text-lg text-center mb-8 sm:mb-10">
              Try one of these popular tickers:
            </p>

            <span className="hidden xl:block text-right text-[#031226] text-xs tracking-[2px] cursor-pointer">
              See more →
            </span>

            <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 mt-4">
              {tickers.map((ticker) => {
                const isActive = activeTicker === ticker;
                return (
                  <button
                    key={ticker}
                    onClick={() => setActiveTicker(ticker)}
                    className={`h-[96px] sm:h-[110px] xl:h-[128px] rounded-2xl border font-semibold tracking-[2px] text-base sm:text-lg transition
                      ${
                        isActive
                          ? "bg-[#FFB29A] text-white border-[#FFB29A]"
                          : "border-[#707070] text-[#031226] hover:bg-white"
                      }`}
                  >
                    {ticker}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
