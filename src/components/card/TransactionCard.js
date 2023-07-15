import Card from "react-bootstrap/Card";
import avatar from "../../assets/avatar.png";

export const TransactionCard = () => {
  return (
    <Card className="shadow-lg border-0">
      <Card.Body>
        <div className="d-flex justify-content-between flex-wrap">
          <div className="d-flex justify-content-center align-items-center flex-wrap mx-3">
            <img src={avatar} alt="avatar" width="80px" height="70px" />

            <h2 className="">Food</h2>
          </div>
          <div className="text-center">
            <h6 className="fw-bold"> +$1000.00</h6>
            <p>Today</p>
          </div>
        </div>
      </Card.Body>
    </Card>
  );
};
