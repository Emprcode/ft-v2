import "./Dashboard.css";
import { MainLayout } from "../../components/layout/MainLayout";
import { Button, Col, Container, Row } from "react-bootstrap";
import avatar from "../../assets/avatar.png";
import { Link, useNavigate } from "react-router-dom";
import { TransactionCard } from "../../components/card/TransactionCard";
import { useEffect } from "react";
import { GiWallet } from "react-icons/gi";

const Dashboard = ({ tranactions, user }) => {
  const navigate = useNavigate();

  useEffect(() => {
    !user && navigate("/");
  }, [user, navigate]);
  const total = tranactions.reduce(
    (acc, item) =>
      item.type === "Income" ? acc + +item.amount : acc - +item.amount,
    0
  );

  const totalIncome = tranactions.reduce((acc, item) => {
    if (item.type === "Income") {
      return acc + +item.amount;
    }
    return acc;
  }, 0);
  const totalExpense = tranactions.reduce((acc, item) => {
    if (item.type === "Expense") {
      return acc + +item.amount;
    }
    return acc;
  }, 0);

  const newTransactions = [...tranactions].reverse();

  const latestTransactions = newTransactions.slice(0, 4);
  // console.log(tranactions);
  // console.log(newTransactions);
  // console.log(user);

  return (
    <MainLayout>
      <Container className="p-4">
        {/* intro */}
        <Row>
          <Col>
            <div className="d-flex">
              <img src={avatar} alt="avatar" width="90px" height="80px" />
              <div className="mx-3">
                <h4 className="text-center">Welcome!</h4>
                <h2 className="fw-bold"> {user?.name}</h2>
              </div>
            </div>
          </Col>
          <Col>
            <Link
              to="/add-transaction"
              className="d-flex justify-content-end nav-link">
              <span className="mt-2 h3 add-icon ">
                <i class="fa-solid fa-plus"></i>
              </span>
            </Link>
          </Col>
        </Row>

        {tranactions?.length > 0 ? (
          <>
            {/* status display */}
            <div className="d-flex justify-content-center p-5 ">
              <Row className="p-3 rounded contact shadow-lg">
                <div>
                  <div className="text-center">
                    <p className="p-2">Total Balance</p>

                    <h2 className="fw-bold"> $ {total}</h2>
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
                        <h5 className="">${totalIncome}</h5>
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
                        <h5 className="">${totalExpense}</h5>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Row>
            </div>
            {/* Transaction */}

            <div>
              <Row className="p-4">
                <Col>
                  <h2 className="fw-bold">Transactions</h2>
                </Col>
                <Col>
                  <Link
                    to="/transactions"
                    className="d-flex justify-content-end fw-bold nav-link">
                    View All
                  </Link>
                </Col>
              </Row>
              <Row className="gap-3 p-3 ">
                <TransactionCard
                  arrayList={latestTransactions}
                  isVisible={false}
                />
              </Row>
            </div>
          </>
        ) : (
          <div className="p-4 mt-3 shadow-lg">
            <div className="d-flex justify-content-center p-5 ">
              <Row className="p-3">
                <div className="text-success">
                  <GiWallet size={150} />
                </div>
              </Row>
            </div>

            <div className="text-center">
              <h2 className="fw-bold">Save your money with Finance Tracker</h2>
              <p>
                Your financial wizardry—track, save, prosper. Unleash money
                magic, bloom wealth. Empower, conquer, and discover financial
                freedom
              </p>
              <Link to="/add-transaction">
                <Button
                  variant="success"
                  className="btnColor text-dark fw-bold">
                  Lets Start
                </Button>
              </Link>
            </div>
          </div>
        )}
      </Container>
    </MainLayout>
  );
};

export default Dashboard;
