import { Link } from "react-router-dom";

function PromoGrid() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mb-6">
        <h2 className="text-3xl font-black dark:text-white">
          Watch Out For This
        </h2>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Wearables Banner */}
        <Link
          to="/products?category=Wearables"
          className="group relative overflow-hidden rounded-[32px] bg-gradient-to-r from-pink-700 via-fuchsia-600 to-purple-700 shadow-xl"
        >
          <div className="grid items-center gap-8 p-8 md:grid-cols-2">
            <div className="z-10">
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-200">
                Wearables Collection
              </p>

              <h2 className="mt-3 text-4xl font-black leading-tight text-white">
                Up to
                <br />
                <span className="text-6xl text-cyan-300">50%</span> OFF
              </h2>

              <p className="mt-4 text-lg text-white/90">
                Smart Watches & Fitness Bands
              </p>

              <button className="mt-8 rounded-full bg-cyan-400 px-7 py-3 font-bold text-slate-900 transition group-hover:bg-white">
                Shop Now
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=700&q=80"
                alt="Wearables"
                className="h-72 object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </Link>

        {/* Audio Banner */}
        <Link
          to="/products?category=Audio"
          className="group relative overflow-hidden rounded-[32px] bg-white shadow-xl dark:bg-[#111827]"
        >
          <div className="grid items-center gap-8 p-8 md:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-cyan-500">
                Premium Audio
              </p>

              <h2 className="mt-3 text-4xl font-black dark:text-white">
                Crystal Clear
                <br />
                Sound Experience
              </h2>

              <p className="mt-4 text-lg text-slate-600 dark:text-slate-300">
                Wireless Earbuds & Headphones
              </p>

              <button className="mt-8 rounded-full bg-cyan-500 px-7 py-3 font-bold text-white transition hover:bg-slate-900">
                Explore
              </button>
            </div>

            <div className="flex justify-center">
              <img
                src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80"
                alt="Headphones"
                className="h-72 object-contain transition duration-500 group-hover:scale-110"
              />
            </div>
          </div>
        </Link>
      </div>
    </section>
  );
}

export default PromoGrid;