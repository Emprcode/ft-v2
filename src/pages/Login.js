import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { FormComponents } from "../components/formComponents/FormComponents";
import { Link } from "react-router-dom";

const Login = () => {
  const inputs = [
    {
      email: "email",
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
  ];
  return (
    <div className="bg-color">
      <Container className="login d-flex justify-content-center align-items-center">
        <Row className="mt-3 shadow-lg  ">
          {/* <h4 className="text-center"></h4> */}
          {/* <hr /> */}
          <Col className=" p-5 text-center fw-bold">
            <div className="p-5">
              <h1 className=" title mb-3 fw-bold"> Finance Tracker</h1>

              <p> Please Login Here </p>
            </div>
          </Col>
          <Col className="mx-4 p-5 ">
            {/* <h4 className="mx-4 p-3 fw-bold">Login</h4> */}
            <div className="p-5">
              <Form>
                {inputs.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}

                <div className="button mt-3" type="submit">
                  Submit
                </div>
                <hr />
                <div className="text-end">
                  {/* <h5> New User?</h5> */}
                  <Link to="/register" className="nav-link fw-bold">
                    {" "}
                    Register new account?
                  </Link>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Login;
