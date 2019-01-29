import React, { Component } from 'react'
import axios from 'axios'
import { Route, Link } from 'react-router-dom'
import './App.css'
import LoginForm from './components/Login/LoginForm'
import SignupForm from './components/SignupForm/SignupForm'
import PostItemForm from './components/PostItem/PostItem'
// import Header from './components/Header/Header'
import Home from './components/Home/Home'
// import { Z_BLOCK } from 'zlib';

const DisplayLinks = props => {
	if (props.loggedIn) {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">BorrowBarter</a>
					<ul className="hide-on-med-and-down center-align">
						<li>
							<div className="row searchBar">
								<div className="input-field col s6 s12 red-text">
									<i className="material-icons left">search</i>
									<input type="text" placeholder="search" id="autocomplete-input" className="autocomplete black-text" />
								</div>
							</div>
						</li>

						{/* Redirect to page for user to post item */}
						<li className="nav-item">
							<Link to="/user/post" className="nav-link">
								Post an item
						</Link>
						</li>
						<li>
							<Link to="#" className="nav-link" onClick={props._logout}>
								Logout
						</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	} else {
		return (
			<nav>
				<div className="nav-wrapper">
					<a href="/" className="brand-logo">BorrowBarter</a>
					<ul className="hide-on-med-and-down center-align">
						<li>
							<div className="row searchBar">
								<div className="input-field col s6 s12 red-text">
									<i className="material-icons left">search</i>
									<input type="text" placeholder="search" id="autocomplete-input" className="autocomplete black-text" />
								</div>
							</div>
						</li>
						<li className="nav-item">
							<Link to="/login" className="nav-link">
								login
						</Link>
						</li>
						<li className="nav-item">
							<Link to="/signup" className="nav-link">
								sign up
						</Link>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

class App extends Component {
	constructor() {
		super()
		this.state = {
			loggedIn: false,
			user: null
		}
		this._logout = this._logout.bind(this)
		this._login = this._login.bind(this)
	}
	componentDidMount() {
		axios.get('/auth/user').then(response => {
			// console.log(response.data)
			if (!!response.data.user) {
				// console.log('THERE IS A USER')
				this.setState({
					loggedIn: true,
					user: response.data.user
				})
			} else {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_logout(event) {
		event.preventDefault()
		console.log('logging out')
		axios.post('/auth/logout').then(response => {
			console.log(response.data)
			if (response.status === 200) {
				this.setState({
					loggedIn: false,
					user: null
				})
			}
		})
	}

	_login(username, password) {
		axios
			.post('/auth/login', {
				username,
				password
			})
			.then(response => {
				console.log(response)
				if (response.status === 200) {
					// update the state
					this.setState({
						loggedIn: true,
						user: response.data.user
					})
				}
			})
	}

	render() {
		return (
			<div className="App">
				{/* <h1>This is the main App component</h1> */}
				{/* <Header user={this.state.user} /> */}
				{/* LINKS to our different 'pages' */}
				<DisplayLinks _logout={this._logout} loggedIn={this.state.loggedIn} />
				{/*  ROUTES */}
				{/* <Route exact path="/" component={Home} /> */}
				<Route exact path="/" render={() => <Home user={this.state.user} />} />
				<Route
					exact
					path="/login"
					render={() =>
						<LoginForm
							_login={this._login}
							_googleSignin={this._googleSignin}
						/>}
				/>
				<Route exact path="/signup" component={SignupForm} />
				<Route exact path="/user/post" component={PostItemForm} />
				{/* <LoginForm _login={this._login} /> */}
			</div>
		)
	}
}

export default App