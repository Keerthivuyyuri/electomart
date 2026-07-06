import { Link } from "react-router-dom";

function ComingUpBanner() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <h2 className="mb-6 text-3xl font-black text-white">Coming up</h2>

      <Link to="/products?category=Offers">
        <div className="relative overflow-hidden rounded-lg bg-[#151b5f] px-6 py-8 shadow-xl sm:px-10 lg:px-16">
          <div className="flex min-h-[220px] flex-col items-center justify-center gap-8 text-center text-white md:flex-row md:justify-center md:gap-24">
            {/* Left Badge */}
            <div className="relative flex h-44 w-44 rotate-45 items-center justify-center rounded-3xl border-4 border-fuchsia-400 shadow-[0_0_30px_#a855f7]">
              <div className="-rotate-45 text-center">
                <p className="text-xl font-black leading-none">FLASH</p>
                <p className="text-3xl font-black leading-none">SALE</p>
                <p className="mt-2 text-xs">Midnight Edition</p>
                <p className="mt-3 rounded-full bg-gradient-to-r from-blue-600 to-fuchsia-600 px-3 py-1 text-sm font-black">
                  10PM - 10AM
                </p>
              </div>
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold uppercase tracking-wide text-slate-200">
                Your late-night scroll
              </p>

              <h3 className="mt-2 text-4xl font-black uppercase sm:text-5xl">
                Just got better
              </h3>

              <p className="mt-5 inline-block rounded-full bg-white px-8 py-3 text-lg font-bold text-yellow-700">
                Epic deals dropping at 10PM
              </p>
            </div>
          </div>

          <span className="absolute bottom-4 right-5 text-xs font-semibold text-white">
            *T&C Apply
          </span>
        </div>
      </Link>
    </section>
  );
}

export default ComingUpBanner;