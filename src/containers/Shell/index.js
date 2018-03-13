import * as React from 'react';
import './style.css';
import Navigation from '../Navigation';
import Movies from '../Movies';

class Shell extends React.Component {
  render() {
    return (
      <main className="shell">
        <Navigation />
        <Movies />
      </main>
    )
  }
}


export default Shell;
