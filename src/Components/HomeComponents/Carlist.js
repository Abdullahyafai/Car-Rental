import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";

export const Carlist = () => {
  const [carlist, setcar] = useState([]);
  const [CarDetail, setCarDetail] = useState([]);
  const [carimages, setcarimages] = useState([]);

  console.log(carimages);
  const navigate = useNavigate();

  const setDataId = (dataid) => {
    // alert(dataid)
    const options2 = {
      url: `${process.env.REACT_APP_API_KEY}/car/detail/${dataid}`,
      method: "POST",
      data: {
        username: "admin",
        password: "admin",
      },
    };

    axios(options2).then((response) => {
      // console.log(response.data);

      setCarDetail(response.data);
      // alert(CarDetail)
      // console.log(CarDetail)

      // console.log(CarDetail)

      if (CarDetail != []) {
        navigate("/CarDetail", {
          state: { cardetails: response.data },
        });
      }
    });
  };

  useEffect(() => {
    const options = {
      url: `${process.env.REACT_APP_API_KEY}/cars/list`,
      method: "POST",
      data: {
        username: "admin",
        password: "admin",
      },
    };
    axios(options).then((response) => {
      //   let abc=JSON.parse(response.data.car_images);
      //   console.log(abc);

      setcar(response.data);
    });
  }, []);

  // console.log('sd');

  return (
    <>
      <section
        class="elementor-section elementor-top-section elementor-element elementor-element-eaeeb3f elementor-section-boxed elementor-section-height-default elementor-section-height-default"
        data-id="eaeeb3f"
        data-element_type="section"
      >
        <div className="container mb-3">
        <div className="card w-100 p-5" style={{boxShadow: "0px 0px 5px 5px lightgray"}}>
          <div className="card-header mb-2 pt-0">
            <h4 className="text-center">Advance Filter</h4>
          </div>
          <div className="row mt-2">
            <div className="col-md-3">
              <Form.Label>Set Price</Form.Label>
              <Form.Range className="py-3"/>
            </div>
            <div className="col-md-3">
              <Form.Label>Select Car Brands</Form.Label>
              <Form.Select aria-label="Default select example">
                <option>Select Car Brands</option>
                <option value="Audi">Audi</option>
                <option value="Mercedies">Mercedies</option>
                <option value="Toyota">Toyota</option>
                <option value="Honda">Honda</option>
                <option value="MG">MG</option>
                <option value="Kia">Kia</option>
              </Form.Select>
            </div>
            <div className="col-md-3">
            <Form.Label>Search</Form.Label>
              <input type="search" placeholder="search here" />
            </div>
             <div className="col-md-3">
           <button className="btn w-100 h-50" style={{marginTop: "2em"}}>Filter</button>
            </div>
          </div>
        </div>
        </div>

        <div class="elementor-container elementor-column-gap-default">
          <div
            class="elementor-column elementor-col-100 elementor-top-column elementor-element elementor-element-a48e4e7"
            data-id="a48e4e7"
            data-element_type="column"
          >
            <div class="elementor-widget-wrap elementor-element-populated">
              <div
                class="elementor-element elementor-element-6ccc904 elementor-widget elementor-widget-heading"
                data-id="6ccc904"
                data-element_type="widget"
                data-widget_type="heading.default"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    Car List
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-137fc7b elementor-widget-tablet__width-initial  elementor-widget elementor-widget-heading"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <div class="elementor-widget-container">
                  <h2 class="elementor-heading-title elementor-size-default">
                    We Offer Best Car
                  </h2>
                </div>
              </div>
              <div
                class="elementor-element elementor-element-6b75ac2 elementor-widget__width-initial elementor-widget elementor-widget-text-editor"
                data-id="6b75ac2"
                data-element_type="widget"
                data-widget_type="text-editor.default"
              >
                <div class="elementor-widget-container">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                    elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                    leo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="Card">
        <Container>
          <Row>
            {carlist.map(function (value, index) {
              let count;
              if (window.location.pathname == "/Cars") {
                count = 10;
              } else {
                count = 6;
              }

              if (index < count) {
                return (
                  <>
                    <Col sm={6}>
                      <div className="Car-Card">
                        <Row>
                          <Col sm={4}>
                            <img
                              decoding="async"
                              width="512"
                              height="512"
                              src={`${process.env.REACT_APP_IMAGE_URL}${
                                JSON.parse(value.car_images)[0]
                              }`}
                              class="attachment-full size-full wp-image-754"
                              alt=""
                              loading="lazy"
                              srcset={`${process.env.REACT_APP_IMAGE_URL}${
                                JSON.parse(value.car_images)[0]
                              } 512w , ${process.env.REACT_APP_IMAGE_URL}${
                                JSON.parse(value.car_images)[0]
                              } 300w,${process.env.REACT_APP_IMAGE_URL}${
                                JSON.parse(value.car_images)[0]
                              } 150w`}
                              sizes="(max-width: 512px) 100vw, 512px"
                            />
                          </Col>
                          <Col sm={8}>
                            <div class="elementor-widget-wrap elementor-element-populated">
                              <div
                                class="elementor-element elementor-element-026b836 elementor-widget elementor-widget-heading"
                                data-id="026b836"
                                data-element_type="widget"
                                data-widget_type="heading.default"
                              >
                                <div class="elementor-widget-container">
                                  <h2 class="elementor-heading-title elementor-size-default">
                                    {value.car_make}
                                    {value.car_name}({value.model_year})
                                  </h2>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-87c4ec3 elementor-widget elementor-widget-text-editor"
                                data-id="87c4ec3"
                                data-element_type="widget"
                                data-widget_type="text-editor.default"
                              >
                                <div class="elementor-widget-container">
                                  <p
                                    dangerouslySetInnerHTML={{
                                      __html: value.car_description,
                                    }}
                                  ></p>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-e7f154c elementor-widget__width-auto elementor-absolute elementor-widget elementor-widget-elementskit-heading"
                                data-id="e7f154c"
                                data-element_type="widget"
                                data-settings='{"_position":"absolute"}'
                                data-widget_type="elementskit-heading.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="ekit-wid-con">
                                    <div class="ekit-heading elementskit-section-title-wraper text_left   ekit_heading_tablet-   ekit_heading_mobile-">
                                      <a href="#">
                                        <h2 class="ekit-heading--title elementskit-section-title ">
                                          <span>
                                            <span>${value.car_rent_price}</span>
                                          </span>{" "}
                                          / {value.car_rent_type}
                                        </h2>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-80e889c elementor-icon-list--layout-traditional elementor-list-item-link-full_width elementor-widget elementor-widget-icon-list"
                                data-id="80e889c"
                                data-element_type="widget"
                                data-widget_type="icon-list.default"
                              >
                                <div class="elementor-widget-container">
                                  <ul class="elementor-icon-list-items">
                                    <li class="elementor-icon-list-item">
                                      <span class="elementor-icon-list-icon">
                                        <i
                                          aria-hidden="true"
                                          class="mdi mdi-seat-recline-extra"
                                        ></i>{" "}
                                      </span>
                                      <span class="elementor-icon-list-text">
                                        {value.no_of_seats} Seats
                                      </span>
                                    </li>
                                    <li class="elementor-icon-list-item">
                                      <span class="elementor-icon-list-icon">
                                        <i
                                          aria-hidden="true"
                                          class="ion ion-md-snow"
                                        ></i>{" "}
                                      </span>
                                      <span class="elementor-icon-list-text">
                                        {value.drive}
                                      </span>
                                    </li>
                                    <li class="elementor-icon-list-item">
                                      <span class="elementor-icon-list-icon">
                                        <i
                                          aria-hidden="true"
                                          class=" la la-tachometer"
                                        ></i>{" "}
                                      </span>
                                      <span class="elementor-icon-list-text">
                                        {value.fuel_type_primary}
                                      </span>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div
                                class="elementor-element elementor-element-a869ad9 elementor-align-left elementor-widget elementor-widget-button"
                                data-id="a869ad9"
                                data-element_type="widget"
                                data-widget_type="button.default"
                              >
                                <div class="elementor-widget-container">
                                  <div class="elementor-button-wrapper">
                                    <button
                                      class="elementor-button-link elementor-button elementor-size-sm"
                                      onClick={() => setDataId(value.id)}
                                    >
                                      <span class="elementor-button-content-wrapper">
                                        <span class="elementor-button-icon elementor-align-icon-right">
                                          <i
                                            aria-hidden="true"
                                            class="fas fa-chevron-right"
                                          ></i>
                                        </span>
                                        <span class="elementor-button-text">
                                          View Detail
                                        </span>
                                      </span>
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </div>
                    </Col>
                  </>
                );
              }
            })}
          </Row>
        </Container>
      </div>
    </>
  );
};
