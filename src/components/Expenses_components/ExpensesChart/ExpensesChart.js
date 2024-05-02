import React from 'react'
import Chart from "../../Chart_components/Chart/Chart"

const ExpensesChart = (props) => {

    const chartDataPoints = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0}

    ]

    //filing the value by our expenses by month
    for (const expense of props.data) {
        const expenseMonth = expense.date.getMonth(); //starting from 0!
        chartDataPoints[expenseMonth].value += expense.amount;
    }
    return (
        <Chart dataPoints={chartDataPoints}/>
    )
}

export default ExpensesChart;
