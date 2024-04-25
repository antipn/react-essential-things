import ExpenseItem from "../ExpenseItem/ExpenseItem";
import "./Expenses.css"
import Card from "../Card/Card";

function Expenses(props) {
    return (
        props.data.map((element) => {
                return (
                    <Card className='expenses'>
                        <ExpenseItem id={element.id} title={element.title} date={element.date} amount={element.amount}/>
                    </Card>
                )
            }
        )
    )
}

export default Expenses;