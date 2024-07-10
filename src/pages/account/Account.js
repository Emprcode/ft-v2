import React from "react";
import { Button, Container, Row } from "react-bootstrap";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link, useNavigate } from "react-router-dom";
import "./Account.css";
import { BiSolidUser } from "react-icons/bi";
import { AiOutlineMail } from "react-icons/ai";
import { deleteUser } from "../../components/helper/axiosHelper";
import { toast } from "react-toastify";

const Account = ({ user }) => {
  const navigate = useNavigate();
  console.log(user);
  const handleOnDelete = async (e) => {
    e.preventDefault();
    if (
      window.confirm("are you sure you want to permanently delete the account?")
    ) {
      const { status, message } = await deleteUser(user);
      toast[status](message);
      if (status === "success") {
        navigate("/");
        sessionStorage.removeItem("user");
      }
    }
  };
  return (
    <MainLayout>
      <Container>
        <Row className="">
          <div className="h4">
            <Link to="/dashboard" className="nav-link ">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <div>
            <h2 className="text-center fw-bold">Account</h2>
          </div>
        </Row>
        <div className="d-flex justify-content-center p-5">
          <Row className="p-4 border shadow-lg col-7">
            <div className="p-2 h4 gap-5">
              <BiSolidUser size={30} color="black" /> Name: {user.name}
            </div>
            <div className="h4">
              <AiOutlineMail size={30} /> Email:{user.email}
            </div>
          </Row>
        </div>
        <div className="text-center p-4">
          <Button variant="danger" type="submit" onClick={handleOnDelete}>
            Delete my account
          </Button>
        </div>
      </Container>
    </MainLayout>
  );
};

export default Account;
