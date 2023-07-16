import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";
import "./Transaction.css";
import { TransactionCard } from "../../components/card/TransactionCard";
import { deleteTransactions, getTransactions } from "../../components/helper/axiosHelper";

const Transactions = ({tranactions}) => {
  const [select, setSelect] = useState([])
  const [itemToDel, setItemToDel] = useState([]);
  const [checkedAll, setCheckedAll] = useState(false);

  // to list the transaction
  const newTransactions = [...tranactions].reverse()

  // console.log(newTransactions)
  const handleOnSelect = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setItemToDel([...itemToDel, value]);
      setCheckedAll(select.length === itemToDel.length + 1);
    } else {
      setItemToDel(itemToDel.filter((item) => item !== value));
      setCheckedAll(false);
    }
  };
  const handleOnSelectAll = (e) => {
    const { checked } = e.target;

    if (checked) {
      setCheckedAll(true);
      setItemToDel(select.map((item) => item._id));
    } else {
      setItemToDel([]);
      setCheckedAll(false);
    }
  };

  // const handleOnDelete = async (_id) => {
  //   if (!window.confirm("Are you sure you want to delete?")) {
  //     return;
  //   }

  //   const {status, message} = await deleteTransactions(itemToDel);
  //   console.log(status, message);
  //   // setResponse(result);
  //   status === "success" && getTransactions();
  //   setItemToDel([]);
  // };
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
          <TransactionCard tranactions={newTransactions} handleOnSelect={handleOnSelect} itemToDel={itemToDel} />
         
        </Row>
        <Row>
        {itemToDel.length > 0 && (
          <div className="d-grid g-2">
            <Button variant="danger" className="mb-3" >
               {itemToDel.length} transactions selected
            </Button>
          </div>
        )}
        </Row>
      </Container>
    </MainLayout>
  );
};

export default Transactions;
