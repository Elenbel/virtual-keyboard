import React from 'react';
import './KeyBoardStylee.css'


function Screen(props) {
  const text = props.text;
  return (
    <div className="DivTextArea" aria-label="Text Area" id="textbox1_freetext" role="textbox" tabIndex="0" >
      {text.map((item, index) => (
        <span key={index} style={item.style}>
          {item.char}
        </span>
      ))}
    </div>
  );
}

export default Screen;