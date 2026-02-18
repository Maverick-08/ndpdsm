import springerLogo from "../assets/springerLogo.jpg";

const HeroComponent = () => {
  return (
    <div
      id="Home"
      className="relative z-20 h-screen w-full max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 xl:gap-8"
    >
      <div className="pt-20 lg:pt-40 xl:pt-16 flex flex-col items-center gap-6">
        <div className="text-2xl text-slate-100 lg:text-slate-300">
          <span>
            2<sup>nd </sup>
          </span>
          <span>International Conference On</span>
        </div>
        <div className="text-2xl lg:text-4xl text-center text-wrap lg:text-nowrap font-semibold text-slate-50">
          New Product Development and Smart Manufacturing
        </div>
        <div className="text-2xl lg:text-4xl font-bold text-slate-50 drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)]">
          NPDSM-2026
        </div>
      </div>
      <div className="flex justify-center items-center gap-8 sm:gap-4 flex-col sm:flex-row">
        <div className="bg-white p-2 rounded-xl">
          <img
            src={springerLogo}
            alt="Springer logo"
            className="h-16 sm:h-20 w-52 sm:w-56"
          />
        </div>
        <div className="text-2xl font-semibold text-slate-50">
          26 <sup>th</sup>- 27 <sup>th</sup>
          June, 2026
        </div>
      </div>

      <div className="px-2 flex flex-col items-center">
        <span className="mt-4 font-serif text-lg sm:text-xl underline font-semibold text-slate-100">
          Organised By:{" "}
        </span>
        <span className="mt-2 px-4 rounded-lg py-0.5 text-sm sm:text-lg text-balance text-center text-slate-200 font-semibold">
          Department of Mechanical Engineering & Centre of Excellence in Product
          Design and Smart Manufacturing
        </span>
        <span className="mt-2 px-2 py-0.5 text-sm sm:text-lg text-balance text-center text-slate-200 font-semibold">
          Maulana Azad National Institute of Technology, Bhopal - 462003 (Madhya
          Pradesh)
        </span>
      </div>
      <div className="px-2 flex flex-col items-center">
        <span className="mt-2 font-serif text-lg sm:text-xl underline font-semibold text-slate-100">
          In association with:{" "}
        </span>
        <span className="mt-2 px-2 py-0.5 text-sm sm:text-lg text-balance text-center text-slate-200 font-semibold">
          Gazi University, Ankara, Türkiye
        </span>
      </div>
    </div>
  );
};

export default HeroComponent;
