import { Link } from "react-router-dom";

function DealsOfDay() {
  const deals = [
    {
      brand: "boAt",
      title: "Wireless Headphones",
      oldPrice: "₹4,990",
      price: "₹1,799",
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=700&q=80",
      path: "/products?category=Audio",
    },
    {
      brand: "Noise",
      title: "Smart Watches",
      price: "₹2,999",
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=700&q=80",
      path: "/products?category=Wearables",
    },
    {
      brand: "Mivi",
      title: "Bluetooth Speakers",
      price: "₹3,999",
      image:
        "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=700&q=80",
      path: "/products?category=Audio",
    },
    {
      brand: "Fire-Boltt",
      title: "Fitness Wearables",
      price: "₹2,124",
      image:
        "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=700&q=80",
      path: "/products?category=Wearables",
    },
  ];

  return (
    <section className="px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
       <h2 className="mb-7 text-3xl font-black text-slate-900">
  Deals Of The Day
</h2>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {deals.map((deal) => (
            <Link
              key={deal.title}
              to={deal.path}
              className="group overflow-hidden rounded-2xl bg-gradient-to-b from-[#122b3a] via-[#111827] to-[#1e6c9e] p-6 shadow-xl transition hover:-translate-y-2"
            >
              <div className="flex h-[420px] flex-col">
                <div className="text-center">
                  <h3 className="text-3xl font-black tracking-wide">
                    {deal.brand}
                  </h3>

                  <p className="mt-3 text-2xl font-black leading-tight">
                    {deal.title}
                  </p>
                </div>

                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute bottom-10 h-40 w-40 rounded-full bg-fuchsia-500/25 blur-3xl" />

                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="relative z-10 h-52 w-full object-contain transition duration-500 group-hover:scale-110"
                  />
                </div>

                <div className="border-t border-white/30 pt-5 text-center">
                  {deal.oldPrice && (
                    <span className="mr-2 text-xl text-white/50 line-through">
                      {deal.oldPrice}
                    </span>
                  )}

                  <span className="text-xl text-white/90">Starting at</span>

                  <p className="mt-1 text-4xl font-black">{deal.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default DealsOfDay;