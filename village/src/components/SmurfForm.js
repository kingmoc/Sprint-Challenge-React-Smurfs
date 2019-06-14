import React, { Component } from 'react';
import axios from 'axios'

class SmurfForm extends Component {
  
    state = {
      name: '',
      age: '',
      height: ''
    };
  

  addSmurf = event => {
    event.preventDefault();
    // console.log(this.state.name)

    axios.post('http://localhost:3333/smurfs', {
      name: this.state.name,
      age: this.state.age,
      height: this.state.height
    })
      .then(res => {
        console.log(res)
        this.props.updateState(res.data)
        this.props.history.push('/')
      })
      .catch((err) => {
				console.log(err)
			})          

    this.setState({
      name: '',
      age: '',
      height: ''
    });
  }

  handleInputChange = e => {
    console.log('works')
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="SmurfForm">
        <form className = "form-info" onSubmit={this.addSmurf}>
          <input
            onChange={this.handleInputChange}
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button> Add to the village </button>
        </form>
      </div>
    );
  }
}

export default SmurfForm;
