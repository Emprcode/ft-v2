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
    <>
      <Container className="login d-flex justify-content-center align-items-center ">
        <Row className="mt-3">
          {/* <h4 className="text-center"></h4> */}
          {/* <hr /> */}
          <Col className="info p-5 text-center fw-bold shadow-lg ">
            <div className="p-5">
              <h1 className="fw-bold mb-3"> Finance Tracker</h1>

              <p> Please Login Here </p>
            </div>
          </Col>
          <Col className="shadow-lg p-4 ">
            {/* <h4 className="mx-4 p-3 fw-bold">Login</h4> */}
            <div className="p-3">
              <Form>
                {inputs.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}

                <Button variant="primary" type="submit">
                  Submit
                </Button>
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
    </>
  );
};

export default Login;
