import { colors } from '@mui/material';
import React, { useState } from 'react';



const ShowHideText = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="Mybutton">
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Text' : 'Show Text'}
      </button>
      {isVisible && <p>Some text to show or hide.</p>}
    </div>
    
  );
};

export default ShowHideText