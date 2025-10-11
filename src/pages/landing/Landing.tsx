import About from "./About";
import Contact from "./Contact";
import Hero from "./Hero";
import Navbar from "./Navbar";
import OrganizingTeam from "./OrganizingTeam";
import PublicationPartners from "./PublicationPartners";
import RegistrationFee from "./Registration";
import Theme from "./Theme";
import Footer from "./Footer";
import MobileNavbar from "../../components/MobileNavbar";
import Schedule from "./Schedule";

const Landing = () => {
  return (
    <div className="flex flex-col">
      <Navbar />
      <MobileNavbar />
      <Hero />
      <About />
      <Theme />
      <RegistrationFee />
      <PublicationPartners />
      <Schedule />
      <OrganizingTeam />
      <Contact />
      <Footer />
    </div>
  );
};

export default Landing;