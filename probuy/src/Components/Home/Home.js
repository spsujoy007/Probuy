import React from 'react'
import HeroSection from './HeroSection'
import QualityFullProduct from './QualityFullProduct'

export default function Home() {
  
  return (
    <div className='flex justify-center items-center'>
      <div>
        <HeroSection></HeroSection>
        <QualityFullProduct></QualityFullProduct>
      </div>
    </div>
  )
}
