import { Link } from "react-router-dom";
import { products } from "../data/products";

function FlashDeals() {
  const flashProducts = products.filter((item) => item.offer).slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex items-center justify-between">
        <h2 className="text-4xl font-black dark:text-white">What&apos;s Hot</h2>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {flashProducts.map((product) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group overflow-hidden rounded-[18px] bg-gradient-to-b from-[#111319] via-[#171928] to-[#1b75a5] shadow-xl transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
          >
            <div className="flex h-[430px] flex-col p-6">
              <div className="text-center">
                <p className="text-sm font-black uppercase tracking-wide text-cyan-300">
                  {product.brand}
                </p>

                <h3 className="mx-auto mt-4 max-w-[240px] text-2xl font-black leading-tight text-white">
                  {product.name}
                </h3>
              </div>

              <div className="relative mt-6 flex flex-1 items-center justify-center">
                <div className="absolute bottom-10 h-44 w-44 rounded-full bg-purple-600/30 blur-3xl"></div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="relative z-10 h-[190px] w-full object-contain transition duration-500 group-hover:scale-110"
                />
              </div>

              <div className="mb-5 border-t border-white/30"></div>

              <div className="text-center">
                {product.oldPrice && (
                  <span className="mr-2 text-lg text-white/50 line-through">
                    ₹{product.oldPrice}
                  </span>
                )}

                <span className="text-xl text-white/90">Starting at</span>

                <h2 className="mt-1 text-4xl font-black text-white">
                  ₹{product.price}
                </h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default FlashDeals;