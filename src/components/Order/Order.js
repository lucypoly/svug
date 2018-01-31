import React, { Component } from 'react';

import { Form, FormGroup, Col, FormControl, ControlLabel, Button, PageHeader } from 'react-bootstrap';
import './Order.css';

class Order extends Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      name: '',
      tel: '',
      invalid: true
    };
  }

  handleChangeName = (e) => {
    this.setState({ name: e.target.value }, () => {
      this.setState({ invalid: !this.state.name || !this.state.tel })
    });
  };

  handleChangeTel = (e) => {
    this.setState({ tel: e.target.value }, () => {
      this.setState({ invalid: !this.state.name || !this.state.tel })
    });
  };

  render() {
    return (
      <div className="container order">
        <PageHeader>Оставьте, пожалуйста, заказ, и мы с Вами свяжемся!</PageHeader>
        <Form horizontal action="send.php" method="post">
          <FormGroup controlId="name">
            <Col componentClass={ControlLabel} sm={2}>
              Имя*
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" name="name" onChange={this.handleChangeName} required/>
            </Col>
          </FormGroup>

          <FormGroup controlId="tel">
            <Col componentClass={ControlLabel} sm={2}>
              Телефон*
            </Col>
            <Col sm={10}>
              <FormControl type="tel" placeholder="Mobile" name="tel" onChange={this.handleChangeTel} required/>
            </Col>
          </FormGroup>

          <FormGroup controlId="email">
            <Col componentClass={ControlLabel} sm={2}>
              Email
            </Col>
            <Col sm={10}>
              <FormControl type="email" placeholder="Email" name="email"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="message">
            <Col componentClass={ControlLabel} sm={2} name="message">
              Ваше сообщение
            </Col>
            <Col sm={10}>
              <FormControl componentClass="textarea" placeholder="Message"/>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button type="submit" disabled={this.state.invalid}>Отправить</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Order;
