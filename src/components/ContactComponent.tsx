import manitLogo from "../assets/MANIT_LOGO.webp";
import NDPDSMLogo from "../assets/NPDSM_logo.webp";

const ContactComponent = () => {
  return (
    <div className="w-full flex flex-row gap-4">
      {/* Logo  */}
      <div className="flex-1 shrink-0 flex flex-col items-center">
        <img src={NDPDSMLogo} alt="NDPDSM Logo" className="size-32"/>
        <img src={manitLogo} alt="MANIT Logo" className="size-32"/>
      </div>

      {/* Useful Links  */}
      <div className="flex-1">
        <div>
          <h1 className="pb-2 text-xl font-semibold border-b-1 border-slate-300">Useful Links</h1>
          <div className="mt-4">
          <a href="https://www.manit.ac.in/" className="underline text-blue-500 cursor-pointer" target="_blank">MANIT Website</a>
          </div>
        </div>
      </div>

      {/* Contact Person  */}
      <div className="flex-1">
        <div>
          <h1 className="pb-2 text-xl font-semibold border-b-1 border-slate-300">Contact Persons</h1>
          <div className="mt-4 flex flex-col gap-4">
            <div>
              <h1 className="text-md font-semibold">Dr. Sudhanshu Kumar</h1>
              <p className="text-sm text-neutral-600">+91-7878553943,</p>
              <p className="text-sm text-neutral-600">sudhanshu@manit.ac.in</p>
            </div>

            <div>
              <h1 className="text-md font-semibold">Dr. Sudhanshu Kumar</h1>
              <p className="text-sm text-neutral-600">+91-7878553943,</p>
              <p className="text-sm text-neutral-600">sudhanshu@manit.ac.in</p>
            </div>

            <div>
              <h1 className="text-md font-semibold">Dr. Sudhanshu Kumar</h1>
              <p className="text-sm text-neutral-600">+91-7878553943,</p>
              <p className="text-sm text-neutral-600">sudhanshu@manit.ac.in</p>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Address  */}
      <div className="flex-1">
        <h1 className="pb-2 text-xl font-semibold border-b-1 border-slate-300">Contact Address</h1>
        <p className="mt-4 text-sm text-neutral-500">
          TEAM NPDSM 2025 Department of Mechanical Engineering and Centre of
          Excellence in Product Design and Smart Manufacturing MANIT Bhopal Near
          Mata Mandir Sqare Madhya Pradesh, India, 462003
        </p>
      </div>
    </div>
  );
};

export default ContactComponent;
