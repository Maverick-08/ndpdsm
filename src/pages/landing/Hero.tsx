import heroImage from "../../assets/conference-hero.jpg";
import HeroComponent from "../../components/HeroComponent";

const Hero = () => {
  return (
    <div className="relative h-[110vh]">
      <img
        src={heroImage}
        alt="Hero Image"
        className="absolute z-0 h-full w-full"
      />
      <div className="absolute z-10 w-full h-full bg-blue-500 opacity-70"></div>

      <HeroComponent />
    </div>
  );
};

export default Hero;
