import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ItemTemplate from './ItemTemplate'
import '../css/Template.css';

class SellsContainer extends Component {
    state = { item: [], seller_id: 0 }
    
    componentDidMount() {
      // fetch content from your api and set it into state

      console.log("It did mount");
      console.log("session: " + sessionStorage.getItem("id"))
      this.setState({ seller_id : (sessionStorage.getItem("id") || '/0')}, console.log("seller_id: " + this.state.seller_id))
      axios.get('/sellItems' + (('/' + (sessionStorage.getItem("id"))) || '/0'))
      .then(({ data }) => {
        console.log(data)
        // console.log(data.items + "nooooooooooooooooooooooooooo");
        this.setState({
            item: data.items
        })
        console.log(this.state.item + "   yesssssssssssssssssssssssssssss");
      })
    }
    render() {
      const { item } = this.state

      console.log(this.state);
      console.log("000000000000000000000000000000000000000000000");
      console.log(item);
      return (
        (this.state.seller_id>0) && 
        <div id="itemContainer">
          { item.map(article =>
            
            <Link to={{
              pathname: '/SearchResult', 
              state: { 
                result : {...article}
              }
            }}>
              <ItemTemplate {...article} />
            </Link> )}
        </div>
       ) || <div></div>
     }
  }

  export default SellsContainer;