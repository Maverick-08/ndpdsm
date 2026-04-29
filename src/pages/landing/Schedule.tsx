import Badge from "../../components/Badge";

const Schedule = () => {
  return (
    <div id="schedule" className="mt-32 mb-16 py-16 flex flex-col items-center bg-blue-50">
      <Badge title="IMPORTANT DATES" />
      <div className="pt-20"></div>
      <div className="px-2 w-full max-w-6xl flex flex-col gap-2">
        <div className="w-full p-2 flex bg-neutral-200 rounded-lg">
          <p className="flex-1 text-xl font-semibold">Final Paper Submission</p>
          <p className="flex-1 text-lg text-center"><s>1 May, 2026</s>&nbsp; 20<sup>th</sup> May, 2026</p>
        </div>
        <div className="w-full px-2 flex">
          <p className="flex-1 text-xl font-semibold">Registration (Last Date)</p>
          <p className="flex-1 text-lg text-center"><s>15 May, 2026</s>&nbsp; 5<sup>th</sup> June, 2026</p>
        </div>
      </div>
    </div>
  );
};

export default Schedule;
