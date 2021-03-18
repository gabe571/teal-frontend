import React, { Component } from 'react';
 
export default class Profile extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            title: '',
            description: '',
            price: ''
        }
    }
 
handleChange= (e)=> {
    this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
    e.preventDefault()
   localStorage.setItem('document',JSON.stringify(this.state));
}
 
// React Life Cycle
componentDidMount() {
    this.documentData = JSON.parse(localStorage.getItem('document'));
 
    if (localStorage.getItem('document')) {
        this.setState({
            title: this.documentData.title,
           description: this.documentData.description,
           price: this.documentData.price
    })
} else {
    this.setState({
        title: '',
        description: '',
        price: ''
    })
}
}
 
render() {
    return (
        <div className="container">
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label>Price</label>
                    <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary btn-block">Submit</button>
            </form>
        </div>
    )
}
}
 

// import React, { useState } from 'react'
// import NavigationBar from './NavigationBar'

//  const Profile = () => {

//     const [name, setName] = useState('John Doe');
//     const [email, setEmail] = useState('johndoe@gmail.com');
//     const [phone, setPhone] = useState('(555)-555-5555');
//     const [address1, setAddress1] = useState('1234 test Line One');
//     const [address2, setAddress2] = useState('4567 test Line Two');
//     const [addressCity, setAddressCity] = useState('Tacoma, WA ');
//     const [addressZip, setAddressZip] = useState('98408');
   
   
//     const handleProfileSubmit = (e) => {
//         const updateProfile = {
//             'First Name' : name,
//             'Email' : email,
//             'Phone' : phone,
//             'Address1' : address1,
//             'Address2' : address2,
//             'AddressCity' : addressCity,
//             'AddressZip' : addressZip,
//         }
//         // updateProfile();
//     }
//     handleProfileSubmit();
//     return (
//         <>
//         <NavigationBar />
//          <div>
//              <div className="profile">
//                  <h1 className='profile-title'> Profile </h1>
//                  <br />
//                  <br />
//                  <h1 className="name"> {name} </h1>
//                  <input type="text" placeholder="Name" className="input-form"  onChange={e => setName(e.target.value)} />
//                  <br />
//                  <h1 className="e-mail">  {email}</h1>
//                  <input type="text" placeholder="Email" className="input-form" onChange={e => setEmail(e.target.value)} />
//                  <br />
//                  <h1 className="phone-number"> {phone} </h1>
//                  <input type="text" placeholder="Phone" className="input-form" onChange={e => setPhone(e.target.value)} />
//                  <br />
//                  <p className="address">
//                      <h1> Address: </h1>
//                      <h1> {address1} </h1>
//                      <h1> {address2}</h1>
//                      <h1> {addressCity} </h1>
//                      <h1> {addressZip} </h1>
//                      <input type="text" placeholder="Address Line One"  className="input-form" onChange={e => setAddress1(e.target.value)} />
//                      <input type="text" placeholder="Address Line Two" className="input-form" onChange={e => setAddress2(e.target.value)} />
//                      <input type="text" placeholder="City" className="input-form" onChange={e => setAddressCity(e.target.value)} />
//                      <input type="text" placeholder="Zipcode" className="input-form" onChange={e => setAddressZip(e.target.value)} />
//                  </p>
//                  <br />
//                  <button className='button is-primary' onSubmit={handleProfileSubmit}>Submit</button>
//              </div>
//          </div>
//         </>
//     )
// }

// export default Profile