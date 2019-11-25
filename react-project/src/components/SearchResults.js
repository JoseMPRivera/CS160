import React, { Component } from 'react';
import axios from 'axios';

export default class SearchResults extends Component {

  constructor(props){
    super(props);
    // this.state = {
    //   results: []
    // }
    this.state = {
      query: '',
      results: []
    }
  }

  // componentDidMount() {
  //   const { query } = this.props.match.params
  //   console.log('query = ' + query)
  //   axios.get(`/items/${query}`)
  //   .then(({ data }) => {
  //     console.log(data.items)
  //     this.setState({
  //       results: data.items
  //     })
  //   })
  // }
  componentDidMount() {
    this.setState({ query: this.props.params.query })
    console.log('query = ' + this.state.query)
    axios.get(`/items/${this.state.query}`)
    .then(({ data }) => {
      console.log(data.items)
      this.setState({
        results: data.items
      })
    })
  }

  render() {
    // const { query } = this.props.match.params
    return (
      <div>
        Results for {this.state.query}
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