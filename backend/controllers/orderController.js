import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";

// Placing orders using COD Method 
const placeOrder = async (req, res) => {

    try {
        
        const { userId , items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod:'COD',
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData) 
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})


        res.json({ success: true, message: "Order Placed"})




    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
        
        
    }
}

// Placing orders using COD Method 
const placeOrderStripe = async (req, res) => {

}


// Placing orders using COD Method 
const placeOrderRazorPay = async (req, res) => {

}

// All Orders data for Admin Panel
const allOredrs = async (req , res) => {

    try {
        
        const orders = await orderModel.find({})
        res.json({ success: true, orders})

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message})
    }
}


// const userOrders = async (req, res) => {
//     try {
//       const userId = req.userId; // Extracted from authUser middleware
//       if (!userId) {
//         return res.status(400).json({ success: false, message: 'User ID missing' });
//       }
  
//       const orders = await orderModel.find({ userId });
//       if (!orders.length) {
//         return res.status(404).json({ success: false, message: 'No orders found' });
//       }
  
//       res.json({ success: true, orders });
//     } catch (error) {
//       console.error('Error fetching orders:', error);
//       res.status(500).json({ success: false, message: 'Internal Server Error' });
//     }
//   };

const userOrders = async (req, res) => {
  try {
    const userId = req.userId; // Extracted from authUser middleware
    if (!userId) {
      return res.status(400).json({ success: false, message: 'User ID missing' });
    }

    const orders = await orderModel.find({ userId });
    if (!orders.length) {
      return res.status(404).json({ success: false, message: 'No orders found' });
    }

    res.json({ success: true, orders });
  } catch (error) {
    console.error('Error fetching orders:', error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

  

//update order status from Admin Panel
const updateStatus = async (req , res) => {
    
}


export { placeOrder, placeOrderStripe, placeOrderRazorPay, allOredrs, userOrders, updateStatus}