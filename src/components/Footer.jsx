import {
  CreditCard,
  ShieldCheck,
  Truck,
  Headphones,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="mt-20 bg-[#0B1220] text-white">
      {/* Top Section */}
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-black">
              Electro<span className="text-cyan-400">Mart</span>
            </Link>

            <p className="mt-6 max-w-md leading-7 text-slate-300">
              ElectroMart brings premium consumer electronics, smart gadgets,
              audio devices, wearables, and accessories designed for modern
              lifestyles with quality you can trust.
            </p>

            <div className="mt-8 flex gap-4">
              {[FaFacebookF, FaInstagram, FaTwitter, FaYoutube].map((Icon, index) => (
                <button
                  key={index}
                  className="rounded-full bg-slate-800 p-3 transition duration-300 hover:bg-cyan-500"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Shop</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link to="/products" className="hover:text-cyan-400">
                  Headphones
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-cyan-400">
                  Earbuds
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-cyan-400">
                  Smart Watches
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-cyan-400">
                  Speakers
                </Link>
              </li>

              <li>
                <Link to="/products" className="hover:text-cyan-400">
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Support</h3>

            <ul className="space-y-3 text-slate-300">
              <li>Help Center</li>
              <li>Track Order</li>
              <li>Returns</li>
              <li>Warranty</li>
              <li>FAQs</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-5 text-lg font-bold">Company</h3>

            <ul className="space-y-3 text-slate-300">
              <li>
                <Link to="/about" className="hover:text-cyan-400">
                  About Us
                </Link>
              </li>

              <li>Careers</li>

              <li>
                <Link to="/contact" className="hover:text-cyan-400">
                  Contact
                </Link>
              </li>

              <li>Privacy Policy</li>

              <li>Terms & Conditions</li>
            </ul>
          </div>
        </div>

        {/* Feature Boxes */}

        <div className="mt-16 grid gap-6 rounded-3xl border border-slate-700 bg-[#121C2E] p-8 md:grid-cols-3">
          <div className="flex items-center gap-4">
            <div className="rounded-full bg-cyan-500/20 p-4">
              <Truck className="text-cyan-400" />
            </div>

            <div>
              <h4 className="font-semibold">Free Shipping</h4>
              <p className="text-sm text-slate-400">
                On orders above ₹999
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-cyan-500/20 p-4">
              <ShieldCheck className="text-cyan-400" />
            </div>

            <div>
              <h4 className="font-semibold">Secure Payments</h4>
              <p className="text-sm text-slate-400">
                100% protected checkout
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-full bg-cyan-500/20 p-4">
              <Headphones className="text-cyan-400" />
            </div>

            <div>
              <h4 className="font-semibold">24/7 Support</h4>
              <p className="text-sm text-slate-400">
                Dedicated customer service
              </p>
            </div>
          </div>
        </div>

        {/* Newsletter */}

        <div className="mt-16 flex flex-col items-center justify-between gap-8 rounded-3xl bg-cyan-500 px-8 py-10 lg:flex-row">
          <div>
            <h2 className="text-3xl font-black text-[#0B1220]">
              Subscribe to our Newsletter
            </h2>

            <p className="mt-2 text-[#0B1220]">
              Get updates about offers and latest product launches.
            </p>
          </div>

          <div className="flex w-full max-w-lg overflow-hidden rounded-full bg-white">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-5 py-4 text-slate-800 outline-none"
            />

            <button className="bg-[#0B1220] px-8 font-semibold text-white transition hover:bg-black">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom */}

      <div className="border-t border-slate-700">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
          <p className="text-sm text-slate-400">
            © 2026 ElectroMart. All rights reserved.
          </p>

          <div className="flex items-center gap-3 text-slate-300">
            <CreditCard size={18} />
            <span className="text-sm">
              Visa • Mastercard • RuPay • UPI
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;