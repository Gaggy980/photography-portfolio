import React from 'react'
import Contact from '../components/Contact'
import Hero from '../components/Hero'

function contact() {
  return (
    <div>
        <Hero heading='My Contact' message='Submit rhe form below for quotes and work' />
        <Contact />
    </div>
  )
}

export default contact