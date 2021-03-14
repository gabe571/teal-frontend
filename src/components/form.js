import react, {useState, useEffect} from 'react'
import Transaction from './Transaction'

const Form = () => {

//initial state
const [transaction, setTransaction] = useState({
    description: '',
    amount: ''
  })
  const [list, setList] = useState(
    JSON.parse(localStorage.getItem('list')) || []
  )
  const [balance, setBalance] = useState('')
  const [credit, setCredit] = useState(
    JSON.parse(localStorage.getItem('credit'))
  )
  const [debit, setDebit] = useState(JSON.parse(localStorage.getItem('debit')))

    //updates based onChange value
const updateForm = (e) => {
    setTransaction({
        ...transaction,
        [e.target.name]:
         e.target.type == 'number' ? parseInt(e.target.value) : e.target.value
        })
}

//identify if transaction is income/expense

const plusMinus = () => {
    transaction.amount > 0
     ? setCredit(credit + transaction.amount)
      : setDebit(debit + transaction.amount)
}
// updates balance after transaction is added
const getBalance = () => {
    const amounts = list.map(i => i.amount)
    const money = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2)
    setBalance(money) 
}

useEffect(() => {
    getBalance()
    localStorage.setItem('list', JSON.stringify(list))
    localStorage.setItem('credit', JSON.stringify(credit))
    localStorage.setItem('debit', JSON.stringify(debit))
  }, [list])


//clear transaction list
const clearBudget = () => {
    setList([])
    setCredit(null)
    setDebit(null)
}

return (
    
    <div>
        <div className='totals'>
        <h2 className='balance'> Current Balance </h2>
        <h3> ${balance} </h3>
            <h4> Credit: ${credit} Debit: ${debit} </h4>
        </div>
         <h2 className='trans-history'> Transaction History </h2>
           {list.map(i => {
               return (
                   <div className='trans'>
                       <ul  key={i.description}>
                        <li className='list' >{i.description} ${i.amount}</li>
                   </ul>
                   </div>
               )
           })}
        <h2 className='enter-item'> Enter an Item </h2>
    <form
    onSubmit={e => {
        e.preventDefault()
        setList([transaction, ...list])
        plusMinus()
        setTransaction({ description: '', amount: ''})
    }}
    >
       <div> 
           <input 
           type='text' 
           className="input" 
           placeholder='Enter Transaction'
           value={Transaction.description}
           name='description'
           onChange={updateForm}
           >
           </input>
        </div> 
        <div className='tran-amount'>
        <input 
        type='number'
         className='input' 
         placeholder='Enter Amount'
         name='amount'
         value={transaction.amount}
         onChange={updateForm}
         >
        </input>
        </div>
        <br/>
        <div className='button-container'>
            <button type='submit' className='button is-primary'> Submit </button>
            <button className='button is-danger' onClick={clearBudget}> Clear </button>
        </div>
    </form>
    </div>
 )
}

export default Form