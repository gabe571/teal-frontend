import react, {useState, useEffect} from 'react'
import Transaction from './Transaction'

const Form = () => {

//initial state
    const [transaction, setTransaction] = useState({description: '', amount: ''}); 
    const [credit, setCredit] = useState('');
    const [debit, setDebit] = useState('');
    const [list, setList] = useState([]);
    const [balance, setBalance] = useState('');

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
}, [list])

const clearBudget = () => {
    setList([])
    setCredit(null)
    setDebit(null)
}

return (
    
    <div>
    <h2> Enter an Item </h2>
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
        <input 
        type='number'
         className='input' 
         placeholder='Enter Amount'
         name='amount'
         value={transaction.amount}
         onChange={updateForm}
         >
        </input>
        <div>
            <button type='submit' className='button is-primary'> Submit </button>
        </div>
    </form>
    <button className='button is-danger' onClick={clearBudget}> Clear </button>
            <h2 className='subtite'> Transaction History </h2>
           {list.map(i => {
               return (
                   <table className='table'>
                       <tbody key={i.description}>
                        <tr>{i.description}
                        <td> ${i.amount}</td>
                        </tr>
                       </tbody>
                   </table>
               )
           })}
            <div className='totals'>
        <h2 className='subtitle'> Current Balance </h2>
        <h3> ${balance} </h3>
            <h3 className='subtitle'> Credit </h3>
            <h4> ${credit} </h4>
            <h3 className='subtitle'> Debit </h3>
            <h2> ${debit} </h2>
        </div>
    </div>
 )
}

export default Form