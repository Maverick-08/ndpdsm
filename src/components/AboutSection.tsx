interface AboutSectionProps {
  title: string;
  description: string;
}

const AboutSection = ({ title, description }: AboutSectionProps) => {
  return (
    <div className="flex flex-col gap-2 text-left">
      <h2 className="text-blue-600 text-3xl tracking-wide font-semibold">{title}</h2>
      <p className="text-neutral-800">{description}</p>
    </div>
  );
};

export default AboutSection;
