import * as React from 'react';
import PropTypes from 'prop-types';
import './style.css';
import { normalizeKey } from '../../helpers/normalizeKey';
import Card from '../Card';
import Loading from '../Loading';
import Error from '../Error';

const CardGrid = ({ movies }) => (
  <div className="card-grid">
    {!movies || movies.isLoading
      ? (<Loading />)
      : movies.hasErrored
        ? (<Error />)
        : movies.movies.map(movie => (
          <Card movie={movie} key={`${normalizeKey(movie.title)}-${movie.year}`} />
        ))
    }
  </div>
);

CardGrid.propTypes = {
  movies: PropTypes.shape({
    isLoading: PropTypes.bool,
    hasErrored: PropTypes.bool,
    movies: PropTypes.array
  })
}

export default CardGrid;
