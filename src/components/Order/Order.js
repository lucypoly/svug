import React, { Component } from 'react';

import { Form, FormGroup, Col, FormControl, ControlLabel, Button } from 'react-bootstrap';
import './Order.css';

class Order extends Component {
  render() {
    return (
      <div className="container order">
        <Form horizontal action="send.php" method="post">
          <FormGroup controlId="name">
            <Col componentClass={ControlLabel} sm={2}>
              Имя
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Name" name="name"/>
            </Col>
          </FormGroup>

          <FormGroup controlId="tel">
            <Col componentClass={ControlLabel} sm={2}>
              Телефон
            </Col>
            <Col sm={10}>
              <FormControl type="text" placeholder="Mobile" name="tel"/>
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
              <Button type="submit">Отправить</Button>
            </Col>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default Order;
