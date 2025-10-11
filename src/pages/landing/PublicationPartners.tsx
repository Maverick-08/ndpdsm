import publicationPartner from "../../assets/scopus.jpeg"
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
        <div className="w-full h-full flex flex-col items-center justify-center">
          <img src={publicationPartner} alt="Publication partner" className="h-44"/>
        </div>

        <div className="w-full h-full flex flex-col items-center justify-start">
          <p>
            Accepted and presented papers, including extended versions where applicable, will be published in SCOPUS, SCI, or Web of Science indexed proceedings. Details of the publishing journals will be provided soon. Submit the paper in the given link
          </p>

          <a
            href="https://cmt3.research.microsoft.com/NPDSM2026/Submission/Index"
            className="w-full underline cursor-pointer text-blue-500"
          >
            Click Here
          </a>
          <div className="mt-4 px-3 py-2 rounded-sm text-center text-white bg-blue-500 cursor-pointer">
            AUTHOR GUIDELINES
          </div>
        </div>
      </div>
    </div>
  );
};

export default PublicationPartners;
