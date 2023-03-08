import React from 'react'
import Gallery from '../Gallery/Gallery'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'

const CarGallery = () => {
  return (
    <>
    <Header/>
    <AboutHeader  head="Gallery" />
    <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
    <Gallery />
    </div>
    <Footer/>
    </>
  )
}

export default CarGallery