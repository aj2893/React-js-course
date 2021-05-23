import Expenses from './components/Expenses/Expenses';

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
  return (
    <div>
      <h1>Welcome to React Course</h1>
      <Expenses expensesData = {expenses}/>
    </div>
  );
}

export default App;
