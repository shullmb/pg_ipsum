import React from 'react';

const TextBox = ({text}) => {

  return (
    <div>
      {
        text.split('\n').map( (p,i) => <p key={`ip${i}`}>{p}</p>)
      }
    </div>
  )
}

export default TextBox;