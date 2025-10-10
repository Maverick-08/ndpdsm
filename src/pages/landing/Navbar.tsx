import { useEffect, useState } from "react";
import manitLogo from "../../assets/MANIT_LOGO.webp";
import ndpdsm from "../../assets/NPDSM_logo.webp";

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
      className={`fixed z-100 py-2 w-full flex items-center justify-center transition-all duration-500 ease-in-out  ${
        isScrolled ? "bg-white shadow" : "bg-transparent"
      }`}
    >
      <div
        className={`w-full max-w-7xl ${
          isScrolled ? "text-black" : "text-white"
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
          <div className="flex gap-6 text-md text-bold">
            <div className="">Home</div>
            <div className="">About</div>
            <div className="">Conference Details</div>
            <div className="">Registrations</div>
            <div className="">Publication</div>
            <div className="">Schedule</div>
            <div className="">Commitee</div>
            <div className="">Brochure</div>
            <div className="">Contact</div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Navbar;
