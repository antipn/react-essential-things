import './NewExpenseForm.css'
import {Calendar} from 'primereact/calendar';
import {useState} from "react";

const NewExpenseForm = (props) => {

    const defaultDate = new Date()
    const defaultAmount = 0
    const defaultTitle = 'Enter expense name'

    const [newTitle, setnewTitle] = useState(defaultTitle);
    const [newAmount, setnewAmount] = useState(defaultAmount);
    const [newDate, setnewDate] = useState(defaultDate);

    const amountChangeHandler = (event) => {
        setnewAmount(event.target.value)

    }

    const titleChangeHandler= (event) => {
        setnewTitle(event.target.value)

    }

    const dateChangeHandler = (event) => {
        setnewDate(event.target.value)

    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        //getting vars from state
        const enteredData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        props.onSaveExpenseData(enteredData)
        setnewTitle(defaultTitle)
        setnewAmount(defaultAmount)
        setnewDate(defaultDate)
        props.onCancel(); //скрываем форму
    }

        return (
            <form onSubmit={formSubmitHandler}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input
                            type="text"
                            value={newTitle}
                            onChange={titleChangeHandler}
                            onFocus={() => setnewTitle('')}/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input
                            type="number"
                            value={newAmount}
                            onChange={amountChangeHandler}
                            min='0.01'
                            step='0.01'/>
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <Calendar
                            value={newDate}

                            onChange={dateChangeHandler}
                            dateFormat="dd-mm-yy"
                            showIcon
                            showButtonBar/>

                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add expense</button>
                    <button onClick={props.onCancel} type='button'>Cancel</button>
                </div>

            </form>
        )
}

export default NewExpenseForm;