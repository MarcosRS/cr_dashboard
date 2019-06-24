import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';

import '../stylesheets/global.scss';


class App extends React.Component {
    render() {
      return (
          <div id="main">
            <Route exact path="/" component={Home} />
          </div>
      );
    }
  }

  export default App