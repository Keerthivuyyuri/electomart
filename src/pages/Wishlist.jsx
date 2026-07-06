import { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MoreVertical, Trash2 } from "lucide-react";
import { useApp } from "../context/AppContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useApp();
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <section className="mx-auto min-h-screen max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-black">My Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="mt-16 text-center">
          <Heart className="mx-auto text-pink-500" size={64} />
          <h2 className="mt-5 text-2xl font-black">Nothing in wishlist</h2>

          <Link
            to="/products"
            className="mt-6 inline-block rounded-full bg-cyan-500 px-7 py-3 font-bold text-white"
          >
            Explore Products
          </Link>
        </div>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {wishlist.map((item) => (
            <div
              key={item.id}
              className="relative rounded-3xl bg-white p-5 shadow dark:bg-white/10"
            >
              <div className="absolute right-4 top-4 z-20">
                <button
                  onClick={() =>
                    setOpenMenu(openMenu === item.id ? null : item.id)
                  }
                  className="rounded-full bg-white/90 p-2 shadow hover:bg-slate-100 dark:bg-slate-900 dark:hover:bg-slate-800"
                >
                  <MoreVertical size={20} />
                </button>

                {openMenu === item.id && (
                  <div className="absolute right-0 mt-2 w-40 rounded-xl border bg-white shadow-xl dark:border-white/10 dark:bg-slate-900">
                    <button
                      onClick={() => {
                        removeFromWishlist(item.id);
                        setOpenMenu(null);
                      }}
                      className="flex w-full items-center gap-3 px-4 py-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10"
                    >
                      <Trash2 size={18} />
                      Remove
                    </button>
                  </div>
                )}
              </div>

              <img
                src={item.image}
                alt={item.name}
                className="h-52 w-full rounded-2xl object-cover"
              />

              <h3 className="mt-4 font-black">{item.name}</h3>
              <p className="text-cyan-500">{item.brand}</p>
              <p className="mt-2 text-xl font-black">₹{item.price}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Wishlist;