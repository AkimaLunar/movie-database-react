import * as React from 'react';
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

export default CardGrid;
