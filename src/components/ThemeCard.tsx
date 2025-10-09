import Card from "./Card";

interface ThemeCardProps {
  title: string;
  subTitle?: string;
  description: string[];
}

const ThemeCard = ({ title, subTitle, description }: ThemeCardProps) => {
  return (
    <Card cardStyle="px-8 group hover:scale-102 transition-all duration-600 ease-in-out hover:border-gray-400">
      <div className="">
        <h2 className="font-bold text-2xl group-hover:text-blue-500 transition-all duration-400 ease-in-out">{title}</h2>
        {subTitle && <h2 className="font-bold text-md">{subTitle}</h2>}
        <ul className="mt-4 list-disc">
          {description.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </Card>
  );
};

export default ThemeCard;
