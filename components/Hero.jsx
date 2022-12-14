import React from 'react'

const Hero = ({heading,message}) => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed
                     bg-center bg-cover custom-img '>
        {/*Ovarlay */}
        <div className='absolute w-screen h-screen bg-black/60 z-[2]'></div>
        <div className='p-5 text-white z-[2]  mt-[-10rem]'>
            <h2 className="text-5xl font-bold">{heading}</h2>
            <p className="py-5 text-xl">{message}</p>
            <button className="mx-2 px-10 py-2 border hover:bg-white/10 
             ease-in-out duration-200">Book</button>
        </div>
    </div>
  )
}

export default Hero