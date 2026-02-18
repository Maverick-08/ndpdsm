import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import { Link } from "react-scroll";
import manitLogo from "../assets/MANIT_LOGO.webp";
import ndpdsm from "../assets/NPDSM_logo.png";
import Brochure from "../../public/Broucher.pdf";

const MobileNavbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  return (
    <div className="px-4 fixed z-50 w-full flex md:hidden flex-col bg-white">
      <div className="flex justify-between items-center gap-4">
        <div className="flex-11/12 flex gap-2">
          <img src={manitLogo} alt="MANIT Logo" className="size-16" />
          <div>
            <h1 className="text-center font-bold text-lg">NPDSM</h1>
            <h1 className="text-balance text-center text-xs text-neutral-800">
              New Product Development and Smart Manufacturing
            </h1>
          </div>
          <img src={ndpdsm} alt="NDPDSM Logo" className="size-16" />
        </div>
        <div
          className="flex-1/12 flex justify-center items-center"
          onClick={() => setIsNavbarOpen((prev) => !prev)}
        >
          {isNavbarOpen ? (
            <IoClose className="size-6" />
          ) : (
            <RxHamburgerMenu className="size-6" />
          )}
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
          to="theme"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Conference Details
        </Link>
        <Link
          to="speakers"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Speakers
        </Link>
        <Link
          to="committee"
          smooth={true}
          duration={500}
          onClick={() => setIsNavbarOpen(false)}
        >
          Committee
        </Link>
        <a
          href={Brochure}
          download
          className="cursor-pointer"
          onClick={() => setIsNavbarOpen(false)}
        >
          Brochure
        </a>

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
