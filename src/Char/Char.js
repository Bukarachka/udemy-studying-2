import React from 'react';
import './Char.css';

const char = (props) => {
    return(
      <div className="CharComponent" onClick={props.clicked}>
          {props.character}
      </div>
    );
};

export default char