import HeroComponent from "../../components/HeroComponent";
import BackgroungImage from "../../assets/background.png";

const Hero = () => {
  return (
    <div id="home" className="relative h-[110vh]">
      {/* <img
        src={heroImage}
        alt="Hero Image"
        className="absolute z-0 h-full w-full"
      />
      <div className="absolute z-10 w-full h-full bg-blue-500 opacity-50"></div> */}

      <img
        src={BackgroungImage}
        alt="background image"
        className="absolute z-0 w-full h-full object-cover "
      />
      <div className="absolute top-0 z-10 h-full w-full bg-black opacity-10 md:opacity-30">
      </div>
        <HeroComponent />
    </div>
  );
};

export default Hero;
