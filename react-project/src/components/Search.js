import React, { Component } from 'react'
import axios from 'axios';
import Suggestions from './Suggestions'

export default class Search extends Component {
  
  state = {
    query: '',
    results: []
  }

  getInfo = () => {
    axios.get(`/items/${this.state.query}`)
      .then(({ data }) => {
        console.log(data)
        this.setState({
          results: data.items
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        this.getInfo()
      }
      else
        this.setState({ 
          results: []
        })
    })
  }

  render() {
    return (
      <form>
        <input
          placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
        <Suggestions results={this.state.results} query={this.state.query} />
      </form>
    )
  }
}