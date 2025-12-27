"use client";

import Container from "@/Components/Common/Container";
import { ClockSvg, DollerSvg, PeopleSvg } from "@/Components/Svg/SvgContainer";
import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function EarningsCalendarPage() {
  const [date, setDate] = useState<Date>(new Date());

  return (
    <div className="min-h-screen bg-[#F5F4EF] py-12">
      <Container>
        <div className="flex flex-col xl:flex-row gap-10">
          <div className="xl:w-[30%] relative">
            <img
              className="hidden xl:block absolute top-2/4 left-0 w-[80%] z-0"
              src="https://i.ibb.co.com/svvLkmLs/380063456-26b18f4b-316c-41b1-80ae-a66c3e13b029-1-2.png"
              alt=""
            />
            <div className="relative z-50 bg-[#9BCDBD] rounded-2xl p-4 text-white calendar-wrapper">
              <Calendar
                onChange={(value) => setDate(value as Date)}
                value={date}
                calendarType="gregory"
                className="rounded-xl border-0 mx-auto"
              />
              <p className="mt-4 text-sm tracking-wide opacity-90 text-center">
                Selected: {date.toDateString()}
              </p>
            </div>
          </div>

          <div className="xl:w-[70%]">
            {/* CENTER – DIVIDENDS */}
            <div className="space-y-4">
              <div className="bg-[#FF9A7E] text-white rounded-2xl p-5 mb-10">
                <div className="flex justify-between gap-5">
                  <div className="flex gap-5 ">
                    <DollerSvg />
                    <div className="">
                      <div className="flex gap-2.5 items-center">
                        <span className="text-[#ECF4FD] text-[12px] font-bold leading-5 tracking-[0.48px]">
                          META
                        </span>
                        <span className="text-[#031226] font-koho text-[8px] font-normal leading-7.5 tracking-[2px] uppercase bg-[#D9DAE4] rounded-[26px] px-3">
                          Your Text
                        </span>
                      </div>
                      <div className="mt-2 text-[#ECF4FD] font-koho text-sm xl:text-[18px] font-normal xl:leading-7.5 tracking-[2px] ">
                        Dividend payment
                      </div>
                      <div className=" mt-1  font-bold text-lg xl:text-[26px]">
                        $0.50per share
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <ClockSvg /> <span>10:00am ET</span>
                  </div>
                </div>
              </div>
              <div className="border border-[#FF9A7E] rounded-2xl p-5 bg-white mb-10">
                <div className="flex justify-between gap-5">
                  <div className="flex gap-5 ">
                    <PeopleSvg />
                    <div className="">
                      <div className="flex gap-2.5 items-center">
                        <span className="text-[#031226] text-[12px] font-bold leading-5 tracking-[0.48px]">
                          META
                        </span>
                        <span className="text-[#031226] font-koho text-[8px] font-normal leading-7.5 tracking-[2px] uppercase bg-[#D9DAE4] rounded-[26px] px-3">
                          Your Text
                        </span>
                      </div>
                      <div className="mt-2 text-[#031226] text-sm xl:text-[18px] font-normal xl:leading-7.5 tracking-[2px] ">
                        Dividend payment
                      </div>
                      <div className=" mt-1  text-lg xl:text-[26px] font-bold">
                        $0.50per share
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2.5">
                    <ClockSvg /> <span>10:00am ET</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT – UPCOMING EVENTS */}
            <div className="xl:col-span-3 h-75 overflow-y-auto custom-scrollbar ">
              <h4 className="text-[#031226] text-[18px] font-bold leading-7.5 tracking-[2px] mb-3">
                Upcoming Events
              </h4>
              <div className="space-y-3">
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={i}
                    className="border border-[#8EC3B3] rounded-md bg-transparent  transition-all hover:bg-[#8EC3B3] px-6 py-3  text-sm"
                  >
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <div className="rounded-2xl bg-[#F5907B] w-2.5 h-2.5 shrink-0 aspect-square"></div>
                        <div className="">
                          <span className="text-[#333] text-[8px] font-bold leading-7.5 tracking-[2px] capitalize">
                            AAPL
                          </span>
                          <span className="text-[#707070] text-[8px] font-normal leading-7.5 tracking-[2px] capitalize">
                            · Earnings Report
                          </span>
                        </div>
                      </div>
                      <div className="">
                        <span className="text-[#707070] text-[8px] font-normal leading-7.5 tracking-[2px] capitalize">
                          4:30 pm ET
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
