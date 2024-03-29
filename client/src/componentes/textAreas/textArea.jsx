import React, { useState, useEffect } from 'react';

function TextAreaWithLineCounter({text, setText, boolRead, clickFunction, keyDown}) {

  const [lines, setLines] = useState([]);

  // Función para dividir el texto en líneas
  const splitTextIntoLines = (text) => {
    //return codeDatas.split('\n');
    if (text) {
      return text.split('\n');
    } else {
      return [1];
    }
  };

  useEffect(() => {
    // Update the lines when change the text
    setLines(splitTextIntoLines(text));
  }, [text]); //Every time text changes useEffect is called

  
  const lineCounterStyle = {
    fontSize: '12px', // Adjust the font size from here
    color: 'white',
    borderRight: '1px solid #ccc',
    //paddingRight: '4px',
    flex: '0 0 auto',
    background: '#0c3c4a'
  };

  return (     //Preguntar cuánto debería tener de maxHeight para el crecimiento del textarea
  <div style={{width : '550px', maxHeight: '300px' , overflowY : 'scroll', overflowX : 'hidden'}}>
  <div style={{ display: 'flex' ,overflowY: 'scroll', width : '550px'}}>
    <div style={lineCounterStyle}>
      {lines.map((_, index) => (
        <div key={index}
          style={{
          textAlign: 'right',
          paddingRight: '5px',
          color: '#fff',
        }}>
          {index + 1}
        </div>
      ))}
    </div>
    <div style={{ flex: '1', display: 'flex', flexDirection: 'column', overflowX: 'hidden', overflowY: 'hidden'}}>
      <textarea 
       readOnly = {boolRead}
        fontSize="1rem"
        value={text}
        onChange={setText}
        onClick={clickFunction}
        onKeyDown={keyDown}
        rows={10}
        cols={40}
        spellCheck="false"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          outline: 'none',
          boxSizing: 'border-box',
          overflowX: 'auto',
          overflowY: 'hidden',
          resize: 'none',
          whiteSpace: 'pre-line',
          whiteSpace: 'nowrap'
        }}
      />
    </div>
  </div>
  </div>
);  
}

export default TextAreaWithLineCounter;