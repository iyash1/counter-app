import React, { Component, createContext } from 'react';

export const CountContext = createContext();

class CounterContextProvider extends Component {
    state = { 
        count: 0
     }

    countAdd = () => {
        this.setState({count: this.state.count + 1});
    }

    countSub = () => {
        this.setState({count: this.state.count - 1});
    }

    countReset = () => {
        this.setState({count: 0});
    }

    render() { 
        return ( 
            <CountContext.Provider value={{...this.state, countAdd: this.countAdd, countSub: this.countSub, countReset: this.countReset}}>
                {this.props.children}
            </CountContext.Provider>
         );
    }
}
 
export default CounterContextProvider;