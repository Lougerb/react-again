function ExpenseItem() {
  //   const expenseDate = new Date(2021, 2, 28);
  return (
    <div className="p-expense">
      <div className="p-expense__date">March 28th 2021</div>
      <div className="p-expense__description">
        <h2>Car Insurance</h2>
        <div className="p-expense__price">$294.67</div>
      </div>
    </div>
  );
}
export default ExpenseItem;
