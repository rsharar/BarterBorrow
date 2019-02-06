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
                console.log("no logged in user")
            }
        })
    }

    render() {
        if (this.state.owneruserid) {
            return (
                <div>
                    <h2>My Items</h2>
                    <ImageList images={this.state.userimages} />
                </div>
            )
        }
        else {
            return (
                null
            );
        }
    }
}