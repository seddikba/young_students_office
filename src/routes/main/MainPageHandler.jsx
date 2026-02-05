import React from 'react'
import HeroSection from './sections/Hero'
import MainLayouts from '../../layouts/MainLayouts'
import Featers from './sections/Featers'

function MainPageHandler() {
  return (
    <MainLayouts className="max-w-7xl mx-auto px-20">
        <HeroSection /> 
        <Featers />
    </MainLayouts>
  )
}

export default MainPageHandler