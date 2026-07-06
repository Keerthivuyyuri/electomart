import { Link } from "react-router-dom";
import {
  Headphones,
  Watch,
  Speaker,
  Smartphone,
  Radio,
} from "lucide-react";

function BrandSection() {
  const brands = [
    {
      name: "Noise",
      icon: Watch,
      color: "from-cyan-500 to-sky-600",
    },
    {
      name: "boAt",
      icon: Headphones,
      color: "from-red-500 to-orange-500",
    },
    {
      name: "Boult",
      icon: Speaker,
      color: "from-violet-500 to-fuchsia-600",
    },
    {
      name: "Fire-Boltt",
      icon: Smartphone,
      color: "from-amber-500 to-yellow-500",
    },
    {
      name: "Mivi",
      icon: Radio,
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-500">
          Top Brands
        </p>

        <h2 className="mt-3 text-4xl font-black text-slate-900 dark:text-white">
          Shop Your Favourite Brands
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-500 dark:text-slate-300">
          Discover premium audio devices, smart wearables, speakers and
          accessories from India's most trusted electronics brands.
        </p>
      </div>

      {/* Brand Cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
        {brands.map((brand) => {
          const Icon = brand.icon;

          return (
            <Link
              key={brand.name}
              to={`/products?search=${brand.name}`}
              className="group relative overflow-hidden rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl dark:border-white/10 dark:bg-white/5"
            >
              {/* Background Glow */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${brand.color} opacity-0 transition duration-500 group-hover:opacity-10`}
              />

              {/* Icon */}
              <div
                className={`inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${brand.color} text-white shadow-lg`}
              >
                <Icon size={30} />
              </div>

              {/* Brand */}
              <h3 className="mt-6 text-2xl font-black text-slate-900 dark:text-white">
                {brand.name}
              </h3>

              {/* Products */}
              <p className="mt-2 text-sm text-slate-500 dark:text-slate-300">
                {brand.products}
              </p>

              {/* CTA */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-sm font-semibold text-cyan-500">
                  Explore
                </span>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default BrandSection;