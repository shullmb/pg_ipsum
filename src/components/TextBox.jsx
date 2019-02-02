import React from 'react';

const TextBox = ({text}) => {
  return (
    <div>
      <textarea name="" id="" cols="30" rows="10">
        {text}
      </textarea>
    </div>
  )
}

export default TextBox;