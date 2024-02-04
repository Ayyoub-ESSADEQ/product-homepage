import { Attraction } from "./components/sections/AttractionSection";
import { CustomerReviews } from "./components/sections/CustomerReviewsSection";
import { Features } from "./components/sections/FeaturesSection";
import { Footer } from "./components/sections/FooterSection";
import { Header } from "./components/NavBar";
import { Home } from "./components/sections/HomeSection";
import { Pricing } from "./components/sections/PricingSection";

function App() {
  return (
    <>
      <Header></Header>
      <Home />
      <Attraction />
      <Features />
      <CustomerReviews />
      <Pricing />
      <Footer />
    </>
  );
}

export default App;
