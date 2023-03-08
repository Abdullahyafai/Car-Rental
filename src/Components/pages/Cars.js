import React from 'react'
import CarContext from '../../Context/CarContext'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { HowWorks } from '../AboutusComponents/HowWorks'
import { Carlist } from '../HomeComponents/Carlist'
import { Promo } from '../HomeComponents/Promo'
import { Promo2 } from '../HomeComponents/Promo2'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'

export const Cars = () => {
  return (
    <>
    <Header/>

    <AboutHeader  head="All Cars"/>
    <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
    <CarContext.Provider>
    <Carlist />
    </CarContext.Provider>
    <Promo2 />
    <Promo />
    </div>
    <HowWorks/>
    <Footer/>
    </>
  )
}
