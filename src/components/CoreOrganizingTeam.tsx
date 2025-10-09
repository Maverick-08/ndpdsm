import Card from "./Card";

const CoreOrganizingTeam = () => {
  return (
    <div className="w-full py-16 flex flex-col gap-8">
      {/* Patron  */}
      <div className="flex justify-center">
        <Card cardStyle="bg-white border-none shadow-lg shadow-sky-200 rounded-lg px-16 py-6">
          <h2 className="text-xl text-center font-bold mb-4">CHIEF PATRON</h2>
          <p className="text-lg text-neutral-700">Dr. Karunesh Kumar Shukla</p>
          <p className="text-sm text-neutral-500">Director, MANIT Bhopal</p>
        </Card>
      </div>
      <div className="flex justify-center items-center gap-16">
         <Card cardStyle="bg-white border-none shadow-lg shadow-sky-200 rounded-lg px-16 py-6">
          <h2 className="text-xl text-center font-bold mb-4">PATRON</h2>
          <p className="text-lg text-neutral-700">Dr. S.P.S. Rajput</p>
          <p className="text-sm text-neutral-500">Professor, Mechanical Engineering, MANIT Bhopal</p>
        </Card>
         <Card cardStyle="bg-white border-none shadow-lg shadow-sky-200 rounded-lg px-16 py-6">
          <h2 className="text-xl text-center font-bold mb-4">CHAIRMAN</h2>
          <p className="text-lg text-neutral-700">Dr. KK Aharwal</p>
          <p className="text-sm text-neutral-500">HOD, Mechanical Engineering, MANIT Bhopal</p>
        </Card>
      </div>
    </div>
  );
};

export default CoreOrganizingTeam;
