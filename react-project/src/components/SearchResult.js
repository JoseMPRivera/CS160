import React, { Component } from 'react';

export default class SearchResult extends Component {

  state = {
    result: {}
  }

  componentDidMount() {
    this.setState({ result: this.props.location.state.result }, console.log('result = ' + this.state.result))
  }

  render() {
    const {result} = this.props.location.state
    return (
      <label> 
        name: {result.name} <br />
        description: {result.description} <br />
        price: ${result.price} 
    </label>
    );
  }
}