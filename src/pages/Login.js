import React from "react";
import { MainLayout } from "../components/layout/MainLayout";
import { Row, Col, Container, Form, Button } from "react-bootstrap";
import { FormComponents } from "../components/formComponents/FormComponents";

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
    <MainLayout>
      <Container>
        <Row className="mt-3">
          <h4 className="text-center"> Login</h4>
          <hr />
          <Col className="info ">
            <h4> Welcome!</h4>

            <p> Please Login Here </p>
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
    </MainLayout>
  );
};

export default Login;
