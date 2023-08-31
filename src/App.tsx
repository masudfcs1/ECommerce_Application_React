import Hero from "./Hero";
import Navbar from "./Navbar";
import BannerSection from "./components/BannerSection";
import Category from "./components/Category";
import FeatureSectionBreakfast from "./components/FeatureSectionBreakfast";
import FeatureSectionFruits from "./components/FeatureSectionFruits";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
      <FeatureSectionBreakfast />
      <BannerSection />
    </main>
  );
};

export default App;
