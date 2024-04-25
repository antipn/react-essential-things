import './NewExpenseForm.css'
// import Calendar from "react-calendar";
import {Calendar} from 'primereact/calendar';
import {useState} from "react";

const NewExpenseForm = () => {


    const [newTitle, setnewTitle] = useState('');
    const [newAmount, setnewAmount] = useState('');
    const [newDate, setnewDate] = useState('');


    // const [userInput, setUserInput] = useState({
    //     newTitle: '',
    //     newAmount: '',
    //     newDate: ''
    // })

    const titleChangeHandler = (event) => {
        setnewTitle(event.target.value)
        // setUserInput({
        //         ...userInput,
        //         newTitle: event.target.value
        //     }
        // )
        // setUserInput(prevState => {
        //     return {...prevState, newTitle: event.target.value}
        // })
    }

    const amountChangeHandler = (event) => {
        setnewAmount(event.target.value)
        // setUserInput(
        //     {
        //         ...userInput,
        //         newAmount: event.target.value
        //     }
        // )
        // setUserInput(prevState => {
        //     return {...prevState, newAmount: event.target.value}
        // })
    }

    const dateChangeHandler = (event) => {
        setnewDate(event.target.value)
        // setUserInput({
        //     ...userInput,
        //     newDate: event.target.value
        // })
        // setUserInput(prevState => {
        //     return {...prevState, newDate: event.target.value}
        // })
    }

    const formSubmitHandler = (event) => {
        event.preventDefault()
        //getting vars from state
        const enteredData = {
            title: newTitle,
            amount: newAmount,
            date: new Date(newDate)
        }
        console.log(enteredData)
    }

    return (
        <form onSubmit={formSubmitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" onChange={titleChangeHandler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" onChange={amountChangeHandler} min='0.01' step='0.01'/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <Calendar onChange={dateChangeHandler} dateFormat="dd-mm-yy" showIcon showButtonBar/>

                </div>
            </div>
            <div className='new-expense__actions'>
                <button onClick={null} type='submit'>Add expense</button>
            </div>

        </form>
    )

}

export default NewExpenseForm;