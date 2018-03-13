import * as React from 'react';
import './style.css';
import { fetchMovies } from '../../store/Movies/actions';
import { getFilteredMovies, getSearchedMovies } from '../../store/Movies/';
import { setFilter, clearFilter } from '../../store/Filter/actions';
import { connect } from 'react-redux';
import CardGrid from '../../components/CardGrid';
import FilterList from '../../components/FilterList';

const mapStateToProps = ({ movies, filter, search }) => ({
  movies: getSearchedMovies(movies, search),
  filter
});

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
  setFilter: (filter) => dispatch(setFilter(filter)),
  clearFilter: (filter) => dispatch(clearFilter(filter))
})

class Movies extends React.Component {

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="movies">
        <FilterList
          movies={this.props.movies}
          filter={this.props.filter.filter}
          setFilter={this.props.setFilter}
          clearFilter={this.props.clearFilter}
        />
        <CardGrid movies={this.props.movies} />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
