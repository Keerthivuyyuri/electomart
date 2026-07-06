import { Box, BadgeCheck, Headphones } from "lucide-react";

function WhyChoose() {
  const items = [
    {
      icon: BadgeCheck,
      title: "ElectroMart Promise",
      desc: "We focus on reliable products, trusted brands, and a smooth shopping experience for every customer.",
    },
    {
      icon: Box,
      title: "Omni Channel Experience",
      desc: "Discover the best electronics online and enjoy a convenient shopping journey from browsing to delivery.",
    },
    {
      icon: Headphones,
      title: "Trusted Electronics Support",
      desc: "Get helpful product guidance and support to choose audio, wearables, and smart devices that fit your needs.",
    },
  ];

  return (
    <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
      <h2 className="mb-7 text-3xl font-black dark:text-white">
        Why ElectroMart ?
      </h2>

      <div className="rounded-3xl bg-gradient-to-r from-sky-500 via-violet-700 to-slate-900 p-8 text-white shadow-xl sm:p-10 lg:p-14">
        <div className="grid gap-10 md:grid-cols-3">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div key={item.title}>
                <Icon size={48} className="mb-5 text-white" />

                <h3 className="text-xl font-black leading-tight">
                  {item.title}
                </h3>

                <p className="mt-4 max-w-sm leading-7 text-white/85">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default WhyChoose;