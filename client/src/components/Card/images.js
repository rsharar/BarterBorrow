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
            usersItemsFlag: false,
            userimages: [],
            allimages: []
        };
    }
    componentDidMount() {
        axios.get('/auth/user').then(response => {
            if (!!response.data.user) {
                this.setState({
                    owneruserid: response.data.user._id,
                })
                API.getProductsByUserId({
                    owneruserid: this.state.owneruserid
                })
                .then(response => {
                    console.log(response.data)
                    this.setState(() => ({ 
                        userimages: response.data,
                        usersItemsFlag: false
                    }));
                })
            } else {
                API.getAllProducts()
                    .then(response => {
                        console.log(response.data)
                        this.setState(() => ({ allimages: response.data }));
                    })
                    .catch(err => {
                        console.log("POST ITEM ERROR: ", err)
                    });
            }
        })
    }

    render() {
        if (this.state.owneruserid){
            return (
                <div>
                    <h2>My Items</h2>
                    <ImageList images={this.state.userimages} />
                </div>
            )
        }
        else {
        return (
            <div>
                <ImageList images={this.state.allimages} />
            </div>
        );
        }
    }
}