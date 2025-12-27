import Container from "@/Components/Common/Container";
import { SearchBlackSvg } from "@/Components/Svg/SvgContainer";

export default function HeroSection() {
  return (
    <section
      className="relative w-full py-10 md:py-0 md:h-[70vh] flex items-center bg-cover bg-center"
      style={{
        backgroundImage: "url('https://i.ibb.co.com/DPKhZfjC/Group-1-1.png')",
      }}
    >
      <div className="px-7 xl:px-0 lg:w-300 mx-auto">
        <div className="flex flex-col-reverse md:flex-row justify-between items-center w-full gap-7 md:gap-0">
          <div className="md:w-[55%]">
            {/* Badge */}

            {/* Heading */}
            <h1 className="text-[#ECF4FD] font-integral-cf text-2xl md:text-3xl lg:text-[38px] xl:text-[50px] font-medium lg:leading-10 xl:leading-15 tracking-[2px]">
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
          <div className=" hidden md:w-[45%]  md:flex justify-end bg-blend-screen mix-blend-screen">
            <div className=" w-84 h-[313px] absolute bg-[radial-gradient(50%_50%_at_50%_50%,#FFF_9%,#5BB9FF_29%,#507ADB_38%,#4970C9_42%,#304982_58%,#1B294A_72%,#0C1322_84%,#030509_94%,#000_100%)] bg-blend-screen mix-blend-screen top-1/2 -translate-y-1/2"></div>
            <img src="/hero-temp.png" alt="hero-temp" />
          </div>
          <div className=" md:hidden md:w-[45%]  flex justify-end bg-blend-screen mix-blend-screen">
            <div className="w-84 h-[313px] absolute bg-[radial-gradient(50%_50%_at_50%_50%,#FFF_9%,#5BB9FF_29%,#507ADB_38%,#4970C9_42%,#304982_58%,#1B294A_72%,#0C1322_84%,#030509_94%,#000_100%)] bg-blend-screen mix-blend-screen top-48 sm:top-55 -translate-y-1/2"></div>
            <img src="/hero-temp.png" alt="hero-temp" />
          </div>
        </div>
      </div>
    </section>
  );
}
