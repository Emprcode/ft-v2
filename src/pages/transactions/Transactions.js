import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";
import "./Transaction.css";
import { TransactionCard } from "../../components/card/TransactionCard";

const Transactions = ({tranactions}) => {
  return (
    <MainLayout>
      <Container>
        <Row className="">
          <div className="h4">
            <Link to="/dashboard" className="nav-link ">
              <i className="fa-solid fa-arrow-left"></i>
            </Link>
          </div>
          <h2 className="text-center fw-bold">Transactions</h2>
        </Row>
        <div className=" p-5 d-flex justify-content-center align-items-center gap-5">
          <Button variant="success" className="income">
            Income
          </Button>
          <Button variant="danger" className="expense">
            Expenses
          </Button>
        </div>
        <div>
          <h4 className="fw-bold p-3">Income/Expenses</h4>
        </div>
        {/* Chart */}
        {/* Tranaction */}
        <Row className="gap-3 p-3 ">
          <TransactionCard tranactions={tranactions}/>
         
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Transactions;
