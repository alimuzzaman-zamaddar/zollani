"use client";

import Container from "@/Components/Common/Container";
import { useRouter } from "next/navigation";

export default function CheckEmailPage() {
  const handleOpenInbox = () => {
    console.log("Open email inbox");
          router.push('/auth/resetpassword')
  };
    const router = useRouter()
  const handleResend = () => {
    console.log("Resend email");

  };

  return (
    <div className="h-screen xl:h-[90vh] bg-[#EFEDE7]">
      <Container>
        <div className="py-12 xl:py-20 h-screen xl:h-[90vh] flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-[180px] items-center">
          {/* LEFT IMAGE */}
          <div className="w-full xl:w-[40%] flex justify-center items-center">
            <img src="https://i.ibb.co.com/jv7GPCgx/Layer-1-6.png" alt="Check Email" className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] xl:max-w-[420px]" />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full xl:w-[60%] flex flex-col justify-center items-center px-4 sm:px-0">
            <h2 className="text-[#031226] text-center font-bold tracking-[4px] text-[22px] sm:text-[26px] md:text-[28px] xl:text-[30px] leading-[36px] sm:leading-[42px] md:leading-[46px] xl:leading-[50px]">
              Check your email!
            </h2>

            <p className="mt-4 text-[#707070] text-center font-koho font-normal tracking-[2px] text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[30px]">
              Thanks! An email was sent that will ask you to click on a link to verify that you own this account. If you don’t get the email, please contact support@thesilkrice.com
            </p>

            <button onClick={handleOpenInbox} className="mt-8 w-full max-w-sm flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4D918F] text-[#ECF4FD] font-koho text-base font-bold tracking-[2px] hover:opacity-90 transition cursor-pointer">
              Open email inbox
            </button>

            <button onClick={handleResend} className="mt-4 flex items-center gap-2 text-[#707070] font-koho text-xs font-semibold tracking-[2px] hover:opacity-80 transition cursor-pointer">
              ← Resend email
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
