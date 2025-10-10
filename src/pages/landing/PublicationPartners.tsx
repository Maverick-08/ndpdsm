import partner1 from "../../assets/publisher.png";
import partner2 from "../../assets/taylor-francis.png";
import Badge from "../../components/Badge";

const PublicationPartners = () => {
  return (
    <div className="mt-24 flex flex-col">
      <div className="flex justify-center items-center">
        <Badge title="PUBLICATION PARTNERS" />
      </div>
      <div
        id="publication_partners"
        className="p-4 gap-4 w-full max-w-6xl flex mx-auto h-102"
      >
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img src={partner1} alt="" className="h-26"/>
          <img src={partner2} alt="" className="h-26"/>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start">
          <p>
            Select papers from the conference will be published by Springer as a
            proceedings book volume. Springer will conduct quality checks on the
            accepted papers and only papers that pass these checks will be
            published. Springer Nature does not charge any money for publication
            of Non-Open Access content.
          </p>

          <p>
            Abstracts/extended abstracts and short papers (less than 4 pages)
            are not considered for publication.
          </p>

          <p>
            High-quality and original papers, selected based on reviewers'
            recommendations, will be published in a special issue of{" "}
            <span className="font-bold">
              Advances in Materials and Processing Technologies (Scopus Indexed)
              by Taylor and Francis
            </span>
          </p>
          <p className="w-full text-start">
            Submit the paper in the given link
          </p>
          <a
            href="https://cmt3.research.microsoft.com/NPDSM2024/Submission/Index"
            className="w-full text-start text-blue-500"
          >
            https://cmt3.research.microsoft.com/NPDSM2024/Submission/Index
          </a>
          <div className="mt-4 px-3 py-2 rounded-sm text-center text-white bg-blue-500">
            AUTHOR GUIDELINES
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPartners;
