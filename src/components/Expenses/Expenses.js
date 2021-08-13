import React, { useState } from "react";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import ExpensesList from "../ExpensesList/ExpensesList";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {

    const [year, setYear] = useState('2021');
    const expenses = props.expenses.filter(expense => expense.date.getFullYear() == year )
    const saveYearHandler = selectedYear => {
        setYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={year}
                onSaveYear={saveYearHandler} />
            <ExpensesChart expenses={expenses}/>
            <ExpensesList expenses={expenses}/>

        </Card>

    )
}

export default Expenses;