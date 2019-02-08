import React, { Component } from 'react';
import ImageList from './searchimageList';
import './style.css';
import API from '../../utils/API';

export default class Images extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: 'sports',
            searchQuery: 'ski',
            allimages: []
        };
    }
    componentDidMount() {
            // console.log("Search: " + this.props.location.state.searchQuery)
            // Validation with category selected
            if (this.state.category) {
                // this.state.category is updated based on dropdown selection
                API.getProductsByCategory({
                    category: this.props.location.state.category
                })
                    .then(response => {
                        // return all matching products with category
                        console.log(response.data)
                        // update state of empty products []
                        this.setState({ images: response.data })
                    })
                    .catch(err => {
                        console.log("SEARCH BY CATEGORY ERROR: ", err)
                    });
            }
            if (this.state.searchQuery.length > 1) {
                API.getProductsBySearch({
                    searchQuery: this.props.location.state.searchQuery
                })
                    .then(response => {
                        // return all matching products with like title
                        console.log(response.data)
                        // update state of empty items []
                        this.setState({ images: response.data })
                    })
                    .catch(err => {
                        console.log("SEARCH BY SEARCH ERROR: ", err)
                    });
            }
        }
    render() {
        return (
            <div>
            <h2>Search Results</h2>
            <ImageList images={this.state.allimages} />
        </div>
        );
    }
}
