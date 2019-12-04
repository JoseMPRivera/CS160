import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../css/Template.css';
import seeItem from './seeItem'
let link = "/car.jpg"

const ItemTemplate = ({name, description, pic, price, seller_id, seller_name, seller_email}) => (

    <div class="gallery">
        <div class="inner">
          {/* <a id = "productImg" target="_blank" href={'/itemImages/' + pic}> */}
          {/* <a id = "productImg" target="_blank" href={seeItem}> */}

          {/* <Link to={{
                pathname: '/SearchResult', 
                result : {name, description, pic, price, seller_id, seller_name, seller_email}
              }}>
                <img src={'/itemImages/' + pic} class="imageBox" alt="Mountains" width="200" height="150"/>
              </Link> */}

          <img src={'/itemImages/' + pic} class="imageBox" alt="Mountains" width="200" height="150"/>
              
          {/* </a> */}
          <div class="desc">{name}</div>
          <div class="desc">{" price: $" + price}</div>
        </div>
    </div>


    /* <li>
      <h3>{name}</h3>
      <p>{description} AND THE PRICE IS $ {price}</p>
    </li> */
  )

  export default ItemTemplate;
  