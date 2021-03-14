import React, { useState } from 'react'

 const Profile = () => {

    const [name, setName] = useState('John Doe');
    const [email, setEmail] = useState('johndoe@gmail.com');
    const [phone, setPhone] = useState('(555)-555-5555');
    const [address1, setAddress1] = useState('1234 test Line One');
    const [address2, setAddress2] = useState('4567 test Line Two');
    const [addressCity, setAddressCity] = useState('Tacoma, WA ');
    const [addressZip, setAddressZip] = useState('98408 ');
   
   
    const handleProfileSubmit = (e) => {
        const updateProfile = {
            'First Name' : name,
            'Email' : email,
            'Phone' : phone,
            'Address1' : address1,
            'Address2' : address2,
            'AddressCity' : addressCity,
            'AddressZip' : addressZip,
        }
        console.log(updateProfile);
    }
    handleProfileSubmit()
    return (
        <>
         <div>
             <div className="profile">
                 <h1> Profile </h1>
                 <br />
                 <br />
                 <h1 className="name"> {name} </h1>
                 <input type="text" placeholder="Name" className="input-name" onChange={e => setName(e.target.value)} />
                 <br />
                 <h1 className="e-mail">  {email}</h1>
                 <input type="text" placeholder="Email" onChange={e => setEmail(e.target.value)} />
                 <br />
                 <h1 className="phone-number"> {phone} </h1>
                 <input type="text" placeholder="Phone" onChange={e => setPhone(e.target.value)} />
                 <br />
                 <p className="address">
                     <h1> Address: </h1>
                     <h1> {address1} </h1>
                     <h1> {address2}</h1>
                     <h1> {addressCity} </h1>
                     <h1> {addressZip} </h1>
                     <input type="text" placeholder="Address Line One" onChange={e => setAddress1(e.target.value)} />
                     <input type="text" placeholder="Address Line Two" onChange={e => setAddress2(e.target.value)} />
                     <input type="text" placeholder="City" onChange={e => setAddressCity(e.target.value)} />
                     <input type="text" placeholder="Zipcode" onChange={e => setAddressZip(e.target.value)} />
                 </p>
                 <button className="button" onClick={handleProfileSubmit}>Submit</button>
             </div>
         </div>
        </>
    )
}

export default Profile