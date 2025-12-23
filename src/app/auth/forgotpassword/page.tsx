"use client";

import { useForm } from "react-hook-form";
import Container from "@/Components/Common/Container";
import { MailSvg } from "@/Components/Svg/SvgContainer";

export default function ForgotPasswordPage() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="h-screen xl:h-[90vh] bg-[#EFEDE7]">
      <Container>
        <div className="py-12 xl:py-20 h-screen xl:h-[90vh] flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-[180px] items-center">
          {/* LEFT IMAGE */}
          <div className="w-full xl:w-[40%] flex justify-center items-center">
            <img src="https://i.ibb.co.com/0j1GrPDT/Layer-1.png" alt="Forgot Password" className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[280px] xl:max-w-[420px]" />
          </div>
          {/* RIGHT CONTENT */}
          <div className="w-full xl:w-[60%] flex flex-col justify-center items-center px-4 sm:px-0 max-w-md">
            <h2 className="text-[#031226] text-center font-bold tracking-[4px] text-[22px] sm:text-[26px] md:text-[28px] xl:text-[30px] leading-[36px] sm:leading-[42px] md:leading-[46px] xl:leading-[50px]">
              Forgot Password
            </h2>

            <p className="mt-4 text-[#707070] text-center font-koho font-normal tracking-[2px] text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[30px]">
              Update your password to keep account secure
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 w-full">
              {/* Email */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Email Address
                </span>

                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <MailSvg />
                  <input type="email" {...register("email", { required: true })} required className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]" />
                </div>
              </div>

              {/* Button */}
              <button type="submit" className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4D918F] text-[#ECF4FD] font-koho text-base font-bold tracking-[2px] hover:opacity-90 transition cursor-pointer">
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
