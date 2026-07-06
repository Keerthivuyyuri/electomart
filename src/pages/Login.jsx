import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { useApp } from "../context/AppContext";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { setIsLoggedIn } = useApp();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

function handleSubmit(e) {
  e.preventDefault();

  if (!form.email.includes("@")) {
    toast.error("Please enter a valid email");
    return;
  }

  if (form.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return;
  }

  const users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(
    (item) =>
      item.email === form.email &&
      item.password === form.password
  );

  if (!user) {
    toast.error("Invalid email or password");
    return;
  }

  toast.success(`Welcome ${user.name}`);
  setIsLoggedIn(true);
  navigate("/");
}

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-4 py-16 dark:bg-[#070b14]">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[36px] bg-white shadow-2xl dark:bg-white/10 lg:grid-cols-2">
        {/* Left */}
        <div className="hidden bg-gradient-to-br from-[#07111f] via-[#10233c] to-[#00bfa6] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <h2 className="text-3xl font-black">
              Electro<span className="text-cyan-300">Mart</span>
            </h2>

            <h1 className="mt-16 text-5xl font-black leading-tight">
              Welcome Back to Smart Shopping
            </h1>                                                                                                       

            <p className="mt-6 text-slate-200">
              Login to explore premium electronics, wishlist your favorite
              products, and continue shopping with ElectroMart.
            </p>
          </div>

          <p className="text-sm text-slate-300">
            Noise • boAt • Boult • Fire-Boltt • Mivi
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-8 sm:p-12">
          <h1 className="text-4xl font-black">Login</h1>

          <p className="mt-3 text-slate-500 dark:text-slate-300">
            Enter your details to access your account.
          </p>

          <div className="relative mt-8">
            <Mail
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              name="email"
              type="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              className="w-full rounded-full border px-12 py-4 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
            />
          </div>

          <div className="relative mt-5">
            <Lock
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full rounded-full border px-12 py-4 pr-14 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
            />

            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-500"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <div className="mt-5 flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-slate-500 dark:text-slate-300">
              <input type="checkbox" className="accent-cyan-500" />
              Remember me
            </label>

            <button type="button" className="font-semibold text-cyan-500">
              Forgot Password?
            </button>
          </div>

          <button className="mt-8 w-full rounded-full bg-cyan-500 py-4 font-bold text-white transition hover:bg-[#07111f]">
            Login
          </button>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-300">
            Don&apos;t have an account?{" "}
            <Link to="/signup" className="font-bold text-cyan-500">
              Sign Up
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Login;