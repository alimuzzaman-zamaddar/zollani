import Container from "@/Components/Common/Container";
import { SearchBlackSvg } from "@/Components/Svg/SvgContainer";

export default function HeroSection() {
  return (
    <section
      className="relative w-full h-[70vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/DPKhZfjC/Group-1-1.png')",
      }}
    >
      <div className="w-[1200px] mx-auto">
        <div className="flex justify-between items-center w-full">
          <div className="w-[55%]">
            {/* Badge */}

            {/* Heading */}
            <h1 className="text-[#ECF4FD] font-integral-cf text-[50px] font-medium leading-[60px] tracking-[2px]">
              SMARTER INVESTING <br />
              FOR <br />
              RETAIL INVESTORS
            </h1>
            <p className="text-[#ECF4FD]  text-xs font-semibold leading-4 mt-[30px]">
              Independent Investment Intelligence
            </p>
            {/* Description */}
            <p className="mt-[30px] max-w-xl text-[#ECF4FD] text-[20px] font-normal leading-[26px] tracking-[0.8px]
">
              Your independent investment data management and distribution
              platform. Access institutional-grade research, earnings
              intelligence, and market insights—all in one place.
            </p>

            {/* CTA buttons */}
            <div className="mt-8 flex flex-wrap gap-4">
              <button className="flex items-center gap-2 rounded-lg bg-[#F5C27A] px-6 py-2.5 text-base font-semibold text-[#2F2A1F] hover:opacity-90 transition">
                <SearchBlackSvg /> Explore Earnings Radar
              </button>

              <button className="rounded-lg border border-white/30 px-6 py-2.5 text-base font-medium text-white hover:bg-white hover:text-[#071B2F] transition">
                View Top 20 Earnings
              </button>
            </div>
          </div>
          <div className="w-[45%]  flex justify-end">
            <img src="https://i.ibb.co.com/zTnwcgzP/DESIGN.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
