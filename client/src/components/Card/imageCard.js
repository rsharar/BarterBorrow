import React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { Link } from 'react-router-dom';
// import API from '../../utils/API';
var text_truncate;
text_truncate = function(str, length, ending) {
  if (length == null) {
    length = 100;
  }
  if (ending == null) {
    ending = '...';
  }
  if (str.length > length) {
    return str.substring(0, length - ending.length) + ending;
  } else {
    return str;
  }
};

const ImageCard = (props) => (
  <div className="card medium col s12 m4 l3">
    <div className="card-image waves-effect waves-block waves-light">
      <img className="activator responsive-img" src={props.image.imageurl} alt="Office" />
    </div>
    <div className="card-content">
      <span className="card-title activator grey-text text-darken-4">{text_truncate(props.image.title, 33)}<i className="material-icons right">more_vert</i></span>
      {/* <p><a href={'api/products/'+props.image._id}>Barter or Borrow</a></p> */}
    </div>
    <div className="card-reveal">
      <span className="card-title grey-text text-darken-4">{props.image.title}<i className="material-icons right">close</i></span>
      <p><b>Description:</b> {props.image.description}</p>
      <p><b>Location:</b> {props.image.location}</p>
      <p><b>Status:</b> {props.image.status}</p>
      <Link to={`/items/${props.image._id}`}>
      <button>Get this item!</button>
      </Link>
    </div>
  </div>
);

ImageCard.defaultProps = {
  image: {},
};

ImageCard.propTypes = {
  image: PropTypes.object,
};


export default ImageCard;