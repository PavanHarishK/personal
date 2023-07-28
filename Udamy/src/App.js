import React, { useState } from "react";

import NewExpense from "./Components/NewExpense/NewExpense";
import Expenses from "./Components/Expenses/Expenses";

const Dummy_Expenses = [
  {
    id: 1,
    date: new Date(2022, 2, 21),
    title: "Books",
    amount: 19.95,
  },
  {
    id: 2,
    date: new Date(2021, 2, 21),
    title: "Text Books",
    amount: 29.95,
  },
  {
    id: 3,
    date: new Date(2021, 2, 21),
    title: "Note Books",
    amount: 39.95,
  },
  {
    id: 4,
    date: new Date(2020, 2, 21),
    title: "Pen",
    amount: 49.95,
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(Dummy_Expenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenses={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
