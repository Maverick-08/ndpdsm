const Hero = () => {
  return (
    <div id='Home' className='flex flex-col justify-center items-center '>
        <span className='pt-20 text-2xl font-semibold font-mono'>
            2
            <sup>nd </sup>
             International Conference On
        </span>
        <div className="pt-2 text-6xl text-center text-balance font-bold">
            New Product Development and Smart Manufacturing
        </div>
        <div className="text-4xl text-center font-sans">
            NPDSM-2026
        </div>
        <span className='mt-6 px-3 py-0.5 text-md bg-blue-200 rounded-sm font-semibold'>
            June 26
            <sup>th </sup>
            - June 27
            <sup>th </sup>
            , 2026
        </span>
        <span className='font-mono text-xl'>MODE: HYBRID</span>
        <span className='mt-4 font-serif text-xl font-medium underline'>Organised By: </span>
        <span className="text-gray-600">
            <span className="text-gray-800">
                Department of Mechanical Engineering
            </span>
            & Centre of Excellence in Product Design and Smart Manufacturing</span>
        <span className="text-gray-600">Maulana Azad National Institute of Technology, Bhopal - 462003 (Madhya Pradesh)</span>
    </div>
  )
}

export default Hero