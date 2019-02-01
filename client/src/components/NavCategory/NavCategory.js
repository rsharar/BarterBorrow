import React, { Component } from 'react'
import API from '../../utils/API';
import './style.css'


export default class NavCategory extends Component {
    constructor() {
        super()
        this.state = {
            category: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(this.props.id)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
	handleSubmit(event) {
		event.preventDefault()
		// Validation with category selected
		if (this.state.category) {
            // this.state.category is updated based on dropdown selection
			API.getProductsByCategory({
                category: this.state.category
            })
				.then(response => {
					console.log(response)
					console.log("products found by category!")
				})
				.catch(err => {
					console.log("SEARCH BY CATEGORY ERROR: ", err)
				});
		}
	}
    render() {
        return (
            <div>
                <div className="postItemFields">
                    <label className="formTitle" htmlFor="productCategory">Category: </label>
                    <select name="category" className="formElement"
                        value={this.state.category} onChange={this.handleChange} style={{ display: 'inline-block' }}>
                        <option value="tools">All</option>
                        <option value="crafts">Crafts</option>
                        <option value="electronics">Electronics</option>
                        <option value="sports">Sports</option>
                        <option value="tools">Tools</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                    <button id="searchBtn"
                        onClick={this.handleSubmit}
                        className="btn waves-effect waves-light" type="submit" name="action">Find some items!
                        </button>
            </div>

        )
    }
}
