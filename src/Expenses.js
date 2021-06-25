import React, { useState } from "react";

import "./components/Expenses.css"
import Card from "./components/Card";
import ExpensesList from "./components/ExpensesList";
import ExpensesFilter from "./components/ExpensesFilter";
import ExpensesChart from "./components/ExpensesChart";
function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');
    function filterChangeHandler(selectedYear) {
        setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpensesChart expenses={filteredExpenses} />
                <ExpensesList items = {filteredExpenses}/>
            </Card>
        </div>
    );
}
export default Expenses;