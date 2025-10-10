import Badge from "./Badge";
import MemberCard from "./MemberCard";

const TechnicalProgramCommittee = () => {
  const technicalProgramCommitteeMembers: {
    member: string;
    title: string;
  }[] = [
  { member: "Dr. R.M.Sarviya", title: "MANIT Bhopal" },
  { member: "Dr. Siraj Ahmed", title: "MANIT Bhopal" },
  { member: "Dr. K. R. Aharwal", title: "MANIT Bhopal" },
  { member: "Dr. J. L. Bhagoria", title: "MANIT Bhopal" },
  { member: "Dr. Rajesh Purohit", title: "MANIT Bhopal" },
  { member: "Dr. R. K. Dwivedi", title: "MANIT Bhopal" },
  { member: "Dr. V. K. Soni", title: "MANIT Bhopal" },
  { member: "Dr. Atul Lanjewar", title: "MANIT Bhopal" },
  { member: "Dr.Akhilesh Barve", title: "MANIT Bhopal" },
  { member: "Dr. Vilas Warudkar", title: "MANIT Bhopal" },
  { member: "Dr.Manoj Arya", title: "MANIT Bhopal" },
  { member: "Dr. R. S. Rana", title: "MANIT Bhopal" },
  { member: "Dr. Ajay Pandey", title: "MANIT Bhopal" },
  { member: "Dr. Amit Telang", title: "MANIT Bhopal" },
  { member: "Dr. Alok Singh", title: "MANIT Bhopal" },
  { member: "Dr.T.N.Verma", title: "MANIT Bhopal" },
  { member: "Dr. P.K. Soni", title: "MANIT Bhopal" },
  { member: "Dr. Vishal Parashar", title: "MANIT Bhopal" },
  { member: "Dr. Amit Suhane", title: "MANIT Bhopal" },
  { member: "Dr. M. Vishwakarma", title: "MANIT Bhopal" },
  { member: "Dr. Arvind Kumar", title: "MANIT Bhopal" },
  { member: "Dr. Ajay Verma", title: "MANIT Bhopal" },
  { member: "Dr.Akhilesh Soni", title: "MANIT Bhopal" },
  { member: "Dr.Abhinav Varshney", title: "MANIT Bhopal" },
  { member: "Dr. Vinod Yadav", title: "MANIT Bhopal" },
  { member: "Dr. Mohammad Taufik", title: "MANIT Bhopal" },
  { member: "Dr. Narendra Gajbhiye", title: "MANIT Bhopal" },
  { member: "Dr. Vijay Panchore", title: "MANIT Bhopal" },
  { member: "Dr. Ashish Das", title: "MANIT Bhopal" },
  { member: "Dr. Vikash Kumar", title: "MANIT Bhopal" },
  { member: "Dr. Emon Barua", title: "MANIT Bhopal" },
  { member: "Dr. Lalsingh Devosath", title: "" },
  { member: "Dr. Aningi Mokhalingam", title: "" },
  { member: "Dr. Soumya Ranjan Guru", title: "" }
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
