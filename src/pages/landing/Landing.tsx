import About from "./About";
import Hero from "./Hero";
import Navbar from "./Navbar";
import OrganizingTeam from "./OrganizingTeam";
import PublicationPartners from "./PublicationPartners";
import RegistrationFee from "./Registration";
import Theme from "./Theme";
// import Footer from "./Footer";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <Hero />
      <About />
      <Theme />
      <RegistrationFee />
      <PublicationPartners />
      <OrganizingTeam />
      {/* <Footer /> */}
    </div>
  );
};

export default Landing;