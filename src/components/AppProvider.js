import React from 'react'

export const AppContext = React.createContext()

export default class AppProvider extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            page: 'home'
        }
    }
    
    setPage = page => this.setState({page})
    
    render(){
        return(
        <AppContext.Provider value={this.state}>
            {this.props.children}
        </AppContext.Provider>
        )
    }

}