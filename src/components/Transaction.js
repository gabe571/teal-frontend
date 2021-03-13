import react, {useState, useEffect} from 'react'

const Transaction = () => {

    const [transaction, setTransaction] = useState({description: '', amount: ''}); 
    const [list, setList] = useState([]);

    return (
        <div>
        <button className='button is-danger'> Clear </button>
            <h2 className='subtite'> Transaction History </h2>
           {list.map(i => {
               return (
                   <table className='table'>
                       <tbody key={i.description}>
                        <tr>{i.description}
                        <td>$parseInt({i.amount})</td>
                        </tr>
                       </tbody>
                   </table>
               )
           })}
        </div>
     )
    }
    
    export default Transaction