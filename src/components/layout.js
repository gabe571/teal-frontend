import react from 'react'
import Form from './form'
import Transactions from './transactions'
import Balance from './balance'

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