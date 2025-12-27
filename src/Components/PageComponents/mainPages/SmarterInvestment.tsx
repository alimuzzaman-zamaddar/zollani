import Container from "@/Components/Common/Container";
import {
  CalendarSvg,
  SearchBlackSvg,
  SqureSvg,
  WaveSvg,
} from "@/Components/Svg/SvgContainer";
import Image from "next/image";
import bgimage from "../../../Assets/Frame.png";

export default function SmarterInvestment() {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-bg-primary">
      <Container>
        <div className="">
          <div className="flex flex-col md:flex-row gap-6 items-center">
            {/* LEFT CONTENT */}
            <div className="w-full">
              {/* Label */}
              <button className="rounded-[20px] border-t-2 border-r-2 border-l-2 border-[#4D918F] py-[6px] px-[24px] text-[#031226] text-center text-xs font-normal leading-7.5 tracking-[0.48px] uppercase flex items-center gap-2 mb-5">
                Start Making Smarter Investment Decisions <SqureSvg />
              </button>

              {/* Heading */}
              <h2 className="text-[#031226] font-integral-cf text-2xl md:text-[30px] font-normal md:leading-[60px] tracking-[1.2px]">
                Smarter Decisions for <br /> Better Investments
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#031226] text-[20px] font-normal leading-[32px] tracking-[0.8px]">
                Make confident investment decisions with real-time insights and
                reliable data designed to help you achieve better outcomes
              </p>
            </div>
            <div className="w-full flex md:justify-end items-center">
              <div className="xl:mt-8 flex flex-wrap gap-4">
                <button className="flex items-center gap-2 rounded-lg bg-[#F5C27A] px-6 py-2.5 text-base font-semibold text-[#2F2A1F] hover:opacity-90 transition">
                  <SearchBlackSvg /> Search a Stock
                </button>

                <button className="rounded-lg border gap-2 border-[#4D918F] flex items-center px-6 py-2.5 text-base font-medium text-black hover:bg-white hover:text-[#071B2F] transition">
                  <CalendarSvg />
                  View Earnings Calendar
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
