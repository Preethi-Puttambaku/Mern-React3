import React from 'react';

const Colors = ({ onColorClick }) => {
  const colorClickHandler = (color) => {
    onColorClick(color); // Call the parent component's handler function
  };

  return (
    <ul>
      <li className="colors" id="color1" onClick={() => colorClickHandler('red')}></li>
      <li className="colors" id="color2" onClick={() => colorClickHandler('lawngreen')}></li>
      <li className="colors" id="color3" onClick={() => colorClickHandler('blue')}></li>
      <li className="colors" id="color4" onClick={() => colorClickHandler('yellow')}></li>
      <li className="colors" id="color5" onClick={() => colorClickHandler('violet')}></li>
      <li className="colors" id="color6" onClick={() => colorClickHandler('skyblue')}></li>
      <li className="colors" id="color7" onClick={() => colorClickHandler('orange')}></li>
      <li className="colors" id="color8" onClick={() => colorClickHandler('darkviolet')}></li>
      <li className="colors" id="color9" onClick={() => colorClickHandler('palevioletred')}></li>
      <li className="colors" id="color10" onClick={() => colorClickHandler('green')}></li>
      <li className="colors" id="color11" onClick={() => colorClickHandler('brown')}></li>
      <li className="colors" id="color12" onClick={() => colorClickHandler('black')}></li>
    </ul>
  );
}

export default Colors;
