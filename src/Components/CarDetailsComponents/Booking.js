import React, { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import { useLocation } from "react-router-dom";
import { AboutHeader } from "../AboutusComponents/AboutHeader";
import { Header } from "../layouts/Header";
import "./Cardetails.css";

const Booking = () => {
  const car_detail = useLocation();
  const [carimages, setcarimages] = useState([]);

  useEffect(() => {
    setcarimages(JSON.parse(car_detail.state.cardetails.car_images));
  }, [carimages]);

  //   console.log(car_detail,"car_detail")
  return (
    <>
      <Header />
      <AboutHeader head="Car Book" />
      <section>
        <div className="container my-5">
          <div className="row">
            <div className="col-lg-8">
              <div className="finaldetails">
                <div className="car-slider">
                  <Carousel autoPlay interval="500" transitionTime="500">
                    {carimages.map((value, index, array) => {
                      return (
                        <div>
                          <img
                            src={`${process.env.REACT_APP_IMAGE_URL}${value}`}
                            alt={`img1`}
                          />
                        </div>
                      );
                    })}
                  </Carousel>
                </div>
                <div className="details">
                  <h6>PickUp</h6>
                  <h4><span>12</span> mar 2023, 3:00PM</h4>
                </div>
                <div className="details">
                  <h6>DropOff</h6>
                  <h4><span>14</span> mar 2023, 3:00PM</h4>
                </div>
              </div>
            </div>
            <div className="col-lg-4"></div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Booking;
