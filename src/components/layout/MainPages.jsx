import React from 'react'
import LayoutSection from './LayoutSection'
import Footer from './footer'
import Navbar from './navbar'

const mainPages = () => {
  return (
    <div>
        <Navbar />
        <LayoutSection />
        <Footer />
    </div>
  )
}

export default mainPages