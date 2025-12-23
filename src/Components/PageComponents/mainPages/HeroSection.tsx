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
            <p
              className="mt-[30px] max-w-xl text-[#ECF4FD] text-[20px] font-normal leading-[26px] tracking-[0.8px]
"
            >
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
          <div className="w-[45%]  flex justify-end bg-blend-screen mix-blend-screen">
            <div className="w-[336px] h-[313px] absolute bg-[radial-gradient(50%_50%_at_50%_50%,#FFF_9%,#5BB9FF_29%,#507ADB_38%,#4970C9_42%,#304982_58%,#1B294A_72%,#0C1322_84%,#030509_94%,#000_100%)] bg-blend-screen mix-blend-screen top-1/2 -translate-y-1/2"></div>
            <img src="/hero-temp.png" alt="hero-temp" />
          </div>
        </div>
      </div>
    </section>
  );
}
