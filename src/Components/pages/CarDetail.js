import React from 'react'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { HowWorks } from '../AboutusComponents/HowWorks'
import { CarDetailComp, Car_Detail_Comp } from '../CarDetailsComponents/CarDetailComp'

import { Carlist } from '../HomeComponents/Carlist'
import { Promo } from '../HomeComponents/Promo'
import { Promo2 } from '../HomeComponents/Promo2'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'

export const CarDetail = () => {
  return (
    <>
    <Header/>

   
    <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
 
    <CarDetailComp/>
    <Promo2 />
    <Promo />
    </div>
    <HowWorks/>
    <Footer/>
    </>
  )
}
