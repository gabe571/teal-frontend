import React, { useState, useEffect } from 'react'


function Form(props) {
  const [transaction, setTransaction] = useState({
    description: '',
    amount: ''
  })
  const [transactionList, setTransactionList] = useState(
    JSON.parse(localStorage.getItem('transactionList')) || []
  )
  const [balance, setBalance] = useState('')
  const [income, setIncome] = useState(
    JSON.parse(localStorage.getItem('income'))
  )
  const [expense, setExpense] = useState(JSON.parse(localStorage.getItem('expense')))

  const updateForm = e => {
    setTransaction({
      ...transaction,
      [e.target.name]:
        e.target.type === 'number' ? parseInt(e.target.value) : e.target.value
    })
  }

  const getProps = () => {
    console.log(localStorage)
  }
  getProps()
  const getBalance = () => {
    const amounts = transactionList.map(i => i.amount)
    const money = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    setBalance(money)
  }

  useEffect(() => {
    getBalance()
    localStorage.setItem('transactionList', JSON.stringify(transactionList))
    localStorage.setItem('income', JSON.stringify(income))
    localStorage.setItem('expense', JSON.stringify(expense))
  }, [transactionList])

  const plusMinus = () => {
    transaction.amount > 0
      ? setIncome(income + transaction.amount)
      : setExpense(expense + transaction.amount)
  }

  const clearBudget = () => {
    setTransactionList([])
    setIncome(null)
    setExpense(null)
    alert ('Balance has been cleared')
  }

  return (
    <div>
      <div className="container layout">
      <div className="totals">
        <h2 className="balance"> Welcome {localStorage.username}, Your Current Balance:</h2>
        <h3>${balance}</h3>
        <div>
        <div>
            <h2>History</h2>
            {transactionList.map(i => {
              return (
                <table className='list'>
                  <tbody key={i.description} >
                    <tr>{i.description}</tr>
                    <td>${parseInt(i.amount)}</td>
                  </tbody>
                </table>
              )
            })}
            </div>
          {/* <h3 className="subtitle">income</h3> */}
          {/* <h4>${income}</h4> */}
        </div>
        <div>
          {/* <h3 className="subtitle">expense</h3>
          <h2>${expense}</h2> */}
        </div>
      </div>
        <div className="form">
          <h2 className="enter-item">Enter an Item</h2>
          <form
            onSubmit={e => {
              e.preventDefault()
              setTransactionList([transaction, ...transactionList])
              plusMinus()
              setTransaction({ description: '', amount: '' })
            }}
          >
            <div>
              <input
                type="text"
                className="input-trans"
                placeholder="Enter Transaction"
                value={transaction.description}
                name="description"
                onChange={updateForm}
              />
            </div>
            <input
              type="number"
              className="input-trans"
              placeholder="Enter Amonut"
              name="amount"
              value={transaction.amount}
              onChange={updateForm}
            />
            <div className='button-container'>
              <button type="submit" className="bal-sub">
                Submit
              </button>
            </div>
          </form>
          <div className='button-container'>
            <button className="clear-sub" onClick={clearBudget}>
              Clear Budget
            </button>
            {/* <div>
            <h2>History</h2>
            {transactionList.map(i => {
              return (
                <table>
                  <tbody key={i.description}>
                    <tr>{i.description}</tr>
                    <td>${parseInt(i.amount)}</td>
                  </tbody>
                </table>
              )
            })}
            </div> */}
          </div>
        </div>
      </div>
      {/* <div className="totals">
        <h2 className="balance">Current Balance:</h2>
        <h3>${balance}</h3>
        <div>
          <h3 className="subtitle">income</h3>
          <h4>${income}</h4>
        </div>
        <div>
          <h3 className="subtitle">expense</h3>
          <h2>${expense}</h2>
        </div>
      </div> */}
    </div>
  )
}

export default Form

