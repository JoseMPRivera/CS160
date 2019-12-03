import React, { Component } from 'react';
import axios from 'axios';

export default class SearchResults extends Component {

  constructor(props){
    super(props);
    this.state = {
      query: '',
      results: []
    }
  }

  componentDidMount() {
    if (this.props.match.params.query)
      this.setState({ query: this.props.match.params.query }, () => console.log('query: ' + this.state.query))
    axios.get(`/items/${this.props.match.params.query}`)
    .then(({ data }) => {
      console.log(data.items)
      this.setState({
        results: data.items
      })
    })
  }

  render() {
    return (
      <div>
        Results for '{this.state.query}'
        {this.state.results.map(result => (
          <ul>
            <li key={result.item_id}>
              <label> {result.name} <br /> {result.description} <br /> price: {result.price} </label>
            </li>
          </ul>)
        )}
      </div>
    );
  }
}