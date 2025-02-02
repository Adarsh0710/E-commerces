import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
    const {products,currency, cartitems , updateQuantity , navigate }=useContext(ShopContext);

  const [cartData,setCartData] =useState([]);

  useEffect(()=>{
     const tempData =[];
     for(const items in cartitems){
      for(const item in cartitems[items]){
        if(cartitems[items][item] > 0){
          tempData.push({
            _id: items,
            size:item,
            quantity : cartitems[items][item]
          })
        }
      }
     }
     setCartData(tempData);
  },[cartitems])

  return (
    <div className='border-t pt-14'>

      <div className='text-2xl mb-3'>
        <Title text1={'YOUR'} text2={'CART'}/>
      </div>

      <div>
        {
          cartData.map((item,index)=>{
            

            const productData = products.find((product)=> product._id === item._id);

            return (
              <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
                <div className='flex items-start gap-6 '>
                  <img className='w-16 sm:w-20' src={productData.image[0]} alt="" />
                  <div>
                    <p className='text-x5 sm:text-lg font-medium'>{productData.name}</p>
                    <div className='flex items-center gap-5 mt2'>
                      <p>{currency}{productData.price} </p>
                      <p className='px-2 sm:py-1 border bg-slate-50'>{item.size} </p>

                    </div>

                  </div>

                </div>

                {/* <input onChange={(e) => e.target.value ==='' || e.target.value === '0' ? null : updateQuantity(item._id,item.size,Number(e.target.value))} className='border max-w-10 sm:max-w-20 px-1 sm:px-2 py-1' type="number " min={1} defaultValue={item.quantity} /> */}
                <input 
  onChange={(e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      updateQuantity(item._id, item.size, value);
    }
  }} 
  className='border max-w-[40px] sm:max-w-[80px] px-1 sm:px-2 py-1 text-center' 
  type="number" 
  min={1} 
  defaultValue={item.quantity} 
/>
              
               
               
               
                <img onClick={()=>updateQuantity(item._id,item.size,0)} className='w-4 mr-4 sm:w-5 cursor-pointer' src={assets.bin_icon} alt="" />

              </div>
            )

          })
        }

      </div>
     

      <div className='flex justify-end my-20'>
        <div className='w-full sm:w-[450px]'>
          <CartTotal /> 
          <div className='w-full text-end'>
            <button  onClick={()=>navigate('/placeorder')} className='bg-blue-500  text-white text-sm my-8 px-8 py-3'> PROCEED TO PAY</button>

          </div>

        </div>

      </div>
      
    </div>
  )
}

export default Cart








// // import React, { useContext, useEffect, useState } from 'react';
// // import { ShopContext } from '../context/ShopContext';
// // import Title from '../components/Title';
// // import { assets } from '../assets/assets';
// // import CartTotal from '../components/CartTotal';

// // const Cart = () => {
// //   const { products, currency, cartitems, updateQuantity } = useContext(ShopContext);
// //   const [cartData, setCartData] = useState([]);

// //   useEffect(() => {
// //     const tempData = [];
// //     for (const itemId in cartitems) {
// //       for (const size in cartitems[itemId]) {
// //         if (cartitems[itemId][size] > 0) {
// //           tempData.push({
// //             _id: itemId,
// //             size: size,
// //             quantity: cartitems[itemId][size]
// //           });
// //         }
// //       }
// //     }
// //     setCartData(tempData);
// //   }, [cartitems]);

// //   return (
// //     <div className='border-t pt-14'>
// //       <div className='text-2xl mb-3'>
// //         <Title text1={'YOUR'} text2={'CART'} />
// //       </div>

// //       <div>
// //         {cartData.map((item, index) => {
// //           const productData = products.find(product => product._id === item._id);

// //           return (
// //             <div key={index} className='py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4'>
// //               <div className='flex items-start gap-6'>
// //                 {productData ? (
// //                   <>
// //                     <img className='w-16 sm:w-20' src={productData.image[0]} alt={productData.name} />
// //                     <div>
// //                       <p className='text-x5 sm:text-lg font-medium'>{productData.name}</p>
// //                       <div className='flex items-center gap-5 mt-2'>
// //                         <p>{currency}{productData.price} </p>
// //                         <p className='px-2 sm:py-1 border bg-slate-50'>{item.size} </p>
// //                       </div>
// //                     </div>
// //                   </>
// //                 ) : (
// //                   <p>Product not found</p>
// //                 )}
// //               </div>

