import React, {Component} from 'react';
import Header from './components/Header';
import { CountContext } from './contexts/CounterText';
import { Button, Container, Row, Col } from 'reactstrap';

class App extends Component {
  static contextType = CountContext;
  render(){
    const {count, countAdd, countSub, countReset} = this.context;
    return (
      <Container className="border border-primary rounded p-md-4 p-4 m-md-4 my-4">
        <Row>
          <Col md="12" className="text-center">
            <Header />
          </Col>
        </Row>
        <Row md="12">
          <Col className="d-flex justify-content-around">
            <Button id='add' color="success" onClick={countAdd} className="col-md-4 my-5" block>+</Button>
            <h1 className="col-md-4 my-5 text-center"> {count} </h1>
            <Button id='sub' color="danger" onClick={countSub} className="col-md-4 my-5" block>-</Button>
          </Col>
        </Row>
        <Button id='reset' color="warning" className="m-auto" onClick={countReset} block>RESET</Button>
      </Container>
    )
  }
}

export default App;
