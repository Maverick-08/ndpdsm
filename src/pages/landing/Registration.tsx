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
