import React from 'react';
import PropTypes from 'prop-types';
import ImageCard from './searchimageCard';

const getimages = (images) => {
    return (
        <div className="row">
            {
                images.map(image => <ImageCard key={image._id} image={image} />)
            }
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