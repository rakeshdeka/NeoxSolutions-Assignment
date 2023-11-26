import Home from "./components/Home";
import PrevClients from "./components/PrevClients";
import PrevProjects from "./components/PrevProjects";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="">
      <Header />
      <Home />
      <PrevClients />
      <PrevProjects />
      <Services />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
