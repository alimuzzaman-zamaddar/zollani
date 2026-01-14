"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import Container from "@/Components/Common/Container";
import { FiMail, FiPhone, FiMapPin, FiCalendar } from "react-icons/fi";
import { FaRegWindowClose } from "react-icons/fa";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";

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

import {
  useGetUserDataQuery,
  useUpdateUserDataMutation,
  useLogoutUserMutation,
  useChangePasswordMutation,
} from "@/redux/slices/authApi";

import { useAppDispatch } from "@/redux/hook";
import { logout as logoutAction } from "@/redux/slices/userSlice";

type ProfileForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  dob: string;
};

type PasswordForm = {
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
};

export default function ProfilePage() {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors,
    reset,
    setValue,
  } = useForm<ProfileForm>();

  const {
    register: registerPassword,
    handleSubmit: handleSubmitPassword,
    formState: { errors: passwordErrors },
    setError: setPasswordError,
    reset: resetPassword,
  } = useForm<PasswordForm>();

  const [editMode, setEditMode] = useState(false);
  const [avatarFile, setAvatarFile] = useState<File | null>(null);
  const [avatarPreview, setAvatarPreview] = useState<string>("");

  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);
const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);


  // ✅ API 1: Get user data
const {
  data: userRes,
  isLoading: isUserLoading,
  refetch,
} = useGetUserDataQuery();


  // ✅ API 2: Update user data
  const [updateUserData, { isLoading: isUpdating }] =
    useUpdateUserDataMutation();

  // ✅ API 3: Logout
  const [logoutUser, { isLoading: isLoggingOut }] = useLogoutUserMutation();

  // ✅ Fill UI + form values from API (no UI change)
  useEffect(() => {
    if (!userRes?.success || !userRes?.data) return;

    const fullName = userRes.data.name || "";
    const nameParts = fullName.trim().split(" ");

    const firstName = nameParts[0] || "";
    const lastName = nameParts.slice(1).join(" ") || "";

    reset({
      firstName,
      lastName,
      email: userRes.data.email || "",
      phone: userRes.data.phone || "",
      address: userRes.data.address || "",
      dob: userRes.data.date_of_birth || "",
    });
  }, [userRes, reset]);

  // ✅ Update
  const onSubmit = async (form: any) => {
    if (!editMode) return;

    try {
      const formData = new FormData();

      formData.append("first_name", form.firstName || "");
      formData.append("last_name", form.lastName || "");
      formData.append("phone", form.phone || "");
      formData.append("address", form.address || "");
      formData.append("date_of_birth", form.dob || "");

      if (avatarFile) {
        formData.append("avatar", avatarFile);
      }

      const res = await updateUserData(formData).unwrap();

      if (!res?.success) {
        toast.error(res?.message || "Failed to update profile");
        return;
      }

      toast.success(res?.message || "Profile updated successfully");
      await refetch();

      // ✅ after save success reset preview upload state
      setAvatarFile(null);
      setAvatarPreview("");

      setEditMode(false);
    } catch (err: any) {
      console.log("Update profile error:", err);
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  // ✅ Logout
  const handleLogout = async () => {
    try {
      await logoutUser().unwrap();
    } catch (err) {
      // even if API fails, still logout locally
      console.log("Logout API error:", err);
    } finally {
      localStorage.removeItem("token");
      dispatch(logoutAction());
      toast.success("Logged out successfully");
      router.push("/auth/login");
    }
  };

  // Password Modal
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const openModal = () => setIsPasswordModalOpen(true);
  const closeModal = () => setIsPasswordModalOpen(false);
  const [changePassword, { isLoading: isChangingPassword }] =
    useChangePasswordMutation();

  const handlePasswordSubmit = async (data: any) => {
    if (data.newPassword !== data.confirmNewPassword) {
      setPasswordError("confirmNewPassword", {
        type: "manual",
        message: "Passwords do not match",
      });
      return;
    }

    try {
      const formData = new FormData();
      formData.append("current_password", data.currentPassword);
      formData.append("new_password", data.newPassword);
      formData.append("new_password_confirmation", data.confirmNewPassword);

      const res = await changePassword(formData).unwrap();

      if (!res?.success) {
        toast.error(res?.message || "Password change failed");
        return;
      }

      toast.success(res?.message || "Password updated successfully!");
        await refetch();
      closeModal();
    } catch (err: any) {
      console.log("Change password error:", err);
      toast.error(err?.data?.message || err?.message || "Something went wrong");
    }
  };

  console.log(userRes?.data?.avatar, "from avatar");
  // Sessions Modal
  const [isSessionModalOpen, setIsSessionModalOpen] = useState(false);
  const openSessionModal = () => setIsSessionModalOpen(true);
  const closeSessionModal = () => setIsSessionModalOpen(false);

  // ✅ values for UI display
  const displayName = userRes?.data?.name || "Loading...";
  const displayEmail = userRes?.data?.email || "";
  const displayPhone = userRes?.data?.phone || "N/A";
  const displayAddress = userRes?.data?.address || "N/A";
  const displayDob = userRes?.data?.date_of_birth || "N/A";

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
                  src={
                    avatarPreview ||
                    `${process.env.NEXT_PUBLIC_UPLOAD_BASE_URL}/${userRes.data.avatar}` ||
                    "https://i.pravatar.cc/100"
                  }
                  alt="profile"
                  className="w-full h-full rounded-full object-cover border border-[#CFCFCF]"
                />

                <input
                  type="file"
                  hidden
                  accept="image/*"
                  id="avatarUpload"
                  onChange={(e) => {
                    const file = e.target.files?.[0];
                    if (!file) return;

                    setAvatarFile(file);
                    setAvatarPreview(URL.createObjectURL(file));
                  }}
                />

                <button
                  type="button"
                  onClick={() => {
                    const input = document.getElementById(
                      "avatarUpload"
                    ) as HTMLInputElement;
                    input?.click();
                  }}
                  className="absolute bottom-1 right-1 w-10 h-10  flex items-center justify-center cursor-pointer hover:scale-105 transition rounded-full bg-[#F7CA89] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.10),_0_4px_6px_-4px_rgba(0,0,0,0.10)]"
                >
                  <CameraSvg />
                </button>
              </div>

              <div>
                <h2 className="text-[#031226] text-[30px] font-bold leading-[32px] ">
                  {displayName}
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
                    <FiMail /> {displayEmail}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiPhone /> {displayPhone}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiMapPin /> {displayAddress}
                  </p>
                  <p className="flex items-center gap-2">
                    <FiCalendar /> {displayDob}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className="flex items-start justify-center gap-5 px-5 py-3 rounded-md bg-[#F22F2F] text-white strokeWidth text-[12px] font-bold tracking-[2px] cursor-pointer hover:opacity-90 transition disabled:opacity-60 disabled:cursor-not-allowed"
            >
              <ArrowSvg /> {isLoggingOut ? "Logging out..." : "Logout"}
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
                  placeholder: "YYYY-MM-DD",
                },
              ].map((field) => (
                <div key={field.name} className="relative w-full">
                  <span className="absolute -top-2 left-4 bg-[#EFEDE7] px-2 text-[#A2A3A9] strokeWidth text-xs font-semibold tracking-[2px]">
                    {field.label}
                  </span>

                  <input
                    {...register(field.name as keyof ProfileForm, {
                      required:
                        field.name === "dob"
                          ? "Date of birth is required"
                          : true,
                      validate:
                        field.name === "dob"
                          ? (value) => {
                              if (!value) return "Date of birth is required";

                              // ✅ Accept only YYYY-MM-DD
                              const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
                              if (!dateRegex.test(value)) {
                                return "Use YYYY-MM-DD format";
                              }

                              const dob = new Date(value);
                              if (isNaN(dob.getTime())) return "Invalid date";

                              const today = new Date();
                              today.setHours(0, 0, 0, 0);

                              // ✅ DOB cannot be future
                              if (dob > today)
                                return "Date of birth cannot be in the future";

                              // ✅ Must be 13+ (you can change age)
                              const age =
                                today.getFullYear() - dob.getFullYear();
                              const m = today.getMonth() - dob.getMonth();
                              const isBeforeBirthday =
                                m < 0 ||
                                (m === 0 && today.getDate() < dob.getDate());
                              const finalAge = isBeforeBirthday ? age - 1 : age;

                              if (finalAge < 13)
                                return "You must be at least 13 years old";

                              return true;
                            }
                          : undefined,
                    })}
                    required
                    disabled={field.name === "email" ? true : !editMode}
                    placeholder={field.placeholder || ""}
                    className={`w-full rounded-md border border-[#A2A3A9] px-4 py-3 bg-transparent outline-none strokeWidth text-sm tracking-[2px] text-[#031226] ${
                      editMode && field.name !== "email"
                        ? "cursor-text "
                        : "cursor-not-allowed opacity-70"
                    }`}
                  />

                  {errors[field.name as keyof ProfileForm] && (
                    <p className="text-red-500 text-xs mt-1 tracking-[2px]">
                      {String(
                        errors[field.name as keyof ProfileForm]?.message ||
                          "Invalid input"
                      )}
                    </p>
                  )}
                </div>
              ))}

              <div className="col-span-1 md:col-span-2 flex flex-col sm:flex-row gap-6 mt-2">
                <button
                  type="button"
                  onClick={() => {
                    setEditMode(false);
                    // reset back to server data
                    if (userRes?.success && userRes?.data) {
                      const fullName = userRes.data.name || "";
                      const parts = fullName.trim().split(" ");
                      reset({
                        firstName: parts[0] || "",
                        lastName: parts.slice(1).join(" ") || "",
                        email: userRes.data.email || "",
                        phone: userRes.data.phone || "",
                        address: userRes.data.address || "",
                        dob: userRes.data.date_of_birth || "",
                      });
                    }
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md border border-[#E93820] text-[#E93820] font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer hover:bg-[#031226]/5 transition"
                >
                  <XYSvg /> Cancel
                </button>

                <button
                  type="submit"
                  disabled={!editMode || isUpdating}
                  className={`w-full flex items-center justify-center gap-2 px-6 py-4 rounded-md font-montserrat text-[14px] font-bold tracking-[3px] cursor-pointer transition ${
                    editMode
                      ? "bg-[#F5907B] text-[#031226] hover:opacity-90"
                      : "bg-[#CFCFCF] text-[#A2A3A9] cursor-not-allowed"
                  } ${isUpdating ? "opacity-70" : ""}`}
                >
                  {isUpdating ? "Saving..." : "Save"}
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
                    onClick={openModal}
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
              onClick={closeModal}
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
              onSubmit={handleSubmitPassword(handlePasswordSubmit)}
              className="space-y-4"
            >
<div className="relative">
  <span className="absolute -top-2 left-4 bg-[#E9E9E4] px-2 text-[#A2A3A9] font-koho text-xs font-semibold tracking-[2px]">
    Current Password
  </span>

  <input
    type={showCurrentPassword ? "text" : "password"}
    id="currentPassword"
    {...registerPassword("currentPassword", {
      required: "Current Password is required",
    })}
    className="w-full px-4 py-2 border border-[#A2A3A9] rounded-md"
  />

  <button
    type="button"
    onClick={() => setShowCurrentPassword(!showCurrentPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
  >
    {showCurrentPassword ? "🙈" : "👁️"}
  </button>

  {passwordErrors.currentPassword && (
    <p className="text-red-500 text-xs">
      {typeof passwordErrors.currentPassword.message === "string"
        ? passwordErrors.currentPassword.message
        : "Invalid password"}
    </p>
  )}
</div>


<div className="relative">
  <span className="absolute -top-2 left-4 bg-[#E9E9E4] px-2 text-[#A2A3A9] font-koho text-xs font-semibold tracking-[2px]">
    New Password
  </span>

  <input
    type={showNewPassword ? "text" : "password"}
    id="newPassword"
    {...registerPassword("newPassword", {
      required: "New Password is required",
    })}
    className="w-full px-4 py-2 border border-[#A2A3A9] rounded-md"
  />

  <button
    type="button"
    onClick={() => setShowNewPassword(!showNewPassword)}
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
  >
    {showNewPassword ? "🙈" : "👁️"}
  </button>

  {passwordErrors.newPassword && (
    <p className="text-red-500 text-xs">
      {typeof passwordErrors.newPassword.message === "string"
        ? passwordErrors.newPassword.message
        : "Invalid password"}
    </p>
  )}
</div>


<div className="relative">
  <span className="absolute -top-2 left-4 bg-[#E9E9E4] px-2 text-[#A2A3A9] font-koho text-xs font-semibold tracking-[2px]">
    Confirm New Password
  </span>

  <input
    type={showConfirmNewPassword ? "text" : "password"}
    id="confirmNewPassword"
    {...registerPassword("confirmNewPassword", {
      required: "Confirm New Password is required",
    })}
    className="w-full px-4 py-2 border border-[#A2A3A9] rounded-md"
  />

  <button
    type="button"
    onClick={() =>
      setShowConfirmNewPassword(!showConfirmNewPassword)
    }
    className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer"
  >
    {showConfirmNewPassword ? "🙈" : "👁️"}
  </button>

  {passwordErrors.confirmNewPassword && (
    <p className="text-red-500 text-xs">
      {typeof passwordErrors.confirmNewPassword.message === "string"
        ? passwordErrors.confirmNewPassword.message
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
                  disabled={isChangingPassword}
                  className="w-full text-[#031226] text-center font-koho text-[12px] font-bold leading-[20px] tracking-[2px] 
                px-[6px] py-[12px] rounded-[6px] 
                border border-[#F5907B] bg-[#F5907B] focus:outline-none focus:border-[#031226] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Check />{" "}
                  {isChangingPassword ? "Changing..." : "Check Change Password"}
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
