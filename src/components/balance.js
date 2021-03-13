import react, {useState, useEffect} from 'react'

const Balance = () => {

    const [balanace, setBalance] = useState('');
    const [credit, setCredit] = useState('');
    const [debit, setDebit] = useState('');

    return (
         <div className='totals'>
        <h2 className='subtitle'> Current Balance </h2>
        <h3> Balance </h3>
        <div>
            <h3 className='subtitle'> Credit </h3>
            <h4> credit </h4>
        </div>
        <div>
            <h3 className='subtitle'> Debit </h3>
            <h2> debit </h2>
        </div>
    </div>
     )
    }
    
    export default Balance
