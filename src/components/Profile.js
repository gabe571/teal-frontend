import React, { Component } from 'react';
import NavigationBar from './NavigationBar'
 
export default class Profile extends Component {
    documentData;
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            name: '',
            email: '',
            phone: '',
            address1: '',
            address2: '',
            addresscitystate: '',
            addresszip: ''
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
            name: this.documentData.name,
           phone: this.documentData.phone,
           email: this.documentData.email,
           address1: this.documentData.address1,
           address2: this.documentData.address2,
           addresscitystate: this.documentData.addresscitystate,
           addresszip: this.documentData.addresszip,
    })
} else {
    this.setState({
            name: '',
            phone: '',
            email: '',
            address1: '',
            address2: '',
            addresscitystate: '',
            addresszip: ''
    })
}
}
 
render() {
    return (
        <div className="container">
            <NavigationBar />
            <div>
            <h1 className='profile-title'> Profile </h1>
            </div>
            <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <input type="text" name="name" className="form-control" value={this.state.name} onChange={this.handleChange} />
                    <label>Name</label>
                </div>
                <div className="form-group">
                    <input type="text" name="phone" className="form-control" 
                    value={this.state.phone} onChange={this.handleChange} />
                     <label>Phone</label>
                </div>
                <div className="form-group">
                    <input type="text" name="email" className="form-control" value={this.state.email} onChange={this.handleChange} />
                    <label>Email</label>
                </div>
                <div className="form-group">
                    <input type="text" name="address1" className="form-control" value={this.state.address1} onChange={this.handleChange} />
                    <label>Address 1</label>
                </div>
                <div className="form-group">
                    <input type="text" name="address2" className="form-control" value={this.state.address2} onChange={this.handleChange} />
                    <label>Address 2</label>
                </div>
                <div className="form-group">
                    <input type="text" name="addresscitystate" className="form-control" value={this.state.addresscitystate} onChange={this.handleChange} />
                    <label>City, State</label>
                </div>
                <div className="form-group">
                    <input type="text" name="addresszip" className="form-control" value={this.state.addresszip} onChange={this.handleChange} />
                    <label>Zipcode</label>
                </div>
                <div className='profile-submit'>
                <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
}
 
