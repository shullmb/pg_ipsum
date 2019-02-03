import React from 'react';

const TextBox = ({text}) => {

  const handleChange = () => {
    // putting this here so react stops yelling at me
  }

  return (
    <div id="#textContaine">
      {
        text.split('\n').map( (p,i) => <p key={`ip${i}`}>{p}</p>)
      }
      <textarea id="copyBox" value={text} onChange={handleChange}>
        
      </textarea>
    </div>
  )
}

export default TextBox;
