import react from 'react'

const form = () => {



return (
    <div>
    <h2> Enter an Item </h2>
    <form>
       <div>
           <input type='text' className="input" placeholder='Enter Transaction'>
           </input>
        </div> 
        <input type='number' className='input' placeholder='Enter Amount'>
        </input>
        <div>
            <button type='submit' className='button is-primary'> Submit </button>
        </div>
    </form>
    </div>
 )
}

export default form