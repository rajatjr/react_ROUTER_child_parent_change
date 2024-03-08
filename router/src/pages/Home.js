import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  const handleInput=(e)=>{
      const value = Number(e.target.value);
      dispatch({
        type:"input",
        payload:value,
      })
  };

  
  return (
    <div>

      <h1 style={{color:"blue"}}>Counter App</h1>
      
      <p>Count: {count}</p>

      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>

      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
      
      <input onChange={handleInput} type="number" min="0" oninput="validity.valid||(value='');"></input>

     <button onClick={() => dispatch({ type: 'extra' })}>Add Extra value</button>

     <button onClick={() => dispatch({ type: 'sub' })}>sub Extra value</button>


    </div>
  );
};

export default Home;