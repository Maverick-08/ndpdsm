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

  const industrialInternetOfThingsThemes: string[] = [
    "Industrial IoT architectures and communication standards",
    "Smart sensors, edge, and fog computing for manufacturing systems",
    "Real-time data acquisition and integration for connected industries",
    "Interoperability and standardization in industrial communication networks",
    "Energy-efficient and sustainable IIoT implementations",
  ];
  const industrialAutomationAndMechantronicsThemes: string[] = [
    "Design and development of mechatronic systems for automation",
    "Advanced control systems and motion control in manufacturing",
    "Sensors, actuators, and embedded systems for industrial automation",
    "PLC, SCADA, and real-time system integration",
    "Collaborative and autonomous robotic systems",
  ];

  return (
    <div id="theme" className="pt-20 flex flex-col gap-16">
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
          subTitle="(Code: AM)"
          description={adaptiveManufacturingThemes}
        />
        <ThemeCard
          title="AI/ML Enabled Smart Manufacturing"
          subTitle="(Code: AESM)"
          description={aiEnabledSmartManufacturingThemes}
        />
        <ThemeCard
          title="Industrial Internet of Things"
          subTitle="(Code: IIOT)"
          description={industrialInternetOfThingsThemes}
        />
        <ThemeCard
          title="Industrial Automation and Mechatronics "
          subTitle="(Code: IAM)"
          description={industrialAutomationAndMechantronicsThemes}
        />
      </div>
    </div>
  );
};

export default Theme;
