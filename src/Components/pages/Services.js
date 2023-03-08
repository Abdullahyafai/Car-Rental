import React from 'react'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { Counter } from '../HomeComponents/Counter'
import { WhyChoose } from '../HomeComponents/WhyChoose'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'
import { ServicePromo } from '../ServicesComponents/ServicePromo'
import { ServicesDetails } from '../ServicesComponents/ServicesDetails'
import { SService } from '../ServicesComponents/SService'

export const Services = () => {
  return (
    <>
    <Header/>
    <AboutHeader head="Services"/>
    <SService/>
    <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
    <Counter/>
    </div>
    <ServicesDetails/>
    <ServicePromo/>
    <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
    <WhyChoose/>
    </div>
    <Footer/>
    
    </>
  )
}
