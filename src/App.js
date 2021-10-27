import ExpenseItem from "./components/ExpenseItem.js";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: "92.22",
      date: new Date(2020, 2, 14),
    },
    {
      id: "e2",
      title: "PC",
      amount: "392.22",
      date: new Date(2021, 3, 5),
    },
    {
      id: "e3",
      title: "Cup",
      amount: "10",
      date: new Date(2019, 1, 24),
    },
    {
      id: "e4",
      title: "Cloth",
      amount: "42.22",
      date: new Date(2022, 8, 24),
    },
  ];
  return (
    <div className="l-main">
      <div className="u-layout">
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
        <ExpenseItem />
      </div>
    </div>
  );
}

export default App;
