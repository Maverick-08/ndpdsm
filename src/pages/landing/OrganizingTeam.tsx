import AdvisoryCommittee from "../../components/AdvisoryCommittee";
import Badge from "../../components/Badge";
import CoreOrganizingTeam from "../../components/CoreOrganizingTeam";
import OrganizingSecretary from "../../components/OrganizingSecretary";
import TechnicalProgramCommittee from "../../components/TechnicalProgramCommittee";

const OrganizingTeam = () => {
  return (
    <div className="mt-8 py-8 px-4 bg-blue-50">
      <div className="w-full max-w-7xl mx-auto flex flex-col justify-center items-center">
        <Badge title="NDPDSM 2025 ORGANIZING TEAM" />
        <CoreOrganizingTeam />
        <OrganizingSecretary />
        <AdvisoryCommittee />
        <TechnicalProgramCommittee />
      </div>
    </div>
  );
};

export default OrganizingTeam;
