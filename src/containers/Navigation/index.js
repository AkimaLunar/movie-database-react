import * as React from 'react';
import './style.css';

import Logo from '../../components/Logo';
import Search from '../../components/Search';

class Navigation extends React.Component {
  render() {
    return (
      <div className="navigation">
        <div className="navigation__inner">
          <Logo />
          <Search />
        </div>
      </div>
    )
  }
}


export default Navigation;
