import React, { Component } from 'react'
import axios from 'axios'
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
        // this.handleChange = this.handleChange.bind(this)
    }
    // handleChange(event) {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }
    handleSubmit(event) {
        event.preventDefault()
        // TODO - validate!
        axios
            .post('/api/products/:id', {
                title: this.state.title,
                owneruserid: this.state.owneruserid,
                category: this.state.category,
                description: this.state.description,
                imageurl: this.state.imageurl,
                location: this.state.location,
                status: this.state.status,
            })
            .then(response => {
                console.log(response)
                if (!response.data.errmsg) {
                    console.log('SUCCESSFUL POST')
                    this.setState({
                        redirectTo: '/'
                    })
                } else {
                    console.log('duplicate')
                }
            })
            .catch(err => {
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
                    name="productTitle"
                    value={this.state.title}
                    onChange={this.handleChange}
                />
                <label htmlFor="productCategory">Category: </label>
                <input
                    type="productCategory"
                    name="productCategory"
                    value={this.state.category}
                    onChange={this.handleChange}
                />
                <label htmlFor="productDescription">Description: </label>
                <input
                    type="productDescription"
                    name="productDescription"
                    value={this.state.description}
                    onChange={this.handleChange}
                />
                <label htmlFor="imageURL">Photo: </label>
                <input
                    type="imageURL"
                    name="imageURL"
                    value={this.state.imageurl}
                    onChange={this.handleChange}
                />
                <label htmlFor="productLocation">Location: </label>
                <input
                    type="productLocation"
                    name="productLocation"
                    value={this.state.location}
                    onChange={this.handleChange}
                />
                <label htmlFor="productStatus">Status: </label>
                <input
                    type="productStatus"
                    name="productStatus"
                    value={this.state.status}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleSubmit}>Post my item!</button>
            </div>
        )
    }
}

export default PostItemForm;
