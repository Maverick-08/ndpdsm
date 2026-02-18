import publicationPartner1 from "../../assets/publicationPartner1.jpg";
import publicationPartner2 from "../../assets/springerLogo.jpg"
import Badge from "../../components/Badge";

const PublicationPartners = () => {
  return (
    <div className="pt-16 flex flex-col gap-16 text-wrap">
      <div className="flex justify-center items-center">
        <Badge title="PUBLICATION PARTNERS" />
      </div>
      <div
        id="publication_partners"
        className="px-6 flex flex-col lg:flex-row gap-8 lg:gap-0"
      >
        <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-8">
          <img
            src={publicationPartner1}
            alt="Publication partner"
            className="h-44"
          />
          <img
            src={publicationPartner2}
            alt="Publication partner"
            className="h-24 w-56"
          />
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start">
          <p>
            Select papers from the conference will be published by Springer as a
            proceedings book volume. Springer will conduct quality checks on the
            accepted papers and only papers that pass these checks will be
            published. Springer Nature does not charge any money for publication
            of Non-Open Access content. <span className="font-semibold">Abstracts/extended abstracts and short papers (less than 4 pages) are not considered for publication.</span>
          </p>

          <a
            href="https://cmt3.research.microsoft.com/NPDSM2026/Submission/Index"
            className="pt-4 w-full underline cursor-pointer text-blue-500"
          >
            Submit Paper
          </a>
          <div className="mt-8 sm:mt-4 px-3 py-2 rounded-sm text-center text-white bg-blue-500 cursor-pointer">
            AUTHOR GUIDELINES
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPartners;
