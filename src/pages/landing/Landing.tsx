import Hero from "./Hero";
import Navbar from "./Navbar";
import PublicationPartners from "./PublicationPartners";
import RegistrationFee from "./Registration";
import Theme from "./Theme";
// import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col">
      <Navbar />
      <Hero />
      <Theme />
      <RegistrationFee />
      <PublicationPartners />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;