import React, { Component } from 'react';
import data from './../Services/data';

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
        <h2>{data[index].title}</h2>
        <p>{data[index].text}</p>
      </div>
    );
  }
}

export default Service;
