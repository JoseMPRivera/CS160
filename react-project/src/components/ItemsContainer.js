import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';
import ItemTemplate from './ItemTemplate'
import '../css/Template.css';

class ItemsContainer extends Component {
    state = { item: [] }
    
    componentDidMount() {
      // fetch content from your api and set it into state

      console.log("It did mount");

      axios.get('/items')
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
       )
     }
  }

  export default ItemsContainer;