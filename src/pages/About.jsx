import {
  ShieldCheck,
  Truck,
  Headphones,
  Award,
  Users,
  Smartphone,
} from "lucide-react";

function About() {
  const features = [
    {
      icon: ShieldCheck,
      title: "100% Genuine Products",
      desc: "Every product is sourced directly from trusted brands with manufacturer warranty.",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      desc: "Quick and secure delivery across India with live order tracking.",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      desc: "Dedicated customer support before and after your purchase.",
    },
    {
      icon: Award,
      title: "Best Quality",
      desc: "Premium consumer electronics with competitive pricing.",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#070b14]">
      {/* Hero */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="rounded-full bg-cyan-100 px-4 py-2 text-sm font-semibold text-cyan-600">
              About ElectroMart
            </span>

            <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl">
              Powering Your Digital Lifestyle
            </h1>

            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-300">
              ElectroMart is your trusted destination for premium consumer
              electronics. We bring together the latest smart gadgets, audio
              devices, wearables, and accessories from leading brands such as
              Noise, boAt, Boult, Fire-Boltt, and Mivi, delivering innovation,
              quality, and value in every purchase.
            </p>

            <div className="mt-10 grid grid-cols-3 gap-5">
              <div className="rounded-3xl bg-white p-6 text-center shadow dark:bg-white/10">
                <Users className="mx-auto text-cyan-500" size={34} />
                <h2 className="mt-3 text-3xl font-black">1M+</h2>
                <p className="text-sm text-slate-500">
                  Happy Customers
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-center shadow dark:bg-white/10">
                <Smartphone className="mx-auto text-cyan-500" size={34} />
                <h2 className="mt-3 text-3xl font-black">500+</h2>
                <p className="text-sm text-slate-500">
                  Electronics
                </p>
              </div>

              <div className="rounded-3xl bg-white p-6 text-center shadow dark:bg-white/10">
                <Award className="mx-auto text-cyan-500" size={34} />
                <h2 className="mt-3 text-3xl font-black">4.9★</h2>
                <p className="text-sm text-slate-500">
                  Customer Rating
                </p>
              </div>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200"
            alt="Electronics"
            className="h-[550px] w-full rounded-[36px] object-cover shadow-2xl"
          />
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-[36px] bg-[#07111f] p-10 text-white lg:p-16">
          <div className="grid gap-10 lg:grid-cols-2">
            <div>
              <h2 className="text-4xl font-black">
                Our Mission
              </h2>

              <p className="mt-6 leading-8 text-slate-300">
                Our mission is to make innovative technology accessible to
                everyone by offering premium electronics at affordable prices.
                We focus on quality, reliability, customer satisfaction, and
                delivering the latest smart gadgets for everyday life.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {features.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white/10 p-6 backdrop-blur"
                  >
                    <Icon
                      size={36}
                      className="text-cyan-400"
                    />

                    <h3 className="mt-5 text-xl font-bold">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="font-semibold text-cyan-500">
            Trusted Brands
          </p>

          <h2 className="mt-2 text-4xl font-black">
            We Partner With
          </h2>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {["Noise", "boAt", "Boult", "Fire-Boltt", "Mivi"].map((brand) => (
            <div
              key={brand}
              className="rounded-3xl bg-white p-8 text-center text-xl font-black shadow transition hover:-translate-y-1 hover:shadow-xl dark:bg-white/10"
            >
              {brand}
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default About;