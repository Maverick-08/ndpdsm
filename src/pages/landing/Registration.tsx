import Badge from "../../components/Badge";

const RegistrationFee = () => {
  return (
    <section
      id="registration"
      className="mt-16 p-4 min-w-5xl mx-auto rounded-md bg-blue-50"
    >
      <div className="flex justify-center items-center">
        <Badge title="REGISTRATION FEE" />
      </div>
      <div className="flex flex-col m-12">
        <div className="mb-4 flex text-xl text-start font-bold font-mono">
          <div className="w-full ">Category</div>
          <div className="w-full">Registration Amount</div>
        </div>

        <div className="p-2 flex w-full bg-gray-300/40">
          <div className="w-full text-start"> Research Scholar/Students</div>
          <div className="w-full text-start">INR 4500/-</div>
        </div>
        <div className="p-2 flex w-full ">
          <div className="w-full text-start ">Academicians(INDIA)</div>
          <div className="w-full text-start">INR 6500/-</div>
        </div>
        <div className="p-2 flex w-full bg-gray-300/40">
          <div className="w-full text-start">Academicians(ABROAD)</div>
          <div className="w-full text-start">$ 175/-</div>
        </div>
      </div>

      {/* Register and payment link */}
      <div className="text-white flex flex-co\l items-center justify-center text-center gap-4">
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
