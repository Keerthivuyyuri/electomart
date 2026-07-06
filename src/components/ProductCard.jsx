import { Heart, ShoppingCart, Star } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import { useApp } from "../context/AppContext";

function ProductCard({ product }) {
  const navigate = useNavigate();

  const { addToCart, addToWishlist, isLoggedIn } = useApp();

  function handleWishlist(e) {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.warning("Please login to add products to wishlist");
      navigate("/login");
      return;
    }

    addToWishlist(product);
  }

  function handleAddToCart(e) {
    e.preventDefault();

    if (!isLoggedIn) {
      toast.warning("Please login to add products to cart");
      navigate("/login");
      return;
    }

    addToCart(product);
  }

  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl dark:border-white/10 dark:bg-white/5"
    >
      <Link to={`/products/${product.id}`}>
        <div className="h-64 overflow-hidden bg-slate-100 dark:bg-white/10">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
          />
        </div>

        <div className="p-5">
          <p className="mb-2 text-sm text-cyan-500">{product.brand}</p>

          <h3 className="text-lg font-bold">{product.name}</h3>

          <div className="mt-2 flex items-center gap-1 text-sm text-yellow-500">
            <Star size={16} fill="currentColor" />
            {product.rating}
          </div>

          <div className="mt-4 flex items-center justify-between">
            <p className="text-xl font-black">₹{product.price}</p>

            <div className="flex gap-2">
              <button
                type="button"
                onClick={handleWishlist}
                className="rounded-full border p-2 transition hover:bg-pink-500 hover:text-white dark:border-white/20"
              >
                <Heart size={18} />
              </button>

              <button
                type="button"
                onClick={handleAddToCart}
                className="rounded-full bg-cyan-500 p-2 text-white transition hover:bg-slate-900"
              >
                <ShoppingCart size={18} />
              </button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default ProductCard;