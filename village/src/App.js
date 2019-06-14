import React, { Component } from 'react';
import axios from 'axios'

import { Route, NavLink } from 'react-router-dom';


import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import NavBar from './components/NavBar'

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

        <NavBar />

        <Route exact path="/" render={props => 
          <Smurfs 
          {...props} 
          smurfs={this.state.smurfs} 
          updateState={this.updateState}/>
        }/>
        <Route path="/addSmurf" render={props => 
          <SmurfForm 
          {...props} 
          updateState={this.updateState}/>
        }/>

      </div>
    );
  }
}

export default App;
