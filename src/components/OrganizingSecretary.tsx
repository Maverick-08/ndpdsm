import Badge from "./Badge";
import MemberCard from "./MemberCard";

const OrganizingSecretary = () => {
  const organizingSecretaries: {
    member: string;
    title: string;
  }[] = [
    { member: "Dr. Sudhanshu Kumar", title: "Mechanical Engineering" },
    {
      member: "Dr. Vijay Bhaskar Semwal",
      title: "Computer Science & Engineering",
    },
    { member: "Dr. Deepak Kumar", title: "Mechanical Engineering" },
    { member: "Dr. N. Jayanth", title: "CEPDSM" },
  ];
  return (
    <div className="w-full flex flex-col gap-8">
      <div className="flex justify-center">
        <Badge title="NDPDSM 2025 ORGANIZING SECRETARY" />
      </div>
      <div className="w-full grid grid-cols-2 gap-4">
        {organizingSecretaries.map((data, idx) => {
          return (
            <MemberCard key={idx} member={data.member} title={data.title} />
          );
        })}
      </div>
    </div>
  );
};

export default OrganizingSecretary;
