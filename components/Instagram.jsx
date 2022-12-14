import React from 'react'
import IgImage1 from '../public/imgSocial/img-1.jpg'
import IgImage2 from '../public/imgSocial/img-2.jpg'
import IgImage3 from '../public/imgSocial/img-3.jpg'
import IgImage4 from '../public/imgSocial/img-4.jpg'
import IgImage5 from '../public/imgSocial/img-5.jpg'
import IgImage6 from '../public/imgSocial/img-6.jpg'
import InstagramImg from './instagramImg'

const Instagram = () => {
  return (
    <div className='max-w-[1240px] mx-auto text-center py-24'>
        <p className="text-2xl font-bold">Follow me on Instagram</p>
        <p className='pb-4'>@Captur</p>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 p-4 '>
            <InstagramImg socialImg={IgImage1}/>
            <InstagramImg socialImg={IgImage2}/>
            <InstagramImg socialImg={IgImage3}/>
            <InstagramImg socialImg={IgImage4}/>
            <InstagramImg socialImg={IgImage5}/>
            <InstagramImg socialImg={IgImage6}/>
        </div>
    </div>
  )
}

export default Instagram