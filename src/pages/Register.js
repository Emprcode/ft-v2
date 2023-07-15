import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { FormComponents } from "../components/formComponents/FormComponents";
import { Link } from "react-router-dom";

const Register = () => {
  const inputs = [
    {
      name: "username",
      type: "text",
      label: "User Name",
      placeholder: "Jack",
      required: true,
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Jack@gmail.com",
      required: true,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*****",
      required: true,
    },
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "*****",
      required: true,
    },
  ];
  return (
    <div className="bg-color">
      <Container>
        <Row className="">
          <div className="h4 p-4">
            <Link to="/" className="nav-link ">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <h2 className="text-center fw-bold"> Registration</h2>
          <hr />

          <Col className="p-5 text-center ">
            <div className="p-5">
              <h3 className="fw-bold mb-3"> Welcome!</h3>

              <p> Please register here to use our system </p>
            </div>
          </Col>
          <Col className="p-5">
            <Form>
              {inputs.map((item, i) => (
                <FormComponents key={i} {...item} />
              ))}

              <div className="button mt-3 " type="submit">
                Register
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
