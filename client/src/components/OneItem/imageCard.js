import React from 'react';
import PropTypes from 'prop-types';
import './style.css';


const ImageCard = (props) => (
  <div className="card col s12">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator responsive-img" src={props.image.imageurl} alt="Office" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{props.image.title}<i className="material-icons right">more_vert</i></span>
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{props.image.title}<i className="material-icons right">close</i></span>
      <p><b>Desription: </b>{props.image.description}</p>
      <p><b>Location: </b>{props.image.location}</p>
      <p><b>Status: </b>{props.image.status}</p>
    </div>
  </div>
);

ImageCard.defaultProps = {
  image: {}
};

ImageCard.propTypes = {
  image: PropTypes.object
};

export default ImageCard;