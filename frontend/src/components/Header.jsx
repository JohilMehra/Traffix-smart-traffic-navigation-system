export default function Header() {
  return (
    <div className="h-14 flex items-center justify-between px-10
      bg-[#0b1220] border-b border-white/10 text-white shadow-sm">

      {/* LEFT */}
      <div className="flex items-center gap-3">
        <span className="text-2xl">🚦</span>
        <h1 className="text-2xl md:text-3xl font-semibold tracking-wide">
          Smart Traffic Navigation
        </h1>
      </div>

      {/* RIGHT */}
      <p className="text-sm md:text-base text-gray-400">
        Real-time Routing
      </p>
    </div>
  );
}