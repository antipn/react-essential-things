import './ExpenseDate.css'

function ExpenseDate(props) {
    const year = props.date.getFullYear();
    //const year = props.date.toLocaleString('ru-RU', {year: 'numeric'});
    const month = props.date.toLocaleString('ru-RU', {month: 'long'}).toUpperCase();
    const day = props.date.toLocaleString('ru-RU', {day: '2-digit'});
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    )
}

export default ExpenseDate;