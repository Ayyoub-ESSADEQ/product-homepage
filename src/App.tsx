import { Attraction } from "./sections/AttractionSection";
import { CustomerReviews } from "./sections/CustomerReviewsSection";
import { Features } from "./sections/FeaturesSection";
import { Footer } from "./sections/FooterSection";
import { Header } from "./components/NavBar";
import { Home } from "./sections/HomeSection";
import { Pricing } from "./sections/PricingSection";

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
