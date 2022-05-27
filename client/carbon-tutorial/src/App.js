import React, { Component } from 'react';
import './app.scss';
import RepoPage from './component/RepoPage';


class App extends Component {
  render() {
    return (
      <div>
        {/* Hello Carbon! Well, not quite yet. This is the starting point for the
        Carbon tutorial
        <Button>Button</Button> */}
        <RepoPage/>
      </div>
    );
  }
}

export default App;
