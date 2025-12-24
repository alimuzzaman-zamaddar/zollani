import Container from "@/Components/Common/Container";
import { SqureSvg, WaveSvg } from "@/Components/Svg/SvgContainer";
import Image from "next/image";
import bgimage from "../../../Assets/Frame.png";

export default function WhyChooseSecion() {
  return (
    <section className="relative w-full py-10 overflow-hidden bg-bg-primary">
      <Container>
        <div className="">
          <div className="flex  gap-10 items-center">
            <div className="w-full grid grid-cols-1 md:grid-cols-2  gap-4">
              <div className="w-full ">
                <div className="relative">
                  <Image className="w-full h-full" src={bgimage} alt="" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%]">
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-[#ECF4FD] text-[20px] font-bold leading-[18px] tracking-[0.8px]">
                          Lightning Fast
                        </p>

                        <button className="ml-[29px] flex p-[10px] items-center justify-center rounded-[7px] bg-[rgba(255,255,255,0.50)]">
                          <WaveSvg />
                        </button>
                      </div>

                      <p className="text-[#ECF4FD] text-[12px] font-bold leading-[18px] tracking-[0.8px]">
                        Real-time data with sub-second <br /> response times
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="relative">
                  <Image className="w-full h-full" src={bgimage} alt="" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%]">
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-[#ECF4FD] text-[20px] font-bold leading-[18px] tracking-[0.8px]">
                          Lightning Fast
                        </p>

                        <button className="ml-[29px] flex p-[10px] items-center justify-center rounded-[7px] bg-[rgba(255,255,255,0.50)]">
                          <WaveSvg />
                        </button>
                      </div>

                      <p className="text-[#ECF4FD] text-[12px] font-bold leading-[18px] tracking-[0.8px]">
                        Real-time data with sub-second <br /> response times
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="relative">
                  <Image className="w-full h-full" src={bgimage} alt="" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%]">
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-[#ECF4FD] text-[20px] font-bold leading-[18px] tracking-[0.8px]">
                          Lightning Fast
                        </p>

                        <button className="ml-[29px] flex p-[10px] items-center justify-center rounded-[7px] bg-[rgba(255,255,255,0.50)]">
                          <WaveSvg />
                        </button>
                      </div>

                      <p className="text-[#ECF4FD] text-[12px] font-bold leading-[18px] tracking-[0.8px]">
                        Real-time data with sub-second <br /> response times
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full">
                <div className="relative">
                  <Image className="w-full h-full" src={bgimage} alt="" />

                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[90%]">
                      <div className="flex items-center justify-between mb-5">
                        <p className="text-[#ECF4FD] text-[20px] font-bold leading-[18px] tracking-[0.8px]">
                          Lightning Fast
                        </p>

                        <button className="ml-[29px] flex p-[10px] items-center justify-center rounded-[7px] bg-[rgba(255,255,255,0.50)]">
                          <WaveSvg />
                        </button>
                      </div>

                      <p className="text-[#ECF4FD] text-[12px] font-bold leading-[18px] tracking-[0.8px]">
                        Real-time data with sub-second <br /> response times
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* LEFT CONTENT */}
            <div className="w-full">
              {/* Label */}
              <button className="rounded-[20px] border-t-2 border-r-2 border-l-2 border-[#4D918F] py-[6px] px-[24px] text-[#031226] text-center text-xs font-normal leading-[30px] tracking-[0.48px] uppercase flex items-center gap-2 mb-5">
                Why Choose Our Platform <SqureSvg />
              </button>

              {/* Heading */}
              <h2 className="text-[#031226] font-integral-cf text-[30px] font-normal leading-[60px] tracking-[1.2px]">
                What Makes Our Platform the Right Choice for You
                SUITE
              </h2>

              {/* Description */}
              <p className="mt-6 text-[#031226] text-[20px] font-normal leading-[32px] tracking-[0.8px]">
                Our platform combines secure technology, smart design, and
                real-time insights to deliver clarity and efficiency. Built for
                reliability and ease of use, it helps you make better decisions
                with confidence
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
