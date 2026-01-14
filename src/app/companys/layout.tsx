"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/Components/PageComponents/mainPages/companys/Navbar";

import { useGetUserDataQuery } from "@/redux/slices/authApi";
import { useAppDispatch } from "@/redux/hook";
import { logout } from "@/redux/slices/userSlice";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const { isLoading, isFetching, error } = useGetUserDataQuery(undefined, {
    skip: !token,
  });

  // ✅ No token = kick out immediately
  useEffect(() => {
    if (!token) {
      router.replace("/auth/login");
    }
  }, [token, router]);

  // ✅ Token exists but invalid (expired / wrong) => logout + redirect
  useEffect(() => {
    const status = (error as any)?.status;
    if (status === 401) {
      localStorage.removeItem("token");
      dispatch(logout());
      router.replace("/auth/login");
    }
  }, [error, dispatch, router]);

  const checking = token && (isLoading || isFetching);

  // ✅ While checking session, don’t render protected UI
  if (!token || checking) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#EFEDE7]">
        <p className="font-koho tracking-[2px] text-[#707070]">
          Checking session...
        </p>
      </div>
    );
  }

  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default MainLayout;

