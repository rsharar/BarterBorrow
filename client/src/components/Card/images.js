import React, { Component } from 'react';
import ImageList from './imageList';
import './style.css';
import API from '../../utils/API';



export default class Images extends Component {

    constructor() {
        super();

        this.state = {
            images: []
        };
    }

    componentDidMount() {
        API.getAllProducts()
        .then(response => {
            console.log(response.data)
            console.log("product posted!")
            this.setState(() => ({ images: response.data }));

        })
        .catch(err => {
            console.log("POST ITEM ERROR: ", err)
        });
    }

    render() {
        return (
                    <div>
                        <ImageList images={this.state.images} />
                    </div>
        );
    }
}