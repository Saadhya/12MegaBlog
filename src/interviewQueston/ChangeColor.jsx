import React, { useState } from "react";

// capgem question
const ChangeColor = () => {
  const [num, setNum] = useState(0);
  const [color, setColor] = useState('red')

  {
    /* header bg- should change on button click 
        on odd-red,  different, evenclick - green,
        click numbers */
  }
  const handleChange = () => {
    setNum(num + 1); //0123
    if (num % 2 === 0) {
      setColor('blue')
    }else{
      setColor('skyblue')

    }
  };

  return (
    <div>
      <nav
        style={{
          width: "100%",
          position: "relative",
          height: "4rem",
          border: "1px solid blue",
          margin: "20px 0",
          backgroundColor: color,
        }}
      >
        header
      </nav>
      <button
        type="button"
        onClick={handleChange}
        style={{ padding: "20px", backgroundColor: "orange", color: "white", cursor:'pointer' }}
      >
        click me {num}
      </button>
    </div>
  );
};

export default ChangeColor;
