import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses = [
    {
      id: "ej1",
      title: "Toilet Paper",
      amount: 294.67,
      date: new Date(2021, 4,21)
    },
    {
      id: "ej2",
      title: "New TV",
      amount: 294.68,
      date: new Date(2021, 5,22)
    },
    {
      id: "ej3",
      title: "Car Insurance",
      amount: 294.69,
      date: new Date(2021, 6,23)
    },
    {
      id: "ej4",
      title: "New Desk(Wooden)",
      amount: 294.72,
      date: new Date(2021, 7,24)
    },
  ];

  const addExpenseHandler = expense => {
    console.log('In App.js', expense);
    expenses.push(expense);
    console.log(expenses);
  }
  return (
    <div>
      <h1>Welcome to React Course</h1>
      <NewExpense  onAddExpense = {addExpenseHandler}/>
      <Expenses expensesData = {expenses}/>
    </div>
  );
}

export default App;
