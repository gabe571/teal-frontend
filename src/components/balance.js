import react, {useState, useEffect} from 'react'
import Transaction from './Transaction'

const Balance = (props) => {
    console.log(props)

    const [balance, setBalance] = useState('');
    const [credit, setCredit] = useState('');
    const [debit, setDebit] = useState('');
    const [transaction, setTransaction] = useState({description: '', amount: ''}); 
    const [list, setList] = useState([]);


    return (
         <div className='totals'>
        <h2 className='subtitle'> Current Balance </h2>
        <h3> ${balance} </h3>
        <div>
            <h3 className='subtitle'> Credit </h3>
            <h4> ${credit} </h4>
        </div>
        <div>
            <h3 className='subtitle'> Debit </h3>
            <h2> ${debit} </h2>
        </div>
    </div>
     )
    }
    
    export default Balance
