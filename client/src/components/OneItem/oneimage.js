import React, { Component } from 'react';
import ImageList from './imageList';
import './style.css';
import API from '../../utils/API';
import axios from 'axios'

export default class OneItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedInUserId: '',
            productId: '',
            productImage: [],
        };
        const id = this.props.match.params.id
        console.log("ProductId: " + id);
    }

    componentDidMount() {
        axios.get('/auth/user').then(response => {
            if (!!response.data.user) {
                console.log(this.props.match.params.id)
                this.setState({
                    loggedInUserId: response.data.user._id,
                    productId: this.props.match.params.id
                })
                console.log(this.state.loggedInUserId)
                console.log(this.state.productId)
                API.getOneProduct({
                    _id: this.state.productId
                })
                    .then(response => {
                        console.log(response.data)
                        this.setState(() => ({
                            productImage: response.data,
                        }));
                    })

            } else {
                console.log("no logged in user")
            }
        })
    }
    render() {
        return (
            <div>
                <h2>The Item</h2>
                <ImageList images={this.state.productImage} />
                <button class="waves-effect waves-light btn" style={{color: "white", fontSize: "24px", marginBottom: "20px"}}>Make a proposal</button>
            </div>
        )
    }
}