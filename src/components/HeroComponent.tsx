import { Link } from "react-scroll";

const HeroComponent = () => {
  return (
    <div
      id="Home"
      className="relative z-20 h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-8 text-white"
    >
      <div className="pt-8 flex flex-col items-center gap-6">
        <div className="text-4xl lg:text-6xl font-bold">NPDSM-2026</div>
        <div className="text-lg lg:text-xl font-thin">
          <span>
            2<sup>nd </sup>
          </span>
          <span>International Conference On</span>
        </div>
        <div className="text-2xl lg:text-4xl text-center text-wrap lg:text-nowrap font-semibold">
          New Product Development and Smart Manufacturing
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col sm:flex-row gap-4 text-lg font-semibold">
          <div className="flex gap-2 items-center pr-4 sm:border-r">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span className="">
              June 26
              <sup>th </sup>- June 27
              <sup>th </sup>, 2026
            </span>
          </div>
          <div className="flex gap-2 items-center pr-4 sm:border-r">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>
            <span>MANIT, Bhopal, India</span>
          </div>
          <div className="flex gap-2 items-center">
            <div className="h-2 w-2 rounded-full bg-yellow-500"></div>{" "}
            <span>Hybrid Mode</span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center">
        <div className="flex items-center gap-8">
          <Link to="registration" smooth={true} duration={500} className="px-8 py-2 bg-white rounded-lg text-neutral-800 text-sm sm:text-lg font-semibold cursor-pointer hover:opacity-90">
            Register Now
          </Link>
          <Link to="theme" smooth={true} duration={500} className="px-8 py-2 bg-white rounded-lg text-neutral-800 text-sm sm:text-lg font-semibold cursor-pointer hover:opacity-90">
            View Program
          </Link>
        </div>
      </div>

      <div className="px-2 flex flex-col items-center">
        <span className="mt-4 font-serif text-lg sm:text-xl underline font-semibold">
          Organised By:{" "}
        </span>
        <span className="mt-2 px-4 rounded-lg py-0.5 text-sm sm:text-lg text-balance text-center text-neutral-800 font-semibold">
          Department of Mechanical Engineering & Centre of Excellence in Product
          Design and Smart Manufacturing
        </span>
        <span className="mt-2 px-2 py-0.5 text-sm sm:text-lg text-balance text-center text-neutral-800 font-semibold">
          Maulana Azad National Institute of Technology, Bhopal - 462003 (Madhya
          Pradesh)
        </span>
      </div>
    </div>
  );
};

export default HeroComponent;
