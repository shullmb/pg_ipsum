import React from 'react';

const Picker = (props) => {
  const handleSelection = (e) => {
    props.handleSelect(e.target)
  }

  return (
    <div className="Picker">
      <h3>{props.name}</h3>
      <select name={props.name.toLowerCase()} 
        onChange={e => handleSelection(e)}
      >
        {[...Array(12).keys()].map( num => (
          <option value={num+1} key={`sel${num}`}>{num + 1}</option>
        ))}
      </select>
    </div>
  )
}

export default Picker;