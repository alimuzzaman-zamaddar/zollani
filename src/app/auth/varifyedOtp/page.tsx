"use client";

import Container from "@/Components/Common/Container";

export default function AccountVerifiedPage() {
  const handleContinue = () => {
    console.log("Continue clicked");
  };

  return (
    <div className="h-screen xl:h-[90vh] bg-[#EFEDE7]">
      <Container>
        <div className="py-12 xl:py-20  xl:h-[90vh] flex flex-col xl:flex-row justify-center gap-16 md:gap-24 xl:gap-[180px] items-center">
          {/* LEFT IMAGE */}
          <div className="w-full xl:w-[40%] flex justify-center items-center">
            <img
              src="https://i.ibb.co.com/Hmqq9DZ/Layer-1-2.png"
              alt="Account Verified"
              className="w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] xl:max-w-[420px]"
            />
          </div>

          {/* RIGHT CONTENT */}
          <div className="w-full xl:w-[60%] flex flex-col justify-center items-center px-4 sm:px-0">
            <h2 className="text-[#031226] text-center font-bold tracking-[4px] text-[22px] sm:text-[26px] md:text-[28px] xl:text-[30px] leading-[36px] sm:leading-[42px] md:leading-[46px] xl:leading-[50px]">
              Your Account Has Been Verified
            </h2>

            <p className="mt-4 text-[#707070] text-center font-koho font-normal tracking-[2px] text-[14px] sm:text-[15px] md:text-[16px] leading-[24px] sm:leading-[26px] md:leading-[30px] max-w-md">
              Your profile is now active you can continue to explore
            </p>

            <button
              onClick={handleContinue}
              className="mt-8 w-full max-w-sm flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-[#4D918F] border-none text-[#ECF4FD] font-koho text-base font-bold tracking-[2px] hover:opacity-90 transition cursor-pointer"
            >
              Continue
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
}
