import './App.css';
import Expenses from "./components/Expenses_components/Expenses/Expenses";
import "./components/Expenses_components/Expenses/Expenses.css"
import NewExpense from "./components/NewExpense_component/NewExpense/NewExpense";
import {useState} from "react";

const INIT_DATA = [
    {
        id: 'e1', title: 'Toilet Paper', amount: 94.12, date: new Date(2024, 7, 14),
    },
    {
        id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2024, 2, 12)
    },
    {
        id: 'e3', title: 'Car Insurance', amount: 294.67, date: new Date(2024, 2, 28),
    },
    {
        id: 'e4', title: 'New Desk (Wooden)', amount: 450, date: new Date(2024, 5, 12),
    },
];

function App() {


    const [expenses, setExpenses] = useState(INIT_DATA);

    const addExpenseHandler = (expense) => {
        console.log("Getting data from children 2 part in App.js", expense)

        //setExpenses([data, ...expenses]) //так делать не очень правильно
        //а вот так делать правильно, выше он не сразу обновить переменную!
        setExpenses((prevExpenses) => {
            return [expense,   ...prevExpenses];
        })

    }

    return (
        <div>
            <NewExpense onAddData={addExpenseHandler}/>

            <div className='expenses'>

                <Expenses items={expenses}/>
            </div>
        </div>
    );
}

export default App;
