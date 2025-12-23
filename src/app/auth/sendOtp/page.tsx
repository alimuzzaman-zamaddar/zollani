"use client";

import { useForm } from "react-hook-form";
import Container from "@/Components/Common/Container";

export default function VerifyOtpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="h-[90vh] bg-[#EFEDE7]">
      <Container>
        <div className="py-20 flex h-[90vh] flex-col xl:flex-row justify-center gap-[180px] items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center items-center">
            <img
              src="https://i.ibb.co.com/Ps6PLH45/Layer-1-1.png"
              alt="OTP Verification"
              className="max-w-[420px] w-full"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center items-center w-full max-w-md">
            <h2 className="text-[#031226] text-center text-[30px] font-bold leading-[50px] tracking-[4px]">
              Please check your email!
            </h2>

            <p className="mt-4 text-[#707070] text-center font-koho text-[16px] font-normal leading-[30px] tracking-[2px]">
              We’ve sent a 6-digit code to{" "}
              <span className="font-semibold">abc@domain</span>.
              Please enter it below to verify your email.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-10 space-y-6 w-full"
            >
              {/* OTP */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Enter the 6-digit code
                </span>

                <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={6}
                    {...register("otp", {
                      required: "OTP is required",
                      minLength: {
                        value: 6,
                        message: "OTP must be 6 digits",
                      },
                    })}
                    required
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226] tracking-[6px] text-center"
                  />
                </div>
              </div>

              {errors.otp && (
                <p className="text-xs font-koho tracking-[2px] text-red-500 text-center">
                  {errors.otp.message as string}
                </p>
              )}

              {/* Confirm Button */}
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md
                bg-[#4D918F] text-[#ECF4FD]
                font-koho text-base font-bold tracking-[2px]
                hover:opacity-90 transition cursor-pointer"
              >
                Confirm OTP
              </button>

              {/* Resend */}
              <p className="text-[#707070] text-center font-koho text-[12px] font-semibold leading-[20px] tracking-[2px]">
                Didn’t receive the code?{" "}
                <span className="text-[#0AAB62] cursor-pointer">
                  Resend OTP
                </span>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
