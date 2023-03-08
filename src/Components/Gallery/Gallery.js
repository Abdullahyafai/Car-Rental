import React, { useState } from "react";
import './css/style.css';
import imag1 from "./assets/gallery/img_13.jpg";
import imag2 from "./assets/gallery/img_14.jpg";
import imag3 from "./assets/gallery/img_15.jpg";
import imag4 from "./assets/gallery/child_04.jpg";
import imag5 from "./assets/gallery/img_01.jpg";
import imag6 from "./assets/gallery/img_02.jpg";
import imag7 from "./assets/gallery/img_03.jpg";
import imag8 from "./assets/gallery/img_04.jpg";
import imag9 from "./assets/gallery/img_05.jpg";
import imag10 from "./assets/gallery/img_06.jpg";
import imag11 from "./assets/gallery/img_07.jpg";
import imag12 from "./assets/gallery/img_08.jpg";
import imag13 from "./assets/gallery/img_09.jpg";
import imag14 from "./assets/gallery/img_10.jpg";
import imag15 from "./assets/gallery/img_11.jpg";
import imag16 from "./assets/gallery/img_12.jpg";

const Gallery = () => {

  return (
    <>
     <section style={{height: "auto"}}>
      <div className="p-5">
        <h1 className="text-center mb-5">Our Car Gallery</h1>
      
     <div class="gallery">
	<div class="gallery__column">
		<a href="https://unsplash.com/@jeka_fe" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag1} alt="Portrait by Jessica Felicio" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Jessica Felicio</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@oladimeg" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag2} alt="Portrait by Oladimeji Odunsi" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Oladimeji Odunsi</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@a2eorigins" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag3} alt="Portrait by Alex Perez" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Alex Perez</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@noahbuscher" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag4} alt="Portrait by Noah Buscher" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Noah Buscher</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@von_co" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag5} alt="Portrait by Ivana Cajina" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Ivana Cajina</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@samburriss" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag6} alt="Portrait by Sam Burriss" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Sam Burriss</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@marilezhava" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag7} alt="Portrait by Mari Lezhava" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Mari Lezhava</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@ethanhaddox" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag8} alt="Portrait by Ethan Haddox" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Ethan Haddox</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@mr_geshani" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag9} alt="Portrait by Amir Geshani" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Amir Geshani</figcaption>
			</figure>
		</a>
	</div>
	
	<div class="gallery__column">
		<a href="https://unsplash.com/@frxgui" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag10} alt="Portrait by Guilian Fremaux" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Guilian Fremaux</figcaption>
			</figure>
		</a>

		<a href="https://unsplash.com/@majestical_jasmin" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag11} alt="Portrait by Jasmin Chew" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Jasmin Chew</figcaption>
			</figure>
		</a>
		
		<a href="https://unsplash.com/@dimadallacqua" target="_blank" class="gallery__link">
			<figure class="gallery__thumb">
				<img src={imag12} alt="Portrait by Dima DallAcqua" class="gallery__image" />
				<figcaption class="gallery__caption">Portrait by Dima DallAcqua</figcaption>
			</figure>
		</a>
	</div>
</div>
</div>
     </section>
    
    </>
  );
};

export default Gallery;
