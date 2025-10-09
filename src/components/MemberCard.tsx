import { cn } from "../lib/utils";

interface MemberCardProps{
    member: string;
    title: string;
    cardStyle?: string
}

const MemberCard = ({member, title, cardStyle}: MemberCardProps) => {
  return (
    <div className={cn("pl-4 py-2 rounded-xl bg-white border-l-4 border-sky-500", cardStyle)}>
      <p className="text-lg font-semibold">{member}</p>
      <p className="text-sm text-neutral-600">{title}</p>
    </div>
  )
}

export default MemberCard
