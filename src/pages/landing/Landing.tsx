import Hero from "./Hero";
import Navbar from "./Navbar";
// import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="flex flex-col h-999 bg-gray-100">
      <Navbar />
      <Hero />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;