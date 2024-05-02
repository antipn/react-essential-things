import React from 'react'
import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./ExpensesList.css"

function ExpensesList(props) {

    if (props.data.length === 0) {
        return <h2 className="expenses-list__fallback">Нет данных за выбранный период</h2>
    }

    return (
        <ul className="expenses-list">
            {props.data.map(item => (
                <ExpenseItem key={item.id} id={item.id} title={item.title} date={item.date}
                                                  amount={item.amount}/>))

            }
        </ul>
    )
}

export default ExpensesList
