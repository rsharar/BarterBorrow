import React, { Component } from 'react'
import API from '../../utils/API';
import './style.css'
// import { Redirect } from 'react-router-dom'

class PostItemForm extends Component {
    constructor() {
        super()
        this.state = {
            title: '',
            owneruserid: '',
            category: '',
            description: '',
            imageurl: '',
            location: '',
            status: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    handleSubmit(event) {
        event.preventDefault()
        // Validation with title and description fields
        if (this.state.title && this.state.description){
        API.postProduct({
            title: this.state.title,
            // owneruserid: this.state.owneruserid,
            // TODO: category not getting captured
            // category: this.state.category,
            description: this.state.description,
            imageurl: this.state.imageurl,
            location: this.state.location,
            status: this.state.status,
        })
            .then(response => {
                console.log(response)
                console.log("product posted!")
            })
            .catch(err => {
                console.log("POST ITEM ERROR: ", err)
            });
        }
    }
    render() {
        return (
            <div className="postitemForm">
                <h1>Post an Item</h1>
                <div className="postItemFields">
                    <label htmlFor="productTitle">Product Title: </label>
                    <input
                        className="formElement"
                        type="text"
                        name="title"
                        value={this.state.title}
                        onChange={this.handleChange}
                        placeholder="e.g. DeWalt Angle Grinder"
                    />
                </div>
                <div className="postItemFields">
                    <label htmlFor="productCategory">Category: </label>
                    <select category={this.state.category} onChange={this.handleChange}>
                        <option value="tools">Tools</option>
                        <option value="sports">Sports</option>
                        <option value="crafts">Crafts</option>
                        <option value="electronics">Electronics</option>
                        <option value="other">Other</option>
                        {/* <input
                            type="submit"
                            name="category"
                            value={this.state.category}
                        /> */}
                    </select>
                </div>
                <div className="postItemFields">
                    <label htmlFor="productDescription">Description: </label>
                    <input
                        className="formElement"
                        type="text"
                        name="description"
                        value={this.state.description}
                        onChange={this.handleChange}
                        placeholder="Describe your item in a few sentences."
                    />
                </div>
                <div className="postItemFields">
                    <label htmlFor="imageURL">Photo: </label>
                    <input
                        className="formElement"
                        type="text"
                        name="imageurl"
                        value={this.state.imageurl}
                        onChange={this.handleChange}
                        placeholder="Add an image URL"
                    />
                </div>
                <div className="postItemFields">
                    <label htmlFor="productLocation">Location: </label>
                    <input
                        className="formElement"
                        type="text"
                        name="location"
                        value={this.state.location}
                        onChange={this.handleChange}
                        placeholder="Neighborhood, City or State"
                    />
                </div>
                <div className="postItemFields">

                    <label htmlFor="productStatus">Status: </label>
                    <input
                        type="text"
                        name="status"
                        value={this.state.status}
                        onChange={this.handleChange}
                    />
                </div>
                <button onClick={this.handleSubmit}>Post my item!</button>
            </div>
        )
    }
}

export default PostItemForm;
