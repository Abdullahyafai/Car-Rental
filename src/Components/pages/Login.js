import React from 'react'
import CarContext from '../../Context/CarContext'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { HowWorks } from '../AboutusComponents/HowWorks'
import { Promo } from '../HomeComponents/Promo'
import { Promo2 } from '../HomeComponents/Promo2'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'
import LoginForm from '../LoginComponent/LoginForm'

export const Login = () => {
  return (
    <>
    <Header/>
    <AboutHeader  head="Login" />
    <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
    <CarContext.Provider>
    <LoginForm/>
    </CarContext.Provider>
    {/* <Promo2 />
    <Promo /> */}
    </div>
    {/* <HowWorks/> */}
    <Footer/>
    </>
  )
}


