import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import { products } from "../data/products";

function FeaturedProducts() {
  const featured = products.slice(0, 4);

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <div className="mb-8 flex items-end justify-between">
        <div>
          <p className="font-semibold text-[#00bfa6]">Recommended</p>
          <h2 className="text-3xl font-black dark:text-white sm:text-4xl">
            Featured Products
          </h2>
        </div>

        <Link to="/products" className="font-bold text-[#00bfa6]">
          View All
        </Link>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featured.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;