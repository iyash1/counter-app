import React, {Component} from 'react';
import Header from './components/Header';
import { CountContext } from './contexts/CounterText';

class App extends Component {
  static contextType = CountContext;
  render(){
    const {count, countAdd, countSub, countReset} = this.context;
    return (
      <div className='main'>
        <Header />
          <div className='count'>
            <input type='button' id='add' value='+' onClick={countAdd}/>
            <p> {count} </p>
            <input type='button' id='sub' value='-' onClick={countSub}/>
          </div>
          <input type='button' id='reset' value='RESET' onClick={countReset}/>
      </div>
    )
  }
}

export default App;
