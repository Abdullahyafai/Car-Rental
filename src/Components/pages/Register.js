import React from 'react'
import { AboutHeader } from '../AboutusComponents/AboutHeader'
import { Footer } from '../layouts/Footer'
import { Header } from '../layouts/Header'
import { RegisterForm } from '../RegisterComponents/RegisterForm'

export const Register = () => {
  return (
    <div>
      <Header/>
      <div data-elementor-type="wp-post" data-elementor-id="611" class="elementor elementor-611">
      <AboutHeader head="Register" heading="Register" />
      </div>
      <RegisterForm/>
      <Footer/>
    </div>
  )
}

