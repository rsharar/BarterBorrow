import React, { Component } from 'react';
import ImageList from './proposalimagelist';
import TheirImageList from './theirimagelist';import './style.css';
import API from '../../utils/API';
import axios from 'axios';
import Chat from '../Chat/Chat';


export default class Proposal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedinuserid: '',
            productId: '',
            loggedInUserImages: [],
            productOwnerImages: []
        };
        const proposalId = this.props.location.key
        console.log("key: " + proposalId);

    }
    componentDidMount() {
        axios.get('/auth/user').then(response => {
            if (!!response.data.user) {
                this.setState({
                    loggedinuserid: response.data.user._id,
                    productId: this.props.location.state.productId
                })
                API.getProductsByUserId({
                    owneruserid: this.state.loggedinuserid
                })
                    .then(response => {
                        this.setState(() => ({
                            loggedInUserImages: response.data,
                        }));
                    })
                    console.log(this.state.productId)
                API.getOneProduct({
                    _id: this.state.productId
                })
                    .then(response => {
                        console.log(response.data);
                        this.setState(() => ({
                            productOwnerImages: response.data
                        }))
                    })
            }
        })
    }
    render() {
        return (
            // wrapper div
            <div>
                <div>
                    {/* item owner's items */}
                    <div className="col s4">
                        <h2>Their Item</h2>
                        <TheirImageList images={this.state.productOwnerImages} />
                    </div>
                    <div className="col s4">
                        <h2>Your Items</h2>
                        {/* logged in user's images */}
                        <ImageList images={this.state.loggedInUserImages} />
                    </div>
                </div>
                <div className="col s4">
                    <Chat />
                </div>
            </div>

        )
    }
}
