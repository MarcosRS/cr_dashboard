import React from 'react';
import { Route } from 'react-router-dom';
import Home from './home';
import AppProvider from '../components/AppProvider'

import '../stylesheets/global.scss';


class App extends React.Component {
    render() {
      return (
        <AppProvider>
          <div id="main">
            <Route exact path="/" component={Home} />
          </div>
        </AppProvider>
      );
    }
  }

  export default App