import React, {Component} from 'react';
import { Button, Container, Row, Col } from 'reactstrap';
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
      <Container className="border border-primary rounded p-md-4 p-4 m-md-4 my-4">
        <Row>
          <Col md="12" className="text-center">
            <Header />
          </Col>
        </Row>
        <Row md="12">
          <Col className="d-flex justify-content-around">
            <Button id='add' color="success" onClick={this.countAdd} className="col-md-4 my-5" block>+</Button>{''}
            <h1 className="col-md-4 my-5 text-center"> {this.state.count} </h1>
            <Button id='sub' color="danger" onClick={this.countSub} className="col-md-4 my-5" block>-</Button>
          </Col>
        </Row>
        <Button id='reset' color="warning" className="m-auto" onClick={this.countReset} block>RESET</Button>
      </Container>
    )
  }
}

export default App;
