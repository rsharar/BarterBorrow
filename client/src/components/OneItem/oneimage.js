import React, { Component } from 'react';
import ImageList from './imageList';
import './style.css';
// import API from '../../utils/API';
import axios from 'axios'

export default class OneItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productId: '',
            productImage: [],
        };
        // const id = this.props.match.params.id
    }
    componentDidMount(props) {
        console.log(props);
        axios.get('/auth/user').then(response => {
            if (!!response.data.user) {
                this.setState({
                    productId: response.data.user._id,
                })
                // API.getOneProduct({
                //     _id: props._id
                // })
                    // .then(response => {
                    //     console.log(response.data)
                    //     this.setState(() => ({
                    //         productImage: response.data,
                    //     }));
                    // })
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
                <h2>Item</h2>
                <ImageList images={this.state.productImage} />
            </div>
        )
    }
}