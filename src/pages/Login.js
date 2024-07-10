import React, { useRef } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { FormComponents } from "../components/formComponents/FormComponents";
import { loginUser } from "../components/helper/axiosHelper";

const Login = () => {
  const emailRef = useRef();
  const passRef = useRef();

  const navigate = useNavigate();
  const inputs = [
    {
      email: "email",
      type: "email",
      label: "Email",
      placeholder: "Jack@gmail.com",
      required: true,
      forwardRef: emailRef,
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "*****",
      required: true,
      forwardRef: passRef,
    },
  ];

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      password: passRef.current.value,
    };
    const { status, message, result } = await loginUser(obj);
    console.log(result);
    toast[status](message);
    if (status === "success" && result?._id) {
      sessionStorage.setItem("user", JSON.stringify(result));
      localStorage.setItem("user", JSON.stringify(result));
      navigate("/dashboard");
    }
  };

  return (
    <div className="bg-color d-flex justify-content-center align-items-center">
      <Container className="p-4">
        <Row className="mt-3 shadow-lg flex-wrap">
          {/* <h4 className="text-center"></h4> */}
          {/* <hr /> */}
          <Col className="d-flex justify-content-center align-items-center ">
            <div className="">
              <h1 className="p-3 fw-bold"> BudgetBuddy</h1>

              <p className="text-center"> Manage your budget with us</p>
            </div>
          </Col>
          <Col className="mx-4 p-5">
            {/* <h4 className="mx-4 p-3 fw-bold">Login</h4> */}
            <div className="">
              <Form onSubmit={handleOnSubmit}>
                {inputs.map((item, i) => (
                  <FormComponents key={i} {...item} />
                ))}

                <Button className="button mt-3 " type="submit">
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
    </div>
  );
};

export default Login;
