import React from "react";
import { AboutHeader } from "../AboutusComponents/AboutHeader";
import { Aboutpromo1 } from "../AboutusComponents/Aboutpromo1";
import { AboutServices } from "../AboutusComponents/AboutServices";
import { ClientReview } from "../AboutusComponents/ClientReview";
import { Abouthome } from "../HomeComponents/Abouthome";
import { Promo3 } from "../HomeComponents/Promo3";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";



export const About = () => {
  return (
    <>
      <Header/>
      <div data-elementor-type="wp-post" data-elementor-id="611" class="elementor elementor-611">
      <AboutHeader head="About Company"/>
      <Abouthome/>
      <Aboutpromo1/>
      <AboutServices/>
      <ClientReview/>
      
      </div>
      {/* <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105"> */}
      <Promo3/>
      <div/>
      <Footer/>     
    </>
  );
};
export default About; 