import React from 'react'
import Navbar from './layout/Navbar'
import Home from './section 1/Home'
import CardSection from './section2/CardSection'

const Page = () => {
  return (
    <div className=''>
        <Navbar />
        <Home />
        <CardSection />
    </div>
  )
}

export default Page