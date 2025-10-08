import React from 'react'

const Hero = () => {
  return (
    <div id='Home' className='flex flex-col justify-center items-center'>
        <span className='pt-20 text-2xl font-semibold'>
            2
            <sup>nd </sup>
             International Conference On
        </span>
        <div className="pt-2 text-6xl text-center text-balance font-bold">
            New Product Development and Smart Manufacturing
        </div>
        <div className="pt-4 text-5xl text-center">
            NPDSM-2026
        </div>
        <span className='pt-2 text-lg'>
            June 26
            <sup>th </sup>
            - June 27
            <sup>th </sup>
            , 2026
        </span>
        <span className='text-3xl'>Mode: Hybrid</span>
        <span className='pt-2 font-serif text-xl font-medium'>Organised By: </span>
        <span>Department of Mechanical Engineering & Centre of Excellence in Product Design and Smart Manufacturing</span>
        <span>Maulana Azad National Institute of Technology, Bhopal - 462003 (Madhya Pradesh)</span>
    </div>
  )
}

export default Hero