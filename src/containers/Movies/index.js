import * as React from 'react';
import './style.css';
import { fetchMovies } from '../../store/Movies/actions';
import { getMovies } from '../../store/Movies/';
import { setFilter, clearFilter } from '../../store/Filter/actions';
import { clearSearch } from '../../store/Search/actions';
import { connect } from 'react-redux';
import CardGrid from '../../components/CardGrid';
import FilterList from '../../components/FilterList';

const mapStateToProps = ({ movies, filter, search }) => ({
  movies: getMovies(movies, search, filter),
  filter,
  search
})

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies()),
  clearSearch: () => dispatch(clearSearch()),
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
          search={this.props.search.search}
          clearSearch={this.props.clearSearch}
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
