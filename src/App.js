import Banner from "./components/Banner/Banner";
import ContactFrom from "./components/ContactForm/ContactFrom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HowItWork from "./components/HowItWork/HowItWork";
import SectionInfo from "./components/SectionInfo/SectionInfo";
import VideosComp from "./components/VideosComp/VideosComp";
import WaterFall from "./components/WaterFall/WaterFall";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <SectionInfo />
      <HowItWork />
      <WaterFall />
      <VideosComp />
      <ContactFrom />
      <Footer />
    </>
  );
}

export default App;
