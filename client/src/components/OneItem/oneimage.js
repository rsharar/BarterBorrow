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
    // use redirect comp
    // in new comp, onComponentDidMount (this.props) -->
    // move route to singleItemComponent
    //   console.log(props.image._id)
    //   API.getOneProduct({
    //     _id: props.image._id
    //   })
    //     .then(response => {
    //       console.log(response)
    //       console.log("Proudct found!")
    //     })
    //     .catch(err => {
    //       console.log("CANNOT FIND PRODUCT ERROR: ", err)
    //     });
    // }
    render() {
        return (
            <div>
                <h2>The Item</h2>
                <ImageList images={this.state.productImage} />
            </div>
        )
    }
}