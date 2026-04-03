import RouteInfo from "./RouteInfo";

export default function Sidebar({
  start,
  end,
  setStart,
  setEnd,
  handleFindRoute,
  handleUpdateTraffic,
  path,
  cost,
  loading,
}) {
  return (
    <div className="w-96 p-8 flex flex-col gap-7 
      bg-[#0f172a] border-r border-white/10 text-white
      h-full overflow-y-auto">

      {/* Title */}
      <div>
        <h1 className="text-lg font-semibold">Navigation</h1>
        <p className="text-m text-gray-400">
          Select nodes and explore routes
        </p>
      </div>

      {/* Inputs */}
      <div className="space-y-4">

        <div>
          <label className="text-xs text-gray-400">Start Node</label>
          <select
            className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 focus:ring-2 focus:ring-blue-400 outline-none transition"
            value={start}
            onChange={(e) => setStart(e.target.value)}
          >
            {["A","B","C","D","E","F"].map(n => (
              <option key={n} className="text-black">{n}</option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs text-gray-400">End Node</label>
          <select
            className="w-full mt-1 px-3 py-2 rounded-lg bg-white/10 backdrop-blur border border-white/20 focus:ring-2 focus:ring-blue-400 outline-none transition"
            value={end}
            onChange={(e) => setEnd(e.target.value)}
          >
            {["A","B","C","D","E","F"].map(n => (
              <option key={n} className="text-black">{n}</option>
            ))}
          </select>
        </div>

      </div>

      {/* Buttons */}
      <div className="space-y-3">

        <button
          onClick={handleFindRoute}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:scale-[1.03] transition shadow-md"
        >
          🚀 Find Route
        </button>

        <button
          onClick={handleUpdateTraffic}
          className="w-full py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-orange-500 hover:scale-[1.03] transition shadow-md text-black font-semibold"
        >
          🔄 Update Traffic
        </button>

      </div>

      {/* Loading */}
      {loading && (
        <p className="text-blue-300 text-sm animate-pulse">
          Calculating route...
        </p>
      )}

      {/* Route Info */}
      <RouteInfo path={path} cost={cost} />

      {/* Legend */}
      <div className="text-sm text-gray-300">
        <span className="text-green-400 font-bold">●</span> Best Route
      </div>

    </div>
  );
}