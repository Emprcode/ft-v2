import React, { useState } from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";
import { getTransactions, postTransactions } from "../../components/helper/axiosHelper";
import { toast } from "react-toastify";

const AddTransaction = () => {
  const [formData, setFormData] = useState("");

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  console.log(formData);
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await postTransactions(formData);
    toast[status](message);
    status === "success" && getTransactions()
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
          <h2 className="text-center fw-bold"> Add Transaction</h2>
        </Row>
        <div className="p-4 d-flex justify-content-center align-items-center">
          <Form onSubmit={handleOnSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                name="amount"
                type="number"
                placeholder="$$$"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Transaction Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                placeholder="Transaction name"
                required
                onChange={handleOnChange}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select
                defaultValue="Select Category..."
                required
                name="type"
                onChange={handleOnChange}>
                <option disabled>Select Category...</option>
                <option>Income</option>
                <option>Expense</option>
              </Form.Select>
            </Form.Group>

            <Row className="d-grid m-5">
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Row>
          </Form>
        </div>
      </Container>
    </MainLayout>
  );
};

export default AddTransaction;
