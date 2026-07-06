import { Link } from "react-router-dom";
import {
  Headphones,
  Watch,
  Zap,
  Flame,
  ArrowRight,
} from "lucide-react";

function CategoryStrip() {
  const categories = [
    {
      name: "Audio",
      path: "/products?category=Audio",
      icon: Headphones,
      desc: "Earbuds, Headphones & Speakers",
      bg: "from-cyan-500 to-blue-600",
    },
    {
      name: "Wearables",
      path: "/products?category=Wearables",
      icon: Watch,
      desc: "Smart Watches & Fitness Bands",
      bg: "from-violet-500 to-purple-700",
    },
    {
      name: "Smart Devices",
      path: "/products?category=Smart Devices",
      icon: Zap,
      desc: "Chargers, Power Banks & More",
      bg: "from-emerald-500 to-green-700",
    },
    {
      name: "Offers",
      path: "/products?category=Offers",
      icon: Flame,
      desc: "Hot Deals & Best Discounts",
      bg: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-end justify-between">
        <div>
          <h2 className="mt-2 text-4xl font-black dark:text-white">
            Shop By Category
          </h2>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {categories.map((item) => {
          const Icon = item.icon;

          return (
            <Link
              key={item.name}
              to={item.path}
              className="group overflow-hidden rounded-[30px] bg-white shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl dark:bg-[#111827]"
            >
              {/* Top Gradient */}
              <div
                className={`bg-gradient-to-r ${item.bg} p-8 text-white`}
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/20 backdrop-blur">
                  <Icon size={42} />
                </div>

                <h3 className="mt-8 text-3xl font-black">
                  {item.name}
                </h3>

                <p className="mt-3 text-white/90">
                  {item.desc}
                </p>
              </div>

              {/* Bottom */}
              <div className="flex items-center justify-between p-6">
                <span className="font-bold text-slate-800 dark:text-white">
                  Explore
                </span>

                <div className="rounded-full bg-slate-100 p-3 transition group-hover:bg-cyan-500 group-hover:text-white dark:bg-slate-800">
                  <ArrowRight size={18} />
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

export default CategoryStrip;