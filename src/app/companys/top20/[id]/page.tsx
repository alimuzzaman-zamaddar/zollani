"use client";

import CompanyHero from "@/Components/PageComponents/mainPages/companys/CompanyHero";
import CompanyOverviewSection from "@/Components/PageComponents/mainPages/companys/CompanyOverviewSection";
import EarningsHistorySection from "@/Components/PageComponents/mainPages/companys/EarningsHistorySection";
import WhatToWatchSection from "@/Components/PageComponents/mainPages/companys/WhatToWatchSection";

export default function page() {
  return (
    <div>
      <CompanyHero />
        <CompanyOverviewSection />
        <WhatToWatchSection />
      <EarningsHistorySection />
    </div>
  );
}
