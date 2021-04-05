const IncomeExpense = () => {
  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1>$0.00</h1>

      <div className="inc-exp-container">
        <div>
          <h4>Income</h4>
          <p className="money plus">+$0.00</p>
        </div>
        <div>
          <h4>Expense</h4>
          <p className="money minus">-$0.00</p>
        </div>
      </div>
    </div>
  )
}

export default IncomeExpense
