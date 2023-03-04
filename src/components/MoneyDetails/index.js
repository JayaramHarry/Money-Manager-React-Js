// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {incomeAmount, balanceAmount, expensesAmount} = props
  return (
    <>
      <div className="money-details balance">
        <img
          className="image "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
          alt="balance"
        />
        <div className="money-container">
          <p className="money-type">Your Balance</p>
          <p className="amount" data-testid="balanceAmount">
            Rs {balanceAmount}
          </p>
        </div>
      </div>
      <div className="money-details income">
        <img
          className="image "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
          alt="income"
        />
        <div className="money-container">
          <p className="money-type">Your Income</p>
          <p className="amount" data-testid="incomeAmount">
            Rs {incomeAmount}
          </p>
        </div>
      </div>
      <div className="money-details expenses">
        <img
          className="image "
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
          alt="expenses"
        />
        <div className="money-container">
          <p className="money-type">Your Expenses</p>
          <p className="amount" data-testid="expensesAmount">
            Rs {expensesAmount}
          </p>
        </div>
      </div>
    </>
  )
}
export default MoneyDetails
