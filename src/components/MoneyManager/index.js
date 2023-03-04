import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here

class MoneyManager extends Component {
  state = {
    transactionList: [],
    titleInput: '',
    amountInput: '',
    optionId: transactionTypeOptions[0].optionId,
  }

  transactionButton = event => {
    event.preventDefault()

    const {titleInput, amountInput, optionId} = this.state
    const optionText = transactionTypeOptions.find(
      eachTransaction => eachTransaction.optionId === optionId,
    )
    const {displayText} = optionText
    const newTransaction = {
      id: v4(),
      title: titleInput,
      amount: parseInt(amountInput),
      type: displayText,
    }
    this.setState(prevState => ({
      transactionList: [...prevState.transactionList, newTransaction],
      titleInput: '',
      amountInput: '',
      optionId: transactionTypeOptions[0].optionId,
    }))
  }

  titleInput = event => {
    this.setState({titleInput: event.target.value})
  }

  amountInput = event => {
    this.setState({amountInput: event.target.value})
  }

  optionSelection = event => {
    this.setState({optionId: event.target.value})
  }

  onDeleteTransactionHistory = id => {
    const {transactionList} = this.state

    const updatedTransactionList = transactionList.filter(
      each => id !== each.id,
    )
    this.setState({transactionList: updatedTransactionList})
  }

  getBalance = () => {
    const {transactionList} = this.state
    let balanceAmount = 0
    let incomeAmount = 0
    let expensesAmount = 0

    transactionList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += transaction.amount
      } else {
        expensesAmount += transaction.amount
      }
    })
    balanceAmount = incomeAmount - expensesAmount
    return balanceAmount
  }

  getIncome = () => {
    const {transactionList} = this.state

    let incomeAmount = 0

    transactionList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[0].displayText) {
        incomeAmount += transaction.amount
      }
    })
    return incomeAmount
  }

  getExpenses = () => {
    const {transactionList} = this.state

    let expensesAmount = 0

    transactionList.forEach(transaction => {
      if (transaction.type === transactionTypeOptions[1].displayText) {
        expensesAmount += transaction.amount
      }
    })
    return expensesAmount
  }

  render() {
    const {titleInput, amountInput, transactionList, optionId} = this.state
    const balance = this.getBalance()
    const income = this.getIncome()
    const expenses = this.getExpenses()

    return (
      <div className="bg-container">
        <div className="transaction-container">
          <div className="profile-container">
            <h1 className="name-heading">HI,Richard</h1>
            <p className="greeting">
              Welcome back to your <span>Money Manager</span>
            </p>
          </div>
          <div className="money-details-container">
            <MoneyDetails
              incomeAmount={income}
              balanceAmount={balance}
              expensesAmount={expenses}
            />
          </div>
          <div className="transaction-history-container">
            <form className="form" onSubmit={this.transactionButton}>
              <h1>Add Transaction</h1>
              <label className="label" htmlFor="title">
                TITLE
              </label>
              <input
                className="input-sizes"
                placeholder="TITLE"
                onChange={this.titleInput}
                id="title"
                type="text"
                value={titleInput}
              />
              <label className="label" htmlFor="amount">
                AMOUNT
              </label>
              <input
                className="input-sizes"
                placeholder="AMOUNT"
                onChange={this.amountInput}
                id="amount"
                type="text"
                value={amountInput}
              />
              <label className="label" htmlFor="expenses">
                EXPENSES
              </label>
              <select
                id="select"
                onChange={this.optionSelection}
                value={optionId}
                className="input-sizes"
              >
                {transactionTypeOptions.map(eachOption => (
                  <option key={eachOption.optionId} value={eachOption.optionId}>
                    {eachOption.displayText}
                  </option>
                ))}
              </select>
              <button className="add-button" type="submit">
                Add
              </button>
            </form>
            <ul className="history">
              <h1>History</h1>
              <li className="history-list">
                <p className="table-header-cell">Title</p>
                <p className="table-header-cell">Amount</p>
                <p className="table-header-cell">Type</p>
              </li>
              {transactionList.map(eachTransaction => (
                <TransactionItem
                  key={eachTransaction.id}
                  transaction={eachTransaction}
                  onDeleteTransactionHistory={this.onDeleteTransactionHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
export default MoneyManager
