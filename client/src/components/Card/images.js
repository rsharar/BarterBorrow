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
            allimages: []
        };
    }
    componentDidMount() {
        axios.get('/auth/user').then(response => {
            API.getAllProducts()
                .then(response => {
                    console.log(response.data)
                    this.setState(() => ({ allimages: response.data }));
                })
                .catch(err => {
                    console.log("POST ITEM ERROR: ", err)
                });
        })
    }

    render() {
        return (
            <div>
                <h2>All Available Items</h2>
                <ImageList images={this.state.allimages} />
            </div>
        );
    }
}
