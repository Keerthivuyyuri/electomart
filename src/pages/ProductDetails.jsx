import { useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import {
  Heart,
  ShoppingCart,
  Star,
  Truck,
  ShieldCheck,
  RefreshCcw,
  ChevronLeft,
} from "lucide-react";
import { toast } from "react-toastify";
import { products } from "../data/products";
import { useApp } from "../context/AppContext";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((item) => item.id === Number(id));

  const { addToCart, addToWishlist, isLoggedIn } = useApp();

  const [activeImage, setActiveImage] = useState(product?.images?.[0]);

  if (!product) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#f5f7fb] dark:bg-[#070b14]">
        <p className="text-xl font-bold">Product not found</p>
      </div>
    );
  }

  const discount = product.oldPrice
    ? Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)
    : 0;

  const relatedProducts = products
    .filter((item) => item.category === product.category && item.id !== product.id)
    .slice(0, 4);

  function handleAddToCart() {
    if (!isLoggedIn) {
      toast.warning("Please login to add products to cart");
      navigate("/login");
      return;
    }

    addToCart(product);
  }

  function handleAddToWishlist() {
    if (!isLoggedIn) {
      toast.warning("Please login to add products to wishlist");
      navigate("/login");
      return;
    }

    addToWishlist(product);
  }

  return (
    <div className="min-h-screen bg-[#f5f7fb] dark:bg-[#070b14]">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <Link
          to="/products"
          className="mb-8 inline-flex items-center gap-2 font-semibold text-cyan-500"
        >
          <ChevronLeft size={20} />
          Back to Products
        </Link>

        <div className="grid gap-10 rounded-[36px] bg-white p-5 shadow-xl dark:bg-white/10 sm:p-8 lg:grid-cols-2">
          <div>
            <div className="relative overflow-hidden rounded-[32px] bg-slate-100 dark:bg-slate-900">
              {product.offer && (
                <span className="absolute left-5 top-5 z-10 rounded-full bg-cyan-500 px-4 py-2 text-sm font-bold text-white">
                  {discount}% OFF
                </span>
              )}

              <img
                src={activeImage}
                alt={product.name}
                className="h-[360px] w-full object-cover sm:h-[480px]"
              />
            </div>

            <div className="mt-5 grid grid-cols-3 gap-4">
              {product.images.map((img) => (
                <button
                  key={img}
                  onClick={() => setActiveImage(img)}
                  className={`overflow-hidden rounded-2xl border-2 transition ${
                    activeImage === img
                      ? "border-cyan-500"
                      : "border-transparent opacity-80 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    className="h-24 w-full object-cover sm:h-28"
                  />
                </button>
              ))}
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <p className="font-semibold text-cyan-500">{product.brand}</p>

            <h1 className="mt-3 text-4xl font-black leading-tight sm:text-5xl">
              {product.name}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-bold text-green-700">
                In Stock
              </span>

              <div className="flex items-center gap-1 text-yellow-500">
                <Star fill="currentColor" size={18} />
                <span className="font-bold text-slate-800 dark:text-white">
                  {product.rating}
                </span>
              </div>

              <span className="text-sm text-slate-500 dark:text-slate-300">
                Category: {product.category}
              </span>
            </div>

            <div className="mt-6 flex flex-wrap items-end gap-3">
              <p className="text-4xl font-black">₹{product.price}</p>

              {product.oldPrice && (
                <p className="mb-1 text-lg text-slate-400 line-through">
                  ₹{product.oldPrice}
                </p>
              )}

              {product.oldPrice && (
                <p className="mb-1 rounded-full bg-cyan-100 px-3 py-1 text-sm font-bold text-cyan-700">
                  Save ₹{product.oldPrice - product.price}
                </p>
              )}
            </div>

            <p className="mt-6 max-w-xl leading-8 text-slate-600 dark:text-slate-300">
              {product.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                <Truck className="text-cyan-500" size={24} />
                <p className="mt-2 text-sm font-bold">Fast Delivery</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                <ShieldCheck className="text-cyan-500" size={24} />
                <p className="mt-2 text-sm font-bold">1 Year Warranty</p>
              </div>

              <div className="rounded-2xl bg-slate-50 p-4 dark:bg-slate-900">
                <RefreshCcw className="text-cyan-500" size={24} />
                <p className="mt-2 text-sm font-bold">Easy Returns</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <button
                onClick={handleAddToCart}
                className="flex items-center gap-2 rounded-full bg-cyan-500 px-8 py-4 font-bold text-white transition hover:bg-[#07111f]"
              >
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <button
                onClick={handleAddToWishlist}
                className="flex items-center gap-2 rounded-full border px-8 py-4 font-bold transition hover:bg-pink-500 hover:text-white dark:border-white/20"
              >
                <Heart size={20} />
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>

        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <div className="mb-8">
              <p className="font-semibold text-cyan-500">You may also like</p>
              <h2 className="text-3xl font-black">Related Products</h2>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {relatedProducts.map((item) => (
                <Link key={item.id} to={`/products/${item.id}`}>
                  <div className="overflow-hidden rounded-3xl bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl dark:bg-white/10">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-56 w-full object-cover"
                    />

                    <div className="p-5">
                      <p className="text-sm font-semibold text-cyan-500">
                        {item.brand}
                      </p>

                      <h3 className="mt-2 font-black">{item.name}</h3>

                      <p className="mt-2 font-bold">₹{item.price}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}

export default ProductDetails;