import React, { Component } from 'react'
import axios from 'axios';
import HomeBar from './HomeBar';
import '../css/sell.css';

export default class SellTemplate extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: '',
      description: '',
    };
  }

    // onDropHandler = (files) => {
    //   var file = files[0]
    // const reader = new FileReader()
    // reader.onload = (event) => {
    //   // console.log(event.target.result)
    //     this.setState({
    //       file: event.target.result
    //     });
    // }
    // reader.readAsDataURL(file)
    // }

    // uploadFile = (e) => {
    //   e.preventDefault();
    //   let data = new FormData();
    //   data.append('file', this.state.file);
    //   axios.post('http://localhost:5000/files', data);
    // }

    handleInputChange = e => {
      this.setState({
        [e.target.name]: e.target.value,
      });
    };


    
    handleSubmit = e => {
      e.preventDefault();
  
      const { title, price, description } = this.state;
  
      const item = {
        title,
        price,
        description,
      };

      
  
      axios
        .post('/submit-item', item)
        .then(() => console.log('Item submitted'))
        .catch(err => {
          console.error(err);
        });
    };

  sendImage()  {
    console.log("It did mount");

    axios.post('http://localhost:5000/upload')
    // fetch("./upload")
    .then(({ data }) => {
      console.log(data)
      // this.setState({
      //     item: data.items
      // })
    });
  }

    render() {
        return (
          <div>
            <HomeBar />
          
            {/* <div id="idForm"> 
            <form method="POST" action="/submit-form">
            <label for="title">Title</label>
            <input id="title" type="text" name="Title" placeholder="Enter the title for the listing"/>
            <label for="description">Description</label>
            <input id="description" type="text" name="Description" placeholder="Enter the description of the item"/>
            <label for="price">Price</label>
            <input id="price" type="number" name="Price" />
            <input type="submit" />
            </form> 
            </div> */}

            <div id="idForm"> 
            <h1>Sell in SpartanSells</h1>

            {/* <form id = "resizeFormSignUp" method="POST" action="/submit-item"> */}
            <form onSubmit={this.handleSubmit}>
            <div class="form-row">
            <div class="form-group col-md-6">
            <label for="title">Title</label>
            <input type="text" class="form-control" id="title" name="title" placeholder="Name of the item" onChange={this.handleInputChange} required/>
            </div>
            {/* <div class="form-group col-md-6">
            <label for="inputPassword4">Password</label>
            <input type="password" class="form-control" id="inputPassword4" placeholder="Password"/>
            </div> */}
        </div>
        <div class="form-group">
            <label for="price">Price</label>
            <input type="number" class="form-control" id="price" name="price" placeholder="Enter the price" onChange={this.handleInputChange} required/>
        </div>
        <div class="form-group">
        <label for="description">Description</label>
            <textarea class="form-control" id="description" name="description" rows="3" placeholder="Enter the description of the item" onChange={this.handleInputChange} required/>
        </div>

        <div class="form-group">
            <div class="form-check">
            <input class="form-check-input" type="checkbox" id="gridCheck" required/>
            <label class="form-check-label" for="gridCheck">
              Agree to terms and conditions
            </label>
            </div>
        </div>
        <button type="submit" class="btn btn-primary">Sign up</button>
        </form>

      {/* </form> */}



      </div></div>

        );
    }
}