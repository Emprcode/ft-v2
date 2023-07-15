import React from "react";
import "./Dashboard.css";
import { MainLayout } from "../../components/layout/MainLayout";
import { Col, Container, Row } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <MainLayout>
      <Container>
        {/* intro */}
        <Row>
          <Col>
            <div className="d-flex">
              <img src={avatar} alt="avatar" width="100px" height="90px" />
              <div className="mx-3">
                <h4 className="">Welcome!</h4>
                <h2 className="fw-bold"> John Doe</h2>
              </div>
            </div>
          </Col>
          <Col>
            <Link
              to="/add-transaction"
              className="d-flex justify-content-end nav-link">
              <span className="mt-2 h3 add-icon">
                <i class="fa-solid fa-plus"></i>
              </span>
            </Link>
          </Col>
        </Row>
        {/* status display */}
        <div className="d-flex justify-content-center p-5">
          <Row className="p-3 rounded contact ">
            <div>
              <div className="text-center">
                <p className="p-2">Total Balance</p>

                <h4 className="fw-bold"> $ 80,000.00</h4>
              </div>
            </div>
            <Row className="mt-5">
              <Col>
                <div className="d-flex">
                  <span className="mt-2 income-icon">
                    <i class="fa-solid fa-arrow-up"></i>
                  </span>
                  <div className="mx-2">
                    <h6 className="">Income</h6>
                    <h5 className="">100,000.00</h5>
                  </div>
                </div>
              </Col>
              <Col>
                <div className="d-flex justify-content-end">
                  <span className="mt-2 expense-icon">
                    <i class="fa-solid fa-arrow-down"></i>
                  </span>
                  <div className="mx-2">
                    <h6 className="">Expenses</h6>
                    <h5 className="">20,000.00</h5>
                  </div>
                </div>
              </Col>
            </Row>
          </Row>
        </div>
        {/* Transaction */}
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
