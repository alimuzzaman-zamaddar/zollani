import { SqureSvg } from "@/Components/Svg/SvgContainer";

export default function PlatformSection() {
  return (
    <section className="relative w-full py-24 overflow-hidden bg-bg-primary">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div>
            {/* Label */}
            <button
              className="rounded-[20px] border-t-2 border-r-2 border-l-2 border-[#4D918F] py-[6px] px-[24px] text-[#031226] text-center text-xs font-normal leading-[30px] tracking-[0.48px] uppercase flex items-center gap-2 mb-5

"
            >
              OUR PLATFORM <SqureSvg />
            </button>

            {/* Heading */}
            <h2
              className="text-[#031226] font-integral-cf text-[30px] font-normal leading-[60px] tracking-[1.2px]
"
            >
              INVESTMENT INTELLIGENCE
              <br />
              SUITE
            </h2>

            {/* Description */}
            <p className="mt-6 text-[#031226] text-[20px] font-normal leading-[40px] tracking-[0.8px]">
              A comprehensive toolkit designed to empower retail investors with
              the data and insights they need to make informed decisions.
            </p>
          </div>

          {/* RIGHT CARD */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Card */}
            <div className="relative w-full max-w-md rounded-2xl bg-[#F49780] p-6 shadow-2xl">
              {/* Live badge */}
              <span className="absolute -top-3 left-4 rounded-md bg-white px-3 py-1 text-xs font-medium text-black">
                Live
              </span>

              {/* Icon */}
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-white/30">
                📈
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">
                Earnings Radar
              </h3>

              {/* Description */}
              <p className="mt-3 text-sm text-white/90 leading-relaxed">
                Track earnings dates, EPS estimates, revenue projections, and
                historical performance. Get AI-powered insights and shareable
                reports.
              </p>

              {/* CTA */}
              <button className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#FFD38A] px-5 py-2 text-sm font-semibold text-black hover:opacity-90 transition">
                EXPLORE NOW →
              </button>

              {/* Features */}
              <ul className="mt-6 space-y-2 text-sm text-white">
                <li>• Real-time earnings calendar</li>
                <li>• Historical performance charts</li>
                <li>• AI-generated insights</li>
                <li>• Social sharing cards</li>
              </ul>

              {/* Decorative curve */}
              <div className="absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-[#F49780]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
