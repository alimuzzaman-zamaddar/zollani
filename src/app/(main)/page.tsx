import HeroSection from "@/Components/PageComponents/mainPages/HeroSection";
import PlatformSection from "@/Components/PageComponents/mainPages/PlatformSection";
import SmarterInvestment from "@/Components/PageComponents/mainPages/SmarterInvestment";
import WhyChooseSecion from "@/Components/PageComponents/mainPages/WhyChooseSecion";

const Page = () => {
  return (
    <main className="">
      <HeroSection />
      <PlatformSection />
      <WhyChooseSecion />
      <SmarterInvestment />
    </main>
  );
};

export default Page;
