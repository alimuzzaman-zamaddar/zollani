"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Container from "@/Components/Common/Container";
import { FiMail, FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import {
  ArrowSvg,
  BoxSvg,
  CameraSvg,
  Check,
  CrossRed,
  CrossSvg,
  LockSvgg,
  X,
  XYSvg,
} from "@/Components/Svg/SvgContainer";

export default function ProfilePage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
  } = useForm();
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Profile Updated:", data);
    setEditMode(false);
  };
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const openModal = () => {
    setIsPasswordModalOpen(true);
  };

  const closeModal = () => {
    setIsPasswordModalOpen(false);
  };

  const handlePasswordSubmit = (data: any) => {
    if (data.newPassword !== data.confirmNewPassword) {
      setError("confirmNewPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }
    console.log("Password updated successfully!");
    closeModal();
  };

  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);

  const openSessionModal = () => {
    setIsSessionModalOpen(true);
  };

  const closeSessionModal = () => {
    setIsSessionModalOpen(false);
  };
  return (
    <>
      <div className=" bg-[#EFEDE7] ">
        <div className="bg-white py-5 px-5 xl:px-0">
          <div className="w-full max-w-300 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:w-full mx-auto px-4 sm:px-0">
            <div className="w-full sm:w-auto">
              <h1 className="text-[#031226] text-[24px] sm:text-[26px] font-normal tracking-[2px]">
                My Profile
              </h1>
              <p className="text-[#A2A3A9] strokeWidth text-[14px] sm:text-[16px] tracking-[2px]">
                Manage your personal information and preferences
              </p>
            </div>

            <p className="text-[#A2A3A9] strokeWidth text-[14px] sm:text-[16px] tracking-[2px] sm:mt-0 mt-2 sm:text-right">
              December 29, 2025
            </p>
          </div>
        </div>

        <Container>
          <div className="mt-8 bg-[#EFEDE7] rounded-xl p-6 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
            <div className="flex flex-col sm:flex-row sm:items-start gap-6">
              <div className="relative w-30 h-30">
                <img
                  src="https://i.pravatar.cc/100"
                  alt="profile"
                  className="w-full h-full rounded-full object-cover border border-[#CFCFCF]"
                />
                <button className="absolute bottom-1 right-1 w-10 h-10  flex items-center justify-center cursor-pointer hover:scale-105 transition rounded-full bg-[#F7CA89] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_4px_6px_-4px_rgba(0,0,0,0.10)]">
                  <CameraSvg />
                </button>
              </div>
              <div>
                <h2 className="text-[#031226] text-[30px] font-bold leading-[32px] ">
                  Softu Hijabi
                </h2>

                <div className="flex items-center gap-3 mt-4">
                  <span className="text-[10px] px-2  py-0.5  rounded-lg bg-[rgba(245,144,123,0.50)] text-[#031226] strokeWidth tracking-[2px]">
                    GOOGLE
                  </span>
                  <span className="text-[10px] px-2 py-0.5  rounded-lg bg-[#4D918F] text-white strokeWidth tracking-[2px]">
                    Active
                  </span>
                </div>

                <div className="mt-3 space-y-2 text-[#A2A3A9] strokeWidth text-[13px] tracking-[2px]">
                  <p className="flex items-center gap-2">
                    <FiMail /> username.diallo@redteam.com
                  </p>
                  <p className="flex items-center gap-2">
                    <FiPhone /> +880 171 234 1234
                  </p>
                  <p className="flex items-center gap-2">
                    <FiMapPin /> Softvence, Medona Tower, Dhanmondi 32, 1209
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCalendar /> Hired on 1/10/2020
                  </p>
                </div>
              </div>
            </div>
            <button className="flex items-start justify-center gap-5 px-5 py-3 rounded-md bg-[#F22F2F] text-white strokeWidth text-[12px] font-bold tracking-[2px] cursor-pointer hover:opacity-90 transition">
              <ArrowSvg /> Logout
            </button>
          </div>
          <div className="mt-10 bg-[#EFEDE7] rounded-xl p-6 md:p-0">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-[#031226] font-montserrat text-[18px] font-bold tracking-[2px]">
                  Personal Information
                </h3>
                <p className="text-[#A2A3A9] strokeWidth text-[12px] tracking-[2px]">
                  Update Your personal Information
                </p>
              </div>

              <button
                onClick={() => setEditMode(!editMode)}
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#4D918F] text-white strokeWidth text-[12px] font-bold tracking-[2px] cursor-pointer hover:opacity-90 transition"
              >
                ✎ Edit
              </button>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
            >
              {[
                { label: "First Name", name: "firstName" },
                { label: "Last Name", name: "lastName" },
                { label: "Email", name: "email" },
                { label: "Phone Number", name: "phone" },
                { label: "Address", name: "address" },
                {
                  label: "Date of Birth",
                  name: "dob",
                  placeholder: "YY/MM/DD",
                },
              ].map((field) => (
                <div key={field.name} className="relative w-full">
                  <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#A2A3A9] strokeWidth text-xs font-semibold tracking-[2px]">
                    {field.label}
                  </span>

                  <input
                    {...register(field.name)}
                    required
                    disabled={!editMode}
                    placeholder={field.placeholder || ""}
                    className={`w-full rounded-md border border-[#A2A3A9] px-4 py-3 bg-transparent outline-none strokeWidth text-sm tracking-[2px] text-[#031226] ${
                      editMode
                        ? "cursor-text "
                        : "cursor-not-allowed opacity-70"
                    }`}
                  />
                </div>
              ))}
              <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-6 mt-2">
                <button
                  type="button"
                  onClick={() => setEditMode(false)}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-[#E93820] text-[#E93820] font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer hover:bg-[#031226]/5 transition"
                >
                  <XYSvg /> Cancel
                </button>

                <button
                  type="submit"
                  disabled={!editMode}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer transition ${
                    editMode
                      ? "bg-[#F5907B] text-[#031226] hover:opacity-90"
                      : "bg-[#CFCFCF] text-[#A2A3A9] cursor-not-allowed"
                  }`}
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          {/* PREFERENCES + SECURITY */}
          <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 pb-20">
            {/* PREFERENCES */}
            <div className="bg-[rgba(255,255,255,0.50)] rounded-md p-6">
              <h3 className="text-[#031226] font-montserrat text-[16px] font-bold tracking-[2px]">
                Preferences
              </h3>

              <div className="mt-6 space-y-6">
                {[
                  {
                    title: "Email Notifications",
                    desc: "Receive notifications by email",
                  },
                  {
                    title: "Automatic Reminders",
                    desc: "Reminders for check-ins",
                  },
                  {
                    title: "Dark Mode",
                    desc: "Enable dark theme",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between border-b border-[#CFCFCF] pb-4"
                  >
                    <div>
                      <p className="text-[#031226] font-montserrat text-[14px] font-bold tracking-[2px]">
                        {item.title}
                      </p>
                      <p className="text-[#A2A3A9] strokeWidth text-[12px] tracking-[2px] mt-1">
                        {item.desc}
                      </p>
                    </div>

                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#4D918F] transition"></div>
                      <div className="absolute left-1 top-1 bg-[#FFF] w-4 h-4 rounded-full peer-checked:translate-x-6 transition"></div>
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* SECURITY */}
            <div className="bg-[rgba(255,255,255,0.50)] rounded-md p-6">
              <h3 className="text-[#031226] font-montserrat text-[16px] font-bold tracking-[2px]">
                Security and Privacy
              </h3>

              <div className="mt-6 space-y-6">
                {/* Password */}
                <div className="flex items-center justify-between border-b border-[#CFCFCF] pb-4">
                  <div>
                    <p className="text-[#031226] font-montserrat text-[14px] font-bold tracking-[2px]">
                      Password
                    </p>
                    <p className="text-[#A2A3A9] strokeWidth text-[12px] tracking-[2px] mt-1">
                      Last modified 2 months ago
                    </p>
                  </div>

                  <button
                    onClick={openModal} // Open the modal
                    className="px-4 py-2 rounded-md bg-[#4D918F] text-white strokeWidth text-[12px] font-bold tracking-[2px] cursor-pointer hover:opacity-90 transition"
                  >
                    Change
                  </button>
                </div>

                {/* Two-Factor Authentication */}
                <div className="flex items-center justify-between border-b border-[#CFCFCF] pb-4">
                  <div>
                    <p className="text-[#031226] font-montserrat text-[14px] font-bold tracking-[2px]">
                      Two-Factor Authentication
                    </p>
                    <p className="text-[#A2A3A9] strokeWidth text-[12px] tracking-[2px] mt-1">
                      Add an extra layer of security
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#4D918F] transition"></div>
                    <div className="absolute left-1 top-1 bg-[#fff] w-4 h-4 rounded-full peer-checked:translate-x-6 transition"></div>
                  </label>
                </div>

                {/* Active Sessions */}
                <div className="flex items-center justify-between border-b border-[#CFCFCF] pb-4">
                  <div>
                    <p className="text-[#031226] font-montserrat text-[14px] font-bold tracking-[2px]">
                      Active Sessions
                    </p>
                    <p className="text-[#A2A3A9] strokeWidth text-[12px] tracking-[2px] mt-1">
                      2 devices connected
                    </p>
                  </div>

                  <button
                    onClick={openSessionModal}
                    className="px-4 py-2 rounded-md bg-[#4D918F] text-white strokeWidth text-[12px] font-bold tracking-[2px] cursor-pointer hover:opacity-90 transition"
                  >
                    Manage
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Modal */}
      {isPasswordModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[800px] bg-[#E9E9E4] rounded-2xl p-6 sm:p-10 relative shadow-lg overflow-y-auto max-h-[95vh] no-scrollbar">
            <button
              onClick={closeModal} // Close the modal
              className="absolute top-6 right-6 w-10 h-10 rounded-full border-2 border-[#C0392B] flex items-center justify-center text-[#C0392B] text-xl font-bold cursor-pointer hover:scale-105 transition"
            >
              ×
            </button>

            <h3 className="text-[#031226]   md:text-[22px] font-bold tracking-[3px] mb-6 flex items-center gap-2">
              <LockSvgg /> Change Password
            </h3>
            <p className="text-[#A2A3A9] text-[14px] tracking-[2px] mb-6">
              Enter your current password and a new password to update your
              account.
            </p>

            <form
              onSubmit={handleSubmit(handlePasswordSubmit)}
              className="space-y-4"
            >
              <div className="relative">
                <span className="absolute -top-2 left-4 bg-[#E9E9E4] px-2 text-[#A2A3A9] font-koho text-xs font-semibold tracking-[2px]">
                  Current Password
                </span>
                <input
                  type="password"
                  id="currentPassword"
                  {...register("currentPassword", {
                    required: "Current Password is required",
                  })}
                  className="w-full px-4 py-2 border border-[#A2A3A9] rounded-md"
                />
                {errors.currentPassword && (
                  <p className="text-red-500 text-xs">
                    {typeof errors.currentPassword.message === "string"
                      ? errors.currentPassword.message
                      : "Invalid password"}
                  </p>
                )}
              </div>

              <div className="relative">
                <span className="absolute -top-2 left-4 bg-[#E9E9E4] px-2 text-[#A2A3A9] font-koho text-xs font-semibold tracking-[2px]">
                  New Password
                </span>
                <input
                  type="password"
                  id="newPassword"
                  {...register("newPassword", {
                    required: "New Password is required",
                  })}
                  className="w-full px-4 py-2 border border-[#A2A3A9] rounded-md"
                />
                {errors.newPassword && (
                  <p className="text-red-500 text-xs">
                    {typeof errors.newPassword.message === "string"
                      ? errors.newPassword.message
                      : "Invalid password"}
                  </p>
                )}
              </div>

              <div className="relative">
                <span className="absolute -top-2 left-4 bg-[#E9E9E4] px-2 text-[#A2A3A9] font-koho text-xs font-semibold tracking-[2px]">
                  Confirm New Password
                </span>
                <input
                  type="password"
                  id="confirmNewPassword"
                  {...register("confirmNewPassword", {
                    required: "Confirm New Password is required",
                  })}
                  className="w-full px-4 py-2 border border-[#A2A3A9] rounded-md"
                />
                {errors.confirmNewPassword && (
                  <p className="text-red-500 text-xs">
                    {typeof errors.confirmNewPassword.message === "string"
                      ? errors.confirmNewPassword.message
                      : "Invalid password"}
                  </p>
                )}
              </div>

              <div className="flex flex-col sm:flex-row  justify-between gap-5 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="w-full text-[#031226] text-center font-koho text-[12px] font-bold leading-[20px] tracking-[2px] 
                px-[6px] py-[12px] rounded-[6px] 
                border border-[#A2A3A9] focus:outline-none focus:border-[#031226] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <X /> Cancel
                </button>
                <button
                  type="submit"
                  className="w-full text-[#031226] text-center font-koho text-[12px] font-bold leading-[20px] tracking-[2px] 
                px-[6px] py-[12px] rounded-[6px] 
                border border-[#F5907B] bg-[#F5907B] focus:outline-none focus:border-[#031226] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check /> Check Change Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Active Sessions Modal */}
      {isSessionModalOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 px-4">
          <div className="w-full max-w-[800px] bg-[#EFEDE7] rounded-2xl p-6 sm:p-10 relative shadow-lg overflow-y-auto max-h-[95vh] no-scrollbar">
            <div className="flex items-start justify-between mb-6">
              <div className="">
                <h3 className="text-[#031226] text-[22px] font-bold leading-7.5 tracking-[4px] mb-6 flex items-center gap-2">
                  <BoxSvg /> Active Sessions
                </h3>
                <p className="text-[#707070] text-[14px] tracking-[2px] mb-6">
                  Manage your active sessions across devices.
                </p>
              </div>
              <button onClick={closeSessionModal} className="cursor-pointer">
                <CrossRed />
              </button>
            </div>

            <div className="space-y-6">
              {/* Session Item 1 */}
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-[#031226] text-[20px] font-bold tracking-[4px]">
                    Chrome on Windows
                  </p>
                  <p className="text-[#707070] text-[15px] leading-7.5 tracking-[4px]">
                    Paris, France <br /> - 192.168.1.1
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[#707070] text-[16px]">2 minutes ago</p>
                </div>
              </div>

              {/* Session Item 2 */}
              <div className="flex  justify-between items-center">
                <div>
                  <p className="text-[#031226] text-[20px] font-bold tracking-[4px]">
                    Safari on iPhone
                  </p>
                  <p className="text-[#707070] text-[15px] leading-7.5 tracking-[4px]">
                    Paris, France <br /> - 192.168.1.1
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="text-[#707070] text-[16px]">2 minutes ago</p>
                  <button className="text-[#707070] text-[16px] font-bold cursor-pointer">
                    <FaRegWindowClose />
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-between gap-5 mt-6">
              <button
                onClick={closeSessionModal}
                className="w-full text-[#031226] text-center font-koho text-[12px] font-bold leading-[20px] tracking-[2px] 
                px-[6px] py-[12px] rounded-[6px] 
                border border-[#A2A3A9] focus:outline-none focus:border-[#031226] flex items-center justify-center gap-2"
              >
                <CrossSvg /> Cancel
              </button>
              <button
                className="w-full text-[#031226] text-center font-koho text-[12px] font-bold leading-[20px] tracking-[2px] 
                px-[6px] py-[12px] rounded-[6px] 
                border border-[#A2A3A9] focus:outline-none focus:border-[#031226] flex items-center justify-center gap-2"
              >
                <BoxSvg /> Create Alert
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
