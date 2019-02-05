import React, { Component } from 'react';
import ImageList from './imageList';
import './style.css';
import API from '../../utils/API';
import axios from 'axios'





export default class Images extends Component {
    constructor() {
        super();
        this.state = {
            owneruserid: '',
            images: []
        };
    }
    componentDidMount() {
        axios.get('/auth/user').then(response => {
            if (!!response.data.user) {
                this.setState({
                    owneruserid: response.data.user._id
                })
                API.getProductsByUserId({
                    owneruserid: this.state.owneruserid
                })
                .then(response => {
                    console.log(response.data)
                    this.setState(() => ({ images: response.data }));
                })
            } else {
                API.getAllProducts()
                    .then(response => {
                        console.log(response.data)
                        this.setState(() => ({ images: response.data }));
                    })
                    .catch(err => {
                        console.log("POST ITEM ERROR: ", err)
                    });
            }
        })
    }

    render() {
        return (
            <div>
                <ImageList images={this.state.images} />
            </div>
        );
    }
}