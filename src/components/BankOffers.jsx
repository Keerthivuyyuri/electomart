import { useState } from "react";
import { CreditCard, X } from "lucide-react";

function BankOffers() {
  const [selectedOffer, setSelectedOffer] = useState(null);

  const offers = [
    {
      id: 1,
      title: "SBI Cashback Credit Card",
      subtitle: "Get Flat 10% Instant Discount",
      bg: "from-purple-700 via-fuchsia-500 to-pink-300",
    },
    {
      id: 2,
      title: "SBI SimplyCLICK Credit Card",
      subtitle: "Get Flat 7% Instant Discount",
      bg: "from-sky-500 via-cyan-400 to-white",
    },
  ];

  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-black dark:text-white">
          Exciting SBI Bank Offers For You
        </h2>

        <div className="grid grid-cols-1 grid-rows-2 gap-6 lg:grid-cols-2 lg:grid-rows-1">
          {offers.map((offer) => (
            <button
              key={offer.id}
              onClick={() => setSelectedOffer(offer)}
              className={`relative h-[140px] overflow-hidden rounded-[18px] bg-gradient-to-r ${offer.bg} px-8 text-left shadow-lg transition hover:scale-[1.02]`}
            >
              <div className="flex h-full items-center justify-between">
                <div>
                  <p className="text-lg font-black text-white">
                    {offer.subtitle}
                  </p>
                  <h3 className="mt-1 text-3xl font-black text-white">
                    {offer.title}
                  </h3>
                </div>

                <CreditCard size={70} className="text-white" />
              </div>
            </button>
          ))}
        </div>
      </section>

      {selectedOffer && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 px-4">
          <div className="relative max-h-[85vh] w-full max-w-4xl overflow-y-auto rounded-[28px] bg-white p-8 shadow-2xl dark:bg-[#111827]">
            <button
              onClick={() => setSelectedOffer(null)}
              className="absolute right-5 top-5 rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <X size={22} />
            </button>

            <h2 className="text-3xl font-black text-cyan-600">
              Terms and Conditions
            </h2>

            <p className="mt-6 font-semibold">
              Offer of up to 10% instant savings for SBI Bank Credit Card holders.
            </p>

            <p className="mt-4">
              <strong>Offer Period:</strong> 00:00 AM on 03rd July to 11:59 PM
              on 12th July 2026, as applicable.
            </p>

            <div className="mt-8 space-y-6 text-sm leading-7 text-slate-700 dark:text-slate-300">
              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  1) Offer Details:
                </h3>

                <p className="mt-3">
                  (a) Customers who purchase eligible products during the Offer
                  Period using an SBI Bank Credit Card shall receive the benefits
                  mentioned below:
                </p>

                <div className="mt-4 overflow-x-auto">
                  <table className="w-full border-collapse border border-slate-300 text-left dark:border-white/20">
                    <thead>
                      <tr className="bg-slate-100 dark:bg-white/10">
                        <th className="border border-slate-300 p-3 dark:border-white/20">
                          SBI Credit Card Variant
                        </th>
                        <th className="border border-slate-300 p-3 dark:border-white/20">
                          Offer Benefit
                        </th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="border border-slate-300 p-3 dark:border-white/20">
                          SBI Cashback Credit Card
                        </td>
                        <td className="border border-slate-300 p-3 dark:border-white/20">
                          10% Instant Discount
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-slate-300 p-3 dark:border-white/20">
                          SBI SimplyCLICK Credit Card
                        </td>
                        <td className="border border-slate-300 p-3 dark:border-white/20">
                          7% Instant Discount
                        </td>
                      </tr>

                      <tr>
                        <td className="border border-slate-300 p-3 dark:border-white/20">
                          SBI Prime Credit Card
                        </td>
                        <td className="border border-slate-300 p-3 dark:border-white/20">
                          10% Instant Discount
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <p className="mt-3">
                  (b) Offer is applicable on selected electronics products
                  including audio devices, wearables, smart devices, and
                  accessories.
                </p>

                <p>
                  (c) Offer is not applicable on selected excluded products, gift
                  cards, cancelled orders, returned products, or disputed
                  transactions.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  2) Offer Eligibility:
                </h3>

                <p className="mt-3">
                  (a) The customer must use an eligible SBI Bank Credit Card at
                  checkout.
                </p>
                <p>
                  (b) The offer is valid once per customer per card during the
                  Offer Period.
                </p>
                <p>
                  (c) The transaction must be completed successfully using the
                  eligible SBI Credit Card.
                </p>
                <p>
                  (d) The offer is valid only on online purchases made through
                  ElectroMart.
                </p>
                <p>
                  (e) This offer cannot be clubbed with any other bank offer or
                  coupon unless specifically mentioned.
                </p>
                <p>
                  (f) EMI transactions may be eligible only if mentioned on the
                  checkout page.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  3) Offer Benefits:
                </h3>

                <p className="mt-3">
                  (a) The discount will be applied instantly at checkout after
                  selecting the eligible SBI Bank Credit Card.
                </p>
                <p>
                  (b) Maximum savings may vary depending on the product category
                  and card type.
                </p>
                <p>
                  (c) If the order is cancelled or returned, the offer benefit
                  will be reversed.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-black text-slate-900 dark:text-white">
                  4) Other Terms and Conditions:
                </h3>

                <p className="mt-3">
                  (a) The SBI Credit Card account must be active and in good
                  standing.
                </p>
                <p>
                  (b) Transactions made using corporate cards, business cards, or
                  commercial cards may not be eligible.
                </p>
                <p>
                  (c) The offer is non-transferable, non-negotiable, and cannot
                  be exchanged for cash.
                </p>
                <p>
                  (d) ElectroMart and SBI Bank reserve the right to modify,
                  suspend, or withdraw the offer at any time.
                </p>
                <p>
                  (e) Any disputes related to product delivery, quality, return,
                  or refund shall be handled by ElectroMart.
                </p>
                <p>
                  (f) Any disputes related to card eligibility or payment shall
                  be handled as per SBI Bank’s policies.
                </p>
                <p>
                  (g) Participation in this offer implies acceptance of these
                  terms and conditions.
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedOffer(null)}
              className="mt-8 w-full rounded-full bg-cyan-500 py-3 font-bold text-white transition hover:bg-cyan-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default BankOffers;