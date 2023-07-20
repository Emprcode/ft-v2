import Card from "react-bootstrap/Card";
import avatar from "../../assets/avatar.png";

export const TransactionCard = ({ arrayList, itemToDelete, func}) => {
  // console.log(arrayList);


  // console.log(itemToDelete)
  return (
    <>
      {arrayList?.length > 0 &&
        arrayList?.map((item, i) => (
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
                    onChange={func}
              
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
