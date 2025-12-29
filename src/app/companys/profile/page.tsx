"use client";

import { useForm } from "react-hook-form";
import { useState } from "react";
import Container from "@/Components/Common/Container";
import { FiMail, FiPhone, FiMapPin, FiCalendar, FiLogOut } from "react-icons/fi";

export default function ProfilePage() {
  const { register, handleSubmit } = useForm();
  const [editMode, setEditMode] = useState(false);

  const onSubmit = (data: any) => {
    console.log("Profile Updated:", data);
    setEditMode(false);
  };

  return (
    <div className=" bg-[#EFEDE7] ">
        <div className=" bg-white py-5">
        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 w-300 mx-auto">
          <div>
            <h1 className="text-[#031226] font-montserrat text-[22px] font-bold tracking-[2px]">
              My Profile
            </h1>
            <p className="text-[#707070] strokeWidth text-[14px] tracking-[2px]">
              Manage your personal information and preferences
            </p>
          </div>

          <p className="text-[#707070] strokeWidth text-[14px] tracking-[2px]">
            December 29, 2025
          </p>
        </div>

        </div>
      <Container>

        {/* PROFILE CARD */}
        <div className="mt-8 bg-[#EFEDE7] rounded-xl p-6 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* LEFT PROFILE INFO */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6">
            {/* AVATAR */}
            <div className="relative w-[90px] h-[90px]">
              <img
                src="https://i.pravatar.cc/100"
                alt="profile"
                className="w-full h-full rounded-full object-cover border border-[#CFCFCF]"
              />
              <button className="absolute bottom-1 right-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow cursor-pointer hover:scale-105 transition">
                📷
              </button>
            </div>

            {/* NAME + DETAILS */}
            <div>
              <h2 className="text-[#031226] font-montserrat text-[20px] font-bold tracking-[2px] flex items-center gap-3">
                Softu Hijabi
                <span className="text-[10px] px-2 py-[2px] rounded bg-[#F5907B] text-[#031226] strokeWidth tracking-[2px]">
                  GOOGLE
                </span>
                <span className="text-[10px] px-2 py-[2px] rounded bg-[#4D918F] text-white strokeWidth tracking-[2px]">
                  Active
                </span>
              </h2>

              <div className="mt-3 space-y-2 text-[#707070] strokeWidth text-[13px] tracking-[2px]">
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

          {/* LOGOUT */}
          <button className="flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#F22F2F] text-white strokeWidth text-[12px] font-bold tracking-[2px] cursor-pointer hover:opacity-90 transition">
            <FiLogOut /> Logout
          </button>
        </div>

        {/* PERSONAL INFORMATION */}
        <div className="mt-10 bg-[#EFEDE7] rounded-xl p-6">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-[#031226] font-montserrat text-[18px] font-bold tracking-[2px]">
                Personal Information
              </h3>
              <p className="text-[#707070] strokeWidth text-[12px] tracking-[2px]">
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

          {/* FORM */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {/* Input Field Reusable */}
            {[
              { label: "First Name", name: "firstName" },
              { label: "Last Name", name: "lastName" },
              { label: "Email", name: "email" },
              { label: "Phone Number", name: "phone" },
              { label: "Address", name: "address" },
              { label: "Date of Birth", name: "dob", placeholder: "YY/MM/DD" },
            ].map((field) => (
              <div key={field.name} className="relative w-full">
                <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#707070] strokeWidth text-xs font-semibold tracking-[2px]">
                  {field.label}
                </span>

                <input
                  {...register(field.name)}
                  required
                  disabled={!editMode}
                  placeholder={field.placeholder || ""}
                  className={`w-full rounded-md border border-[#707070] px-4 py-3 bg-transparent outline-none strokeWidth text-sm tracking-[2px] text-[#031226] ${
                    editMode ? "cursor-text " : "cursor-not-allowed opacity-70"
                  }`}
                />
              </div>
            ))}

            {/* Buttons */}
            <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-6 mt-2">
              <button
                type="button"
                onClick={() => setEditMode(false)}
                className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-[#707070] text-[#F22F2F] font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer hover:bg-[#031226]/5 transition"
              >
                ✕ Cancel
              </button>

              <button
                type="submit"
                disabled={!editMode}
                className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer transition ${
                  editMode
                    ? "bg-[#F5907B] text-[#031226] hover:opacity-90"
                    : "bg-[#CFCFCF] text-[#707070] cursor-not-allowed"
                }`}
              >
                 Save
              </button>
            </div>
          </form>
        </div>

        {/* PREFERENCES + SECURITY */}
        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* PREFERENCES */}
          <div className="bg-[#EFEDE7] rounded-xl p-6">
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
                    <p className="text-[#707070] strokeWidth text-[12px] tracking-[2px] mt-1">
                      {item.desc}
                    </p>
                  </div>

                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#4D918F] transition"></div>
                    <div className="absolute left-1 top-1 bg-[#F5907B] w-4 h-4 rounded-full peer-checked:translate-x-6 transition"></div>
                  </label>
                </div>
              ))}
            </div>
          </div>

          {/* SECURITY */}
          <div className="bg-[#EFEDE7] rounded-xl p-6">
            <h3 className="text-[#031226] font-montserrat text-[16px] font-bold tracking-[2px]">
              Security and Privacy
            </h3>

            <div className="mt-6 space-y-6">
              {[
                { title: "Password", desc: "Last modified 2 months ago", btn: "Change" },
                {
                  title: "Two-Factor Authentication",
                  desc: "Add an extra layer of security",
                  toggle: true,
                },
                {
                  title: "Active Sessions",
                  desc: "2 devices connected",
                  btn: "Manage",
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
                    <p className="text-[#707070] strokeWidth text-[12px] tracking-[2px] mt-1">
                      {item.desc}
                    </p>
                  </div>

                  {item.toggle ? (
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" />
                      <div className="w-12 h-6 bg-gray-300 peer-focus:outline-none rounded-full peer peer-checked:bg-[#4D918F] transition"></div>
                      <div className="absolute left-1 top-1 bg-[#F5907B] w-4 h-4 rounded-full peer-checked:translate-x-6 transition"></div>
                    </label>
                  ) : (
                    <button className="px-4 py-2 rounded-md bg-[#4D918F] text-white strokeWidth text-[12px] font-bold tracking-[2px] cursor-pointer hover:opacity-90 transition">
                      {item.btn}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
