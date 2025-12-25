import { GraphSvg } from "@/Components/Svg/SvgContainer";

const StockCard = () => {
  return (
    <div
      className="
        group rounded-[16px] border border-[#F89A83] p-4
        transition-all duration-200
        hover:bg-[#F89A83] hover:text-white
      "
    >
      <div className="flex items-center justify-between">
        <span className="font-bold text-[22px] tracking-wide">AAPL</span>

        <span
          className="
            rounded-full px-3 py-1 text-xs font-semibold
            bg-[rgba(142,195,179,0.50)] text-[#4D918F]
            transition-colors
            group-hover:bg-white/30 group-hover:text-white flex items-center gap-1
          "
        >
          <span><GraphSvg /></span> +3.08%
        </span>
      </div>

      <p className="mt-2 text-[18px] text-gray-600 transition-colors group-hover:text-white/90">
        Apple Inc.
      </p>

      <div className="mt-2 flex items-end justify-between">
        <span className="text-xl font-bold text-[26px]">$178.72</span>

        <span
          className="
            text-xs font-semibold text-emerald-600
            transition-colors group-hover:text-white
          "
        >
          + $5.34
        </span>
      </div>
    </div>
  );
};

const UpcomingEarnings = () => {
  return (
    <div className=" bg-[#EFEDE8] px-4 xl:px-0 py-12">
      {/* Header */}
      <div className="text-center">
        <h1 className="text-[40px] font-integral-cf font-extrabold tracking-wide">
          TOP 20 UPCOMING EARNINGS
        </h1>
        <p className="mt-2 text-xl text-black">
          Most anticipated earnings releases, sorted by date
        </p>
      </div>

      {/* Grid */}
      <div className="mx-auto mt-10 grid max-w-[1200px] grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 20 }).map((_, i) => (
          <StockCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default UpcomingEarnings;
