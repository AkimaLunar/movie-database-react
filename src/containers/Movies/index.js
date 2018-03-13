import * as React from 'react';
import './style.css';
import { fetchMovies } from '../../store/Movies/actions';
import { connect } from 'react-redux';
import CardGrid from '../../components/CardGrid';

const mapStateToProps = ({ movies }) => ({ movies });

const mapDispatchToProps = (dispatch) => ({
  fetchMovies: () => dispatch(fetchMovies())
})

class Movies extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMovies()
  }

  render() {
    return (
      <div className="movies">
        <CardGrid movies={this.props.movies} />
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Movies);
