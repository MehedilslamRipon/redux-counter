// dependencies
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
   decrement,
   increment,
   reset,
   incrementByAmount,
} from '../app/features/counter/counterSlice';

const Counter = () => {
   const count = useSelector((state) => state.counter.value);
   const dispatch = useDispatch();

   const [incrementAmount, setIncrementAmount] = useState(0);

   const addValue = Number(incrementAmount) || 0;

   const resetAll = () => {
      setIncrementAmount(0);
      dispatch(reset());
   };

   return (
      <React.Fragment>
         <h1> Redux Counter </h1>
         <h2> Count: {count} </h2>
         <button
            onClick={() => {
               dispatch(increment());
            }}
         >
            Increment
         </button>{' '}
         <button
            onClick={() => {
               dispatch(decrement());
            }}
         >
            Decrement
         </button>
         <br />
         <br />
         <input
            onChange={(e) => setIncrementAmount(e.target.value)}
            type="text"
            name="amount"
            id="amount"
         />
         <div>
            <button
               onClick={() => {
                  dispatch(incrementByAmount(addValue));
               }}
            >
               Increment by amount
            </button>{' '}
            <button onClick={() => resetAll()}>Reset all</button>
         </div>
      </React.Fragment>
   );
};

export default Counter;
