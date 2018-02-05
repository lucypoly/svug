import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import data from '../Navbar/data';

import './Service.css';

class Service extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: null
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id;
    const index = data.findIndex(item => +item.id === +id) + 1;
    this.setState({index: index});
  }

  componentWillReceiveProps(nextProps) {
    const id = nextProps.match.params.id;
    const index = data.findIndex(item => +item.id === +id) + 1;
    this.setState({index: index});
  }

  render() {
    const {index} = this.state;
    return (
      <div>
        {index && <Grid>
          <Row className="show-grid">
            <Col xs={12} md={6}>
              <h2>{data[index - 1].title}</h2>
              <p>{data[index - 1].text}</p>
            </Col>
            <Col xs={12} md={6}>
              <img src={data[index - 1].img} alt={data[index - 1].title} className="image"/>
            </Col>
          </Row>
        </Grid>}
      </div>
    );
  }
}

export default Service;
