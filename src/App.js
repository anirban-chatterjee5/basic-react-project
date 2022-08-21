import "./App.css";
import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expense = [
    { title: "Care Insurance", amount: "Rs.1000", date: new Date(2022, 2, 28) },
    { title: "New TV", amount: "Rs.22000", date: new Date(2022, 3, 2) },
    { title: "Mobile bill", amount: "Rs.1199", date: new Date(2022, 4, 31) },
  ];

  return (
    <div className="App">
      <h1>Welcome to my first React page!</h1>
      <ExpenseItem
        title={expense[0].title}
        amount={expense[0].amount}
        date={expense[0].date}
      />
      <ExpenseItem
        title={expense[1].title}
        amount={expense[1].amount}
        date={expense[1].date}
      />
      <ExpenseItem
        title={expense[2].title}
        amount={expense[2].amount}
        date={expense[2].date}
      />
    </div>
  );
}

export default App;
