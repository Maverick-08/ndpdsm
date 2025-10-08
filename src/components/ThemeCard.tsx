import Card from "./Card";

interface ThemeCardProps {
  title: string;
  subTitle?: string;
  description: string[];
}

const ThemeCard = ({ title, subTitle, description }: ThemeCardProps) => {
  return (
    <Card cardStyle="px-8">
      <div>
        <h2>{title}</h2>
        {subTitle && <h2>{subTitle}</h2>}
        <ul className="list-disc">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ThemeCard;
