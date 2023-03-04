// Write your code here
import './index.css'

const TransactionItem = props => {
  const {transaction, onDeleteTransactionHistory} = props
  const {id, title, amount, type} = transaction

  const onDelete = () => {
    onDeleteTransactionHistory(id)
  }

  return (
    <li className="list-item">
      <p className="">{title}</p>
      <p>Rs {amount}</p>
      <p>{type}</p>
      <div>
        <button
          data-testid="delete"
          onClick={onDelete}
          className="button"
          type="button"
        >
          <img
            className="delete-img"
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}
export default TransactionItem
