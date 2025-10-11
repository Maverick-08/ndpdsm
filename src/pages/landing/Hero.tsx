import HeroComponent from "../../components/HeroComponent";

const Hero = () => {
  return (
    <div id="home" className="relative h-[110vh] bg-gradient-to-br from-[#2980B9] via-[#6DD5FA] to-[#FFFFFF]">
      {/* <img
        src={heroImage}
        alt="Hero Image"
        className="absolute z-0 h-full w-full"
      />
      <div className="absolute z-10 w-full h-full bg-blue-500 opacity-50"></div> */}

      <HeroComponent />
    </div>
  );
};

export default Hero;
