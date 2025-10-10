import partner1 from "../../assets/publisher.png";
import partner2 from "../../assets/taylor-francis.png";
import Badge from "../../components/Badge";

const PublicationPartners = () => {
  return (
    <div className="pt-16 flex flex-col gap-16 text-wrap">
      <div className="flex justify-center items-center">
        <Badge title="PUBLICATION PARTNERS" />
      </div>
      <div
        id="publication_partners"
        className="px-6 flex flex-col lg:flex-row"
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
            className="w-full underline cursor-pointer text-blue-500"
          >
            Click Here
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
