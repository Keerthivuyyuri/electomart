import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Search, SlidersHorizontal, PackageSearch } from "lucide-react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { products } from "../data/products";

function Products() {
  const [searchParams] = useSearchParams();

  const urlSearch = searchParams.get("search") || "";
  const urlCategory = searchParams.get("category") || "All";

  const [search, setSearch] = useState(urlSearch);
  const [category, setCategory] = useState(urlCategory);
  const [sort, setSort] = useState("default");
  const [loading, setLoading] = useState(true);

  const categories = ["All", "Audio", "Wearables", "Smart Devices", "Offers"];

  useEffect(() => {
    setSearch(urlSearch);
    setCategory(urlCategory);
  }, [urlSearch, urlCategory]);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  let filteredProducts = products.filter((product) => {
    const searchMatch =
      product.name.toLowerCase().includes(search.toLowerCase()) ||
      product.brand.toLowerCase().includes(search.toLowerCase()) ||
      product.category.toLowerCase().includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || product.category === category;

    return searchMatch && categoryMatch;
  });

  if (sort === "low-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  }

  if (sort === "high-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  }

  if (sort === "rating") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.rating - a.rating);
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] dark:bg-[#070b14]">
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="font-semibold text-cyan-500">ElectroMart Collection</p>

          <h1 className="mt-2 text-4xl font-black sm:text-5xl">
            {category === "All" ? "Explore Products" : category}
          </h1>
        </div>

        <div className="mb-10 grid gap-4 rounded-[32px] bg-white p-5 shadow-xl dark:bg-white/10 lg:grid-cols-[1fr_220px_220px]">
          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 dark:border-white/10 dark:bg-slate-900">
            <Search size={20} className="text-slate-400" />

            <input
              type="text"
              placeholder="Search by product, brand or category..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent px-3 text-sm outline-none"
            />
          </div>

          <div className="flex items-center rounded-full border border-slate-200 bg-slate-50 px-5 py-3 dark:border-white/10 dark:bg-slate-900">
            <SlidersHorizontal size={20} className="text-slate-400" />

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-transparent px-3 text-sm outline-none"
            >
              {categories.map((item) => (
                <option key={item} className="text-black">
                  {item}
                </option>
              ))}
            </select>
          </div>

          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-sm outline-none dark:border-white/10 dark:bg-slate-900"
          >
            <option value="default" className="text-black">Sort by</option>
            <option value="low-high" className="text-black">Price: Low to High</option>
            <option value="high-low" className="text-black">Price: High to Low</option>
            <option value="rating" className="text-black">Top Rated</option>
          </select>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-black">
            {category === "All" ? "All Products" : category}
          </h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-300">
            Showing {filteredProducts.length} products
          </p>
        </div>

        {loading ? (
          <Loader />
        ) : filteredProducts.length > 0 ? (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[32px] bg-white p-10 text-center shadow-sm dark:bg-white/10">
            <PackageSearch size={52} className="text-cyan-500" />
            <h3 className="mt-5 text-2xl font-black">No products found</h3>
            <p className="mt-2 text-slate-500 dark:text-slate-300">
              Try changing the search keyword or category.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

export default Products;