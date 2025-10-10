import Badge from "../../components/Badge";
import ThemeCard from "../../components/ThemeCard";

const Theme = () => {
  const advanceMachiningThemes: string[] = [
    "Non conventional & hybrid manufacturing processes",
    "Advanced Manufacturing Systems",
    "Micro and nano machining",
    "Machining of composite materials",
    "Optimization of machining parameters",
    "Any other related topics",
  ];
  const newProductDevelopmentThemes: string[] = [
    "Advanced design methods, Design optimization, Analysis methods",
    "Design of micro, meso, nano products",
    "Collaborative product design",
    "Reverse engineering",
    "Sustainable product development",
    "Data analytics for product improvement",
    "Agile product development",
    "DFX, DFMA, QFD, TRIZ, Idea development techniques",
    "Customization and personalization in product designs",
    "Advanced materials, modelling in medical, dental and bio-modelling, bio- implants",
    "Any other related topics",
  ];
  const smartManufacturingThemes: string[] = [
    "IOT in manufacturing",
    "Cyber security in manufacturing",
    "Digital twins in manufacturing",
    "Human machine collaboration",
    "Online machine condition monitoring",
    "AI integration in Manufacturing",
    "Machine learning",
    "Any other related topics",
  ];
  const adaptiveManufacturingThemes: string[] = [
    "Challenges in AM",
    "Effect of process parameters on suface finish and mechanical strength",
    "Modelling and simulation of AM processes, parts and structures",
    "Analysis of residual stresses generated in AM parts",
    "AM applications in repair and refurbishment of aircraft components",
    "Applications of AM in aerospace, automobile, medical and food industries",
    "3D printing of smart materials/ 4D printing",
    "Bioprinting (organ printing, plastic surgery, etc)",
    "Any other related topics",
  ];
  const aiEnabledSmartManufacturingThemes: string[] = [
    "Predictive Maintenance with IoT and ML",
    "Quality Control with Computer Vision (CV) and DL",
    "Supply Chain Optimization with AI and ML",
    "AI-Enhanced Design and Prototyping",
    "Smart Factories and Process Automation with IoT",
    "Energy Efficiency and Sustainability with AI",
    "Personalized Manufacturing with AI and IoT",
    "Cybersecurity in Smart Manufacturing",
    "Computational Imaging",
    "Digital Image Processing",
    "Image Registration and Restoration",
    "Data Representation and Modeling",
    "Data and Knowledge Extraction from Images",
    "Psychological aspects of image analysis and pattern recognition",
  ];
  return (
    <div className="pt-16 flex flex-col gap-16">
      <div className="flex justify-center items-center">
        <Badge title="THEME OF THE CONFERENCE" />
      </div>
      <div className="px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <ThemeCard
          title="Advanced Machining Processes"
          subTitle="(Code: AMP)"
          description={advanceMachiningThemes}
        />
        <ThemeCard
          title="New Product Development"
          subTitle="(Code: NPD)"
          description={newProductDevelopmentThemes}
        />
        <ThemeCard
          title="Smart Manufacturing"
          subTitle="(Code: SM)"
          description={smartManufacturingThemes}
        />
        <ThemeCard
          title="Additive Manufacturing"
          subTitle="(Code: SM)"
          description={adaptiveManufacturingThemes}
        />
        <ThemeCard
          title="Additive Manufacturing"
          subTitle="(Code: SM)"
          description={adaptiveManufacturingThemes}
        />
        <ThemeCard
          title="AI Enabled Smart Manufacturing"
          subTitle="(Code: AESM)"
          description={aiEnabledSmartManufacturingThemes}
        />
      </div>
    </div>
  );
};

export default Theme;
