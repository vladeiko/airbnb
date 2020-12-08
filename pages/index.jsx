import Header from "../components/Header/index";
import Places from "../components/Places/index";
import CardsLinks from "../components/CardsLinks/index";
import OnlineImpressions from "../components/OnlineImpressions/index";
import Footer from "../components/Footer/index";

export default function App() {
  return (
    <div>
      <Header />
      <Places />
      <CardsLinks />
      <OnlineImpressions />
      <CardsLinks />
      <Footer />
    </div>
  );
}
