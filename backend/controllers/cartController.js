

// // add to cart 

// import userModel from "../models/userModel.js"

// // const addTocart = async (req, res) =>{
// //    try{
// //     const { userId, itemid , size} = req.body
  
// //     const userData = await userModel.findById(userId)
// //     let cartData = await userData.cartData;
    
// //     if (cartData[itemid]) {
// //         if (cartData[itemid][size]) {
// //             cartData[itemid][size] += 1
// //         }
// //         else{
// //             cartData[itemid][size] = 1
// //         }
// //     }
// //     else{
// //         cartData[itemid] = {}
// //         cartData[itemid][size] = 1
// //     }
// //      await userModel.findByIdAndUpdate(userId, {cartData})
// //      res.json({ success: true, message: 'Added TO Cart'})

// //    }
// //    catch(error){

// //     console.log(error)
// //     res.json({ success: false, message: error.message})
    
// //    }
// // }


// const addTocart = async (req, res) => {
//     console.log('Request received at /cart/add');
//     const { itemId, size } = req.body;
//     const userId = req.userId; // This comes from the authUser middleware
//     console.log('Adding item to cart for user:', userId, 'ItemId:', itemId, 'Size:', size);

//     // Logic to add item to the cart for the user
//     // For example, find the cart for this user in the database, and add the item to it.

//     // Placeholder for cart adding logic, make sure to replace with actual logic
//     try {
//         // Assuming you have a Cart model to handle cart data in the database
//         const cart = await cart.findOne({ userId }); // Find user's cart

//         // Add the item to the cart (simplified logic, adjust based on your schema)
//         const existingItem = cart.items.find(item => item.itemId === itemId && item.size === size);
//         if (existingItem) {
//             existingItem.quantity += 1; // Increment quantity if item already exists
//         } else {
//             cart.items.push({ itemId, size, quantity: 1 }); // Add new item to cart
//         }

//         await cart.save(); // Save updated cart to database

//         res.json({ success: true, message: 'Item added to cart.' });
//     } catch (error) {
//         console.error('Error adding to cart:', error.message);
//         res.status(500).json({ success: false, message: 'Failed to add item to cart.' });
//     }
// };



// const updateCart = async (req, res) =>{

//     try {
        

//         const { userId , itemid, size, quantity } = req.body

//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;

//         cartData[itemid][size] = quantity

//         await userModel.findByIdAndUpdate(userId, {cartData})
//         res.json({ success: true, message: 'Cart Updated'})




//     } catch (error) {
//         console.log(error)
//        res.json({ success: false, message: error.message})
//     }
// }



// const getUserCart = async (req, res) =>{

//     try {
        
//         const { userId } = req.body
//         const userData = await userModel.findById(userId)
//         let cartData = await userData.cartData;

//         res.json({ success: true, cartData})

//     } catch (error) {
//         console.log(error)
//         res.json({ success: false, message: error.message})
//     }
// }

// export {addTocart, updateCart, getUserCart}








































// import userModel from "../models/userModel.js";

// // Add to cart
// const addTocart = async (req, res) => {
// //     try {
// //         const { userId, itemid, size } = req.body;
// //         const userData = await userModel.findById(userId);
        
// //         // If user doesn't exist
// //         if (!userData) {
// //             return res.status(404).json({ success: false, message: 'User not found' });
// //         }

// //         // Initialize cartData if it doesn't exist
// //         let cartData = userData.cartData || {};

// //         if (cartData[itemid]) {
// //             if (cartData[itemid][size]) {
// //                 cartData[itemid][size] += 1; // Increase quantity
// //             } else {
// //                 cartData[itemid][size] = 1; // Set quantity to 1
// //             }
// //         } else {
// //             cartData[itemid] = { [size]: 1 }; // New item with size and quantity
// //         }

// //         // Update the user's cart
// //         await userModel.findByIdAndUpdate(userId, { cartData });

// //         res.json({ success: true, message: "Added To Cart" });
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: error.message });
// //     }
    
//      try {
      

//       const { userId, itemid, size} = req.body
//       const userData = await userModel.findById(userId)
//       let cartData = await userData.cartData;

//       if (cartData[itemid]) {
//         if (cartData[itemid][size]) {
//           cartData[itemid][size] += 1
//         }
//         else{
//           cartData[itemid][size] = 1
//         }
//       } else{
//         cartData[itemid] = {}
//         cartData[itemid][size] = 1
//       }
 
//       await userModel.findByIdAndUpdate(userId, {cartData})
//       res.json({ success: true , message: 'Add To cart'})
//      } catch (error) {
      
//      }

// };

// // Update cart
// // const updateCart = async (req, res) => {
// //     try {
// //         const { userId, itemid, size, quantity } = req.body;
// //         const userData = await userModel.findById(userId);
        
// //         if (!userData) {
// //             return res.status(404).json({ success: false, message: 'User not found' });
// //         }

// //         let cartData = userData.cartData || {};

// //         // If item and size exist, update quantity
// //         if (cartData[itemid] && cartData[itemid][size]) {
// //             if (quantity > 0) {
// //                 cartData[itemid][size] = quantity; // Update quantity
// //             } else {
// //                 // Remove item if quantity is 0
// //                 delete cartData[itemid][size];
// //                 if (Object.keys(cartData[itemid]).length === 0) {
// //                     delete cartData[itemid]; // Remove the entire item if no sizes are left
// //                 }
// //             }
// //         }

// //         // Save the updated cart
// //         await userModel.findByIdAndUpdate(userId, { cartData });

// //         res.json({ success: true, message: "Cart Updated" });
// //     } catch (error) {
// //         console.log(error);
// //         res.json({ success: false, message: error.message });
// //     }
// // };



