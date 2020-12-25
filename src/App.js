import React, {Component} from 'react';
import Header from './components/Header';

class App extends Component {
  constructor(){
    super();
    this.state = {count : 0};

    this.countAdd = this.countAdd.bind(this);
    this.countSub = this.countSub.bind(this);
    this.countReset = this.countReset.bind(this);

  }

  countAdd(){
    this.setState({count: this.state.count + 1});
  }

  countSub(){
    this.setState({count: this.state.count - 1});
  }

  countReset(){
    this.setState({count: 0});
  }

  render(){
    return (
      <div class='main'>
        <Header />
        <div class='count'>
          <input type='button' id='add' value='+' onClick={this.countAdd}/>
          <p> {this.state.count} </p>
          <input type='button' id='sub' value='-' onClick={this.countSub}/>
        </div>
        <input type='button' id='reset' value='RESET' onClick={this.countReset}/>
      </div>
    )
  }
}

export default App;
