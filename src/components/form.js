import react, {useState, useEffect} from 'react'
import Transaction from './Transaction'

const Form = () => {


    const [transaction, setTransaction] = useState({description: '', amount: ''}); 
const updateForm = (e) => {
    setTransaction({
        ...transaction,
        [e.target.name]:
         e.target.type == 'number' ? parseInt(e.target.value) : e.target.value
        })
}

return (
    <div>
    <h2> Enter an Item </h2>
    <form>
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
    </div>
 )
}

export default Form