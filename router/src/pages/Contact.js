// import { useState } from 'react';
// function Contact() {
//   const [count, setCount] = useState(0);

//   function handleClick() {
//     setCount(count + 1);
//   }

//   return (
//     <>
//     <h1>{count} times</h1>
//     <button onClick={handleClick}> Clicked </button>
//     </>
//   );
// }
//   export default Contact;




import React, { useReducer } from 'react';

const count = { number: 0 };

const reducer = (state, action) => {

  switch (action.type) {

    case 'ADD_ONE':
      return { ...state, number: state.number + 1 };

    case 'MIN_ONE':
      return { ...state, number: state.number - 1 };

    case 'ADD_CUSTOM':
      return { ...state, number: state.number + action.payload };

    case 'RESET':
      return { ...state, number: 0 };

    default:
      return state;
  }
};

const NumberAdder = () => {
  const [state, dispatch] = useReducer(reducer, count);

  const handleAddOne = () => {
    dispatch({ type: 'ADD_ONE' });
  };

  const handleMinOne = () => {
    dispatch({ type: 'MIN_ONE' });
  };

  const handleAddCustom = (e) => {
    const parsedNumber = parseInt(e.target.value);
    if (!isNaN(parsedNumber)) {
      dispatch({ type: 'ADD_CUSTOM', payload: parsedNumber });
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <h2 style={{ color: 'red' }}> Current Number: {state.number}</h2>
      <button onClick={handleAddOne}>Add +1</button>
      <button onClick={handleMinOne}>Min -1</button>
      <br />
      <br />

      <input
        type="number"
        onChange={handleAddCustom}
      />
      
      <button onClick={handleAddCustom}>Add Custom Number</button>

      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default NumberAdder;