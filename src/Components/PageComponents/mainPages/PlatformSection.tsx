import Container from "@/Components/Common/Container";
import { KiribiriSvg, SqureSvg, WaveSvg } from "@/Components/Svg/SvgContainer";

export default function PlatformSection() {
  return (
    <section className="relative w-full py-15 overflow-hidden bg-bg-primary">
      <Container>
        <div className="">
          <div className="flex flex-col xl:flex-row gap-6 items-center">
            {/* LEFT CONTENT */}
            <div className="w-full">
              {/* Label */}
              <button className="rounded-[20px] border-t-2 border-r-2 border-l-2 border-[#4D918F] py-[6px] px-[24px] text-[#031226] text-center text-xs font-normal leading-[30px] tracking-[0.48px] uppercase flex items-center gap-2 mb-5">
                OUR PLATFORM <SqureSvg />
              </button>

              {/* Heading */}
              <h2 className="text-[#031226] font-integral-cf text-2xl xl:text-[30px] font-normal xl:leading-15 tracking-[1.2px]">
                INVESTMENT INTELLIGENCE
                <br />
                SUITE
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#031226] text-[20px] font-normal leading-10 tracking-[0.8px]">
                A comprehensive toolkit designed to empower retail investors
                with the data and insights they need to make informed decisions.
              </p>
            </div>
            <div className="w-full relative">
              <div className="hidden sm:block earnings-card-container w-full h-full ">
                <div className="">
                  <button className=" px-3 py-1 text-[10px] bg-[#ECF4FD] text-black rounded-[6px] mt-[10px] mb-4">
                    LIVE
                  </button>
                  <div className="flex items-center justify-between mb-5">
                    <button className="ml-[29px] flex p-[8px] items-center justify-center rounded-[7px] bg-[#F7AD97]">
                      <WaveSvg />
                    </button>
                    <KiribiriSvg />
                  </div>
                  <div className="flex justify-between pl-[29px]">
                    <div className="w-full">
                      <h1 className=" text-[#ECF4FD] text-[20px] font-bold leading-[40px] tracking-[0.8px] ">
                        Earnings Radar
                      </h1>

                      <p className="text-white/90 text-[14px] leading-relaxed mb-4 ">
                        Track earnings dates, EPS estimates, revenue
                        projections, and historical performance. Get AI-powered
                        insights and shareable reports.
                      </p>

                      <button className="explore-btn">
                        Explore Now
                        <span className="text-xl">›</span>
                      </button>
                    </div>

                    <div className="w-full flex justify-center ">
                      <ul className="space-y-2">
                        {[
                          "Real-time earnings calendar",
                          "Historical performance charts",
                          "AI-generated insights",
                          "Social sharing cards",
                        ].map((text) => (
                          <li
                            key={text}
                            className="text-white/95 text-[12px] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="block sm:hidden bg-[#F5907B]  w-full h-full rounded-2xl">
                <div className="">
                  <button className=" px-3 py-1 text-[10px] leading-2.5 bg-[#ECF4FD] text-black rounded-sm mb-4">
                    LIVE
                  </button>
                  <div className="flex items-center justify-between mb-5">
                    <button className="ml-2.5 flex p-[8px] items-center justify-center rounded-[7px] bg-[#F7AD97]">
                      <WaveSvg />
                    </button>
                    <KiribiriSvg />
                  </div>
                  <div className="flex justify-between pl-2.5 pb-4 ">
                    <div className="w-full">
                      <h1 className=" text-[#ECF4FD] font-bold tracking-[0.8px] ">
                        Earnings Radar
                      </h1>

                      <p className="text-white/90 text-[10px] leading-relaxed mb-4 ">
                        Track earnings dates, EPS estimates, revenue
                        projections, and historical performance. Get AI-powered
                        insights and shareable reports.
                      </p>

                      <button className="explore-btn">
                        Explore Now
                        <span className="text-xl">›</span>
                      </button>
                    </div>

                    <div className="w-full flex justify-center ">
                      <ul className="space-y-2">
                        {[
                          "Real-time earnings calendar",
                          "Historical performance charts",
                          "AI-generated insights",
                          "Social sharing cards",
                        ].map((text) => (
                          <li
                            key={text}
                            className="text-white/95 text-[10px] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col xl:flex-row gap-6 items-center">
            <div className="w-full relative">
              <div className="hidden sm:block earnings-card-container w-full h-full ">
                <div className="">
                  <button className=" px-3 py-1 text-[10px] bg-black text-white rounded-[6px] mt-[10px] mb-4">
                    Coming Soon
                  </button>
                  <div className="flex items-center justify-between mb-5">
                    <button className="ml-[29px] flex p-[8px] items-center justify-center rounded-[7px] bg-[#F7AD97]">
                      <WaveSvg />
                    </button>
                    <KiribiriSvg />
                  </div>
                  <div className="flex justify-between pl-[29px]">
                    <div className="w-full">
                      <h1 className=" text-[#ECF4FD] text-[20px] font-bold leading-[40px] tracking-[0.8px] ">
                        Earnings Radar
                      </h1>

                      <p className="text-white/90 text-[14px] leading-relaxed mb-4 ">
                        Track earnings dates, EPS estimates, revenue
                        projections, and historical performance. Get AI-powered
                        insights and shareable reports.
                      </p>

                      <button className="explore-btn">
                        Explore Now
                        <span className="text-xl">›</span>
                      </button>
                    </div>

                    <div className="w-full flex justify-center ">
                      <ul className="space-y-2">
                        {[
                          "Real-time earnings calendar",
                          "Historical performance charts",
                          "AI-generated insights",
                          "Social sharing cards",
                        ].map((text) => (
                          <li
                            key={text}
                            className="text-white/95 text-[12px] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                            <div className="block sm:hidden bg-[#F5907B]  mt-4 w-full h-full rounded-2xl">
                <div className="">
                  <button className="  px-3 py-1 text-[10px] bg-black text-white rounded-[6px] mt-[10px] mb-4">
                    Coming Soon
                  </button>
                  <div className="flex items-center justify-between mb-5">
                    <button className="ml-2.5 flex p-[8px] items-center justify-center rounded-[7px] bg-[#F7AD97]">
                      <WaveSvg />
                    </button>
                    <KiribiriSvg />
                  </div>
                  <div className="flex justify-between pl-2.5 pb-4 ">
                    <div className="w-full">
                      <h1 className=" text-[#ECF4FD] font-bold tracking-[0.8px] ">
                        Earnings Radar
                      </h1>

                      <p className="text-white/90 text-[10px] leading-relaxed mb-4 ">
                        Track earnings dates, EPS estimates, revenue
                        projections, and historical performance. Get AI-powered
                        insights and shareable reports.
                      </p>

                      <button className="explore-btn">
                        Explore Now
                        <span className="text-xl">›</span>
                      </button>
                    </div>

                    <div className="w-full flex justify-center ">
                      <ul className="space-y-2">
                        {[
                          "Real-time earnings calendar",
                          "Historical performance charts",
                          "AI-generated insights",
                          "Social sharing cards",
                        ].map((text) => (
                          <li
                            key={text}
                            className="text-white/95 text-[10px] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <div className="hidden sm:block earnings-card-container w-full h-full ">
                <div className="">
                  <button className=" px-3 py-1 text-[10px] bg-black text-white rounded-[6px] mt-[10px] mb-4">
                   Coming Soon
                  </button>
                  <div className="flex items-center justify-between mb-5">
                    <button className="ml-[29px] flex p-[8px] items-center justify-center rounded-[7px] bg-[#F7AD97]">
                      <WaveSvg />
                    </button>
                    <KiribiriSvg />
                  </div>
                  <div className="flex justify-between pl-[29px]">
                    <div className="w-full">
                      <h1 className=" text-[#ECF4FD] text-[20px] font-bold leading-[40px] tracking-[0.8px] ">
                        Earnings Radar
                      </h1>

                      <p className="text-white/90 text-[14px] leading-relaxed mb-4 ">
                        Track earnings dates, EPS estimates, revenue
                        projections, and historical performance. Get AI-powered
                        insights and shareable reports.
                      </p>

                      <button className="explore-btn">
                        Explore Now
                        <span className="text-xl">›</span>
                      </button>
                    </div>

                    <div className="w-full flex justify-center ">
                      <ul className="space-y-2">
                        {[
                          "Real-time earnings calendar",
                          "Historical performance charts",
                          "AI-generated insights",
                          "Social sharing cards",
                        ].map((text) => (
                          <li
                            key={text}
                            className="text-white/95 text-[12px] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
                                          <div className="block sm:hidden bg-[#F5907B] w-full h-full rounded-2xl">
                <div className="">
                  <button className="  px-3 py-1 text-[10px] bg-black text-white rounded-[6px] mt-[10px] mb-4">
                    Coming Soon
                  </button>
                  <div className="flex items-center justify-between mb-5">
                    <button className="ml-2.5 flex p-[8px] items-center justify-center rounded-[7px] bg-[#F7AD97]">
                      <WaveSvg />
                    </button>
                    <KiribiriSvg />
                  </div>
                  <div className="flex justify-between pl-2.5 pb-4 ">
                    <div className="w-full">
                      <h1 className=" text-[#ECF4FD] font-bold tracking-[0.8px] ">
                        Earnings Radar
                      </h1>

                      <p className="text-white/90 text-[10px] leading-relaxed mb-4 ">
                        Track earnings dates, EPS estimates, revenue
                        projections, and historical performance. Get AI-powered
                        insights and shareable reports.
                      </p>

                      <button className="explore-btn">
                        Explore Now
                        <span className="text-xl">›</span>
                      </button>
                    </div>

                    <div className="w-full flex justify-center ">
                      <ul className="space-y-2">
                        {[
                          "Real-time earnings calendar",
                          "Historical performance charts",
                          "AI-generated insights",
                          "Social sharing cards",
                        ].map((text) => (
                          <li
                            key={text}
                            className="text-white/95 text-[10px] flex items-center gap-2"
                          >
                            <span className="w-1.5 h-1.5 bg-white rounded-full "></span>
                            {text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            </div>
        </div>
      </Container>
    </section>
  );
}
