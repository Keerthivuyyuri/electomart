import { useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";

function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
  e.preventDefault();

  if (form.name.length < 3) {
    toast.error("Name must be at least 3 characters");
    return;
  }

  if (!form.email.includes("@")) {
    toast.error("Please enter a valid email");
    return;
  }

  if (form.password.length < 6) {
    toast.error("Password must be at least 6 characters");
    return;
  }

  if (form.password !== form.confirmPassword) {
    toast.error("Passwords do not match");
    return;
  }

  // ✅ Add this block here
  const users = JSON.parse(localStorage.getItem("users")) || [];

  const userExists = users.find(
    (user) => user.email === form.email
  );

  if (userExists) {
    toast.error("User already exists");
    return;
  }

  users.push({
    name: form.name,
    email: form.email,
    password: form.password,
  });

  localStorage.setItem("users", JSON.stringify(users));

  // Success
  toast.success("Account created successfully");
  navigate("/login");
}
  return (
    <section className="flex min-h-screen items-center justify-center bg-[#f5f7fb] px-4 py-16 dark:bg-[#070b14]">
      <div className="grid w-full max-w-5xl overflow-hidden rounded-[36px] bg-white shadow-2xl dark:bg-white/10 lg:grid-cols-2">
        <div className="hidden bg-gradient-to-br from-[#07111f] via-[#10233c] to-[#00bfa6] p-10 text-white lg:flex lg:flex-col lg:justify-between">
          <div>
            <h2 className="text-3xl font-black">
              Electro<span className="text-cyan-300">Mart</span>
            </h2>

            <h1 className="mt-16 text-5xl font-black leading-tight">
              Create Your Smart Shopping Account
            </h1>

            <p className="mt-6 text-slate-200">
              Join ElectroMart to explore premium electronics, save your wishlist,
              and enjoy a smooth shopping experience.
            </p>
          </div>

          <p className="text-sm text-slate-300">
            Noise • boAt • Boult • Fire-Boltt • Mivi
          </p>
        </div>

        <form onSubmit={handleSubmit} className="p-8 sm:p-12">
          <h1 className="text-4xl font-black">Sign Up</h1>

          <p className="mt-3 text-slate-500 dark:text-slate-300">
            Create your ElectroMart account.
          </p>

          <div className="relative mt-8">
            <User
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full rounded-full border px-12 py-4 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
            />
          </div>

          <div className="relative mt-5">
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

          <div className="relative mt-5">
            <Lock
              size={20}
              className="absolute left-5 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              name="confirmPassword"
              type={showConfirmPassword ? "text" : "password"}
              placeholder="Confirm Password"
              value={form.confirmPassword}
              onChange={handleChange}
              className="w-full rounded-full border px-12 py-4 pr-14 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
            />

            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-500 hover:text-cyan-500"
            >
              {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
          </div>

          <button className="mt-8 w-full rounded-full bg-cyan-500 py-4 font-bold text-white transition hover:bg-[#07111f]">
            Create Account
          </button>

          <p className="mt-6 text-center text-sm text-slate-500 dark:text-slate-300">
            Already have an account?{" "}
            <Link to="/login" className="font-bold text-cyan-500">
              Login
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
}

export default Signup;