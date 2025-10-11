import { useEffect, useState } from "react";
import manitLogo from "../../assets/MANIT_LOGO.webp";
import ndpdsm from "../../assets/NPDSM_logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const scrollFunction = () => {
      const scrollPosition = window.scrollY;
      console.log(scrollPosition);

      if (scrollPosition > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", scrollFunction);

    return () => window.removeEventListener("scroll", scrollFunction);
  }, []);

  return (
    <section
      className={`fixed z-100 py-2 px-4 w-full hidden md:flex items-center justify-center transition-all duration-500 ease-in-out  ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full max-w-7xl ${
          isScrolled ? "text-black" : "text-neutral-800"
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* MANIT logo */}
          <div className="pl-4 flex gap-2">
            <div className="">
              <img src={manitLogo} alt="" className="w-14 h-14" />
            </div>
            <div className="">
              <img src={ndpdsm} alt="" className="w-14 h-14" />
            </div>
          </div>

          {/* Direct navigation options to pages */}
          <div className="flex gap-6 text-lg text-bold">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              About
            </Link>
            <Link
              to="schedule"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Schedule
            </Link>
            <Link
              to="committee"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Committee
            </Link>
            <Link
              to="brochure"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Brochure
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
