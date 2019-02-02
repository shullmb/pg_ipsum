import React from 'react';

const Picker = (props) => {
  const handleSelection = (e) => {
    props.handleSelect(e.target)
  }

  return (
    <div>
      <p>{props.name}</p> <br />
      <input type="number" 
             name={props.name.toLowerCase()}
             onChange={e => handleSelection(e) } 
             min="1" max="10"  
      />
    </div>
  )
}

export default Picker;