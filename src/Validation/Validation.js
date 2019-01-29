import React from 'react';

const validation = (props) => {
    let output = "Text too short!";

    if (props.textLength >= 5){
        output = "Text long enough."
    }

    return(
      <div className="ValidationComponent">
          <p>{output}</p>
      </div>
    );
};

export default validation