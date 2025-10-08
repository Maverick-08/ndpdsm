import Hero from "./Hero";
import Navbar from "./Navbar";
import RegistrationFee from "./Registration";
// import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="flex flex-col h-999 bg-gray-100">
      <Navbar />
      <Hero />
      <RegistrationFee />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;