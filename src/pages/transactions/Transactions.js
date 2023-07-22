import React, { useEffect, useState } from "react";
import { Button, Container, Row } from "react-bootstrap";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";
import "./Transaction.css";
import { TransactionCard } from "../../components/card/TransactionCard";
import { deleteTransactions } from "../../components/helper/axiosHelper";

const Transactions = ({ tranactions, fetchTransactions }) => {
  const newTransactions = [...tranactions].reverse();
  const [itemToDelete, setItemToDelete] = useState([]);
  const [displayTrans, setDisplayTrans] = useState(newTransactions);
  // const [select, setSelect] = useState(false);

  const handleOnSelect = (e) => {
    const { checked, value } = e.target;

    if (checked) {
      setItemToDelete([...itemToDelete, value]);
      // setSelect(tranactions.length === itemToDelete.length + 1);
    } else {
      setItemToDelete(itemToDelete.filter((_id) => _id !== value));
      // setSelect(false);
    }
  };

  const handleOnDelete = async (_id) => {
    if (!window.confirm("Are you sure you want to delete?")) {
      return;
    }
    const { status, message } = await deleteTransactions(itemToDelete);
    console.log(status, message);
    status === "success" && fetchTransactions();
    setItemToDelete([]);
  };
  // console.log(itemToDelete);

  const handleOnIncome = () => {
    setDisplayTrans(newTransactions.filter((item) => item.type === "Income"));
  };
  const handleOnExpense = () => {
    setDisplayTrans(newTransactions.filter((item) => item.type === "Expense"));
  };

  useEffect(() => {
    setDisplayTrans(tranactions);
  }, [tranactions]);

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
          <TransactionCard
            arrayList={displayTrans}
            func={handleOnSelect}
            itemToDelete={itemToDelete}
            isVisible={true}
          />
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
