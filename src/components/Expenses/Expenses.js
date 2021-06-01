import {useState} from 'react';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return(
        <Card className="expenses">
            <ExpensesFilter onChangeFilter = {filterChangeHandler} selected = {filteredYear} />
            <ExpenseItem title ={props.expensesData[0].title} amount={props.expensesData[0].amount} date={props.expensesData[0].date}></ExpenseItem>
            <ExpenseItem title ={props.expensesData[1].title} amount={props.expensesData[1].amount} date={props.expensesData[1].date}></ExpenseItem>
            <ExpenseItem title ={props.expensesData[2].title} amount={props.expensesData[2].amount} date={props.expensesData[2].date}></ExpenseItem>
            <ExpenseItem title ={props.expensesData[3].title} amount={props.expensesData[3].amount} date={props.expensesData[3].date}></ExpenseItem>
        </Card>
    );
}

export default Expenses;