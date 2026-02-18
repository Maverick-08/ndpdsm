import Badge from "../../components/Badge";

const RegistrationFee = () => {
  return (
    <section
      id="registration"
      className="mt-12 py-20 w-full max-w-7xl mx-auto rounded-md bg-blue-50"
    >
      <div className="flex justify-center items-center">
        <Badge title="REGISTRATION FEE" />
      </div>
      <div className="pt-8 px-2 flex flex-col gap-4">
        <div className="px-2 flex justify-between items-center text-xl font-semibold">
          <div className="flex-1">Category</div>
          <div className="flex-1 text-center text-nowrap">
            Registration Amount
          </div>
        </div>

        <div className="px-2 py-1 flex justify-between items-center bg-gray-200 rounded-lg">
          <div className="flex-1">Faculty/ Research Scholar/Students</div>
          <div className="flex-1 text-center">INR 5,000/-</div>
        </div>
        <div className="px-2 flex justify-between items-center ">
          <div className="flex-1">Participants</div>
          <div className="flex-1 text-center">INR 2,500/-</div>
        </div>
        <div className="px-2 py-1 flex justify-between items-center bg-gray-200 rounded-lg">
          <div className="flex-1">Academicians(ABROAD)</div>
          <div className="flex-1 text-center">$ 200/-</div>
        </div>
      </div>

      {/* Register Button */}
      <div className="pt-8 flex justify-center">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSfxzeVXNWVIa2OxKMRgGObG66ZxypBfBMx3-VkAPqO2Jf67dA/viewform?usp=preview"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-2 rounded-sm bg-blue-600 text-white cursor-pointer"
        >
          Start Registration Process
        </a>
      </div>

      <div className="pt-4 pl-4">
              <div className="text-2xl text-red-600">📌 NOTE</div>
              <p className="pt-2">
                <span className="font-medium">Bank Name:</span> State Bank of India<br />
                <span className="font-medium">Name:</span> MANIT, Bhopal <br />
                <span className="font-medium">Account Name:</span> Director, MANIT Bhopal <br />
                <span className="font-medium">Account Number:</span> 10020150107 <br />
                <span className="font-medium">IFSC Code:</span> SBIN0001608 <br />
                <span className="font-medium">SWIFT Code:</span> SBININBB
                <span className="font-medium">IBAN Number:</span> SBININBB268
              </p>
              <p>Mention "NPDSM2026" in the payment remarks.</p>
            </div>
    </section>
  );
};
export default RegistrationFee;
