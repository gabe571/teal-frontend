import react, {useState, useEffect} from 'react'

const Transactions = () => {

    const [transactions, setTransactions] = useState({description: '', amount: ''}); 
    const [list, setList] = useState([]);

    return (
        <div>
        <button className='button is-danger'> Clear </button>
            <h2 className='subtite'> Transaction History </h2>
        </div>
     )
    }
    
    export default Transactions