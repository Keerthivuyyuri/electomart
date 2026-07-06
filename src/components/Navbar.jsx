import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Search,
  MapPin,
  User,
  ShoppingCart,
  Heart,
  Moon,
  Sun,
  ChevronDown,
  LogOut,
} from "lucide-react";
import { toast } from "react-toastify";
import { useApp } from "../context/AppContext";

function Navbar() {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  const {
    dark,
    toggleDark,
    cart,
    wishlist,
    selectedLocation,
    setSelectedLocation,
    isLoggedIn,
    setIsLoggedIn,
  } = useApp();

  const locations = ["Hyderabad", "Bangalore", "Chennai", "Mumbai", "Delhi", "Pune"];

  const links = [
    { name: "Home", path: "/" },
    { name: "Products", path: "/products" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  function handleSearch(e) {
    e.preventDefault();

    if (search.trim()) {
      navigate(`/products?search=${encodeURIComponent(search.trim())}`);
    } else {
      navigate("/products");
    }

    setSearch("");
    setOpen(false);
  }

  function handleLogout() {
    setIsLoggedIn(false);
    setShowUserMenu(false);
    setOpen(false);
    toast.success("Logged out successfully");
    navigate("/login");
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full bg-[#07111f] text-white shadow-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center gap-2 px-3 md:px-4 lg:h-24 lg:gap-4 lg:px-8">
        {/* Mobile Menu */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Logo */}
        <span className="flex cursor-default select-none items-center text-xl font-black tracking-tight md:text-2xl">
          <span className="text-white">Electro</span>
          <span className="text-cyan-500">Mart</span>
        </span>

        {/* Desktop + Tablet Nav */}
        <nav className="hidden items-center gap-3 md:flex lg:gap-7">
          {links.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className="text-[13px] font-semibold transition hover:text-cyan-400 lg:text-sm"
            >
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* Search */}
        <form
          onSubmit={handleSearch}
          className="hidden flex-1 items-center rounded-full bg-white px-3 py-2 md:flex lg:px-5 lg:py-3"
        >
          <Search size={18} className="text-slate-500" />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search products..."
            className="w-full bg-transparent px-2 text-[13px] text-slate-900 outline-none lg:px-3 lg:text-sm"
          />
        </form>

        {/* Right Side */}
        <div className="hidden items-center gap-2 md:flex lg:gap-5">
          {/* Location */}
          <div className="relative">
            <button
              onClick={() => setShowLocation(!showLocation)}
              className="flex items-center gap-1 rounded-full border border-slate-700 px-2 py-2 hover:border-cyan-400 lg:gap-2 lg:px-4"
            >
              <MapPin size={17} className="text-cyan-400" />
              <span className="max-w-[70px] truncate text-[12px] lg:max-w-none lg:text-sm">
                {selectedLocation}
              </span>
              <ChevronDown size={15} />
            </button>

            {showLocation && (
              <div className="absolute right-0 mt-2 w-44 overflow-hidden rounded-xl bg-white shadow-xl">
                {locations.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedLocation(city);
                      setShowLocation(false);
                    }}
                    className="block w-full px-4 py-3 text-left text-gray-700 transition hover:bg-cyan-50 hover:text-cyan-600"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme */}
          <button onClick={toggleDark} className="flex-shrink-0">
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* User Dropdown */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setShowUserMenu(!showUserMenu)}
              className="rounded-full p-2 transition hover:bg-white/10"
            >
              <User className="h-5 w-5 lg:h-[21px] lg:w-[21px]" />
            </button>

            {showUserMenu && (
              <div className="absolute right-0 mt-3 w-44 overflow-hidden rounded-2xl bg-white shadow-2xl dark:bg-slate-900">
                {!isLoggedIn ? (
                  <Link
                    to="/login"
                    onClick={() => setShowUserMenu(false)}
                    className="block px-5 py-3 font-semibold text-slate-700 transition hover:bg-cyan-50 hover:text-cyan-600 dark:text-white dark:hover:bg-slate-800"
                  >
                    Login
                  </Link>
                ) : (
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-2 px-5 py-3 font-semibold text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Wishlist */}
          <Link to="/wishlist" className="relative flex-shrink-0">
            <Heart className="h-5 w-5 lg:h-[21px] lg:w-[21px]" />
            <span className="absolute -right-2 -top-2 rounded-full bg-cyan-400 px-1.5 text-[10px] font-bold text-black">
              {wishlist.length}
            </span>
          </Link>

          {/* Cart */}
          <Link to="/cart" className="relative flex-shrink-0">
            <ShoppingCart className="h-5 w-5 lg:h-[21px] lg:w-[21px]" />
            <span className="absolute -right-2 -top-2 rounded-full bg-cyan-400 px-1.5 text-[10px] font-bold text-black">
              {cart.length}
            </span>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="bg-[#07111f] px-5 pb-5 md:hidden">
          <form
            onSubmit={handleSearch}
            className="mb-4 flex items-center rounded-full bg-white px-4 py-3"
          >
            <Search size={18} className="text-slate-500" />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent px-3 text-sm text-slate-900 outline-none"
            />
          </form>

          <div className="mb-5">
            <button
              onClick={() => setShowLocation(!showLocation)}
              className="flex w-full items-center justify-between rounded-full border border-slate-700 px-4 py-3"
            >
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-cyan-400" />
                <span>{selectedLocation}</span>
              </div>

              <ChevronDown size={16} />
            </button>

            {showLocation && (
              <div className="mt-2 overflow-hidden rounded-xl bg-white">
                {locations.map((city) => (
                  <button
                    key={city}
                    onClick={() => {
                      setSelectedLocation(city);
                      setShowLocation(false);
                    }}
                    className="block w-full px-4 py-3 text-left text-gray-700 hover:bg-cyan-50"
                  >
                    {city}
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-4">
            {links.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                {item.name}
              </Link>
            ))}

            {!isLoggedIn ? (
              <Link
                to="/login"
                onClick={() => setOpen(false)}
                className="font-semibold"
              >
                Login
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className="text-left font-semibold text-red-400"
              >
                Logout
              </button>
            )}

            <Link
              to="/wishlist"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Wishlist ({wishlist.length})
            </Link>

            <Link
              to="/cart"
              onClick={() => setOpen(false)}
              className="font-semibold"
            >
              Cart ({cart.length})
            </Link>

            <button
              onClick={toggleDark}
              className="flex items-center gap-2 font-semibold"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Navbar;