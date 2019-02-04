import React, { Component } from 'react'
import API from '../../utils/API';
import axios from 'axios'

export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            _id:'',
            firstName: '',
            username:'',
            password:'',
            firstpassword:'',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    componentDidMount() {
		axios.get('/auth/user').then(response => {
            let userInfo = response.data.user
            console.log(userInfo.local.username)
			if (userInfo.local.username) {
				this.setState({
                    _id: userInfo._id,
                    firstName: userInfo.firstName,
                    username: userInfo.local.username,
                })
			} else if (userInfo.firstName){
                this.setState({
                    _id: userInfo._id,
                    firstName: userInfo.firstName,
                    username: userInfo.local.username,
                })
            }
            else {
                console.log("No logged in user")
            }
        })
    }
		

    handleChange(event) {
        console.log(this.props.id)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        if (this.state.password === this.state.firstpassword) {
            API.updateUserProfile({
                    id: this.state._id,
                    username: this.state.username,
                    password: this.state.password
            })
                .then(response => {
                    console.log(response)
                    console.log("Profile updated!")
                })
                .catch(err => {
                    console.log("PROFILE UPDATE ERROR: ", err)
                });
        }
        else{
            alert("Passwords do not match!")
        }
        alert("Profile updated!")
        // window.location.reload();
    }
  render() {
    return (
        <div className="container z-depth-3" id="postItemForm">
        <h4>My Profile</h4>
        <div className="profileFields">
            <label className="formTitle" htmlFor="userName">Username</label>
            <input
                className="formElement"
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleChange}
                placeholder={this.state.username}
            />
        </div>
        <div className="profileFields">
            <label className="formTitle" htmlFor="firstPassword">New Password</label>
            <input
                className="formElement"
                type="password"
                name="firstpassword"
                value={this.state.firstpassword}
                onChange={this.handleChange}
            />
        </div>
        <div className="profileFields">
            <label className="formTitle" htmlFor="password">Confirm Password</label>
            <input
                className="formElement"
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleChange}
            />
        </div>
        <button id="postFormBtn" onClick={this.handleSubmit} className="btn waves-effect waves-light" type="submit" name="action">UPDATE PROFILE
<i className="material-icons right">send</i>
        </button>
    </div>

    )
  }
}
