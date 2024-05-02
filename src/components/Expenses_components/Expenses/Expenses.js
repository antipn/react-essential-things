import "./Expenses.css"
import Card from "../Card/Card";
import ExpensesFilter from "../ExpensesFilter/ExpensesFilter";
import {Fragment, useState} from "react";
import ExpensesList from "../ExpensesList/ExpensesList";
import ExpensesChart from "../ExpensesChart/ExpensesChart";

function Expenses(props) {

    //важно год прописать в одинарных кавычках
    const [filteredYear, setFilteredYear] = useState('2024');

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear)
    }

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === filteredYear;
    })

    console.log("Getting data from children 3 part  in App.js", filteredYear)
    console.log("Если не меняли фильтр по годам до сейчас фильтр по умолчанию = ", filteredYear, filteredExpenses)

    return (
        <Fragment>
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChageFilter={filterChangeHandler}/>
                <ExpensesChart data={filteredExpenses}/>
                <ExpensesList data={filteredExpenses}/>
            </Card>
        </Fragment>
    )
}

export default Expenses;


//