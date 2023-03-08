import React from 'react'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { ContactForm } from '../ContactComponents/ContactForm'
import { Location } from '../ContactComponents/Location'
import { Promo } from '../HomeComponents/Promo'
import { Promo3 } from '../HomeComponents/Promo3'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'

export const Contactus = () => {
  return (
    <>
    <Header/>
    <AboutHeader head="Contact Us" heading="Contact Us" />
    <ContactForm/>
    <Location/>
    <Promo3/>
    <Footer/>

    
    </>
  )
}