// //               <input
// //                 onChange={(e) => {
// //                   const value = Number(e.target.value);
// //                   if (value > 0) {
// //                     updateQuantity(item._id, item.size, value);
// //                   } else {
// //                     updateQuantity(item._id, item.size, 0); // Handle setting quantity to 0
// //                   }
// //                 }}
// //                 className='border max-w-[40px] sm:max-w-[80px] px-1 sm:px-2 py-1 text-center'
// //                 type="number"
// //                 min={1}
// //                 defaultValue={item.quantity}
// //               />

// //               <img
// //                 onClick={() => updateQuantity(item._id, item.size, 0)}
// //                 className='w-4 mr-4 sm:w-5 cursor-pointer'
// //                 src={assets.bin_icon}
// //                 alt="Remove item"
// //               />
// //             </div>
// //           );
// //         })}
// //       </div>

// //       <div className='flex justify-end my-20'>
// //         <div className='w-full sm:w-[450px]'>
// //           <CartTotal />
// //         </div>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Cart;




////////////////////////////////////////////////////////////////////////////down one //////////////////////








// import React, { useContext, useEffect, useState } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import Title from '../components/Title';
// import { assets } from '../assets/assets';
// import CartTotal from '../components/CartTotal';

// const Cart = () => {
//   const { products, currency, cartitems, updateQuantity } = useContext(ShopContext);
//   const [cartData, setCartData] = useState([]);

//   // Update cart data whenever `cartitems` changes
//   useEffect(() => {
//     if (!cartitems || typeof cartitems !== 'object') {
//       console.error('Invalid cartitems structure:', cartitems);
//       setCartData([]);
//       return;
//     }

//     const tempData = [];
//     for (const itemId in cartitems) {
//       const sizes = cartitems[itemId];
//       for (const size in sizes) {
//         const quantity = sizes[size];
//         if (quantity > 0) {
//           tempData.push({
//             _id: itemId,
//             size,
//             quantity,
//           });
//         }
//       }
//     }

//     setCartData(tempData);
//   }, [cartitems]);

//   return (
//     <div className="border-t pt-14">
//       <div className="text-2xl mb-3">
//         <Title text1="YOUR" text2="CART" />
//       </div>

//       <div>
//         {cartData.length === 0 ? (
//           <p>Your cart is empty.</p>
//         ) : (
//           cartData.map((item, index) => {
//             const productData = products.find((product) => product._id === item._id);

//             return (
//               <div
//                 key={index}
//                 className="py-4 border-t border-b text-gray-700 grid grid-cols-[4fr_0.5fr_0.5fr] sm:grid-cols-[4fr_2fr_0.5fr] items-center gap-4"
//               >
//                 <div className="flex items-start gap-6">
//                   {productData ? (
//                     <>
//                       <img
//                         className="w-16 sm:w-20"
//                         src={productData.image?.[0] || assets.placeholderImage}
//                         alt={productData.name}
//                       />
//                       <div>
//                         <p className="text-x5 sm:text-lg font-medium">{productData.name}</p>
//                         <div className="flex items-center gap-5 mt-2">
//                           <p>
//                             {currency}
//                             {productData.price}
//                           </p>
//                           <p className="px-2 sm:py-1 border bg-slate-50">{item.size}</p>
//                         </div>
//                       </div>
//                     </>
//                   ) : (
//                     <p>Product information is unavailable.</p>
//                   )}
//                 </div>

//                 <input
//                   onChange={(e) => {
//                     const value = Number(e.target.value);
//                     if (value > 0) {
//                       updateQuantity(item._id, item.size, value);
//                     } else {
//                       updateQuantity(item._id, item.size, 0); // Handle setting quantity to 0
//                     }
//                   }}
//                   className="border max-w-[40px] sm:max-w-[80px] px-1 sm:px-2 py-1 text-center"
//                   type="number"
//                   min={1}
//                   value={item.quantity}
//                 />

//                 <img
//                   onClick={() => updateQuantity(item._id, item.size, 0)}
//                   className="w-4 mr-4 sm:w-5 cursor-pointer"
//                   src={assets.bin_icon}
//                   alt="Remove item"
//                 />
//               </div>
//             );
//           })
//         )}
//       </div>

      
      

//       <div className="flex justify-end my-20">
//         <div className="w-full sm:w-[450px]">
//           <CartTotal />
//         <button  onClick={()=>navigate('/placeorder')} className='bg-black text-white text-sm my-8 px-8 py-3'> PROCEED TO PAY</button>
//         </div >
//       </div>
//     </div>
//   );
// };

// export default Cart;
