"use client";

import { useEffect, useState } from "react";
import { FiTrendingUp, FiTrendingDown } from "react-icons/fi";

export default function EarningsHistorySection() {
  const data = [
    { quarter: "Q1 24", value: 2.95, type: "beat" },
    { quarter: "Q2 24", value: 2.75, type: "miss" },
    { quarter: "Q3 24", value: 2.6, type: "miss" },
    { quarter: "Q4 24", value: 2.75, type: "miss" },
    { quarter: "Q1 25", value: 3.0, type: "neutral" },
    { quarter: "Q2 25", value: 2.75, type: "miss" },
    { quarter: "Q3 25", value: 2.85, type: "miss" },
    { quarter: "Q4 25", value: 2.95, type: "beat" },
  ];

  const maxValue = 3.0;

  const beats = data.filter((d) => d.type === "beat").length;
  const misses = data.filter((d) => d.type === "miss").length;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 150);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className="bg-no-repeat bg-cover bg-[#E9E9E4] "
      style={{
        backgroundImage:
          "url('https://i.ibb.co.com/VnjvCrs/380063456-26b18f4b-316c-41b1-80ae-a66c3e13b029-1-3.png')",
        backgroundPosition: "bottom 60px",
      }}
    >
      <section className="w-full py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-0">
          <div className="bg-[rgba(255,255,255,0.30)] rounded-2xl px-4 sm:px-8 xl:px-10 py-8 sm:py-10">
            {/* HEADER */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <h2 className="text-[#031226] font-montserrat text-[16px] sm:text-[18px] xl:text-[20px] font-bold tracking-[2px]">
                Earnings History (Last 8 Quarters)
              </h2>

              <div className="flex items-center gap-6">
                <span className="flex items-center gap-2 text-[#0AAB62] font-koho text-[12px] sm:text-[14px] font-semibold tracking-[2px]">
                  <FiTrendingUp /> {beats} Beats
                </span>

                <span className="flex items-center gap-2 text-[#C0392B] font-koho text-[12px] sm:text-[14px] font-semibold tracking-[2px]">
                  <FiTrendingDown /> {misses} Misses
                </span>
              </div>
            </div>

            {/* CHART WRAPPER (Responsive) */}
            <div className="mt-10 overflow-x-auto xl:overflow-visible">
              <div className="min-w-[720px] xl:min-w-0 flex gap-6">
                {/* Y AXIS */}
                <div className="flex flex-col justify-between text-[#707070] font-koho text-[12px] tracking-[2px] min-w-[60px]">
                  <span>$3.00</span>
                  <span>$2.25</span>
                  <span>$1.50</span>
                  <span>$0.75</span>
                  <span>$0.00</span>
                </div>

                {/* BARS */}
                <div className="flex-1">
                  <div className="flex items-end justify-between gap-4 sm:gap-8 h-[240px] sm:h-[280px] xl:h-[280px]">
                    {data.map((item, idx) => {
                      const barHeight = (item.value / maxValue) * 100;

                      const barColor =
                        item.type === "beat"
                          ? "bg-[#0A9B52]"
                          : item.type === "miss"
                          ? "bg-[#A62314]"
                          : "bg-[#D4D4D4]";

                      return (
                        <div
                          key={item.quarter}
                          className="flex flex-col items-center flex-1 h-full"
                        >
                          <div className="flex items-end h-full w-full justify-center">
                            <div
                              className={`w-7 sm:w-8 xl:w-11 rounded-lg ${barColor} transition-all duration-700 ease-out`}
                              style={{
                                height: mounted ? `${barHeight}%` : "0%",
                                transitionDelay: `${idx * 80}ms`,
                              }}
                            />
                          </div>

                          <span className="mt-3 text-[#707070] font-koho text-[12px] tracking-[2px] whitespace-nowrap">
                            {item.quarter}
                          </span>
                        </div>
                      );
                    })}
                  </div>

                  {/* LEGEND */}
                  <div className="mt-10 flex items-center justify-center gap-10">
                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded bg-[#0A9B52]" />
                      <p className="text-[#707070] font-koho text-[12px] tracking-[2px] font-semibold">
                        Beat Estimate
                      </p>
                    </div>

                    <div className="flex items-center gap-3">
                      <span className="w-4 h-4 rounded bg-[#A62314]" />
                      <p className="text-[#707070] font-koho text-[12px] tracking-[2px] font-semibold">
                        Missed Estimate
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* END CHART */}
          </div>
        </div>
      </section>
    </div>
  );
}
