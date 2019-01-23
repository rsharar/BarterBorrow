import React, { Component } from 'react'
// import axios from 'axios'
import API from "../utils/API";
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
            status: '',
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
        // TODO - validate!

        API.postProduct({
            title: this.state.title,
            ownerUserId: this.state.owneruserid,
            category: this.state.category,
            description: this.state.description,
            imageUrl: this.state.imageurl,
            location: this.state.location,
            status: this.state.status
        }).then(data => {
            console.log(data)
        }).catch(err => {
            console.log("POST ITEM ERROR: ", err)
        })
    }
    render() {
        // if (this.state.redirectTo) {
        //     return <Redirect to={{ pathname: this.state.redirectTo }} />
        // }
        return (
            <div className="PostItemForm">
                <h1>Post an Item</h1>
                <label htmlFor="productTitle">Product Title: </label>
                <input
                    type="text"
                    name="title"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <label htmlFor="productCategory">Category: </label>
                <input
                    type="text"
                    name="category"
                    value={this.state.category}
                    onChange={this.handleChange}
                />
                <label htmlFor="productDescription">Description: </label>
                <input
                    type="text"
                    name="description"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <label htmlFor="imageURL">Photo: </label>
                <input
                    type="text"
                    name="imageurl"
                    value={this.state.imageurl}
                    onChange={this.handleChange}
                />
                <label htmlFor="productLocation">Location: </label>
                <input
                    type="text"
                    name="location"
                    value={this.state.location}
                    onChange={this.handleChange}
                />
                <label htmlFor="productStatus">Status: </label>
                <input
                    type="text"
                    name="status"
                    value={this.state.status}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Post my item!</button>
            </div>
        )
    }
}

export default PostItemForm;
