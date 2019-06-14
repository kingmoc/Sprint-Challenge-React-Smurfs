import React from 'react';
import axios from 'axios'

const Smurf = props => {
  console.log(props.id)

  const deleteSmurf = e => {
    e.preventDefault() 

    axios.delete(`http://localhost:3333/smurfs/${props.id}`)
    .then((res) => {
      props.updateState(res.data)
      console.log(res)
    })
    .catch((err) => {
			console.log(err)
    })
    
  }


  return (
    <div className="Smurf">
      <h3>{props.name}</h3>
      <strong>{props.height} tall</strong>
      <p>{props.age} smurf years old</p>
      <button onClick={deleteSmurf}>Delete Smurf</button>
    </div>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

