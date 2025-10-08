import Hero from "./Hero";
import Navbar from "./Navbar";
import Theme from "./Theme";
// import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="w-full max-w-7xl mx-auto flex flex-col">
      <Navbar />
      <Hero />
      <Theme />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;