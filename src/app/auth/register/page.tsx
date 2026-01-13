"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LockSvg, MailSvg, UserSvg } from "@/Components/Svg/SvgContainer";
import Container from "@/Components/Common/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useRegisterUserMutation } from "@/redux/slices/authApi";

type SignUpForm = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export default function SignUpPage() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignUpForm>();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const password = watch("password");
  const router = useRouter();

  const [registerUser, { isLoading }] = useRegisterUserMutation();

  const onSubmit = async (data: SignUpForm) => {
    try {
      const formData = new FormData();
      formData.append("name", data.name);
      formData.append("email", data.email);
      formData.append("password", data.password);
      formData.append("password_confirmation", data.confirmPassword);

      const res = await registerUser(formData).unwrap();

      if (!res.status) {
        toast.error(res.message || "Registration failed");
        return;
      }
      console.log(res,  "register response");

      toast.success(res.message || "OTP sent");

      // store email for OTP page
      localStorage.setItem("pending_email", data.email);

      router.push("/auth/sendOtp");
    } catch (err: any) {
      const apiMsg =
        err?.data?.message ||
        err?.data?.error ||
        err?.message ||
        "Something went wrong";
      toast.error(apiMsg);
      console.log("Register error:", err);
    }
  };

  return (
    <div className="auto xl:h-[92.9vh] overflow-y-auto">
      <Container>
        <div className="py-12 xl:py-20  flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-[180px] items-center">
          {/* LEFT */}
          <div className="px-4 sm:px-0 ">
            <h1 className="text-[#031226] text-center font-montserrat font-extrabold tracking-[4px] text-[32px] sm:text-[40px] md:text-[46px] xl:text-[50px] leading-[48px] sm:leading-[70px] xl:leading-[100px]">
              Welcome
            </h1>

            <p className="mt-4 text-[#707070] text-center font-koho font-normal tracking-[2px] text-[14px] sm:text-[16px] md:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[30px]">
              Sign up to access your portfolio and begin trading
            </p>

            <ul className="mt-8 sm:mt-10 space-y-4">
              {[
                "Real-time market data",
                "Professional analytics tools",
                "Secure & encrypted",
              ].map((item) => (
                <li
                  key={item}
                  className="text-[#707070] text-center font-koho text-[14px] sm:text-[15px] md:text-[16px] font-bold leading-[24px] md:leading-[30px] tracking-[2px]"
                >
                  {item}
                  <span className="block w-[120px] md:w-[146px] mx-auto h-[2px] bg-[#F5907B] mt-2" />
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center items-center w-full max-w-md px-4 sm:px-0">
            <h2 className="text-[#031226] text-center font-bold tracking-[4px] text-[22px] sm:text-[26px] md:text-[28px] xl:text-[30px] leading-[34px] sm:leading-[42px] xl:leading-[50px]">
              Create account
            </h2>

            <p className="mt-2 text-[#707070] text-center font-koho text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-[22px] sm:leading-[26px] md:leading-[30px] tracking-[2px]">
              Already have an account?
              <Link href="/auth/login">
                <span className="text-[#4D918F] font-medium cursor-pointer ml-1">
                  Sign in
                </span>
              </Link>
            </p>

            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 space-y-6 w-full"
            >
              {/* Full Name */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Full Name
                </span>
                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <UserSvg />
                  <input
                    required
                    {...register("name", { required: true })}
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Email Address
                </span>
                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <MailSvg />
                  <input
                    type="email"
                    required
                    {...register("email", { required: true })}
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]"
                  />
                </div>
              </div>

              {/* Password */}
              <div className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px]">
                  Password
                </span>
                <div className="flex items-center gap-3 rounded-md border border-gray-500 px-4 py-3">
                  <LockSvg />
                  <input
                    type={showPassword ? "text" : "password"}
                    required
                    {...register("password", { required: true, minLength: 6 })}
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
                    required
                    {...register("confirmPassword", {
                      required: true,
                      validate: (v) =>
                        v === password || "Passwords do not match",
                    })}
                    className="w-full bg-transparent outline-none font-koho text-sm text-[#031226]"
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-500 cursor-pointer"
                  >
                    {showConfirmPassword ? (
                      <IoEyeOffOutline />
                    ) : (
                      <IoEyeOutline />
                    )}
                  </button>
                </div>
              </div>

              {errors.confirmPassword && (
                <p className="text-xs font-koho tracking-[2px] text-red-500 text-center">
                  {String(
                    errors.confirmPassword.message || "Passwords do not match"
                  )}
                </p>
              )}

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4D918F] text-[#ECF4FD] font-koho text-base font-bold tracking-[2px] hover:opacity-90 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Creating..." : "Sign up →"}
              </button>

              <p className="text-[#707070] text-center font-koho text-[12px] font-semibold leading-[20px] tracking-[2px]">
                By Continuing, You agree to our{" "}
                <span className="text-[#0AAB62] cursor-pointer">
                  Terms of service
                </span>{" "}
                and{" "}
                <span className="text-[#0AAB62] cursor-pointer">
                  Privacy Policy
                </span>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
