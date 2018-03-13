import * as React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Filter = ({ genre }) => (<p className="filter"><span>&#35;&thinsp;</span>{genre}</p>);

Filter.propTypes = {
  genre: PropTypes.string
}

export default Filter;
