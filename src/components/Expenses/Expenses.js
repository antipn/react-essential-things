import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css"

function Expenses(props) {
    return (
        props.data.map((element) => {
                return (
                    <div className='expenses'>
                        <ExpenseItem id={element.id} title={element.title} date={element.date} amount={element.amount}/>
                    </div>
                )
            }
        )
    )
}

export default Expenses;