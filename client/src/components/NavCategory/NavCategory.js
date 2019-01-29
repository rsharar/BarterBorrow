import React, { Component } from 'react'
import './style.css'

export default class NavCategory extends Component {
    constructor() {
        super()
        this.state = {
            category: '',
        }
        // this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        console.log(this.props.id)
        this.setState({
            [event.target.name]: event.target.value,
        })
    }
    // handleSubmit(event) {
    //     event.preventDefault()
    //     // Validation with title and description fields
    //     if (this.state.title && this.state.description) {
    //         API.postProduct({
    //             title: this.state.title,
    //             owneruserid: this.state.owneruserid,
    //             category: this.state.category,
    //             description: this.state.description,
    //             imageurl: this.state.imageurl,
    //             location: this.state.location,
    //             status: this.state.status,
    //         })
    //             .then(response => {
    //                 console.log(response)
    //                 console.log("product posted!")
    //             })
    //             .catch(err => {
    //                 console.log("POST ITEM ERROR: ", err)
    //             });
    //     }
    // }


    render() {
        return (
            <div>
                <div className="postItemFields">
                    <label className="formTitle" htmlFor="productCategory">Category: </label>
                    <select name="category" className="formElement"
                        value={this.state.category} onChange={this.handleChange} style={{ display: 'inline-block' }}>
                        <option value="tools">Tools</option>
                        <option value="sports">Sports</option>
                        <option value="crafts">Crafts</option>
                        <option value="electronics">Electronics</option>
                        <option value="other">Other</option>
                    </select>
                </div>
            </div>
        )
    }
}
