import react from 'react'
import Form from './Form'
import Transactions from './Transactions'
import Balance from './Balance'

const layout = () => {


return (
    <div>
      <Form />
      <Transactions />
      <Balance />
    </div>
 )
}

export default layout