import { cn } from "../lib/utils";

interface CardProps {
    children: React.ReactNode;
    cardStyle?: string;
}

const Card = ({ children, cardStyle }: CardProps) => {
  return (
    <div className={cn("rounded-lg border border-gray-200 p-4", cardStyle)}>
      {children}
    </div>
  )
}

export default Card