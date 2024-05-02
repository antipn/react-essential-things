import './ExpenseItem.css'
import '../ExpenseDate/ExpenseDate'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";


const ExpenseItem = (props) => {

    return (
        <li>
            <Card className='expense-item'>

                <ExpenseDate date={props.date}/>

                <div className='expense-item__description'>
                    <h2>{props.title}</h2>
                </div>

                <div className='expense-item__price'>${props.amount}
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem;