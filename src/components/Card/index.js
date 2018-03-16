import * as React from 'react';
import PropTypes from 'prop-types';
import './style.css';

class Card extends React.Component {
  shouldComponentUpdate(nextProps) {
    return false;
  }
  render() {
    const random = Math.floor(100 + (Math.random() * 200));
    const color = `hsla(${random}, 100%, 56%, 0.85)`
    return (
      <article className="card" style={{ background: color }}>
        <h2>{this.props.movie.title}</h2>
      </article>);
  }
};

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string
  })
}
export default Card;
