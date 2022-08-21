import "./ExpenseItem.css";
import moment from "moment";

function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <div className="expense-date">{moment(props.date).format("Do MMM YYYY")}</div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
