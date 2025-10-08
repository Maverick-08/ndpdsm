const RegistrationFee = () => {
    return (
        <section id="registration" className="mt-30 p-4 min-w-5xl mx-auto rounded-md justify-center bg-white/70">
            <div className=" font-bold text-3xl text-center">
                Registration Fee
            </div>
            <div className="flex flex-col m-12">
                <div className="mb-4 flex text-xl">
                    <div className="w-full text-start">Category</div>
                    <div className="w-full text-start">Registration Amount</div>
                </div>

                <div className="p-2 flex w-full bg-gray-300/40">
                    <div className="w-full text-start">         
                        Research Scholar/Students
                    </div>
                    <div className="w-full text-start">                     
                        INR 4500/-
                    </div>
                </div>
                <div className="p-2 flex w-full ">
                    <div className="w-full text-start ">                    
                        Academicians(INDIA)
                    </div>
                    <div className="w-full text-start">                     
                        INR 6500/-
                    </div>
                </div>
                <div className="p-2 flex w-full bg-gray-300/40">
                    <div className="w-full text-start">                    
                        Academicians(ABROAD)
                    </div>
                    <div className="w-full text-start">                     
                        $ 175/-
                    </div>
                </div>
            </div>

            <div className="text-white flex items-center justify-center gap-4">
                <div className="px-3 py-2 w-40 rounded-sm text-center bg-blue-600">
                    Registration Link
                </div>
                <div className="px-3 py-2 w-40 rounded-sm text-center bg-blue-600">
                    Click Here To Pay
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
    )
}
export default RegistrationFee;