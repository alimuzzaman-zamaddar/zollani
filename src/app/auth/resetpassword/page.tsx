"use client";

import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LockSvg } from "@/Components/Svg/SvgContainer";
import Container from "@/Components/Common/Container";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "@/redux/slices/authApi";

type ResetForm = {
  password: string;
  confirmPassword: string;
};

export default function ResetPasswordPage() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm<ResetForm>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password");
  const router = useRouter();

  const [email, setEmail] = useState<string>("");

  const [resetPassword, { isLoading }] = useResetPasswordMutation();

  useEffect(() => {
    // from verify email step
    const stored = localStorage.getItem("reset_email") || "";
    setEmail(stored);
  }, []);

  const onSubmit = async (data: ResetForm) => {
    if (!email) {
      toast.error("Email not found. Please start again.");
      router.push("/auth/forgotpassword");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("email", email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmPassword);

      const res = await resetPassword(formData).unwrap();
      console.log("Reset password response:", res);

      const ok = res?.status ?? res?.success;

      if (!ok) {
        toast.error(res?.message || "Failed to reset password");
        return;
      }

      toast.success(res?.message || "Password updated successfully");

      // cleanup
      localStorage.removeItem("reset_email");

      router.push("/auth/passwordchanged");
    } catch (err: any) {
      console.log("Reset password error:", err);
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen xl:h-[92.8vh] bg-[#EFEDE7]">
      <Container>
        <div className="py-12 xl:py-20 h-screen xl:h-[90vh] flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-[180px] items-center">
          {/* LEFT IMAGE */}
          <div className="w-full xl:w-[40%] flex justify-center items-center">
            <img
              src="https://i.ibb.co.com/TMK04rvy/Layer-1-5.png"
              alt="Reset Password"
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] xl:max-w-[420px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full xl:w-[60%] flex flex-col justify-center items-center px-4 sm:px-0 max-w-md">
            <h2 className="text-[#031226] text-center font-bold tracking-[4px] text-[22px] sm:text-[26px] md:text-[28px] xl:text-[30px] leading-[36px] sm:leading-[42px] md:leading-[46px] xl:leading-[50px]">
              Reset password
            </h2>

            <p className="mt-4 text-[#707070] text-center font-koho font-normal tracking-[2px] text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[30px]">
              Please kindly set your new password.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 w-full">
              {/* Password */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Password
                </span>
                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <LockSvg />
                  <input
                    type={showPassword ? "text" : "password"}
                    {...register("password", {
                      required: "Password is required",
                      minLength: { value: 6, message: "Password must be at least 6 characters" },
                    })}
                    required
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500 cursor-pointer"
                  >
                    {showPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Confirm Password
                </span>
                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <LockSvg />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    {...register("confirmPassword", {
                      required: "Please confirm your password",
                      validate: (value) => value === password || "Passwords do not match",
                    })}
                    required
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 cursor-pointer"
                  >
                    {showConfirmPassword ? <IoEyeOffOutline /> : <IoEyeOutline />}
                  </button>
                </div>
              </div>

              {errors.confirmPassword && (
                <p className="text-xs font-koho tracking-[2px] text-red-500 text-center">
                  {String(errors.confirmPassword.message)}
                </p>
              )}

              {/* Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4D918F] text-[#ECF4FD] font-koho text-base font-bold tracking-[2px] hover:opacity-90 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Updating..." : "Confirm Password"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
