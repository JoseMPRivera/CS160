import React, { Component } from 'react'
import axios from 'axios'
import Suggestions from './Suggestions'
import { Redirect } from 'react-router-dom'
import { FormControl } from 'react-bootstrap'

export default class Search extends Component {
  
  state = {
    query: '',
    results: [],
    redirect: false
  }

  getInfo = () => {
    axios.get(`/search/${this.state.query}`)
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
    if (this.state.redirect === true) {
      this.state.redirect = false
      return <Redirect push to={'/SearchResults/' + this.search.value} />
    }

    return (
      <div>
        <FormControl
          list="encodings"
          className="mr-sm-2"
          placeholder="Search"
          ref={input => this.search = input}
          onChange={this.handleInputChange}
          onKeyPress={event => {
            if (event.key === 'Enter')
              this.setState({ redirect : true }, console.log("enter"))
          }}
        />
        <datalist id="encodings" onChange={() => this.setState({ redirect : true }, console.log("enter"))}>
          <Suggestions results={this.state.results} />
        </datalist>
      </div>
    )
  }
}