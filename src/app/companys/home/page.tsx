"use client";

import { useState } from "react";
import Container from "@/Components/Common/Container";
import { FiSearch } from "react-icons/fi";

export default function EarningsSearchPage() {
  const [activeTicker, setActiveTicker] = useState("AAPL");

  const tickers = ["AAPL", "MSFT", "GOOGL", "AMZN", "NVDA", "TSLA", "META", "NFLX"];

  return (
    <div className="min-h-screen bg-[#EFEDE7]">
      <Container>
        <div className="py-16 grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-24 items-center">
          {/* LEFT */}
          <div>
            <h1 className="text-[#031226] font-montserrat text-[36px] sm:text-[44px] xl:text-[56px] font-extrabold tracking-[6px]">
              ZOLLANI.COM
            </h1>

            <p className="mt-6 max-w-md text-[#707070] font-koho text-[14px] sm:text-[16px] leading-[28px] tracking-[2px]">
              Fast, clean earning data for any stock. Search a ticker to see
              upcoming dates, estimates, and historical results
            </p>

            {/* Search Input */}
            <div className="mt-8 flex items-center gap-3 w-full max-w-md border border-[#4D918F] rounded-full px-5 py-3">
              <FiSearch className="text-[#4D918F]" />
              <input
                type="text"
                placeholder="Search any Ticker (AAPL, MSFT, GOOGL...)"
                className="w-full bg-transparent outline-none font-koho text-sm tracking-[2px] text-[#031226]"
              />
            </div>

            {/* Button */}
            <button className="mt-6 w-full max-w-md bg-[#9BCDBD] text-white py-3 rounded-full font-koho tracking-[2px] font-semibold hover:opacity-90 transition cursor-pointer">
              Search Stock
            </button>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <p className="text-[#707070] font-koho text-sm tracking-[2px] text-center xl:text-left">
              Enter a ticker above to see upcoming earnings data
            </p>

            <p className="mt-2 text-[#707070] font-koho text-sm tracking-[2px] text-center xl:text-left">
              Try one of these popular tickers:
            </p>

            <span className="absolute right-0 top-0 text-[#031226] text-xs tracking-[2px] cursor-pointer hidden xl:block">
              See more →
            </span>

            {/* Ticker Grid */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-lg mx-auto xl:mx-0">
              {tickers.map((ticker) => {
                const isActive = activeTicker === ticker;
                return (
                  <button
                    key={ticker}
                    onClick={() => setActiveTicker(ticker)}
                    className={`h-[90px] rounded-2xl border font-montserrat font-bold tracking-[2px] text-sm transition cursor-pointer ${
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
