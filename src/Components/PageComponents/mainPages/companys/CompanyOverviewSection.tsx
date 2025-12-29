"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import {
  ClocksSvg,
  GraphupSvg,
  PlusMinusSvg,
} from "@/Components/Svg/SvgContainer";
import {
  FiStar,
  FiBell,
  FiShare2,
  FiFileText,
  FiCalendar,
  FiMail,
} from "react-icons/fi";

export default function CompanyOverviewSection() {
  const [openAlertModal, setOpenAlertModal] = useState(false);
  const [openShareModal, setOpenShareModal] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<{ email: string }>();

  const onSubmit = (data: { email: string }) => {
    console.log("Alert Email:", data.email);
    setOpenAlertModal(false);
    reset();
  };

  return (
    <>
      <section className="w-full bg-[#E9E9E4] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          {/* TOP HEADER */}
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
            {/* LEFT */}
            <div>
              <h2 className="text-[#031226] font-montserrat text-[22px] font-bold tracking-[2px]">
                Alphabet Inc.
              </h2>
              <p className="text-[#707070] font-koho text-[16px] tracking-[2px] mt-1">
                GOOGL
              </p>

              <div className="flex items-center gap-3 mt-6">
                <FiCalendar className="text-[#031226]" />
                <p className="text-[#031226] font-koho text-[20px] tracking-[2px]">
                  Jan 28, 2026
                </p>

                <div className="flex items-center gap-4 ml-6">
                  <span className="ml-3 flex items-center gap-2 px-3 py-1 rounded-md bg-[#C2C2C2] text-[#031226] font-koho text-[12px] tracking-[2px]">
                    <ClocksSvg /> AMC
                  </span>
                  <span className="text-[#707070] text-xs">
                    After Market Close
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT BUTTONS */}
            <div className="flex flex-wrap items-center justify-start lg:justify-end gap-3">
              <button className="flex items-center gap-2 px-2 py-3 rounded-md bg-[#F5907B] text-[#031226] text-[12px] font-bold leading-5 tracking-[2px] cursor-pointer hover:opacity-90 transition">
                <FiStar /> Add to Watchlist
              </button>

              {/* ALERT BUTTON */}
              <button
                onClick={() => setOpenAlertModal(true)}
                className="flex items-center gap-2 px-2 py-3 rounded-md border border-[#CFCFCF] text-[#031226] text-[12px] font-bold leading-5 tracking-[2px] cursor-pointer hover:bg-[#F5907B] transition"
              >
                <FiBell /> Alert
              </button>

              {/* SHARE BUTTON */}
              <button
                onClick={() => setOpenShareModal(true)}
                className="flex items-center gap-2 px-2 py-3 rounded-md border border-[#CFCFCF] text-[#031226] text-[12px] font-bold leading-5 tracking-[2px] cursor-pointer hover:bg-[#F5907B] transition"
              >
                <FiShare2 /> Share
              </button>

              <button className="flex items-center gap-2 px-2 py-3 rounded-md border border-[#CFCFCF] text-[#031226] text-[12px] font-bold leading-5 tracking-[2px] cursor-pointer hover:bg-[#F5907B] transition">
                <FiFileText /> Transcript
              </button>
            </div>
          </div>

          {/* OPTIONS BOX */}
          <div className="mt-10 border border-[#F5907B] bg-[rgba(255,255,255,0.50)] rounded-md px-3 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <p className="text-[#031226] font-montserrat text-[20px] font-bold tracking-[2px] flex items-center gap-2">
                <GraphupSvg /> Options-Implied Move
              </p>
              <p className="text-[#707070] text-[12px] tracking-[2px] mt-2 max-w-md leading-5">
                Expected price range based on options market activity.
              </p>
            </div>

            <div className="flex items-center gap-10">
              <div className="text-right mb-2.5">
                <p className="text-[#4D918F] font-montserrat text-[22px] font-bold tracking-[2px] flex gap-2.5 items-center">
                  <PlusMinusSvg /> 5.1%
                </p>
                <p className="text-[#707070] font-koho text-[10px] tracking-[2px] mt-1">
                  ± $9.10
                </p>
              </div>
              <div className="text-right">
                <p className="text-[#707070] font-koho text-[10px] tracking-[2px]">
                  Current Price
                </p>
                <p className="text-[#031226] font-montserrat text-[18px] font-bold tracking-[2px]">
                  $178.45
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {openAlertModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[800px] bg-[#EFEDE7] rounded-2xl p-6 sm:p-10 relative shadow-lg overflow-y-auto max-h-[95vh] no-scrollbar">
            <button
              onClick={() => setOpenAlertModal(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-[#C0392B] flex items-center justify-center text-[#C0392B] text-xl font-bold cursor-pointer hover:scale-105 transition"
            >
              ×
            </button>

            <div className="flex items-center gap-4">
              <FiMail className="text-[#031226] text-[28px]" />
              <h2 className="text-[#031226] font-montserrat text-[20px] sm:text-[22px] font-bold tracking-[3px]">
                Email Alert for GOOGL
              </h2>
            </div>

            <p className="mt-6 text-[#707070] font-koho text-[14px] sm:text-[16px] tracking-[2px] leading-[26px] max-w-[650px]">
              Get notified 48 hours before Alphabet Inc's earnings release on
              <br />
              February 1, 2026.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-10 w-full">
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Email Address
                </span>

                <div className="flex items-center gap-3 rounded-md border border-[#707070] px-4 py-4">
                  <FiMail className="text-[#707070]" />
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    required
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]"
                  />
                </div>
              </div>

              {errors.email && (
                <p className="mt-2 text-red-500 text-xs font-koho tracking-[2px]">
                  {errors.email.message}
                </p>
              )}

              <p className="mt-6 text-[#707070] font-koho text-[14px] tracking-[2px] leading-[26px] max-w-[700px]">
                Email sending is currently in demo mode. When enabled, you'll
                receive a reminder email 48 hours before the earnings release.
              </p>

              <div className="mt-14 flex flex-col sm:flex-row gap-6">
                <button
                  type="button"
                  onClick={() => setOpenAlertModal(false)}
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg border border-[#707070] text-[#031226] font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer hover:bg-[#031226]/5 transition"
                >
                  ✕ Cancel
                </button>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-[#F5907B] text-[#031226] font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer hover:opacity-90 transition"
                >
                  ✓ Create Alert
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {openShareModal && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full xl:w-200 bg-[#EFEDE7] rounded-2xl p-6 sm:p-10 relative shadow-lg overflow-y-auto max-h-[95vh] no-scrollbar">
            <button
              onClick={() => setOpenShareModal(false)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-[#C0392B] flex items-center justify-center text-[#C0392B] text-xl font-bold cursor-pointer hover:scale-105 transition"
            >
              ×
            </button>
            <div className="flex items-center gap-4">
              <FiShare2 className="text-[#031226] text-[28px]" />
              <h2 className="text-[#031226] font-montserrat text-[22px] sm:text-[24px] font-bold tracking-[3px]">
                Share Snapshot
              </h2>
            </div>

            <p className="mt-6 text-[#707070] font-koho text-[14px] sm:text-[16px] tracking-[2px] leading-[24px]">
              Generate and share an earnings snapshot for GOOGL
            </p>
            <div className="mt-10 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-10">
              <div>
                <h3 className="text-[#031226] font-montserrat text-[20px] sm:text-[22px] font-bold tracking-[2px]">
                  Alphabet Inc.
                </h3>
                <p className="mt-2 text-[#031226] font-koho text-[14px] tracking-[3px]">
                  GOOGL
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[#707070] font-koho text-[14px] tracking-[4px]">
                  Earning Date
                </p>
                <p className="mt-3 text-[#031226] font-montserrat text-[22px] sm:text-[24px] font-bold tracking-[4px]">
                  Feb 1, 2026
                </p>
                <p className="mt-2 text-[#707070] font-koho text-[14px] tracking-[4px]">
                  Before Market open
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white/50 rounded-xl px-6 py-6 flex flex-col sm:flex-row sm:justify-between gap-8">
              <div>
                <p className="text-[#707070] font-koho text-[12px] tracking-[4px] uppercase">
                  EPS Estimate
                </p>
                <p className="mt-4 text-[#031226] font-montserrat text-[22px] font-bold tracking-[4px]">
                  $1.98
                </p>
              </div>

              <div className="text-left sm:text-right">
                <p className="text-[#707070] font-koho text-[12px] tracking-[4px] uppercase">
                  Revenue Estimate
                </p>
                <p className="mt-4 text-[#031226] font-montserrat text-[22px] font-bold tracking-[4px]">
                  $88.90B
                </p>
              </div>
            </div>

            <div className="mt-6 bg-white/50 rounded-xl px-6 py-6 flex flex-col sm:flex-row sm:justify-between gap-6">
              <div>
                <p className="text-[#707070] font-koho text-[12px] tracking-[4px] uppercase">
                  Last Quarter
                </p>
                <p className="mt-4 text-[#031226] font-montserrat text-[20px] font-bold tracking-[4px]">
                  EPS $1.94 VS $1.98
                </p>
              </div>

              <p className="text-[#0AAB62] font-montserrat text-[14px] font-bold tracking-[4px] flex items-center">
                +2.53% Beat
              </p>
            </div>

            <div className="mt-10">
              <p className="text-[#707070] font-koho text-[14px] tracking-[4px] mb-4">
                Key Insert
              </p>

              <ul className="space-y-4 text-[#707070] font-koho text-[14px] tracking-[3px] leading-[26px]">
                <li>
                  • Core search advertising showing resilience despite AI
                  disruption concerns
                </li>
                <li>
                  • YouTube Shorts monetization improving; total revenue up 15%
                  expected
                </li>
                <li>
                  • Google Cloud margins expanding as enterprise deals scale
                </li>
              </ul>
            </div>

            <div className="mt-10 border-t-2 w-[90%] mx-auto border-[#031226] opacity-60" />

            <div className="mt-8 flex flex-col sm:flex-row gap-6">
              <button
                type="button"
                onClick={() => setOpenShareModal(false)}
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg border border-[#707070] text-[#031226] font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer hover:bg-[#031226]/5 transition"
              >
                ✕ Cancel
              </button>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-lg bg-[#F5907B] text-[#031226] font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer hover:opacity-90 transition"
              >
                Create Alert
              </button>
            </div>

            <div className="mt-8 w-[90%] mx-auto border-t-2 border-[#031226] opacity-60" />

            <div className="mt-10 text-center">
              <p className="text-[#707070] font-koho text-[16px] tracking-[4px]">
                Share on Social media
              </p>

              <div className="mt-6 flex flex-col sm:flex-row justify-center gap-4">
                <button className="w-full sm:w-[160px] flex items-center justify-center gap-3 px-5 py-3 rounded-lg border border-[#707070] text-[#031226] font-montserrat text-[12px] font-bold tracking-[3px] cursor-pointer hover:bg-[#031226]/5 transition">
                  X/Twitter
                </button>

                <button className="w-full sm:w-[160px] flex items-center justify-center gap-3 px-5 py-3 rounded-lg border border-[#707070] text-[#031226] font-montserrat text-[12px] font-bold tracking-[3px] cursor-pointer hover:bg-[#031226]/5 transition">
                  LinkedIn
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
