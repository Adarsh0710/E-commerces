



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
