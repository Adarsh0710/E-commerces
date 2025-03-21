
import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';
import axios from 'axios';

const Orders = () => {

  const { backendUrl, token , currency} = useContext(ShopContext);

  const [orderData,setorderData] = useState([])

  const loadOrderData = async () => {
    try {
      if (!token) {
        return null
      }

      const response = await axios.post(backendUrl + '/api/order/userorders',{},{headers:{token}})
      if (response.data.success) {
        let allOrdersItem = []
        response.data.orders.map((order)=>{
          order.items.map((item)=>{
            item['status'] = order.status
            item['payment'] = order.payment
            item['paymentMethod'] = order.paymentMethod
            item['date'] = order.date
            allOrdersItem.push(item)
          })
        })
        setorderData(allOrdersItem.reverse())
      }
      
    } catch (error) {
      
    }
  }

  useEffect(()=>{
    loadOrderData()
  },[token])

  return (
    <div className='border-t pt-16'>

        <div className='text-2xl'>
            <Title text1={'MY'} text2={'ORDERS'}/>
        </div>

        <div>
            {
              orderData.map((item,index) => (
                <div key={index} className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
                    <div className='flex items-start gap-6 text-sm'>
                        <img className='w-16 sm:w-20' src={item.image[0]} alt="" />
                        <div>
                          <p className='sm:text-base font-medium'>{item.name}</p>
                          <div className='flex items-center gap-3 mt-1 text-base text-gray-700'>
                            <p>{currency}{item.price}</p>
                            <p>Quantity: {item.quantity}</p>
                            <p>Size: {item.size}</p>
                          </div>
                          <p className='mt-1'>Date: <span className=' text-gray-400'>{new Date(item.date).toDateString()}</span></p>
                          <p className='mt-1'>Payment: <span className=' text-gray-400'>{item.paymentMethod}</span></p>
                        </div>
                    </div>
                    <div className='md:w-1/2 flex justify-between'>
                        <div className='flex items-center gap-2'>
                            <p className='min-w-2 h-2 rounded-full bg-green-500'></p>
                            <p className='text-sm md:text-base'>{item.status}</p>
                        </div>
                        <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>
                    </div>
                </div>
              ))
            }
        </div>
    </div>
  )
}

export default Orders




// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from '../components/Title';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Orders = () => {
//     const {backendUrl, token , currency } = useContext(ShopContext);

//     const [orderData, setorderData] = useState([])
    
//     const loadOrderData = async () => {
//       try {
        
//         if (!token) {
//           return null
//         }

//         const respones = await axios.post( backendUrl + '/api/order/userorders',{},{headers:{ Authorization: `Bearer ${token}` }})
//        // const respones = await  axios.post(backendUrl + '/api/order/userorders', {params: {orderId: respones.data.orders[0].id}})
//         console.log(respones.data);
       
//         setorderData(respones.data)
//       }
        
//        catch (error) {
//         console.error(error);
//         toast.error('Error loading orders');

//       }
//     }

//     useEffect(()=>{
//       loadOrderData()
//     },[ token])
    
//     return (
//       <div className='border-t pt-16'>
//         <div className='text-2xl'>
//           <Title text1={'MY'} text2={'ORDER'} />
//         </div>
  
//         <div>
//           {
//            orderData.map((item, index) => (
//             <div key={ index } className='py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4'>
//               <div className='flex items-start gap-6 text-sm'>
//                 <img className='w-16 sm:w-20' src={item.image[0]} alt={item.name} />
//                 <div>
//                   <p className='sm:text-base font-medium'>{item.name}</p>
//                   <div className='flex items-center gap-3 mt-2 text-base text-gray-700'>
//                     <p className='text-lg'>{currency}{item.price}</p>
//                     <p>Quantity: 1</p>
//                     <p>Size: M</p>
//                   </div>
//                   <p className='mt-2'>Date: <span className='text-gray-700'>3, Nov, 2024</span></p>
//                 </div>
//               </div>
//               <div className='md:w-1/2 flex justify-between'>
//                  <div className='flex items-center gap-2'>
//                     <p className='min-w-2 h-2 rounded-full bg-green-600'></p>
//                     <p className='text-sm md:text-base'>Ready to ship</p>

//                  </div>

//                  <button onClick={loadOrderData} className='border px-4 py-2 text-sm font-medium rounded-sm'>Track Order</button>

//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
  
// }

// export default Orders











// // import React, { useContext, useEffect, useState } from 'react';
// // import { ShopContext } from '../context/ShopContext';
// // import Title from '../components/Title';
// // import axios from 'axios';
// // import { toast } from 'react-toastify';

// // const Orders = () => {
// //   const { backendUrl, token, currency, userId } = useContext(ShopContext); // Ensure userId is provided in context
// //   const [orderData, setOrderData] = useState([]);

// //   const loadOrderData = async () => {
// //     try {
// //       if (!token) {
// //         toast.error('You must be logged in to view your orders');
// //         return;
// //       }

// //       const response = await axios.post(
// //         `${backendUrl}/api/order/userorders`,
// //         { userId }, // Include userId in the body
// //         { headers: { Authorization: `Bearer ${token}` } }
// //       );

// //       if (response.data.success) {
// //         const allOrders = [];
// //         response.data.orders.forEach((order) => {
// //           order.items.forEach((item) => {
// //             allOrders.push({
// //               ...item,
// //               status: order.status,
// //               payment: order.payment,
// //               paymentMethod: order.paymentMethod,
// //               date: new Date(order.date).toLocaleDateString(),
// //             });
// //           });
// //         });
// //         setOrderData(allOrders.reverse());
// //       } else {
// //         toast.error('Failed to fetch orders.');
// //       }
// //     } catch (error) {
// //       console.error('Error loading orders:', error);
// //       toast.error('An error occurred while fetching your orders.');
// //     }
// //   };

// //   useEffect(() => {
// //     if (token && userId) {
// //       loadOrderData();
// //     }
// //   }, [token, userId]);

// //   return (
// //     <div className="border-t pt-16">
// //       <div className="text-2xl">
// //         <Title text1={'MY'} text2={'ORDER'} />
// //       </div>
// //       <div>
// //         {orderData.length > 0 ? (
// //           orderData.map((item, index) => (
// //             <div
// //               key={index}
// //               className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
// //             >
// //               <div className="flex items-start gap-6 text-sm">
// //                 <img
// //                   className="w-16 sm:w-20"
// //                   src={item.image[0]}
// //                   alt={item.name}
// //                 />
// //                 <div>
// //                   <p className="sm:text-base font-medium">{item.name}</p>
// //                   <div className="flex items-center gap-3 mt-2 text-base text-gray-700">
// //                     <p className="text-lg">
// //                       {currency}
// //                       {item.price}
// //                     </p>
// //                     <p>Quantity: {item.quantity}</p>
// //                     <p>Size: {item.size}</p>
// //                   </div>
// //                   <p className="mt-2">
// //                     Date: <span className="text-gray-700">{item.date}</span>
// //                   </p>
// //                 </div>
// //               </div>
// //               <div className="md:w-1/2 flex justify-between">
// //                 <div className="flex items-center gap-2">
// //                   <div className="w-2 h-2 rounded-full bg-green-600"></div>
// //                   <p className="text-sm md:text-base">{item.status}</p>
// //                 </div>
// //                 <button className="border px-4 py-2 text-sm font-medium rounded-sm">
// //                   Track Order
// //                 </button>
// //               </div>
// //             </div>
// //           ))
// //         ) : (
// //           <p className="text-center text-gray-500">No orders found.</p>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orders;




