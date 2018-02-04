import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import data from './../Services/data';
import './Service.css';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    }
  }

  componentWillMount() {
    const id = this.props.match.params.id;
    const index = data.findIndex(item => +item.id === +id);
    this.setState({index: index});
  }

  render() {
    const {index} = this.state;
    return (
      <div>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <h2>{data[index].title}</h2>
              <p>{data[index].text}</p>
            </Col>
            <Col xs={12} md={6}>
              <img src={data[index].img} alt={data[index].title} className="image"/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Service;
