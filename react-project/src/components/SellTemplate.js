import React, { Component } from 'react'
import axios from 'axios';
import HomeBar from './HomeBar';

export default class SellTemplate extends Component {

  state = {
    files: [],
    file: ''
    }

    onDropHandler = (files) => {
      var file = files[0]
    const reader = new FileReader()
    reader.onload = (event) => {
      // console.log(event.target.result)
        this.setState({
          file: event.target.result
        });
    }
    reader.readAsDataURL(file)
    }

    uploadFile = (e) => {
      e.preventDefault();
      let data = new FormData();
      data.append('file', this.state.file);
      axios.post('http://localhost:5000/files', data);
    }
    

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
          

            <form onSubmit={this.uploadFile} >
				<Dropzone
					ref="dropzone"
					onDrop={this.onDropHandler}
					name="file"
				>
					<p>Drop you file here!</p>
				</Dropzone>

				<h2>Dropped files:</h2>
				<ul>
					{this.state.files.map(f => (
						<li key={f.name}>
							{f.name} - {f.size} bytes
						</li>
					))}
				</ul>
				 <input type="submit" value="Submit" />
			</form>


          <input name="foo" type="file" />
          <button onClick={this.sendImage} >Click me</button>

          </div>

        );
    }
}