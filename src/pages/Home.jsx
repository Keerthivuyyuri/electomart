import Hero from "../components/Hero";
import ComingUpBanner from "../components/ComingUpBanner";
import PromoGrid from "../components/PromoGrid";
import BankOffers from "../components/BankOffers";
import DealsOfDay from "../components/DealsOfDay";
import FlashDeals from "../components/FlashDeals";
import BrandSection from "../components/BrandSection";
import WhyChoose from "../components/WhyChoose";
import CategoryStrip from "../components/CategoryStrip";

function Home() {
  return (
    <div className="bg-[#f5f7fb] dark:bg-[#070b14]">
      <Hero />
      <CategoryStrip />
      <ComingUpBanner />
      <PromoGrid />
      <FlashDeals />
      <DealsOfDay />
      <BankOffers />
      <WhyChoose />
      <BrandSection />
    </div>
  );
}

export default Home;