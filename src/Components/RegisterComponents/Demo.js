import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Col, Row } from "react-bootstrap";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import { Vortex } from "react-loader-spinner";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const [fname, setfname] = React.useState("");
  const [lname, setlname] = React.useState("");
  const [contact, setcontact] = React.useState("");
  const [email, setemail] = React.useState("");
  const [country, setcountry] = React.useState("");
  const [city, setcity] = React.useState("");
  const [pass, setpass] = React.useState("");
  const [licence, setlicence] = React.useState("");
  const [emiratesId, setemiratesId] = React.useState("");
  const [cpass, setcpass] = React.useState("");
  const [vcopy, setvcopy] = React.useState("");
  const [passportcopy, setpassportcopy] = React.useState("");
  const [dlicenceCopy, setdlicenceCopy] = React.useState("");
  const [errormessage, seterrormessage] = React.useState("");
  const [loader, setLoader] = React.useState(false);

  console.log(cpass);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    setfname("");
    setlname("");
    setcontact("");
    setemail("");
    setcountry("");
    setcity("");
    setpass("");
    setlicence("");
    setemiratesId("");
    setcpass("");
    setvcopy("");
    setpassportcopy("");
    setdlicenceCopy("");
  };

  const handleVcopy = (e) => {
    setvcopy(e.target.files[0]);
  };
  const handlepassport = (e) => {
    setpassportcopy(e.target.files[0]);
  };

  const handlelicenceCopy = (e) => {
    setdlicenceCopy(e.target.files[0]);
  };

  const navigate = useNavigate();

  const interuser = (e) => {
    e.preventDefault();

    setLoader(true);

    const Data = new FormData();
    Data.append("usernameapi", "admin");
    Data.append("passwordapi", "admin");
    Data.append("password", pass);
    Data.append("confirmation_password", cpass);
    Data.append("f_name", fname);
    Data.append("l_name", lname);
    Data.append("email", email);
    Data.append("contact_no", contact);
    Data.append("type", "international");
    Data.append("country", country);
    Data.append("city", city);
    Data.append("visa_copy", vcopy);
    Data.append("passport_copy", passportcopy);
    Data.append("international_d_licence", dlicenceCopy);

    var config = {
      method: "post",
      url: "https://carrentalportal.arm-sc.com/api/user/register",
      data: Data,
      headers: {
        Accept: "application/json",
        // Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then(function (response) {
        setLoader(false);
        console.log(response, "international api");
          Swal.fire("Your Account is in Verification Procees");
          navigate("/login");
      })
      .catch((error) => {
        setLoader(false);
        console.log(error, "international user error");
        Swal.fire("Something went wrong");
      });
  };

  const localuser = async (e) => {
    setLoader(true);
    e.preventDefault();

    const handleSubmitLocal = {

      url: await `https://carrentalportal.arm-sc.com/api/user/register`,

      method: "POST",
      data: {
        usernameapi: "admin",
        passwordapi: "admin",
        password: pass,
        confirmation_password: cpass,
        f_name: fname,
        l_name: lname,
        email: email,
        contact_no: contact,
        type: "local",
        country: country,
        city: city,
        licence_no: licence,
        emirates_id: emiratesId,
      },
    };

    axios(handleSubmitLocal)
      .then((response) => {
    setLoader(false);
        console.log(response, "localuser api");
          Swal.fire("Your Account is in Verification Procees");
          navigate("/login");
      })
      .catch((error) => {
        setLoader(false);
        console.log(error, "local user error");
        Swal.fire("Something went wrong");
      });
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab className="tabs" label="Local User" {...a11yProps(0)} />
          <Tab className="tabs" label="International User" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Form onSubmit={localuser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={6}>
                <Form.Control
                  required
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                  name="first-name"
                  type="text"
                  placeholder="First Name"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                  name="last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Control
                  required
                  value={contact}
                  onChange={(e) => setcontact(e.target.value)}
                  name="contact_no"
                  type="number"
                  placeholder="Contact No."
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  name="last_name"
                  type="email"
                  placeholder="Email Address"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Control
                  required
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  name="country"
                  type="text"
                  placeholder="Country"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  name="City"
                  type="text"
                  placeholder="City"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Control
                  required
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={cpass}
                  onChange={(e) => setcpass(e.target.value)}
                  name="Confirm_Password"
                  type="password"
                  placeholder="Confirm Password"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col md={6}>
                <Form.Control
                  required
                  value={licence}
                  onChange={(e) => setlicence(e.target.value)}
                  name="licence-no"
                  type="text"
                  placeholder="Licence No."
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={emiratesId}
                  onChange={(e) => setemiratesId(e.target.value)}
                  name="emirates-id"
                  type="text"
                  placeholder="Emirates Id"
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            {loader ? (
              <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={"white"}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Form onSubmit={interuser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Row>
              <Col md={6}>
                <Form.Control
                  required
                  value={fname}
                  onChange={(e) => setfname(e.target.value)}
                  name="first-name"
                  type="text"
                  placeholder="First Name"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={lname}
                  onChange={(e) => setlname(e.target.value)}
                  name="last-name"
                  type="text"
                  placeholder="Last Name"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Control
                  required
                  value={contact}
                  onChange={(e) => setcontact(e.target.value)}
                  name="contact-no"
                  type="number"
                  placeholder="Contact No."
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                  name="email"
                  type="email"
                  placeholder="Email Address"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Control
                  required
                  value={country}
                  onChange={(e) => setcountry(e.target.value)}
                  name="country"
                  type="text"
                  placeholder="Country"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  value={city}
                  onChange={(e) => setcity(e.target.value)}
                  name="City"
                  type="text"
                  placeholder="City"
                />
              </Col>
            </Row>
            <Row className="mt-3">
              <Col md={6}>
                <Form.Control
                  required
                  value={pass}
                  onChange={(e) => setpass(e.target.value)}
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </Col>
              <Col md={6}>
                <Form.Control
                  required
                  name="Confirm Password"
                  type="password"
                  value={cpass}
                  onChange={(e) => setcpass(e.target.value)}
                  placeholder="Confirm Password"
                />
              </Col>
            </Row>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Row>
              <Col md={6}>
                <Form.Label>Visa Copy</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={handleVcopy}
                  name="visa_copy"
                  id="img"
                />
              </Col>
              <Col md={6}>
                <Form.Label>Passport Copy</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={handlepassport}
                  name="passport_copy"
                  id="img"
                />
              </Col>
            </Row>

            <Row className="mt-3">
              <Col md={6}>
                <Form.Label>International Driving Licence</Form.Label>
                <Form.Control
                  required
                  type="file"
                  onChange={handlelicenceCopy}
                  name="uploadfile"
                  id="img"
                />
              </Col>
            </Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            {loader ? (
              <Vortex
                visible={true}
                height="80"
                width="80"
                ariaLabel="vortex-loading"
                wrapperStyle={{}}
                wrapperClass="vortex-wrapper"
                colors={"white"}
              />
            ) : (
              "Submit"
            )}
          </Button>
        </Form>
      </TabPanel>
    </Box>
  );
}
