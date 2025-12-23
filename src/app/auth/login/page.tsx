"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LockSvg, MailSvg } from "@/Components/Svg/SvgContainer";
import Container from "@/Components/Common/Container";

export default function Page() {
  const { register, handleSubmit } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-[#EFEDE7]">
      <Container>
        <div className="py-12 xl:py-20 min-h-screen xl:h-[90vh] flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-[180px] items-center">
          {/* LEFT */}
          <div className="px-4 sm:px-0">
            <h1 className="text-[#031226] text-center font-montserrat font-extrabold tracking-[4px] text-[32px] sm:text-[40px] md:text-[46px] xl:text-[50px] leading-[48px] sm:leading-[70px] xl:leading-[100px]">
              Welcome
            </h1>

            <p className="mt-4 text-[#707070] text-center font-koho font-normal tracking-[2px] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              Sign in to access your portfolio and continue trading
            </p>

            <ul className="mt-8 sm:mt-10 space-y-4">
              {["Real-time market data", "Professional analytics tools", "Secure & encrypted"].map((item) => (
                <li key={item} className="text-[#707070] text-center font-koho text-[14px] sm:text-[15px] md:text-[16px] font-bold leading-[24px] md:leading-[30px] tracking-[2px]">
                  {item}
                  <span className="block w-[120px] md:w-[146px] mx-auto h-[2px] bg-[#F5907B] mt-2" />
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center items-center w-full max-w-md px-4 sm:px-0">
            <h2 className="text-[#031226] text-center font-bold tracking-[4px] text-[22px] sm:text-[26px] md:text-[28px] xl:text-[30px] leading-[34px] sm:leading-[42px] xl:leading-[50px]">
              Sign in to your account
            </h2>

            <p className="mt-2 text-[#707070] text-center font-koho text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[26px] md:leading-[30px] tracking-[2px]">
              Don’t have an account?
              <span className="text-[#4D918F] font-medium cursor-pointer ml-1">Sign up</span>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 w-full">
              {/* Email */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Email Address
                </span>
                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <MailSvg />
                  <input type="email" required {...register("email", { required: true })} className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]" />
                </div>
              </div>

              {/* Password */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Password
                </span>
                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <LockSvg />
                  <input type={showPassword ? "text" : "password"} required {...register("password", { required: true })} className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]" />
                  <button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 cursor-pointer">
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 font-koho text-xs font-semibold tracking-[2px] text-[#707070]">
                  <input type="checkbox" className="accent-[#4D918F]" /> Remember Password
                </label>
                <span className="font-koho text-xs font-semibold tracking-[2px] text-red-500 cursor-pointer">
                  Forgot Password?
                </span>
              </div>

              <button type="submit" className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4D918F] text-[#ECF4FD] font-koho text-base font-bold tracking-[2px] hover:opacity-90 transition cursor-pointer">
                Sign in →
              </button>

              <p className="text-[#707070] text-center font-koho text-[12px] font-semibold leading-[20px] tracking-[2px]">
                By Continuing, You agree to our <span className="text-[#0AAB62] cursor-pointer">Terms of service</span> and <span className="text-[#0AAB62] cursor-pointer">Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
