import './ExpenseItem.css'
import '../ExpenseDate/ExpenseDate'
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
import {useState} from "react";

const  ExpenseItem = (props) => {

    const [title, setTitle] = useState(props.title);

    const clickHandler = () => {
        setTitle('Updated');
    }
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>

            <div className='expense-item__description'>
                <h2>{title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}
            </div>
            <button onClick={clickHandler}>ChangeTitle</button>
        </Card>
    );

}

export default ExpenseItem;