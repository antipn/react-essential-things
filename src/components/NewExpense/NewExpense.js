import './NewExpense.css'
import NewExpenseForm from "../NewExpenseForm/NewExpenseForm";

const NewExpense = (props) => {

    //up linking data (from children to parent)
    const saveExpenseDataHandler = (enteredExpense) => {

        const expenseData = {
            ...enteredExpense,
            id: Math.random().toString()
        }
        console.log("Got data from children element 1 part in NewExpsense element", expenseData)
        props.onAddData(expenseData)
    }

        return (
            <div className='new-expense'>
                <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
            </div>
        )
    }

    export default NewExpense;