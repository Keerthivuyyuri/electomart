import { toast } from "react-toastify";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Headphones,
} from "lucide-react";
import { useApp } from "../context/AppContext";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Message sent successfully!");
    e.target.reset();
  };
  const { selectedLocation } = useApp();
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      value: "+91 98765 43210",
    },
    {
      icon: Mail,
      title: "Email",
      value: "support@electromart.com",
    },
    {
  icon: MapPin,
  title: "Visit Us",
  value: `${selectedLocation}, India`,
},
    {
      icon: Clock,
      title: "Working Hours",
      value: "Mon - Sat | 9:00 AM - 8:00 PM",
    },
  ];

  return (
    <div className="bg-slate-50 dark:bg-[#070b14]">
      {/* Hero */}
      <section className="bg-gradient-to-r from-[#07111f] via-[#10233c] to-[#00bfa6] py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <p className="font-semibold text-cyan-300">
            Contact ElectroMart
          </p>

          <h1 className="mt-4 text-5xl font-black">
            We'd Love to Hear From You
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-200">
            Have a question about our products or need assistance?
            Our team is always ready to help you.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="mx-auto -mt-14 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-3xl bg-white p-8 text-center shadow-lg dark:bg-white/10"
              >
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-cyan-100 text-cyan-600">
                  <Icon size={30} />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-slate-600 dark:text-slate-300">
                  {item.value}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact Form */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Left */}
          <div>
            <p className="font-semibold text-cyan-500">
              Get in Touch
            </p>

            <h2 className="mt-3 text-4xl font-black">
              Let's Talk About Your Next Purchase
            </h2>

            <p className="mt-6 leading-8 text-slate-600 dark:text-slate-300">
              Whether you need help choosing the right gadget,
              tracking an order, or learning more about our
              products, our experts are here to assist you.
            </p>

            <div className="mt-10 rounded-3xl bg-[#07111f] p-8 text-white">
              <Headphones
                className="text-cyan-400"
                size={40}
              />

              <h3 className="mt-5 text-2xl font-bold">
                Customer Support
              </h3>

              <p className="mt-3 text-slate-300">
                Our support team is available 24/7 to answer
                your questions and help resolve any issues.
              </p>
            </div>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="rounded-[36px] bg-white p-8 shadow-xl dark:bg-white/10"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                required
                type="text"
                placeholder="Your Name"
                className="rounded-full border px-5 py-4 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
              />

              <input
                required
                type="email"
                placeholder="Email Address"
                className="rounded-full border px-5 py-4 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
              />
            </div>

            <input
              required
              type="text"
              placeholder="Subject"
              className="mt-5 w-full rounded-full border px-5 py-4 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
            />

            <textarea
              required
              rows="6"
              placeholder="Write your message..."
              className="mt-5 w-full rounded-3xl border px-5 py-4 outline-none focus:border-cyan-500 dark:border-white/10 dark:bg-slate-900"
            />

            <button
              type="submit"
              className="mt-6 w-full rounded-full bg-cyan-500 py-4 font-bold text-white transition hover:bg-[#07111f]"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Map */}
       <section className="mx-auto max-w-7xl px-4 pb-20 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-[36px] shadow-xl">
        <iframe
          title="ElectroMart Location"
          src={`https://maps.google.com/maps?q=${encodeURIComponent(
            selectedLocation
          )}&t=&z=13&ie=UTF8&iwloc=&output=embed`}
          width="100%"
          height="450"
          className="block w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      </div>
    </section>
    </div>
  );
}

export default Contact;