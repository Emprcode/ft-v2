import Card from "react-bootstrap/Card";
import avatar from "../../assets/avatar.png";
import { InputGroup, Form, Row, Button } from "react-bootstrap";
import { useState } from "react";
import { deleteTransactions, getTransactions } from "../helper/axiosHelper";

export const TransactionCard = ({ tranactions, itemToDelete, handleOnSelect}) => {
  // console.log(tranactions);


  console.log(itemToDelete)
  return (
    <>
      {tranactions?.length > 0 &&
        tranactions?.map((item, i) => (
          <Card className="shadow-lg border-0 cardcss" key={item._id}>
            <Card.Body>
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex justify-content-center align-items-center flex-wrap mx-3">
                  {/* <InputGroup.Checkbox /> */}
                  {/* <input type="checkbox" className="form-check-input" /> */}
                  <input
                    type="checkbox"
                    className="form-check-input"
                    value={item._id}
                    onChange={handleOnSelect}
                    // checked={itemToDelete.includes(item._id)}
                  />
                  <img src={avatar} alt="avatar" width="80px" height="70px" />

                  <h2 className="">{item.name}</h2>
                </div>
                <div className="text-center">
                  {item.type === "Income" ? (
                    <h6 className="fw-bold text-success"> +${item.amount}</h6>
                  ) : (
                    <h6 className="fw-bold text-danger"> -${item.amount}</h6>
                  )}
                  {/* .split('T')[0] */}
                  <p>{item.createdAt.split("T")[0]}</p>
                </div>
              </div>
            </Card.Body>
          </Card>
          
        ))}
       
    </>
  );
};
