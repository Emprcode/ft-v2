import React, { useEffect, useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";
import "./Transaction.css";
import { TransactionCard } from "../../components/card/TransactionCard";
import {
  deleteTransactions,
  getTransactions,
} from "../../components/helper/axiosHelper";

const Transactions = ({ tranactions }) => {
  const newTransactions = [...tranactions].reverse();
  const [itemToDelete, setItemToDelete] = useState([]);
  const [displayTrans, setDisplayTrans] = useState(tranactions);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setItemToDelete([...itemToDelete, value]);
    } else {
      setItemToDelete(itemToDelete.filter((item) => item?._id !== value));
      // setIsAllSelected(false)
    }
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    const { status, message } = await deleteTransactions(itemToDelete);
    console.log(status, message);
    status === "success" && getTransactions();
    setItemToDelete([]);
  };

  const handleOnIncome = () => {
    setDisplayTrans(newTransactions.filter((item) => item.type === "Income"));
  };
  const handleOnExpense = () => {
    setDisplayTrans(newTransactions.filter((item) => item.type === "Expense"));
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
            <h2 className="text-center fw-bold">Transactions</h2>
          </div>
        </Row>
        <div className=" p-5 d-flex justify-content-center align-items-center gap-5">
          <Button variant="success" className="income" onClick={handleOnIncome}>
            Income
          </Button>
          <Button
            variant="danger"
            className="expense"
            onClick={handleOnExpense}>
            Expenses
          </Button>
        </div>
        <div>
          <h4 className="fw-bold p-3">Income/Expenses</h4>
        </div>
        {/* Chart */}
        {/* Tranaction */}
        <Row className="gap-3 p-3 ">
          <TransactionCard arrayList={displayTrans} func={handleOnSelect} />
        </Row>
        <Row>
          {itemToDelete.length > 0 && (
            <div className="d-grid g-2">
              <Button
                variant="danger"
                className="mb-3"
                type="submit"
                onClick={handleOnDelete}>
                {itemToDelete.length} transactions selected
              </Button>
            </div>
          )}
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Transactions;
