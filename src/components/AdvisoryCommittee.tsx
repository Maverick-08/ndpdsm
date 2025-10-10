import Badge from "./Badge";
import MemberCard from "./MemberCard";

const AdvisoryCommittee = () => {
  const advisoryCommitteeMembers: {
    member: string;
    title: string;
  }[] = [
    { member: "Dr. Ian Gibson", title: "University of Twente, Netherlands" },
    {
      member: "Dr. Kannan Govindan",
      title: "University of Adelaide, Australia",
    },
    {
      member: "Dr. A Senthil Kumar",
      title: "National University of Singapore",
    },
    { member: "Dr. Harshit K Dave", title: "SVNIT Surat, India" },
    { member: "Dr. Somnath Sarangi", title: "IIT Patna, India" },
    { member: "Dr. P.Senthil", title: "NITT, Tiruchirappalli, India" },
    { member: "Dr. K.R.Ravi", title: "IIT Jodhpur, India" },
    { member: "Dr. Atul Kumar Sharma", title: "IIT Jodhpur, India" },
    { member: "Dr. Aman Khurana", title: "IIT, Indore, India" },
    { member: "Dr. B. Mallikarjuna", title: "NITT, Tiruchirappalli, India" },
    { member: "Dr. Avinash Kumar", title: "IIITDM, Kanchipuram, India" },
    { member: "Dr.D.Ravi Kumar", title: "IIT, Delhi, India" },
    { member: "Dr. Atul Kumar Sharma", title: "IIT Jodhpur, India" },
    { member: "Dr. Aman Khurana", title: "IIT, Indore, India" },
    { member: "Dr. B. Mallikarjuna", title: "NITT, Tiruchirappalli, India" },
    { member: "Dr. Avinash Kumar", title: "IIITDM, Kanchipuram, India" },
    { member: "Dr.D.Ravi Kumar", title: "IIT, Delhi, India" },
    { member: "Dr. Ping Lan", title: "UAF School of Management, Alaska, USA" },
    { member: "Dr. Tugrul Daim", title: "Portland State University, Portland" },
    {
      member: "Dr. C. K. Biswas",
      title: "University Technologi, Petronas, Malaysia",
    },
    { member: "Dr. J.Paulo Davim", title: "University of Aveiro, Portugal" },
    { member: "Dr.M.S.Shanmugam", title: "IITM, Chennai, India" },
    { member: "Dr.Biswajit Mohanty", title: "IITKGP, Kharagpur, India" },
  ];

  return (
    <div className="pt-16 w-full flex flex-col gap-8">
      <div className="flex justify-center">
        <Badge title="NDPDSM 2025 ADVISORY COMMITTEE" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {advisoryCommitteeMembers.map((data, idx) => {
          return (
            <MemberCard key={idx} member={data.member} title={data.title} cardStyle="border-red-500"/>
          );
        })}
      </div>
    </div>
  );
};

export default AdvisoryCommittee;
