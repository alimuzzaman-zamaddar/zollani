import Container from "@/Components/Common/Container";
import HeroSection from "@/Components/PageComponents/mainPages/HeroSection";
import PlatformSection from "@/Components/PageComponents/mainPages/PlatformSection";
import { BsShieldCheck } from "react-icons/bs";

const Page = () => {
  return (
    <main className="">
      <HeroSection />
      <PlatformSection />

      <div className="relative p-12">
        <div className="earnings-card-container">
          <div className="absolute top-0 left-0 bg-white px-4 py-1.5 rounded-lg font-bold text-[12px] z-10 shadow-md">
            Live
          </div>
          {/* Left Side */}
          <div className="flex-[1.2] pr-12">
            <div className="icon-box">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
              >
                <path
                  d="M3 3v18h18M18 9l-5 5-2-2-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-white mb-5">
              Earnings Radar
            </h1>

            <p className="text-white/90 text-base leading-relaxed mb-10 max-w-sm">
              Track earnings dates, EPS estimates, revenue projections, and
              historical performance. Get AI-powered insights and shareable
              reports.
            </p>

            <button className="explore-btn">
              Explore Now
              <span className="text-xl">›</span>
            </button>
          </div>

          {/* Right Side */}
          <div className="flex-1 flex items-center">
            <ul className="space-y-5">
              {[
                "Real-time earnings calendar",
                "Historical performance charts",
                "AI-generated insights",
                "Social sharing cards",
              ].map((text) => (
                <li
                  key={text}
                  className="text-white/95 text-[15px] flex items-center gap-4"
                >
                  <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
                  {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Wind Icon Decor */}
          <div className="absolute top-12 right-12 opacity-60">
            <svg
              width="45"
              height="45"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.5"
            >
              <path
                d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;
