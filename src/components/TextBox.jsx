import React from 'react';

const TextBox = ({text}) => {

  return (
    <div id="#textContaine">
      {
        text.split('\n').map( (p,i) => <p key={`ip${i}`}>{p}</p>)
      }
      <textarea id="copyBox" value={text}>
        
      </textarea>
    </div>
  )
}

export default TextBox;

