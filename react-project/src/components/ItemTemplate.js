import React, { Component } from 'react'
import '../css/Template.css';
let link = "/car.jpg"



const ItemTemplate = ({name, description, pic, price}) => (

    <div class="gallery">
        <div class="inner">
          <a id = "productImg" target="_blank" href={'/itemImages/' + pic}>
              <img src={'/itemImages/' + pic} class="imageBox" alt="Mountains" width="200" height="150"/>
          </a>
          <div class="desc">{description + "   url=   " + pic}}</div>
        </div>
    </div>


    /* <li>
      <h3>{name}</h3>
      <p>{description} AND THE PRICE IS $ {price}</p>
    </li> */
  )

  export default ItemTemplate;
  