import React from "react";
import { Footer } from "../layouts/Footer";
import { Header } from "../layouts/Header";
import { Slider } from "../HomeComponents/Slider";
import { Counter } from "../HomeComponents/Counter";
import { Abouthome } from "../HomeComponents/Abouthome";
import { HomeServices } from "../HomeComponents/HomeServices";
import { Promo } from "../HomeComponents/Promo";
import { Promo2 } from "../HomeComponents/Promo2";
import { Promo3 } from "../HomeComponents/Promo3";
import { Carlist } from "../HomeComponents/Carlist";
import { WhyChoose } from "../HomeComponents/WhyChoose";
import { CustomerReview } from "../HomeComponents/CustomerReview";


export const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      
      <div data-elementor-type="wp-post" data-elementor-id="105" class="elementor elementor-105">
      <Abouthome />
      <Promo/>
      <HomeServices/>
      <Counter />
      <Carlist/>
      <Promo2/>
      <WhyChoose/>
      <CustomerReview/>
      
      </div>
      <Promo3/>      
      <Footer/>
    </>
  );
};
