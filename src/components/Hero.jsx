import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  BadgePercent,
} from "lucide-react";

function Hero() {
  const slides = [
    {
      badge: "24 Hours Flash Sale",
      title: "Biggest Daily Price Drops",
      subtitle: "Every day, unlock lowest price deals on smart gadgets.",
      button: "Shop Now",
      path: "/products?category=Offers",
      bgImage:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=2000&q=80",
      productImage:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=900&q=80",
    },
    {
      badge: "Premium Audio",
      title: "Sound That Moves With You",
      subtitle: "Shop earbuds, headphones, speakers and neckbands.",
      button: "Explore Audio",
      path: "/products?category=Audio",
      bgImage:
        "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?w=2000&q=80",
      productImage:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=900&q=80",
    },
    {
      badge: "Smart Wearables",
      title: "Track Fitness. Stay Connected.",
      subtitle: "Smartwatches and fitness bands with exciting offers.",
      button: "View Wearables",
      path: "/products?category=Wearables",
      bgImage:
        "https://images.unsplash.com/photo-1511499767150-a48a237f0083?w=2000&q=80",
      productImage:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=900&q=80",
    },
    {
      badge: "Smart Devices",
      title: "Power Your Everyday Tech",
      subtitle: "Chargers, power banks, soundbars and smart accessories.",
      button: "Shop Devices",
      path: "/products?category=Smart Devices",
      bgImage:
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=2000&q=80",
      productImage:
        "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=900&q=80",
    },
    {
      badge: "Mega Brand Offers",
      title: "Deals From Noise, boAt & More",
      subtitle: "Save more on Noise, boAt, Boult, Fire-Boltt and Mivi.",
      button: "Grab Deals",
      path: "/products?category=Offers",
      bgImage:
        "https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=2000&q=80",
      productImage:
        "https://images.unsplash.com/photo-1607083206968-13611e3d76db?w=900&q=80",
    },
  ];

useEffect(() => {
  const timer = setInterval(() => {
    setActive((prev) => (prev + 1) % slides.length);
  }, 4500);

  return () => clearInterval(timer);
}, [slides.length]);
  
  const [active, setActive] = useState(0);
  const current = slides[active];

  function nextSlide() {
    setActive((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setActive((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }


  return (
    <section className="w-full pt-0 pb-6">
      <div
        className="relative min-h-[650px] overflow-hidden rounded-none"
        style={{
          backgroundImage: `
            linear-gradient(
              90deg,
              rgba(8,12,22,0.92) 0%,
              rgba(8,12,22,0.82) 42%,
              rgba(8,12,22,0.55) 70%,
              rgba(8,12,22,0.35) 100%
            ),
            url(${current.bgImage})
          `,
        }}
      >
        {/* Decorative glow */}
        <div className="absolute -left-24 -top-24 h-80 w-80 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />

        {/* Arrows */}
        <button
          type="button"
          onClick={prevSlide}
          className="absolute left-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-cyan-500"
        >
          <ChevronLeft size={28} />
        </button>

        <button
          type="button"
          onClick={nextSlide}
          className="absolute right-5 top-1/2 z-30 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur transition hover:bg-cyan-500"
        >
          <ChevronRight size={28} />
        </button>

        {/* Content */}
        <div className="relative z-20 grid min-h-[620px] items-center gap-10 px-8 py-14 md:grid-cols-2 lg:px-16">
          <div className="max-w-[640px] text-white">
            <div className="inline-flex items-center gap-2 rounded-full bg-yellow-300 px-5 py-2 text-sm font-black uppercase tracking-wide text-[#29124f]">
              <BadgePercent size={18} />
              {current.badge}
            </div>

            <h1 className="mt-8 text-4xl font-black uppercase leading-tight sm:text-5xl lg:text-6xl">
              {current.title}
            </h1>

            <p className="mt-6 max-w-xl text-lg font-semibold leading-8 text-slate-200">
              {current.subtitle}
            </p>

            <Link
              to={current.path}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#00e0c6] px-9 py-4 text-lg font-black text-[#07111f] transition hover:bg-white"
            >
              {current.button}
              <ArrowRight size={20} />
            </Link>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute h-96 w-96 rounded-full bg-cyan-300/20 blur-[100px]" />

            <img
              src={current.productImage}
              alt={current.title}
              className="relative z-10 h-[320px] w-full max-w-[560px] rounded-[32px] object-cover shadow-2xl transition duration-700 hover:scale-105 sm:h-[420px] lg:h-[500px]"
            />
          </div>
        </div>

        {/* Dots */}
        <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              onClick={() => setActive(index)}
              className={`transition-all ${
                active === index
                  ? "h-3 w-12 rounded-full bg-[#00e0c6]"
                  : "h-3 w-3 rounded-full bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;