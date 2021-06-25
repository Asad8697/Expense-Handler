import React, { useState } from "react";

import Expenses from "./Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
  const dummy_expenses = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2021, 1, 14),
    },
    {
      id: 'e2',
      title: 'Car Insurance',
      amount: 294.12,
      date: new Date(2020, 7, 24),
    },
    {
      id: 'e3',
      title: 'Groceries',
      amount: 194.12,
      date: new Date(2021, 3, 4),
    },
    {
      id: 'e4',
      title: 'Sanitizer',
      amount: 54.12,
      date: new Date(2021, 6, 17),
    },
  ];
  function App() {
    const[expenses,setExpenses] = useState(dummy_expenses);

  function addExpenseHandler(expense){
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });
  };


  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
        <Expenses items = {expenses}/>
    </div>
  );
}

export default App;
