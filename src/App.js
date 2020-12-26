import React, { Component } from 'react';
import Header from './components/Header';
import {increment, decrement, reset} from './actions/action';
import { connect } from 'react-redux';

class App extends Component {
  countAdd = () => {
    this.props.increment();
  }

  countSub = () => {
    this.props.decrement();
  }

  countReset = () => {
    this.props.reset();
  }

  render(){
    return (
      <div class='main'>
        <Header />
        <div class='count'>
          <input type='button' id='add' value='+' onClick={this.countAdd}/>
          <p> {this.props.count} </p>
          <input type='button' id='sub' value='-' onClick={this.countSub}/>
        </div>
        <input type='button' id='reset' value='RESET' onClick={this.countReset}/>
      </div>
    )
  }
}

const mapStateToProps = state => ({count : state.count});
const mapDispatchToProps = {increment, decrement, reset};

export default connect(mapStateToProps, mapDispatchToProps)(App);
