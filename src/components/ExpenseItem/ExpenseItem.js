import './ExpenseItem.css'

function ExpenseItem(props) {
    const year = props.date.getFullYear();
    //const year = props.date.toLocaleString('ru-RU', {year: 'numeric'});
    const month = props.date.toLocaleString('ru-RU', {month: 'long'}).toUpperCase();
    const day = props.date.toLocaleString('ru-RU', {day: '2-digit'});

    return (<div className='expense-item'>
            <div>
                <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div>
            </div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
            </div>
            <div className='expense-item__price'>${props.amount}
            </div>
        </div>
    );

}

export default ExpenseItem;