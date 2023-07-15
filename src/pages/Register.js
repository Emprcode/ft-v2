import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { FormComponents } from "../components/formComponents/FormComponents";

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
    {
      name: "confirmPassword",
      type: "password",
      label: "Confirm Password",
      placeholder: "*****",
      required: true,
    },
  ];
  return (
    <>
      <Container>
        <Row className="mt-3">
          <h4 className="text-center"> Registration</h4>
          <hr />
          <Col className="info ">
            <h4> Welcome!</h4>

            <p> Please register here to use our system </p>
          </Col>
          <Col className="">
            <Form>
              {inputs.map((item, i) => (
                <FormComponents key={i} {...item} />
              ))}

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Register;
