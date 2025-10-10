import Badge from "../../components/Badge";

const RegistrationFee = () => {
  return (
    <section
      id="registration"
      className="mt-12 p-20 w-full max-w-7xl mx-auto rounded-md bg-blue-50"
    >
      <div className="flex justify-center items-center">
        <Badge title="REGISTRATION FEE" />
      </div>
      <div className="pt-8 flex flex-col gap-4">
        <div className="mb-4 flex text-lg sm:text-xl text-start font-bold font-mono">
          <div className="w-full ">Category</div>
          <div className="w-full">Registration Amount</div>
        </div>

        <div className="p-2 flex w-full bg-gray-300/40">
          <div className="w-full text-start text-sm sm:text-lg"> Research Scholar/Students</div>
          <div className="w-full text-start text-sm sm:text-lg">INR 4500/-</div>
        </div>
        <div className="p-2 flex w-full ">
          <div className="w-full text-start text-sm sm:text-lg">Academicians(INDIA)</div>
          <div className="w-full text-start text-sm sm:text-lg">INR 6500/-</div>
        </div>
        <div className="p-2 flex w-full bg-gray-300/40">
          <div className="w-full text-start text-sm sm:text-lg">Academicians(ABROAD)</div>
          <div className="w-full text-start text-sm sm:text-lg">$ 175/-</div>
        </div>
      </div>

      {/* Register and payment link */}
      <div className="pt-8 text-white flex flex-col sm:flex-row items-center justify-center text-center gap-4">
        <div className="px-3 py-2 w-40 rounded-sm bg-blue-600">
          Registration Link
        </div>
        <div className="px-3 py-2 w-40 rounded-sm bg-blue-600">
          Click Here To Pay
        </div>
      </div>
    </section>
  );
};
export default RegistrationFee;
