"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Container from "@/Components/Common/Container";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import {
  useVerifyOTPMutation,
  useResendOTPMutation,
} from "@/redux/slices/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/slices/userSlice";

type OtpForm = {
  otp: string;
};

const RESEND_SECONDS = 120;

export default function VerifyOtpPage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState<string>("");
  const [secondsLeft, setSecondsLeft] = useState<number>(RESEND_SECONDS);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpForm>();

  const [verifyOtp, { isLoading }] = useVerifyOTPMutation();
  const [resendOTP, { isLoading: isResending }] = useResendOTPMutation();

  // load email once
  useEffect(() => {
    const storedEmail = localStorage.getItem("pending_email") || "";
    setEmail(storedEmail);
  }, []);

  // countdown timer
  useEffect(() => {
    if (secondsLeft <= 0) return;
    const id = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(id);
  }, [secondsLeft]);

  const canResend = useMemo(
    () => secondsLeft <= 0 && !isResending,
    [secondsLeft, isResending]
  );

  const formatTime = (s: number) => {
    const mm = Math.floor(s / 60);
    const ss = s % 60;
    return `${String(mm).padStart(2, "0")}:${String(ss).padStart(2, "0")}`;
  };

  const onSubmit = async (data: OtpForm) => {
    if (!email) {
      toast.error("Email not found. Please register again.");
      router.push("/auth/signup");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("otp", data.otp);

      const res = await verifyOtp(formData).unwrap();
      console.log("OTP verify response:", res);

      if (!res?.success) {
        toast.error(res?.message || "OTP verification failed");
        return;
      }

      toast.success(res?.message || "OTP verified successfully");

      // token comes from otp verify response
      if (res?.data?.token) {
        localStorage.setItem("token", res.data.token);
      }

      localStorage.removeItem("pending_email");

      dispatch(
        setUser({
          token: res?.data?.token || null,
          role: null,
          email: res?.data?.email || email,
          is_onboarded: null,
        })
      );

      setTimeout(() => router.push("/auth/varifyedOtp"), 300);
    } catch (err: any) {
      console.log("Verify OTP error:", err);
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  const handleResendOtp = async () => {
    if (!email) {
      toast.error("Email not found. Please register again.");
      router.push("/auth/signup");
      return;
    }

    if (!canResend) return;

    try {
      const fd = new FormData();
      fd.append("email", email);

      const res = await resendOTP(fd).unwrap() as any;
      console.log("Resend OTP response:", res);

      const ok = res?.status ?? res?.success ?? true;
      if (!ok) {
        toast.error(res?.message || "Failed to resend OTP");
        return;
      }

      toast.success(res?.message || "OTP resent successfully");

      // restart countdown
      setSecondsLeft(RESEND_SECONDS);
    } catch (err: any) {
      console.log("Resend OTP error:", err);
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen xl:h-[90vh] bg-[#EFEDE7]">
      <Container>
        <div className="py-10 sm:py-14 lg:py-16 xl:py-20 flex min-h-screen xl:h-[90vh] flex-col xl:flex-row justify-center gap-10 lg:gap-14 xl:gap-[180px] items-center">
          {/* LEFT IMAGE */}
          <div className="flex justify-center items-center w-full xl:w-auto px-4 sm:px-0">
            <img
              src="https://i.ibb.co.com/Ps6PLH45/Layer-1-1.png"
              alt="OTP Verification"
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] xl:max-w-[420px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="flex flex-col justify-center items-center w-full max-w-md px-4 sm:px-0">
            <h2 className="text-[#031226] text-center text-[22px] sm:text-[26px] xl:text-[30px] font-bold leading-[36px] sm:leading-[42px] xl:leading-[50px] tracking-[4px]">
              Please check your email!
            </h2>

            <p className="mt-4 text-[#707070] text-center font-koho text-[14px] sm:text-[15px] xl:text-[16px] font-normal leading-[24px] sm:leading-[28px] xl:leading-[30px] tracking-[2px]">
              We’ve sent a code to{" "}
              <span className="font-semibold">{email || "your email"}</span>.
              Please enter it below to verify your email.
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 xl:mt-10 space-y-6 w-full"
            >
              {/* OTP */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Enter the 4-digit code
                </span>

                <div className="flex items-center rounded-md border border-gray-500 px-4 py-3">
                  <input
                    type="text"
                    inputMode="numeric"
                    maxLength={4}
                    {...register("otp", {
                      required: "OTP is required",
                      minLength: { value: 4, message: "OTP must be 4 digits" },
                      maxLength: { value: 4, message: "OTP must be 4 digits" },
                      pattern: {
                        value: /^[0-9]{4}$/,
                        message: "OTP must be numeric",
                      },
                    })}
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226] tracking-[6px] text-center"
                  />
                </div>
              </div>

              {errors.otp && (
                <p className="text-xs font-koho tracking-[2px] text-red-500 text-center">
                  {String(errors.otp.message)}
                </p>
              )}

              {/* Confirm Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md
                bg-[#4D918F] text-[#ECF4FD]
                font-koho text-base font-bold tracking-[2px]
                hover:opacity-90 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Verifying..." : "Confirm OTP"}
              </button>

              {/* Resend */}
              <p className="text-[#707070] text-center font-koho text-[12px] font-semibold leading-[20px] tracking-[2px]">
                Didn’t receive the code?{" "}
                {secondsLeft > 0 ? (
                  <span className="text-[#707070]">
                    Resend available in <b>{formatTime(secondsLeft)}</b>
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={handleResendOtp}
                    disabled={!canResend}
                    className="text-[#0AAB62] cursor-pointer disabled:opacity-60"
                  >
                    {isResending ? "Resending..." : "Resend OTP"}
                  </button>
                )}
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
