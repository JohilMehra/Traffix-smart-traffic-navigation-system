export default function RouteInfo({ path, cost }) {
  return (
    <div className="bg-[#020617] border border-white/10 
      rounded-xl p-5 shadow-md">

      <h3 className="text-base font-semibold mb-3 text-white">
        📍 Route Info
      </h3>

      {path.length > 0 ? (
        <>
          <p className="text-base text-gray-200">
            <span className="text-gray-400">Path:</span>{" "}
            {path.join(" → ")}
          </p>
          <p className="text-base text-gray-200 mt-2">
            <span className="text-gray-400">Cost:</span> {cost}
          </p>
        </>
      ) : (
        <p className="text-sm text-gray-400">
          No route selected
        </p>
      )}
    </div>
  );
}