"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { LockSvg, MailSvg } from "@/Components/Svg/SvgContainer";
import Container from "@/Components/Common/Container";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

import { useLoginUserMutation } from "@/redux/slices/authApi";
import { useAppDispatch } from "@/redux/hook";
import { setUser } from "@/redux/slices/userSlice";

type LoginForm = {
  email: string;
  password: string;
};

export default function Page() {
  const { register, handleSubmit } = useForm<LoginForm>();
  const [showPassword, setShowPassword] = useState(false);

  const router = useRouter();
  const dispatch = useAppDispatch();

  const [loginUser, { isLoading }] = useLoginUserMutation();

  const onSubmit = async (data: LoginForm) => {
    try {
      const formData = new FormData();
      formData.append("email", data.email);
      formData.append("password", data.password);

      const res = await loginUser(formData).unwrap();
      console.log("Login response:", res);

      const ok = res?.success ?? res?.status;

      if (!ok) {
        toast.error(res?.message || "Login failed");
        return;
      }

      const token = res?.data?.token;
      if (!token) {
        toast.error("Login succeeded but token missing (backend issue).");
        return;
      }

      toast.success(res?.message || "Logged in successfully");

      localStorage.setItem("token", token);

      dispatch(
        setUser({
          token,
          role: res?.data?.role ?? null,
          email: res?.data?.email ?? data.email,
          is_onboarded: null,
        })
      );

      router.push("/companys"); // change this route to your real destination
    } catch (err: any) {
      console.log("Login error:", err);
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-[#EFEDE7]">
      <Container>
        <div className="py-12 xl:py-20 min-h-screen xl:h-[90vh] flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-45 items-center">
          {/* LEFT */}
          <div className="px-4 sm:px-0">
            <h1 className="text-[#031226] text-center font-montserrat font-extrabold tracking-[4px] text-[32px] sm:text-[40px] md:text-[46px] xl:text-[50px] leading-12 sm:leading-17.5 xl:leading-25">
              Welcome
            </h1>

            <p className="mt-4 text-[#707070] text-center font-koho font-normal tracking-[2px] text-[14px] sm:text-[16px] md:text-[18px] leading-5.5 sm:leading-6.5 md:leading-7.5">
              Sign in to access your portfolio and continue trading
            </p>

            <ul className="mt-8 sm:mt-10 space-y-4">
              {["Real-time market data", "Professional analytics tools", "Secure & encrypted"].map((item) => (
                <li key={item} className="text-[#707070] text-center font-koho text-[14px] sm:text-[15px] md:text-[16px] font-bold leading-6 md:leading-7.5 tracking-[2px]">
                  {item}
                  <span className="block w-30 md:w-36.5 mx-auto border-2 border-[#F5907B] mt-2" />
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="flex flex-col justify-center items-center w-full max-w-md px-4 sm:px-0">
            <h2 className="text-[#031226] text-center font-bold tracking-[4px] text-[22px] sm:text-[26px] md:text-[28px] xl:text-[30px] leading-8.5 sm:leading-10.5 xl:leading-12.5">
              Sign in to your account
            </h2>

            <p className="mt-2 text-[#707070] text-center font-koho text-[14px] sm:text-[16px] md:text-[18px] font-normal leading-5.5 sm:leading-6.5 md:leading-7.5 tracking-[2px]">
              Don’t have an account?
              <Link href="/auth/register">
                <span className="text-[#4D918F] font-medium cursor-pointer ml-1">Sign up</span>
              </Link>
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-6 w-full">
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
                    {...register("password", { required: true })}
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

              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 font-koho text-xs font-semibold tracking-[2px] text-[#707070]">
                  <input type="checkbox" className="accent-[#4D918F]" /> Remember Password
                </label>

                <Link href="/auth/forgotpassword">
                  <span className="font-koho text-xs font-semibold tracking-[2px] text-red-500 cursor-pointer">
                    Forgot Password?
                  </span>
                </Link>
              </div>

              <button
                type="submit"
                disabled={isLoading}
                className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4D918F] text-[#ECF4FD] font-koho text-base font-bold tracking-[2px] hover:opacity-90 transition cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? "Signing in..." : "Sign in →"}
              </button>

              <p className="text-[#707070] text-center font-koho text-[12px] font-semibold leading-5 tracking-[2px]">
                By Continuing, You agree to our{" "}
                <span className="text-[#0AAB62] cursor-pointer">Terms of service</span>{" "}
                and{" "}
                <span className="text-[#0AAB62] cursor-pointer">Privacy Policy</span>
              </p>
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
}
