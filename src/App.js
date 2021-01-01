import React, { Component } from 'react';
import Header from './components/Header';
import {increment, decrement, reset} from './actions/action';
import { connect } from 'react-redux';
import { Button, Container, Row, Col } from 'reactstrap';

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

      <Container className="border border-primary rounded p-md-4 p-4 m-md-4 my-4">
        <Row>
          <Col md="12" className="text-center">
            <Header />
          </Col>
        </Row>
        <Row md="12">
          <Col className="d-flex justify-content-around">
            <Button id='add' color="success" onClick={this.countAdd} className="col-md-4 my-5" block>+</Button>{''}
            <h1 className="col-md-4 my-5 text-center"> {this.props.count} </h1>
            <Button id='sub' color="danger" onClick={this.countSub} className="col-md-4 my-5" block>-</Button>
          </Col>
        </Row>
        <Button id='reset' color="warning" className="m-auto" onClick={this.countReset} block>RESET</Button>
      </Container>
    )
  }
}

const mapStateToProps = state => ({count : state.count});
const mapDispatchToProps = {increment, decrement, reset};

export default connect(mapStateToProps, mapDispatchToProps)(App);
