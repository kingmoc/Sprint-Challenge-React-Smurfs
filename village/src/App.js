import React, { Component } from 'react';
import axios from 'axios'


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';

class App extends Component {
  
  state = {
    smurfs: [],
  };
  
  componentDidMount() {
    axios
      .get('http://localhost:3333/smurfs')
      .then(res => {
        console.log(res)
        this.setState(() => ({  smurfs: res.data }))
      })
      .catch(error => {
				console.log('Server Error', error)
			})
  }

  updateState = (newData) => {
    this.setState({
      smurfs: newData
    })
  }





  render() {
    // console.log(this.state.smurfs)
    return (
      <div className="App">
        <SmurfForm updateState={this.updateState}/>
        <Smurfs smurfs={this.state.smurfs} />
      </div>
    );
  }
}

export default App;
