import Badge from "./Badge";
import MemberCard from "./MemberCard";

const TechnicalProgramCommittee = () => {
  const technicalProgramCommitteeMembers: {
    member: string;
    title: string;
  }[] = [
    { member: "Dr. Atul Lanjewar", title: "MANIT Bhopal, India" },
    { member: "Dr. R.M.Sarviya", title: "MANIT Bhopal, India" },
    { member: "Dr. Siraj Ahmed", title: "MANIT Bhopal, India" },
    { member: "Dr. K. R. Aharwal", title: "MANIT Bhopal, India" },
    { member: "Dr. J. L. Bhagoria", title: "MANIT Bhopal, India" },
    { member: "Dr. Rajesh Purohit", title: "MANIT Bhopal, India" },
    { member: "Dr. R. K. Dwivedi", title: "MANIT Bhopal, India" },
    { member: "Dr. V. K. Soni", title: "MANIT Bhopal, India" },
    { member: "Dr.Akhilesh Barve", title: "MANIT Bhopal, India" },
    { member: "Dr. Vilas Warudkar", title: "MANIT Bhopal, India" },
    { member: "Dr.Manoj Arya", title: "MANIT Bhopal, India" },
    { member: "Dr. R. S. Rana", title: "MANIT Bhopal, India" },
    { member: "Dr. Ajay Pandey", title: "MANIT Bhopal, India" },
    { member: "Dr. Amit Telang", title: "MANIT Bhopal, India" },
    { member: "Dr. Alok Singh", title: "MANIT Bhopal, India" },
    { member: "Dr.T.N.Verma", title: "MANIT Bhopal, India" },
    { member: "Dr. P.K. Soni", title: "MANIT Bhopal, India" },
    { member: "Dr. Vishal Parashar", title: "MANIT Bhopal, India" },
    { member: "Dr. Amit Suhane", title: "MANIT Bhopal, India" },
    { member: "Dr. M. Vishwakarma", title: "MANIT Bhopal, India" },
    { member: "Dr. Arvind Kumar", title: "MANIT Bhopal, India" },
    { member: "Dr. Ajay Verma", title: "MANIT Bhopal, India" },
    { member: "Dr.Akhilesh Soni", title: "MANIT Bhopal, India" },
    { member: "Dr.Abhinav Varshney", title: "MANIT Bhopal, India" },
    { member: "Dr. Vinod Yadav", title: "MANIT Bhopal, India" },
    { member: "Dr. Mohammad Taufik", title: "MANIT Bhopal, India" },
    { member: "Dr. Narendra Gajbhiye", title: "MANIT Bhopal, India" },
    { member: "Dr. Vijay Panchore", title: "MANIT Bhopal, India" },
    { member: "Dr. Ashish Das", title: "MANIT Bhopal, India" },
    { member: "Dr. Vikash Kumar", title: "MANIT Bhopal, India" },
    { member: "Dr. Emon Barua", title: "MANIT Bhopal, India" },
  ];

  return (
    <div className="pt-16 w-full flex flex-col gap-8">
      <div className="flex justify-center">
        <Badge title="NDPDSM 2025 ADVISORY COMMITTEE" />
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {technicalProgramCommitteeMembers.map((data, idx) => {
          return (
            <MemberCard
              key={idx}
              member={data.member}
              title={data.title}
              cardStyle="border-red-500"
            />
          );
        })}
      </div>
    </div>
  );
};

export default TechnicalProgramCommittee;
