import * as React from 'react';
import './style.css';

import CardGrid from '../../components/CardGrid';

class Movies extends React.Component {
  render() {
    return (
      <div className="movies">
        <CardGrid />
      </div>
    )
  }
}


export default Movies;
