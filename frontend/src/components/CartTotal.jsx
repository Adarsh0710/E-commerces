// import React, { useContext } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';

// const CartTotal = () => {


//     const {currency,delivery_fee,getCartAmount} =useContext(ShopContext);

//   return (
//     <div className='w-full'>
//         <div className='text-2xl'>
//             <Title text1={'CART'} text2={'TOTALS'}/>
//         </div>

//         <div className='flex flex-col gap-2 mt-2 text-sm'>
//             <div className='flex justify-between'>
//                 <p>Subtotal</p>
//                 <p>{currency} {getCartAmount()}.00 </p>

//             </div>
//             <hr />
//             <div className='flex justify-center'>
//                 <p>Shipping Fee</p>
//                 <p>{currency} {delivery_fee} </p> 

//             </div>
//             <hr />
//             <div className='flex justify-between'>
//                 <b>Total</b>
//                 <b>{currency} {getCartAmount() === 0 ? 0 : getCartAmount() + delivery_fee} </b>

//             </div>

//         </div>

//     </div>
//   )
// }

// export default CartTotal


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);
  const [subtotal, setSubtotal] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculatedSubtotal = getCartAmount();
    setSubtotal(calculatedSubtotal);
    setTotal(calculatedSubtotal + delivery_fee);
  }, [getCartAmount, delivery_fee]); // Run effect whenever cart amount or delivery fee changes

  return (
    <div className='w-full'>
      <div className='text-2xl'>
        <Title text1={'CART'} text2={'TOTALS'} />
      </div>

      <div className='flex flex-col gap-2 mt-2 text-sm'>
        <div className='flex justify-between'>
          <p>Subtotal</p>
          <p>{currency} {subtotal}.00</p>
        </div>
        <hr />
        <div className='flex justify-between'>
          <p>Shipping Fee</p>
          <p>{currency} {delivery_fee}.00</p>
        </div>
        <hr />
        <div className='flex justify-between font-bold'>
          <p>Total</p>
          <p>{currency} {total}.00</p>
        </div>

        
      </div>
    </div>
  );
}

export default CartTotal;
