import { Attraction } from "./components/AttractionSection";
import { CustomerReviews } from "./components/CustomerReviewsSection";
import { Features } from "./components/FeaturesSection";
import { Footer } from "./components/FooterSection";
import { Header } from "./components/NavBar";
import { Home } from "./components/HomeSection";
import { Pricing } from "./components/PricingSection";

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
