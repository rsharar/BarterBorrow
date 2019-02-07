import React, { Component } from 'react';
import ImageList from './proposalimagelist';
import './style.css';
import API from '../../utils/API';
import axios from 'axios';
import Chat from '../Chat/Chat';


export default class Proposal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            owneruserid: '',
            productId: '',
            loggedInUserImages: [],
            // productOwnerImages: []
        };
        const id = this.props.match.params.id
        console.log("proposalId: " + id);
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
                        console.log(response.data);
                        this.setState(() => ({
                            loggedInUserImages: response.data,
                        }));
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
                        <h2>Their Items</h2>
                        <ImageList images={this.state.productOwnerImages} />
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
