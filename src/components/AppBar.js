import React, {Component} from 'react';
import '../stylesheets/app_bar.scss';

class AppBar extends Component{
    render(){
        return <div id="app-bar"> 
                    <div>Crypto Dash</div>  
                    <div></div>
                    <div>Setting</div>  
                    <div>Dashboard</div>  
               </div>
    }
}

export default AppBar