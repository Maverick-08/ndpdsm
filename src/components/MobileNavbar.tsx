import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";
import manitLogo from "../assets/MANIT_LOGO.webp";
import ndpdsm from "../assets/NPDSM_logo.png";

const MobileNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="px-4 fixed z-50 w-full flex md:hidden flex-col bg-white">
      <div className="flex justify-between items-center">
        <div className="flex gap-4">
          <img src={manitLogo} alt="MANIT Logo" className="size-12" />
          <img src={ndpdsm} alt="NDPDSM Logo" className="size-12" />
        </div>
        <div onClick={() => setIsNavbarOpen((prev) => !prev)}>
          {isNavbarOpen ? <IoClose className="size-6"/>:<RxHamburgerMenu className="size-6" /> }
        </div>
      </div>
      <div
        className={`${
          isNavbarOpen ? "flex py-2 text-lg" : "hidden"
        } flex-col items-center gap-4`}
      >
        <Link
          to="home"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Home
        </Link>
        <Link
          to="about"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          About
        </Link>
        <Link
          to="schedule"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Schedule
        </Link>
        <Link
          to="committee"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Committee
        </Link>
        <Link
          to="brochure"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Brochure
        </Link>
        <Link
          to="contact"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default MobileNavbar;
