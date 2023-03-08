import axios from "axios";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Vortex } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [loader, setLoader] = useState(false);
  const [Errors, setErrors] = useState();

  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setLoader(true);

    const Data = new FormData();
    Data.append("email", email);
    Data.append("password", pass);

    var config = {
      method: "post",
      url: "https://carrentalportal.arm-sc.com/api/user/login",
      data: Data,
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(false);
        localStorage.setItem("token", response?.data?.token)
        console.log(response, "international api");
        // setVerify(response?.data?.status);
        if (response?.data?.status === true) {
          setLoader(false);
          Swal.fire("successfully Login");
          navigate("/");
        } else {
          setLoader(false);
          Swal.fire("Something went wrong");
        }
      })
      .catch((error) => {
        setLoader(false);
        console.log(error, "Login error");
        // Swal.fire(error?.response?.data?.erorrs?.email[0])
        setErrors(error?.response?.data?.errors);
      });
  };

  return (
    <>
      <div
        data-elementor-type="wp-post"
        data-elementor-id="227"
        class="elementor elementor-227"
      >
        <section
          class="elementor-section elementor-top-section elementor-element elementor-element-7e76ec1 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
          data-id="7e76ec1"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div class="elementor-container elementor-column-gap-default">
            <div
              class="elementor-column elementor-col-66 elementor-top-column elementor-element elementor-element-147e32b "
              data-aos="fade-right"
              data-aos-duration="800"
              style={{
                display: "flex",
                justifycontent: "center",
                alignitems: "center",
                width: "100%",
              }}
            >
              <div class="elementor-widget-wrap elementor-element-populated">
                <section
                  class="elementor-section elementor-inner-section elementor-element elementor-element-65305a9 elementor-section-boxed elementor-section-height-default elementor-section-height-default"
                  data-id="65305a9"
                  data-element_type="section"
                >
                  <div class="elementor-container elementor-column-gap-default">
                    <div
                      class="elementor-column elementor-col-100 elementor-inner-column elementor-element elementor-element-6ed788c"
                      data-id="6ed788c"
                      data-element_type="column"
                      data-settings='{"background_background":"classic"}'
                    >
                      <div class="elementor-widget-wrap elementor-element-populated">
                        <div
                          class="elementor-element elementor-element-4f7301b elementor-widget__width-auto elementor-absolute elementor-view-default elementor-widget elementor-widget-icon"
                          data-id="4f7301b"
                          data-element_type="widget"
                          data-settings='{"_position":"absolute"}'
                          data-widget_type="icon.default"
                        >
                          <div class="elementor-widget-container">
                            <div class="elementor-icon-wrapper">
                              <div class="elementor-icon">
                                <i
                                  aria-hidden="true"
                                  class="icon icon-email"
                                ></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          class="elementor-element elementor-element-64e0321 elementor-widget elementor-widget-heading"
                          data-id="64e0321"
                          data-element_type="widget"
                          data-widget_type="heading.default"
                        >
                          <div class="elementor-widget-container">
                            <h2
                              style={{ textAlign: "center" }}
                              class="elementor-heading-title elementor-size-default"
                            >
                              Login
                            </h2>
                          </div>
                        </div>
                        <div
                          class="elementor-element elementor-element-b244758 elementor-widget elementor-widget-text-editor"
                          data-id="b244758"
                          data-element_type="widget"
                          data-widget_type="text-editor.default"
                        >
                          <div class="elementor-widget-container">
                            <p style={{ textAlign: "center" }}>
                              Please Login with us.
                            </p>
                            <h4 class="elementor-heading-title elementor-size-default"></h4>
                          </div>
                        </div>

                        <div className="container">
                          <Form>
                            <div className="row d-flex justify-content-center">
                              <div className="col-lg-6">
                                <div className="col-lg-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicEmail"
                                  >
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control
                                      type="email"
                                      placeholder="Enter email"
                                      onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <Form.Text className="text-danger">
                                      {Errors?.email}
                                    </Form.Text>
                                  </Form.Group>
                                </div>
                                <div className="col-lg-12">
                                  <Form.Group
                                    className="mb-3"
                                    controlId="formBasicPassword"
                                  >
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                      type="password"
                                      placeholder="Password"
                                      onChange={(e) => setPass(e.target.value)}
                                    />
                                    <Form.Text className="text-danger">
                                      {Errors?.password}
                                    </Form.Text>
                                  </Form.Group>
                                </div>
                                <div className="col-lg-12">
                                  <Button
                                    variant="primary"
                                    type="submit"
                                    onClick={login}
                                  >
                                    {loader ? (
                                      <Vortex
                                        visible={true}
                                        height="80"
                                        width="80"
                                        ariaLabel="vortex-loading"
                                        wrapperStyle={{}}
                                        wrapperClass="vortex-wrapper"
                                        colors={[
                                            "white"
                                        ]}
                                      />
                                    ) : (
                                      'Submit'
                                    )}
                                  </Button>
                                </div>
                              </div>
                            </div>
                          </Form>
                        </div>
                        
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default LoginForm;
