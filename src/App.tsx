import Hero from "./Hero";
import Navbar from "./Navbar";
import Category from "./components/Category";
import FeatureSectionFruits from "./components/FeatureSectionFruits";

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Category />
      <FeatureSectionFruits />
    </main>
  );
};

export default App;
