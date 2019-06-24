import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '../components/AppBar'

class Home extends React.Component {
    render() {
      return (
        <div>
            <AppBar/>
            <h1>Crypto Dashboard🔥</h1>
            {/* <Link to='/users'><button className='button'>Users</button></Link>
            <Link to='/tasks'><button className='button'> Tasks</button></Link> */}
        </div>
      );
    }
  }

  export default Home