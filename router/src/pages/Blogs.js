import React, { useReducer, useState } from 'react';

const count = { number: 0 };

const Reducer = (state, action) => {
  const actions = {
    ADD_ONE: () => ({ ...state, number: state.number + 1 }),
    Min_ONE: () => ({ ...state, number: state.number - 1 }),
    ADD_CUSTOM: (payload) => ({ ...state, number: state.number + payload }),
    RESET: () => ({ ...state, number: 0 }),
  };

  return actions[action.type](action.payload);
};

const NumberAdder = () => {

  const [state, dispatch] = useReducer(Reducer, count);
  const [customNumber, setCustomNumber] = useState('');

  const handleAddOne = () => {
    dispatch({ type: 'ADD_ONE' });
  };

  const handleMinOne = () => {
    dispatch({ type: 'Min_ONE' });
  };


  const handleAddCustom = () => {
    const parsedNumber = parseInt(customNumber);
    if (!isNaN(parsedNumber)) {
      dispatch({ type: 'ADD_CUSTOM', payload: parsedNumber });
      setCustomNumber('');
    }
  };

  const handleReset = () => {
    dispatch({ type: 'RESET' });
    setCustomNumber('');
  };

  return (
    <div>
      <p></p>
      <h2 style={{color:"green"}}>Current Number: {state.number}</h2>
      <button onClick={handleAddOne}>Add +1</button>
      <button onClick={handleMinOne}>Min -1</button>
      <br/><br />

      <input
        type="number"
        value={customNumber}
        onChange={(e) => setCustomNumber(e.target.value)}
      />
      <button onClick={handleAddCustom}>Add Custom Number</button>

      <br/><br />
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default NumberAdder;
