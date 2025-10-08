interface BadgeProps {
  title: string;
}

const Badge = ({ title }: BadgeProps) => {
  return <span className="px-4 py-1.5 bg-sky-100 text-sky-600 tracking-wide text-sm font-semibold rounded-xl">{title}</span>;
};

export default Badge;
