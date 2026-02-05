interface AboutSectionProps {
  title: string;
  description: string;
  linkHref?: string;
  linkText?: string;
}

const AboutSection = ({
  title,
  description,
  linkHref,
  linkText,
}: AboutSectionProps) => {
  return (
    <div className="flex flex-col gap-2 px-4 py-3 text-left rounded-sm">
      <h2 className="text-blue-600 text-3xl tracking-wide font-semibold">
        {title}
      </h2>
      <div>
        <p className="text-neutral-800">{description}</p>
        <a href={linkHref} className="text-lg text-blue-600 underline">
          <p className="pt-2">{linkText}</p>
        </a>
      </div>
    </div>
  );
};

export default AboutSection;
