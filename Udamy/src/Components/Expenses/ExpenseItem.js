import React from "react";
import Card from "../UI/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <ul>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="expense-item__decription">
          <h2>{props.title}</h2>
          <div className="expense-item__price">$ {props.amount}</div>
        </div>
      </Card>
    </ul>
  );
};
export default ExpenseItem;
