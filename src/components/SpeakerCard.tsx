import { cn } from "../lib/utils";
import Card from "./Card";

interface SpeakerCardProps {
  image: string;
  speakerName: string;
  college: string;
  cardStyle?: string;
}

const SpeakerCard = ({
  image,
  speakerName,
  college,
  cardStyle,
}: SpeakerCardProps) => {
  return (
    <Card cardStyle={cn(`w-full max-w-sm flex flex-col items-center gap-8 shadow-sm hover:shadow-lg`, cardStyle)}>
      <img
        src={image}
        alt="Speaker"
        className="size-32 rounded-full border-2"
      />
      <div>
        <h1 className="text-lg font-semibold">{speakerName}</h1>
        <h2 className="text-sm text-center text-neutral-600">{college}</h2>
      </div>
    </Card>
  );
};

export default SpeakerCard;
