import React from "react";
import { Button, Container, Form, Row } from "react-bootstrap";
import { MainLayout } from "../../components/layout/MainLayout";
import { Link } from "react-router-dom";

const AddTransaction = () => {
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
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Amount</Form.Label>
              <Form.Control type="number" placeholder="$$$" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Transaction Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Transaction name"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Category</Form.Label>
              <Form.Select defaultValue="Choose..." required>
                <option>Choose....</option>
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
