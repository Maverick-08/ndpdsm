import manitLogo from "../../assets/MANIT_LOGO.webp";
import ndpdsm from "../../assets/NPDSM_logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  // const [isScrolled, setIsScrolled] = useState(true);

  // useEffect(() => {
  //   const scrollFunction = () => {
  //     const scrollPosition = window.scrollY;
  //     console.log(scrollPosition);

  //     if (scrollPosition > 10) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener("scroll", scrollFunction);

  //   return () => window.removeEventListener("scroll", scrollFunction);
  // }, []);

  return (
    <section
      className={`fixed z-100 py-2 px-4 w-full hidden md:flex items-center justify-center transition-all duration-500 ease-in-out  bg-white`}
    >
      <div
        className={`w-full max-w-7xl `}
      >
        <div className="w-full flex items-center justify-between ">
          <div className="pl-4 flex-1/5 flex items-center gap-4 ">

              {/* MANIT logo */}
              <img src={manitLogo} alt="" className="size-24 rounded-full" />

              <div>
                <h1 className="text-center font-bold text-2xl">NPDSM</h1>
                <h1 className="text-balance text-center text-sm text-neutral-800">New Product Development and Smart Manufacturing</h1>
              </div>

              {/* NDPSDSM Logo  */}
              <img src={ndpdsm} alt="" className="size-24" />
            
          </div>

          {/* Direct navigation options to pages */}
          <div className="flex-2/5 flex justify-center gap-6 text-lg text-bold ">
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
              to="speakers"
              smooth={true}
              duration={500}
              className="cursor-pointer"
            >
              Speakers
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
