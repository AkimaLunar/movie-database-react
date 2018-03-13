import * as React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Card = ({ movie }) => {
  const random = Math.floor(100 + (Math.random() * 200));
  const color = `hsla(${random}, 100%, 56%, 0.85)`
  return (
    <article className="card" style={{ background: color }}>
      <h2>{movie.title}</h2>
    </article>);
}

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  })
}
export default Card;
