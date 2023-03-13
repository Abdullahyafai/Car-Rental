import React, { useEffect, useState } from "react";
import { AboutHeader } from "../AboutusComponents/AboutHeader";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Header } from "../layouts/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Cardetails.css";
import { Table } from "react-bootstrap";
import axios from "axios";

export const CarDetailComp = () => {
  const car_detail = useLocation();
  const [Adon, setAdon] = useState([]);
  const [TotalPrice, setTotalPrice] = useState([]);
  const [Price, setPrice] = useState([]);
  const [Checkbox, setCheckbox] = useState([]);
  const [carimages, setcarimages] = useState([]);


  const navigate = useNavigate();
  useEffect(() => {
    setcarimages(JSON.parse(car_detail.state.cardetails.car_images));
  }, [carimages]);
  //   console.log(car_detail);

  const handlecheckbox = (e) => {
    const value = parseInt(e.target.value);
    const checked = e.target.checked;
    const name = e.target.name;

    if (checked) {
      setCheckbox([...Checkbox, name]);
    } else {
      setCheckbox(Checkbox.filter((e) => e !== name));
    }
    if (checked) {
      setPrice([...Price, value]);
    } else {
      setPrice(Price.filter((e) => e !== value));
    }
};
const totalPrice = Price.reduce((acc, curr) => acc + curr,0) ;

const carPrice = car_detail.state.cardetails.car_rent_price;
// console.log(totalPrice, "TotalPrice");
//   console.log(Price, "valuecheckbox");
  
  useEffect(() => {
    const options = {
      url: `${process.env.REACT_APP_API_KEY}/car/addons`,
      method: "POST",
      data: {
        usernameapi: "admin",
        passwordapi: "admin",
      },
    };
    axios(options).then((response) => {
      console.log(response, "car list");
      setAdon(response?.data);
    //   setPrice(Number(response?.data?.rent_price));
    });
  }, []);

const book = () =>{
  navigate("/booking", {
    state: { cardetails: car_detail.state.cardetails, Addons: Checkbox , Price: Price},
  });
}


  return (
    <>
      <Header />
      <AboutHeader head="Car Details" />
      <section className="main my-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="details my-5">
                <h4 className="text">Booking Details</h4>
                <h6>
                  12 mar 2023, 3:00PM - <span>14 mar 2023, 3:00PM</span>
                </h6>
              </div>
              <div className="title mb-5">
                <h2>
                  <span className="text">
                    {car_detail.state.cardetails.car_brand}
                  </span>
                  &nbsp;&nbsp;{car_detail.state.cardetails.car_name}
                </h2>
              </div>

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
              <div className="car-details my-3 p-3 d-flex justify-content-between align-items-center bg-theme">
                <h4 className="text-white">
                  {car_detail.state.cardetails.car_brand}&nbsp;&nbsp;
                  {car_detail.state.cardetails.car_name}
                </h4>
                <h4 className="text-white">
                  ${car_detail.state.cardetails.car_rent_price}
                </h4>
              </div>
              <Table hover>
                <tbody>
                  <tr>
                    <td className="fw-bolder">Car Type</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.car_rent_type}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">ABS</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.abs}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Model Year</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.model_year}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Car Model</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.car_model}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Car Registion No</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.car_registration_no}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">DOOR</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.no_of_doors}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Max Trunk Capacity</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.max_trunk_capacity}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Car Vin</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.car_vin}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">series</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.series}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Seats</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.no_of_seats}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">BODY STYLE</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.body}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Car Make</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.car_make}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">fuel_type_primary</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.fuel_type_primary}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Product Type</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.product_type}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Drive</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.drive}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Manufacturer</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.manufacturer}
                    </td>
                  </tr>
                  <tr>
                    <td className="fw-bolder">Car Description</td>
                    <td className="fw-bolder">
                      {car_detail.state.cardetails.car_description}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
            <div className="col-lg-4">
              <div className="my-5 ">
                <Link to="/Cars">
                  <button className="btn w-50 py-2">Change Car</button>
                </Link>
              </div>
              <div className="feature border">
                <div className="car-details p-2 mb-2">
                  <h6 className="text-light ">VEHICLE EXTRAS</h6>
                </div>
                <ul>
                  {Adon?.map((e) => {
                    return (
                      <>
                        <li>
                          <input
                            type={"checkbox"}
                            value={Number(e?.rent_price)}
                            name={e?.addon_name}
                            onChange={handlecheckbox}
                            className="me-1"
                          />
                          <span className="text fw-bolder">
                            {e?.addon_name}
                          </span>
                        </li>
                      </>
                    );
                  })}
                 
                </ul>
                <div className="car-details p-2">
                  <h6 className="text-light">Total Cost</h6>
                </div>
                <div className="row p-2">
                  <span className="col-md-6 text-dark">Total</span>
                  <span className="col-md-6 text-dark text-end">${carPrice}</span>
                </div>
                <div className="row p-2">
                  <span className="col-md-6 text-dark">DISCOUNT</span>
                  <span className="col-md-6 text-dark text-end">$0</span>
                </div>
                <div className="row p-2">
                  <span className="col-md-6 text-dark">VEHICLE EXTRAS</span>
                  <span className="col-md-6 text-dark text-end">${totalPrice}</span>
                </div>
                <div className="row p-2">
                  <span className="col-md-6 text-dark">GRAND TOTAL</span>
                  <span className="col-md-6 text-dark text-end">$ {parseInt(Number(carPrice) + Number(totalPrice))}</span>
                </div>
                <div className="mt-3">
                    <button className="btn w-100 py-4" onClick={book}>book now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
