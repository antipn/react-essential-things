import './NewExpense.css'
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";
import {useState} from "react";

const NewExpense = (props) => {


    const [isEditing, setIsEditing] = useState(false);

    //up linking data (from children to parent)
    const saveExpenseDataHandler = (enteredExpense) => {

        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        console.log("Got data from children element 1 part in NewExpense element", expenseData)
        props.onAddData(expenseData)
        editingForm()
    }

    //показать или скрыть форму
    const editingForm = () => {
        setIsEditing(!isEditing)
    }

    return (

        <div className='new-expense'>
            {!isEditing && <button onClick={editingForm}>Add New Expense</button>}
            {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={editingForm}/>}
        </div>
    )

}
export default NewExpense;