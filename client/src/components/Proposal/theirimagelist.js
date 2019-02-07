import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './proposalimagecard';
import './style.css';


const getimages = (image) => {
    return (
        <div className="row">
              <ImageCard key={image._id} image={image} />
        </div>
    );
};

const ImageList = (props) => (
    <div className = "container">
        {getimages(props.images)}
    </div>
);

ImageList.defaultProps = {
    images: []
};

ImageList.propTypes = {
    images: PropTypes.array
};

export default ImageList;