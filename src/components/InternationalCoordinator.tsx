import Badge from "./Badge";
import MemberCard from "./MemberCard";


const InternationalCoordinator = () => {
  const organizingSecretaries: {
    member: string;
    title: string;
  }[] = [
    { member: "Dr. Sachin Salunke", title: "Gazi Univesity, Ankara, Türkiye" },
  ];
  return (
    <div className="pt-16 w-full flex flex-col gap-8">
      <div className="flex justify-center">
        <Badge title="NDPDSM 2026 INTERNATIONAL COORDINATOR" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
        {organizingSecretaries.map((data, idx) => {
          return (
            <MemberCard key={idx} member={data.member} title={data.title} />
          );
        })}
      </div>
    </div>
  );
}

export default InternationalCoordinator