// const updateCart = async (req, res) => {
//     try {
//       const { userId, itemid, size, quantity } = req.body;
  
     
//       if (!userId || !itemid || !size || quantity === undefined) {
//         return res.status(400).json({ success: false, message: "Invalid input data" });
//       }
  
     
//       const userData = await userModel.findById(userId);
//       if (!userData) {
//         return res.status(404).json({ success: false, message: "User not found" });
//       }
  
     
//       let cartData = userData.cartData || {};
//       if (!cartData[itemid]) {
//         cartData[itemid] = {}; // Initialize item if it doesn't exist
//       }
  
//       if (quantity > 0) {
//         cartData[itemid][size] = quantity; // Update quantity
//       } else {
//         delete cartData[itemid][size]; // Remove size if quantity is 0 or less
//         if (Object.keys(cartData[itemid]).length === 0) {
//           delete cartData[itemid]; 
//         }
//       }
  
//       // Save updated cartData back to the database
//       await userModel.findByIdAndUpdate(userId, { cartData });
  
//       res.json({ success: true, message: "Cart updated successfully" });
//     } catch (error) {
//        console.error("Error updating cart:", error);
//       res.status(500).json({ success: false, message: "Internal server error" });
//     }
//   };
// // Get user cart
// const getUserCart = async (req, res) => {
//     try {
//         const { userId } = req.body;
//         const userData = await userModel.findById(userId);

//         if (!userData) {
//             return res.status(404).json({ success: false, message: 'User not found' });
//         }

//         res.json({ success: true, cartData: userData.cartData || {} });
//     } catch (error) {
//         console.log(error);
//         res.json({ success: false, message: error.message });
//     }
// };

// export { addTocart, updateCart, getUserCart };




/////////////////////////////////////////////////////////////////////////////see the upone /////////////////////////////////////////////////





// import userModel from "../models/userModel.js";

// // Add to cart
// const addTocart = async (req, res) => {
//   try {
//     const { userId, itemid, size } = req.body;

//     if (!userId || !itemid || !size) {
//       return res.status(400).json({ success: false, message: "Invalid input data" });
//     }

//     const userData = await userModel.findById(userId);

//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {};

//     if (cartData[itemid]) {
//       cartData[itemid][size] = (cartData[itemid][size] || 0) + 1;
//     } else {
//       cartData[itemid] = { [size]: 1 };
//     }

//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.json({ success: true, message: "Item added to cart successfully!" });
//   } catch (error) {
//     console.error("Error adding to cart:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// // Update cart
// const updateCart = async (req, res) => {
//   try {
//     const { userId, itemid, size, quantity } = req.body;

//     if (!userId || !itemid || !size || quantity === undefined) {
//       return res.status(400).json({ success: false, message: "Invalid input data" });
//     }

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     let cartData = userData.cartData || {};

//     if (quantity > 0) {
//       cartData[itemid] = cartData[itemid] || {};
//       cartData[itemid][size] = quantity;
//     } else {
//       if (cartData[itemid]) {
//         delete cartData[itemid][size];
//         if (Object.keys(cartData[itemid]).length === 0) {
//           delete cartData[itemid];
//         }
//       }
//     }

//     await userModel.findByIdAndUpdate(userId, { cartData });
//     res.json({ success: true, message: "Cart updated successfully!" });
//   } catch (error) {
//     console.error("Error updating cart:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// // Get user cart
// const getUserCart = async (req, res) => {
//   try {
//     const { userId } = req.body;

//     const userData = await userModel.findById(userId);
//     if (!userData) {
//       return res.status(404).json({ success: false, message: "User not found" });
//     }

//     res.json({ success: true, cartData: userData.cartData || {} });
//   } catch (error) {
//     console.error("Error fetching cart:", error);
//     res.status(500).json({ success: false, message: "Internal server error" });
//   }
// };

// export { addTocart, updateCart, getUserCart };















import userModel from "../models/userModel.js";

// Add to cart
const addTocart = async (req, res) => {
  try {
    const { userId, itemid, size } = req.body;

    if (!userId || !itemid || !size) {
      return res.status(400).json({ success: false, message: "Invalid input data" });
    }

    const userData = await userModel.findById(userId);

    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    // Add or update the item in the cart
    if (!cartData[itemid]) {
      cartData[itemid] = {};
    }
    cartData[itemid][size] = (cartData[itemid][size] || 0) + 1;

    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    res.json({ success: true, message: "Item added to cart successfully!" });
  } catch (error) {
    console.error("Error adding to cart:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Update cart
const updateCart = async (req, res) => {
  try {
    const { userId, itemid, size, quantity } = req.body;

    if (!userId || !itemid || !size || quantity === undefined) {
      return res.status(400).json({ success: false, message: "Invalid input data" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    let cartData = userData.cartData || {};

    // Update or remove item based on quantity
    if (quantity > 0) {
      if (!cartData[itemid]) {
        cartData[itemid] = {};
      }
      cartData[itemid][size] = quantity;
    } else {
      if (cartData[itemid]) {
        delete cartData[itemid][size];
        if (Object.keys(cartData[itemid]).length === 0) {
          delete cartData[itemid];
        }
      }
    }

    await userModel.findByIdAndUpdate(userId, { cartData }, { new: true });

    res.json({ success: true, message: "Cart updated successfully!" });
  } catch (error) {
    console.error("Error updating cart:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

// Get user cart
const getUserCart = async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ success: false, message: "User ID is required" });
    }

    const userData = await userModel.findById(userId);
    if (!userData) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.json({ success: true, cartData: userData.cartData || {} });
  } catch (error) {
    console.error("Error fetching cart:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export { addTocart, updateCart, getUserCart };
