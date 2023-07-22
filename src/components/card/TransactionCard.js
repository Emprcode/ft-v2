import Card from "react-bootstrap/Card";
import avatar from "../../assets/avatar.png";
import { FcMoneyTransfer } from "react-icons/fc";
import { FaMoneyCheckAlt } from "react-icons/fa";

export const TransactionCard = ({ arrayList, isVisible, func }) => {
  return (
    <>
      {arrayList?.length > 0 &&
        arrayList?.map((item, i) => (
          <Card className="shadow-lg border-0 cardcss" key={item._id}>
            <Card.Body>
              <div className="d-flex justify-content-between flex-wrap">
                <div className="d-flex justify-content-center align-items-center flex-wrap mx-3">
                  {isVisible && (
                    <input
                      type="checkbox"
                      className="form-check-input"
                      value={item._id}
                      onChange={func}
                      //  checked={itemToDelete?.includes(item._id)}
                      // checked={select}
                    />
                  )}

                  {
                    item.type === "Income" ? (
                      <div className="p-3 text-warning">
                        <FcMoneyTransfer size={40} />
                      </div>
                    ) : (
                      <div className="p-3 text-danger">
                        <FaMoneyCheckAlt size={35} />
                      </div>
                    )
                    // <i class="fa-solid fa-comments-dollar"></i>
                  }
                  {/* <img src={avatar} alt="avatar" width="80px" height="70px" /> */}

                  <h2 className="mx-2">{item.name}</h2>
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
