import { DeleteSvg, StarSvg } from "@/Components/Svg/SvgContainer";

const WatchlistCard = () => {
  return (
    <div
      className="
        relative w-64 rounded-[6px] border border-[#8EC3B3] px-5 py-2.5
        transition-all duration-200
        hover:bg-[#8EC3B3] hover:text-white
        group
      "
    >
      {/* Delete icon */}
      <button
        className="
          absolute right-3 top-3 text-sm text-red-400
          transition-colors group-hover:text-white
        "
      >
        <DeleteSvg/>
      </button>

      {/* Symbol + star */}
      <div className="flex items-center gap-2">
        <span className="text-[22px] font-bold tracking-wide">AAPL</span>
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFB199] text-xs text-black">
          <StarSvg />
        </span>
      </div>

      <p className="mt-2 text-lg text-gray-700 transition-colors group-hover:text-white/90">
        AAPL Platforms Inc
      </p>

      <p className="mt-3 text-sm text-gray-500 transition-colors group-hover:text-white/80">
        Added 23/12/2025
      </p>
    </div>
  );
};

const MyWatchlist = () => {
  return (
    <div className="min-h-screen bg-[#EFEDE8] px-10 py-14">
      {/* Header */}
      <div className="text-center">
        <h1 className="flex items-center justify-center gap-2 text-xl font-semibold">
          My Watchlist <span className="text-blue-800">★</span>
        </h1>
        <p className="mt-2 text-sm text-gray-600">
          Track your favorite stocks and their upcoming earnings
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 flex max-w-6xl gap-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <WatchlistCard key={i} />
        ))}
      </div>
    </div>
  );
};

export default MyWatchlist;
