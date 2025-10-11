import Badge from "../../components/Badge";
import keyNoteSpeaker1 from "../../assets/speaker1.jpg";
import keyNoteSpeaker2 from "../../assets/speaker2.jpeg";
import keyNoteSpeaker3 from "../../assets/speaker3.jpg";
import SpeakerCard from "../../components/SpeakerCard";

const KeynoteSpeakers = () => {
  return (
    <div id="speakers" className="pb-8">
      <div className="py-20 flex justify-center">
        <Badge title="KEYNOTE SPEAKERS" />
      </div>
      <div className="w-full max-w-5xl mx-auto px-2 grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SpeakerCard
          image={keyNoteSpeaker1}
          speakerName="(Retd.) Prof. VK Jain"
          college="IIT Kanpur"
        />
        <SpeakerCard
          image={keyNoteSpeaker2}
          speakerName="Prof. Sunil Jha"
          college="IIT Delhi"
        />
        <SpeakerCard
          image={keyNoteSpeaker3}
          speakerName="Dr. Sachin Salunke"
          college="University of Turkey"
        />
      </div>
    </div>
  );
};

export default KeynoteSpeakers;
