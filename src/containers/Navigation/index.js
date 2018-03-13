import * as React from 'react';
import './style.css';
import { updateSearch, clearSearch } from '../../store/Search/actions';
import { connect } from 'react-redux';

import Logo from '../../components/Logo';
import Search from '../../components/Search';

const mapStateToProps = ({ search }) => ({ search });

const mapDispatchToProps = (dispatch) => ({
  searchOnChange: (text) => dispatch(updateSearch(text)),
  searchOnClear: () => dispatch(clearSearch())
})

class Navigation extends React.Component {

  render() {
    const { search, searchOnChange } = this.props;
    return (
      <div className="navigation">
        <div className="navigation__inner">
          <Logo />
          <Search onChange={searchOnChange} state={search} />
        </div>
      </div>
    )
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Navigation);
