"use client";

import Container from "@/Components/Common/Container";

export default function CompanyHero() {
  return (
    <section className="w-full h-[450px] flex items-center justify-center bg-[#EFEDE7] bg-[url('https://i.ibb.co.com/VWf8hqVt/Screenshot-2.png')] bg-no-repeat bg-cover bg-top">
      <Container>
        <h1 className="text-[#031226] text-center font-bold tracking-[6px] sm:tracking-[8px] md:tracking-[10px] xl:tracking-[12px] text-[32px] sm:text-[38px] md:text-[44px] xl:text-[50px] leading-[46px] sm:leading-[60px] md:leading-[80px] xl:leading-[100px]">
          GOOGL
        </h1>

        <p className="mt-4 text-[#707070] text-center font-normal tracking-[2px] text-[14px] sm:text-[15px] md:text-[16px] xl:text-[18px] leading-[22px] sm:leading-[26px] md:leading-[28px] xl:leading-[30px] max-w-xl">
          Fast, clean earning data for any stock. Search a ticker to see
          upcoming dates, estimates, and historical results
        </p>
      </Container>
    </section>
  );
}
