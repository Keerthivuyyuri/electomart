import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [dark, setDark] = useState(false);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [selectedLocation, setSelectedLocation] = useState("Hyderabad");
  

  function toggleDark() {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  }

  function addToCart(product) {
    setCart((prev) => [...prev, product]);
    toast.success("Added to cart");
  }

  function addToWishlist(product) {
    const exists = wishlist.find((item) => item.id === product.id);

    if (exists) {
      toast.info("Already in wishlist");
      return;
    }

    setWishlist((prev) => [...prev, product]);
    toast.success("Added to wishlist");
  }

  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.info("Removed from cart");
  }

  function removeFromWishlist(id) {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast.info("Removed from wishlist");
  }

  return (
    <AppContext.Provider
      value={{
        dark,
        toggleDark,
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        removeFromWishlist,
        isLoggedIn,
        setIsLoggedIn,
        selectedLocation,
        setSelectedLocation,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}