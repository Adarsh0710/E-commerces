// // import React from 'react'
// // import { useEffect } from 'react'
// // import { useState } from 'react'

// // import axios from 'axios'
// // import { backendUrl } from '../App'

// // const Orders = ({token}) => {

// //   const [orders, setOrders] = useState([])

// //   const fetchAllOrders = async () => {

// //     if (!token) {
// //       return null;
// //     }

// //     try {
      
// //       const response = await axios.post(backendUrl + '/api/order/list',{},{headers:{token}})
// //       console.log(response.data);
      

// //     } catch (error) {
      
// //     }



// //   }
 
// //   useEffect(() => {
// //     fetchAllOrders();
// //   },[token])
// //   return (
// //     <div>
        
// //     </div>
// //   )
// // }

// // export default Orders












// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const backendUrl = 'http://localhost:5000'; // Replace with actual backend URL

//   const fetchAllOrders = async () => {
//     if (!token) return;

//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/order/list`,
//         {},
//         {
//           headers: { Authorization: `Bearer ${token}` },
//         }
//       );
//       setOrders(response.data.orders || []);
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//     }
//   };

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div>
//       {orders.length > 0 ? (
//         orders.map((order) => <div key={order.id}>{order.name}</div>)
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default Orders;


















// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Orders = ({ token }) => {
//   const [orders, setOrders] = useState([]);
//   const backendUrl = 'http://localhost:5000'; // Replace with actual backend URL
//   const fetchAllOrders = async () => {

//     console.log(token);
    
//     if (!token) {
//       console.error('Token is missing.');
//       return;
//     }
  
//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/order/list`,
//         {}, // Assuming no body is required
//         {
//           headers: { Authorization: `Bearer ${token}` }, // Properly formatted Bearer token
//         }
//       );
  
//       console.log('Response data:', response.data);
  
//       if (response.data?.orders) {
//         setOrders(response.data.orders);
//       } else {
//         console.warn('No orders found.');
//         setOrders([]);
//       }
//     } catch (error) {
//       console.error('Error fetching orders:', error.response?.data || error.message);
//     }
//   };
  

//   useEffect(() => {
//     fetchAllOrders();
//   }, [token]);

//   return (
//     <div>
//       {orders.length > 0 ? (
//         orders.map((order) => (
//           <div key={order.id} className="order-item">
//             <h4>{order.name}</h4>
//             {/* Display more details as needed */}
//           </div>
//         ))
//       ) : (
//         <p>No orders found.</p>
//       )}
//     </div>
//   );
// };

// export default Orders;























import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Orders = ({ token }) => {
  const [orders, setOrders] = useState([]);
  const backendUrl = 'http://localhost:5000'; // Replace with actual backend URL

  const fetchAllOrders = async () => {
    console.log('Token:', token);  // Log the token to ensure it is correct

    if (!token) {
      console.error('Token is missing.');
      return;
    }

    try {
      const response = await axios.post(
        `${backendUrl}/api/order/list`,
        {}, // Assuming no body is required
        {
          headers: { Authorization: `Bearer ${token}` }, // Properly formatted Bearer token
        }
      );

      console.log('Response data:', response.data);

      if (response.data?.orders) {
        setOrders(response.data.orders);
      } else {
        console.warn('No orders found.');
        setOrders([]);
      }
    } catch (error) {
      console.error('Error fetching orders:', error.response?.data || error.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      {orders.length > 0 ? (
        orders.map((order) => (
          <div key={order.id} className="order-item">
            <h4>{order.name}</h4>
            {/* Display more details as needed */}
          </div>
        ))
      ) : (
        <p>No orders found.</p>
      )}
    </div>
  );
};

export default Orders;
