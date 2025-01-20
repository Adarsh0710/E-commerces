
// // import React, { createContext, useEffect, useState } from 'react';
// // import { toast } from 'react-toastify';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios' 


// // export const ShopContext = createContext();

// // const ShopContextProvider = (props) => {
// //   const currency = 'Rs. ';
// //   const delivery_fee = 10 ;
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL
// //   const [search, setSearch] = useState(' ');
// //   const [showSearch,setShowSearch] = useState(false)
// //   const [cartitems, setcartItems] = useState({});
// //   const [products ,setProduct] = useState([]);
// //   const navigate =  useNavigate();

// //   const addTocart =async (itemid,size) =>{

// //     if (!size) {
// //       toast.error('Select Product Size');
// //       return;
      
// //     }

// //     let cartData = structuredClone(cartitems);

// //     if (cartData[itemid]) {
// //       if (cartData[itemid][size]) {
// //         cartData[itemid][size] += 1;
// //       }
// //       else{
// //         cartData[itemid][size] =1;

// //       }
      
// //     }
// //     else{
// //       cartData[itemid]={};
// //       cartData[itemid][size] =1;

// //     }
// //     setcartItems(cartData);
// //   }
  
// //    const getCartCount =() => {
// //     let totalcount = 0;
// //     for(const items in cartitems){
// //       for(const item in cartitems[items]){
// //         try {
// //           if (cartitems[items][item] > 0) {
// //             totalcount+= cartitems[items][item];
            
// //           }
          
// //         } catch (error) {
          
// //         }
// //       }
// //     }
// //     return totalcount;
// //    } 
 
// //   const updateQuantity = async (itemid , size , quantity) => {
// //      let cartData = structuredClone(cartitems);
// //      cartData[itemid][size] = quantity;

// //      setcartItems(cartData);

// //   }

// //   const getCartAmount = () => {
// //     let totalAmount = 0;
// //     for(const items in cartitems){
// //       let itemInfo = products.find((product)=> products._id === items);
// //       for(const item in cartitems[items]){
// //         try {
// //           if (cartitems[items][item] > 0) {
// //             totalAmount +=itemInfo.price * cartitems[items][item];
// //           }
// //         } catch (error) {
          
// //         }
// //       }
// //     }
// //     return totalAmount;
// //   }

// //   // useEffect(()=> {
// //   //    console.log(cartitems);
     
// //   // // },[cartitems])
 
// //   const getProductData = async () =>{
// //     try {
      

// //       const response = await axios.get(`${backendUrl}/api/product/list`);
// //       if(response.data.success){

// //         setProduct(response.data.products)
// //       }
// //       else{
// //         toast.error(response.data.message)
// //       }
      
// //     } catch (error) {
// //       console.log(error);
// //       toast.error(error.message)
// //     }
// //   } 

// //   useEffect (()=>{
// //     getProductData()
// //   },[])


// //   const value = {
// //     products,
// //     currency,
// //     delivery_fee,
// //     search,setSearch,showSearch,setShowSearch,
// //     cartitems,addTocart,
// //     getCartCount,updateQuantity,
// //     getCartAmount, navigate, backendUrl

// //   }

// //   return (
// //     <ShopContext.Provider value={value}>
// //       {props.children}
// //     </ShopContext.Provider>
// //   )
// // }

// // export default ShopContextProvider;







// // ........................React...........................................................................................


// // import React, { createContext, useEffect, useState } from 'react';
// // import { toast } from 'react-toastify';
// // import { useNavigate } from 'react-router-dom';
// // import axios from 'axios';

// // export const ShopContext = createContext();

// // const ShopContextProvider = ({ children }) => {
// //   const currency = 'Rs. ';
// //   const delivery_fee = 10;
// //   const backendUrl = import.meta.env.VITE_BACKEND_URL; // Ensure this is correctly set in your .env file
// //   const [search, setSearch] = useState('');
// //   const [showSearch, setShowSearch] = useState(false);
// //   const [cartItems, setCartItems] = useState({});
// //   const [products, setProducts] = useState([]);
// //   const navigate = useNavigate();

// //   // Add to Cart Function
// //   const addToCart = async (itemId, size) => {
// //     if (!size) {
// //       toast.error('Select Product Size');
// //       return;
// //     }

// //     let cartData = structuredClone(cartItems);

// //     if (cartData[itemId]) {
// //       if (cartData[itemId][size]) {
// //         cartData[itemId][size] += 1;
// //       } else {
// //         cartData[itemId][size] = 1;
// //       }
// //     } else {
// //       cartData[itemId] = {};
// //       cartData[itemId][size] = 1;
// //     }

// //     setCartItems(cartData);
// //   };

// //   // Get Cart Count
// //   const getCartCount = () => {
// //     let totalCount = 0;
// //     for (const items in cartItems) {
// //       for (const item in cartItems[items]) {
// //         if (cartItems[items][item] > 0) {
// //           totalCount += cartItems[items][item];
// //         }
// //       }
// //     }
// //     return totalCount;
// //   };

// //   // Update Quantity
// //   const updateQuantity = (itemId, size, quantity) => {
// //     let cartData = structuredClone(cartItems);
// //     cartData[itemId][size] = quantity;
// //     setCartItems(cartData);
// //   };

// //   // Get Cart Amount
// //   const getCartAmount = () => {
// //     let totalAmount = 0;
// //     for (const items in cartItems) {
// //       let itemInfo = products.find((product) => product._id === items);
// //       for (const item in cartItems[items]) {
// //         if (cartItems[items][item] > 0) {
// //           totalAmount += itemInfo?.price * cartItems[items][item];
// //         }
// //       }
// //     }
// //     return totalAmount;
// //   };

// //   // Fetch Products
// //   const getProductData = async () => {
// //     try {
// //       const response = await axios.get(`${backendUrl}/api/product/list`);
// //       if (response?.data?.success) {
// //         setProducts(response.data.products); 
// //       } else {
// //         toast.error(response?.data?.message || 'Failed to fetch products');
// //       }
// //     } catch (error) {
// //       console.error('Error fetching products:', error);
// //       toast.error('Error fetching products');
// //     }
// //   };

// //   // Fetch products on component mount
// //   useEffect(() => {
// //     getProductData();
// //   }, []);

// //   // Context Value
// //   const value = {
// //     products,
// //     currency,
// //     delivery_fee,
// //     search,
// //     setSearch,
// //     showSearch,
// //     setShowSearch,
// //     cartItems,
// //     addToCart,
// //     getCartCount,
// //     updateQuantity,
// //     getCartAmount,
// //     navigate,
// //     backendUrl,
// //   };

// //   return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>;
// // };

// // export default ShopContextProvider;












// /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////





// import React, { createContext, useEffect, useState } from 'react';

// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = 'Rs. ';
//   const delivery_fee = 50;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;
//   const [search, setSearch] = useState(' ');
//   const [showSearch,setShowSearch] = useState(false)
//   const [cartitems, setcartItems] = useState({});
//   const [products,setProducts] = useState([]);
//   const [token, setToken] = useState('')
//   const navigate =  useNavigate();

//   // const addToCart =async (itemId,size) =>{

//   //   if (!size) {
//   //     toast.error('Select Product Size');
//   //     return;
      
//   //   }

//   //   let cartData = structuredClone(cartitems);

//   //   if (cartData[itemId]) {
//   //     if (cartData[itemId][size]) {
//   //       cartData[itemId][size] += 1;
//   //     }
//   //     else{
//   //       cartData[itemId][size] = 1;

//   //     }
      
//   //   }
//   //   else{
//   //     cartData[itemId]={};
//   //     cartData[itemId][size] = 1;

//   //   }
//   //   setcartItems(cartData);

//   //   if(token){
//   //     // try {
        
//   //     //   await axios.post( backendUrl + '/api/cart/add', {itemId,size}, {headers:{token}})

//   //     // } catch (error) {
//   //     //   console.log(error)
//   //     //   toast.error(error.message);
        
//   //     // }

//   //     try {
//   //       const response = await axios.post('/api/cart/add', itemId, {
//   //         headers: {
//   //           'Authorization': `Bearer ${token}`, // Include your token here
//   //         },
//   //       });
//   //       console.log('Item added to cart:', response.data);
//   //     } catch (error) {
//   //       console.error('Error adding to cart:', error);
//   //     }
//   //   }

//   // }












//   // const addToCart = async (itemId, size) => {
//   //   if (!size) {
//   //     toast.error('Select Product Size');
//   //     return;
//   //   }
  
//   //   // Update local cart state
//   //   let cartData = structuredClone(cartitems);
  
//   //   if (cartData[itemId]) {
//   //     if (cartData[itemId][size]) {
//   //       cartData[itemId][size] += 1;
//   //     } else {
//   //       cartData[itemId][size] = 1;
//   //     }
//   //   } else {
//   //     cartData[itemId] = {};
//   //     cartData[itemId][size] = 1;
//   //   }
  
//   //   setcartItems(cartData); // Update local state immediately for a better UX
  
//   //   // Persist cart data in the database if the user is logged in
//   //   if (token) {
//   //     try {
//   //       const payload = { itemId, size }; // Prepare the payload
//   //       const response = await axios.post(`${backendUrl}/api/cart/add`, payload, {
//   //         headers: {
//   //           Authorization: `Bearer ${token}`, // Include token in the Authorization header
//   //         },
//   //       });
  
//   //       if (response.data.success) {
//   //         console.log('Item added to the database:', response.data);
//   //         toast.success('Item added to cart!');
//   //       } else {
//   //         console.error('Failed to add item to database:', response.data.message);
//   //         toast.error(response.data.message || 'Failed to add item to database.');
//   //       }
//   //     } catch (error) {
//   //       console.error('Error adding to cart:', error.response?.data || error.message);
//   //       toast.error(error.response?.data?.message || 'Failed to add item to database.');
//   //     }
//   //   } else {
//   //     toast.error('Please log in to add items to your cart.');
//   //   }
//   // };
  


































// //   const addToCart = async (itemId, size) => {
// //     if (!size) {
// //         toast.error('Please select a size before adding to cart.');
// //         return;
// //     }

// //     let cartData = structuredClone(cartitems);

// //     if (!cartData[itemId]) {
// //         cartData[itemId] = {};
// //     }
// //     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

// //     setcartItems(cartData);

// //     if (token) {
// //         try {
// //             const response = await axios.post( backendUrl + '/api/cart/add', { itemId, size }, {
// //                 headers: {
// //                     'Authorization': `Bearer ${token}` // Make sure to pass the token here
// //                 }
// //             });
// //             console.log('Item added to cart:', response.data);
// //             toast.success('Item added to cart!');
// //         } catch (error) {
// //             console.error('Error adding to cart:', error.response?.data || error.message);
// //             toast.error('Failed to add item to cart.');
// //         }
// //     } else {
// //         toast.error('Please log in to add items to your cart.');
// //     }
// // };





























// // const addToCart = async (itemId, size) => {

// //    const tokens = localStorage.getItem('token');
// //   console.log('Token from localStorage:', tokens);


// //   if (!size) {
// //       toast.error('Select Product Size');
// //       return;
// //   }

// //   const cartData = structuredClone(cartitems);
// //   if (cartData[itemId]) {
// //       cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;
// //   } else {
// //       cartData[itemId] = { [size]: 1 };
// //   }
// //   setcartItems(cartData);

// //   const token = localStorage.getItem('token');
// //   if (!token) {
// //       toast.error('You need to login to add items to the cart.');
// //       return;
// //   }

// //   try {
// //       const response = await axios.post(
// //           backendUrl + '/api/cart/add',
// //           { itemId, size },
// //           {
// //               headers: { Authorization: `Bearer ${token}` },
// //           }
// //       );
// //       if (response.data.success) {
// //           toast.success('Item added to cart successfully!');
// //       } else {
// //           toast.error(response.data.message);
// //       }
// //   } catch (error) {
// //       console.error('Error adding to cart:', error.response?.data || error.message);
// //       toast.error('Error adding to cart.');
// //   }
// // };






























































// //   const addToCart = async (itemId, size) => {
// //     if (!size) {
// //         toast.error('Please select a size before adding to cart.');
// //         return;
// //     }

// //     let cartData = structuredClone(cartitems);

// //     if (!cartData[itemId]) {
// //         cartData[itemId] = {};
// //     }
// //     cartData[itemId][size] = (cartData[itemId][size] || 0) + 1;

// //     setcartItems(cartData);

// //     if (token) {
// //         try {
// //           const response = await axios.post(
// //             `${backendUrl}/api/cart/add`, 
// //             { itemid, size },
// //             { headers: { Authorization: `Bearer ${token}` } }
// //         );
// //             console.log('Cart updated successfully:', response.data);
// //             toast.success('Item added to cart!');
// //         } catch (error) {
// //             console.error('Error adding to cart:', error.response?.data || error.message);
// //             toast.error(error.response?.data?.message || 'Failed to add item to cart.');
// //         }
// //     } else {
// //         toast.error('Please log in to add items to your cart.');
// //     }
// // };





// //   const addToCart = async (itemId, size) => {
// //     if (!size) {
// //         toast.error('Select Product Size');
// //         return;
// //     }

// //     // Clone the cart and update locally
// //     let cartData = structuredClone(cartitems);

// //     if (cartData[itemId]) {
// //         if (cartData[itemId][size]) {
// //             cartData[itemId][size] += 1;
// //         } else {
// //             cartData[itemId][size] = 1;
// //         }
// //     } else {
// //         cartData[itemId] = {};
// //         cartData[itemId][size] = 1;
// //     }

// //     setcartItems(cartData);

// //     if (token) {
// //         try {
// //             // Send updated cart data to the server
// //             const response = await axios.post(
// //                backendUrl + '/api/cart/add', // Ensure the backend URL is correct
// //                 { itemId, size },
// //                 {
// //                     headers: {
// //                        token// Use 'Bearer' format if required
// //                     }
// //                 }
// //             )

// //             if (response.data.success) {
// //                 toast.success('Item added to cart successfully!');
// //             } else {
// //                 toast.error(response.data.message || 'Failed to add item to cart.');
// //             }
// //         } catch (error) {
// //             console.error('Error adding to cart:', error.response?.data || error.message);
// //             toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
// //         }
// //     } else {
// //         toast.error('User not logged in. Please log in to add items to the cart.');
// //     }
// // }

  
// // const addToCart = async (itemId, size) => {
// //       if (!size) {
// //         toast.error('Select Product Size');
// //         return;
// //       }
    
// //       if (!token) {
// //         toast.error('User is not authenticated. Please log in.');
// //         return;
// //       }
    
// //       try {
// //         const payload = { itemId, size, quantity: 1 };
// //         const response = await axios.post(
// //           `${backendUrl}/api/cart/add`,
// //           payload,
// //           { headers: { Authorization: `Bearer ${token}` } }
// //         );
    
// //         if (response.data.success) {
// //           toast.success(response.data.message || 'Item added to cart!');
    
// //           // Update cart state
// //           setcartItems((prevCart) => {
// //             const updatedCart = { ...prevCart };
// //             if (!updatedCart[itemId]) {
// //               updatedCart[itemId] = {};
// //             }
// //             updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
// //             return updatedCart;
// //           });
// //         } else {
// //           toast.error(response.data.message || 'Failed to add item to cart.');
// //         }
// //       } catch (error) {
// //         console.error('Error adding to cart:', error.response?.data || error.message);
// //         toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
// //       }
// //     };
    
//   //  const getCartCount =() => {
//   //   let totalcount = 0;
//   //   for(const items in cartitems){
//   //     for(const item in cartitems[items]){
//   //       try {
//   //         if (cartitems[items][item] > 0) {
//   //           totalcount+= cartitems[items][item];
            
//   //         }
          
//   //       } catch (error) {
          
//   //       }
//   //     }
//   //   }
//   //   return totalcount;
//   //  } 


  

//   const addToCart = async (itemId, size) => {
//     if (!size) {
//       toast.error('Select Product Size');
//       return;
//     }
  
//     if (!token) {
//       toast.error('User is not authenticated. Please log in.');
//       return;
//     }
  
//     try {
//       const payload = { itemId, size, quantity: 1 };
//       const response = await axios.post(
//         `${backendUrl}/api/cart/add`,
//         payload,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
  
//       if (response.data.success) {
//         toast.success(response.data.message || 'Item added to cart!');
  
//         // Update cart state
//         setCartItems((prevCart) => {
//           const updatedCart = { ...prevCart };
//           if (!updatedCart[itemId]) {
//             updatedCart[itemId] = {};
//           }
//           updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
//           return updatedCart;
//         });
//       } else {
//         toast.error(response.data.message || 'Failed to add item to cart.');
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error.response?.data || error.message);
//       toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
//     }
//   };
  


//   const getCartCount = () => {
//     let totalCount = 0;
  
//     // Ensure cartitems is valid
//     if (!cartitems || typeof cartitems !== "object") {
//       console.error("Invalid cartitems format:", cartitems);
//       return totalCount;
//     }
  
//     for (const itemId in cartitems) {
//       const sizes = cartitems[itemId];
//       if (sizes && typeof sizes === "object") {
//         for (const size in sizes) {
//           try {
//             const quantity = sizes[size];
//             if (quantity > 0) {
//               totalCount += quantity;
//             }
//           } catch (error) {
//             console.error("Error processing cart count:", error);
//           }
//         }
//       }
//     }
  
//     return totalCount;
//   };
  
 
//   const updateQuantity = async (itemId , size , quantity) => {
//      let cartData = structuredClone(cartitems);
//      cartData[itemId][size] = quantity;

//      setcartItems(cartData);

//   }

//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for(const items in cartitems){
//       let itemInfo = products.find((product)=> product._id === items);
//       for(const item in cartitems[items]){
//         try {
//           if (cartitems[items][item] > 0) {
//             totalAmount +=itemInfo.price * cartitems[items][item];
//           }
//         } catch (error) {
          
//         }
//       }
//     }
//     return totalAmount;
//   }

//   // useEffect(()=> {
//   //    console.log(cartitems);
     
//   // },[cartitems])

//   // const getProductData = async () => {
//   //     try {
//   //       const respones = await axios.get(backendUrl + '/api/product/list');
//   //       if(respones.data.success){
//   //         setProduct(respones.data.products)
//   //       }
//   //       else{
//   //         toast.error(respones.data.message)
//   //       }
        

//   //     } catch (error) {
//   //       console.log(error);
//   //       toast.error(error.message);
        
//   //     }
//   // }


//   const getProductData = async () => {
//     try {
//       const respones = await axios.get(backendUrl + '/api/product/list')
//       if(respones.data.success){
//         setProducts(respones.data.product)
//       }
//       else{
//          toast.error(respones.data.message)
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
      
//     }
    
//   };
  

//   // useEffect (()=>{
//   //  getProductData();
//   // },[])

//   // useEffect(()=>{
//   //   if (!token && localStorage.getItem('token')) {
//   //     setToken(localStorage.getItem('token'))
//   //   } 
//   // },[])

//   const getUserCart = async () => {
//     if (!token) return;

//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         setcartItems(response.data.cartData);
//       } else {
//         toast.error(response.data.message || 'Failed to fetch cart data.');
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error.message);
//       toast.error(error.message || 'An error occurred while fetching the cart.');
//     }
//   };


//     useEffect(() => {
//     getProductData();
//     if (token) {
//       getUserCart();
//     }
//   }, []);

//   /**
//    * Handle Token Changes
//    */
//   useEffect(() => {
//     if (!token && localStorage.getItem('token')) {
//       const storedToken = localStorage.getItem('token');
//       setToken(storedToken);
//       getUserCart();
//     }
//   }, [token]);
//   const value = {
//     // products,
//     // currency,
//     // delivery_fee,
//     // search,setSearch,showSearch,setShowSearch,
//     // cartitems,addToCart,
//     // getCartCount,updateQuantity,
//     // getCartAmount, navigate , backendUrl,
//     // setToken,token

//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartitems,
//     addToCart,
//     getCartCount,
//     updateQuantity,
//     getCartAmount,
//     navigate,
//     backendUrl,
//     setToken,
//     token,
//   }

//   return (
//     <ShopContext.Provider value={value}>
//       {props.children}
//     </ShopContext.Provider>
//   )
// }

// export default ShopContextProvider;




////////////////////////////////////////////////////////////////see the above one ////////////////////////////////////////////////////































// import React, { createContext, useEffect, useState } from 'react';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// export const ShopContext = createContext();

// const ShopContextProvider = (props) => {
//   const currency = 'Rs. ';
//   const delivery_fee = 10;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [search, setSearch] = useState('');
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartitems, setCartItems] = useState({});
//   const [products, setProducts] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem('token') || '');
//   const navigate = useNavigate();

//   /**
//    * Add to Cart Function
//    */
//   // const addToCart = async (itemId, size) => {
//   //   if (!size) {
//   //     toast.error('Select Product Size');
//   //     return;
//   //   }

//   //   if (!token) {
//   //     toast.error('User is not authenticated. Please log in.');
//   //     return;
//   //   }

//   //   try {
//   //     const payload = { itemId, size, quantity: 1 };
//   //     const response = await axios.post(
//   //       `${backendUrl}/api/cart/add`,
//   //       payload,
//   //       { headers: { Authorization: `Bearer ${token}` } }
//   //     );

//   //     if (response.data.success) {
//   //       toast.success(response.data.message || 'Item added to cart!');

//   //       // Update cart state
//   //       const updatedCart = { ...cartitems };
//   //       updatedCart[itemId] = updatedCart[itemId] || {};
//   //       updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
//   //       setCartItems(updatedCart);
//   //     } else {
//   //       toast.error(response.data.message || 'Failed to add item to cart.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding to cart:', error.response?.data || error.message);
//   //     toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
//   //   }
//   // };


//   // const addToCart = async (itemId, size) => {
//   //   if (!size) {
//   //     toast.error('Select Product Size');
//   //     return;
//   //   }
  
//   //   if (!token) {
//   //     toast.error('User is not authenticated. Please log in.');
//   //     return;
//   //   }
  
//   //   try {
//   //     const payload = { itemId, size, quantity: 1 };
//   //     const response = await axios.post(
//   //       `${backendUrl}/api/cart/add`,
//   //       payload,
//   //       { headers: { Authorization: `Bearer ${token}` } }
//   //     );
  
//   //     if (response.data.success) {
//   //       toast.success(response.data.message || 'Item added to cart!');
  
//   //       // Update cart state
//   //       setCartItems((prevCart) => {
//   //         const updatedCart = { ...prevCart };
//   //         if (!updatedCart[itemId]) {
//   //           updatedCart[itemId] = {};
//   //         }
//   //         updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
//   //         return updatedCart;
//   //       });
//   //     } else {
//   //       toast.error(response.data.message || 'Failed to add item to cart.');
//   //     }
//   //   } catch (error) {
//   //     console.error('Error adding to cart:', error.response?.data || error.message);
//   //     toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
//   //   }
//   // };
  












//   const addToCart = async (itemId, size) => {
//     if (!size) {
//       toast.error('Select Product Size');
//       return;
//     }
  
//     if (!token) {
//       toast.error('User is not authenticated. Please log in.');
//       return;
//     }
  
//     try {
//       const payload = { itemId, size, quantity: 1 };
//       const response = await axios.post(
//         `${backendUrl}/api/cart/add`,
//         payload,
//         { headers: { Authorization: `Bearer ${token}` } }
//       );
  
//       if (response.data.success) {
//         toast.success(response.data.message || 'Item added to cart!');
  
//         // Update cart state
//         setCartItems((prevCart) => {
//           const updatedCart = { ...prevCart };
//           if (!updatedCart[itemId]) {
//             updatedCart[itemId] = {};
//           }
//           updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
//           return updatedCart;
//         });
//       } else {
//         toast.error(response.data.message || 'Failed to add item to cart.');
//       }
//     } catch (error) {
//       console.error('Error adding to cart:', error.response?.data || error.message);
//       toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
//     }
//   };
  

// //   const addToCart = async (itemId, size) => {
// //     if (!size) {
// //         toast.error('Select Product Size');
// //         return;
// //     }

// //     // Clone the cart and update locally
// //     let cartData = structuredClone(cartitems);

// //     if (cartData[itemId]) {
// //         if (cartData[itemId][size]) {
// //             cartData[itemId][size] += 1;
// //         } else {
// //             cartData[itemId][size] = 1;
// //         }
// //     } else {
// //         cartData[itemId] = {};
// //         cartData[itemId][size] = 1;
// //     }

// //     setCartItems(cartData);

// //     if (token) {
// //         try {
// //             // Send updated cart data to the server
// //             const response = await axios.post(
// //                backendUrl + '/api/cart/add', // Ensure the backend URL is correct
// //                 { itemId, size },
// //                 {
// //                     headers: {
// //                        token// Use 'Bearer' format if required
// //                     }
// //                 }
// //             )

// //             if (response.data.success) {
// //                 toast.success('Item added to cart successfully!');
// //             } else {
// //                 toast.error(response.data.message || 'Failed to add item to cart.');
// //             }
// //         } catch (error) {
// //             console.error('Error adding to cart:', error.response?.data || error.message);
// //             toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
// //         }
// //     } else {
// //         toast.error('User not logged in. Please log in to add items to the cart.');
// //     }
// // }






















//   /**
//    * Get Cart Item Count
//    */
//   const getCartCount = () => {
//     let totalcount = 0;
//     for (const itemId in cartitems) {
//       for (const size in cartitems[itemId]) {
//         totalcount += cartitems[itemId][size];
//       }
//     }
//     return totalcount;
//   };


















//   /**
//    * Update Cart Item Quantity
//    */
//   // const updateQuantity = (itemId, size, quantity) => {
//   //   const updatedCart = { ...cartitems };

//   //   if (updatedCart[itemId] && updatedCart[itemId][size] !== undefined) {
//   //     updatedCart[itemId][size] = quantity;
//   //     setCartItems(updatedCart);
//   //   } else {
//   //     toast.error('Item not found in cart.');
//   //   }
//   // };

//   const updateQuantity = (itemId, size, quantity) => {
//     setCartItems((prevCart) => {
//       const updatedCart = { ...prevCart };
  
//       if (updatedCart[itemId]) {
//         if (quantity > 0) {
//           updatedCart[itemId][size] = quantity;
//         } else {
//           delete updatedCart[itemId][size];
//           if (Object.keys(updatedCart[itemId]).length === 0) {
//             delete updatedCart[itemId];
//           }
//         }
//       }
//       return updatedCart;
//     });
//   };
  


//   /**
//    * Calculate Cart Total Amount
//    */
//   const getCartAmount = () => {
//     let totalAmount = 0;
//     for (const itemId in cartitems) {
//       const product = products.find((p) => p._id === itemId);
//       if (product) {
//         for (const size in cartitems[itemId]) {
//           totalAmount += product.price * cartitems[itemId][size];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   /**
//    * Fetch Product Data
//    */
//   const getProductData = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/product/list`);
//       if (response.data.success) {
//         setProducts(response.data.product);
//       } else {
//         toast.error(response.data.message || 'Failed to fetch products.');
//       }
//     } catch (error) {
//       console.error('Error fetching products:', error.message);
//       toast.error(error.message || 'An error occurred while fetching products.');
//     }
//   };

//   /**
//    * Fetch User's Cart Data
//    */
//   const getUserCart = async () => {
//     if (!token) return;

//     try {
//       const response = await axios.post(
//         `${backendUrl}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` } }
//       );

//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       } else {
//         toast.error(response.data.message || 'Failed to fetch cart data.');
//       }
//     } catch (error) {
//       console.error('Error fetching cart:', error.message);
//       toast.error(error.message || 'An error occurred while fetching the cart.');
//     }
//   };

//   /**
//    * Initialize Products and Cart Data on Component Mount
//    */
//   useEffect(() => {
//     getProductData();
//     if (token) {
//       getUserCart();
//     }
//   }, []);

//   /**
//    * Handle Token Changes
//    */
//   useEffect(() => {
//     if (!token && localStorage.getItem('token')) {
//       const storedToken = localStorage.getItem('token');
//       setToken(storedToken);
//       getUserCart();
//     }
//   }, [token]);

//   /**
//    * Context Values
//    */
//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartitems,
//     addToCart,
//     getCartCount,
//     updateQuantity,
//     getCartAmount,
//     navigate,
//     backendUrl,
//     setToken,
//     token,
//   };

//   return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
// };

// export default ShopContextProvider;
























import React, { createContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const currency = 'Rs. ';
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  const [search, setSearch] = useState('');
  const [showSearch, setShowSearch] = useState(false);
  const [cartitems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(localStorage.getItem('token') || '');
  const navigate = useNavigate();

  /**
   * Add to Cart Function
   */
  // const addToCart = async (itemId, size) => {
  //   if (!size) {
  //     toast.error('Select Product Size');
  //     return;
  //   }

  //   if (!token) {
  //     toast.error('User is not authenticated. Please log in.');
  //     return;
  //   }

  //   try {
  //     const payload = { itemId, size, quantity: 1 };
  //     const response = await axios.post(
  //       `${backendUrl}/api/cart/add`,
  //       payload,
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );

  //     if (response.data.success) {
  //       toast.success(response.data.message || 'Item added to cart!');

  //       // Update cart state
  //       const updatedCart = { ...cartitems };
  //       updatedCart[itemId] = updatedCart[itemId] || {};
  //       updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
  //       setCartItems(updatedCart);
  //     } else {
  //       toast.error(response.data.message || 'Failed to add item to cart.');
  //     }
  //   } catch (error) {
  //     console.error('Error adding to cart:', error.response?.data || error.message);
  //     toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
  //   }
  // };


  // const addToCart = async (itemId, size) => {
  //   if (!size) {
  //     toast.error('Select Product Size');
  //     return;
  //   }
  
  //   if (!token) {
  //     toast.error('User is not authenticated. Please log in.');
  //     return;
  //   }
  
  //   try {
  //     const payload = { itemId, size, quantity: 1 };
  //     const response = await axios.post(
  //       `${backendUrl}/api/cart/add`,
  //       payload,
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  
  //     if (response.data.success) {
  //       toast.success(response.data.message || 'Item added to cart!');
  
  //       // Update cart state
  //       setCartItems((prevCart) => {
  //         const updatedCart = { ...prevCart };
  //         if (!updatedCart[itemId]) {
  //           updatedCart[itemId] = {};
  //         }
  //         updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
  //         return updatedCart;
  //       });
  //     } else {
  //       toast.error(response.data.message || 'Failed to add item to cart.');
  //     }
  //   } catch (error) {
  //     console.error('Error adding to cart:', error.response?.data || error.message);
  //     toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
  //   }
  // };
  












  // const addToCart = async (itemId, size) => {
  //   if (!size) {
  //     toast.error('Select Product Size');
  //     return;
  //   }
  
  //   if (!token) {
  //     toast.error('User is not authenticated. Please log in.');
  //     return;
  //   }
  
  //   try {
  //     const payload = { itemId, size, quantity: 1 };
  //     const response = await axios.post(
  //       `${backendUrl}/api/cart/add`,
  //       payload,
  //       { headers: { Authorization: `Bearer ${token}` } }
  //     );
  
  //     if (response.data.success) {
  //       toast.success(response.data.message || 'Item added to cart!');
  
  //       // Update cart state
  //       setCartItems((prevCart) => {
  //         const updatedCart = { ...prevCart };
  //         if (!updatedCart[itemId]) {
  //           updatedCart[itemId] = {};
  //         }
  //         updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
  //         return updatedCart;
  //       });
  //     } else {
  //       toast.error(response.data.message || 'Failed to add item to cart.');
  //     }
  //   } catch (error) {
  //     console.error('Error adding to cart:', error.response?.data || error.message);
  //     toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
  //   }
  // };
  




  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error('Select Product Size');
      return;
    }
  
    if (!token) {
      toast.error('User is not authenticated. Please log in.');
      return;
    }
  
    try {
      const payload = { userId: localStorage.getItem('userId'), itemid: itemId, size };
      const response = await axios.post(`${backendUrl}/api/cart/add`, payload, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      if (response.data.success) {
        toast.success(response.data.message || 'Item added to cart!');
  
        setCartItems((prevCart) => {
          const updatedCart = { ...prevCart };
          if (!updatedCart[itemId]) {
            updatedCart[itemId] = {};
          }
          updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
          return updatedCart;
        });
      } else {
        toast.error(response.data.message || 'Failed to add item to cart.');
      }
    } catch (error) {
      console.error('Error adding to cart:', error.response?.data || error.message);
      toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
    }
  };
  















//   const addToCart = async (itemId, size) => {
//     if (!size) {
//         toast.error('Select Product Size');
//         return;
//     }

//     // Clone the cart and update locally
//     let cartData = structuredClone(cartitems);

//     if (cartData[itemId]) {
//         if (cartData[itemId][size]) {
//             cartData[itemId][size] += 1;
//         } else {
//             cartData[itemId][size] = 1;
//         }
//     } else {
//         cartData[itemId] = {};
//         cartData[itemId][size] = 1;
//     }

//     setCartItems(cartData);

//     if (token) {
//         try {
//             // Send updated cart data to the server
//             const response = await axios.post(
//                backendUrl + '/api/cart/add', // Ensure the backend URL is correct
//                 { itemId, size },
//                 {
//                     headers: {
//                        token// Use 'Bearer' format if required
//                     }
//                 }
//             )

//             if (response.data.success) {
//                 toast.success('Item added to cart successfully!');
//             } else {
//                 toast.error(response.data.message || 'Failed to add item to cart.');
//             }
//         } catch (error) {
//             console.error('Error adding to cart:', error.response?.data || error.message);
//             toast.error(error.response?.data?.message || 'An error occurred while adding to cart.');
//         }
//     } else {
//         toast.error('User not logged in. Please log in to add items to the cart.');
//     }
// }






















  /**
   * Get Cart Item Count
   */
  const getCartCount = () => {
    let totalcount = 0;
    for (const itemId in cartitems) {
      for (const size in cartitems[itemId]) {
        totalcount += cartitems[itemId][size];
      }
    }
    return totalcount;
  };


















  /**
   * Update Cart Item Quantity
   */
  // const updateQuantity = (itemId, size, quantity) => {
  //   const updatedCart = { ...cartitems };

  //   if (updatedCart[itemId] && updatedCart[itemId][size] !== undefined) {
  //     updatedCart[itemId][size] = quantity;
  //     setCartItems(updatedCart);
  //   } else {
  //     toast.error('Item not found in cart.');
  //   }
  // };









  // const updateQuantity = (itemId, size, quantity) => {
  //   setCartItems((prevCart) => {
  //     const updatedCart = { ...prevCart };
  
  //     if (updatedCart[itemId]) {
  //       if (quantity > 0) {
  //         updatedCart[itemId][size] = quantity;
  //       } else {
  //         delete updatedCart[itemId][size];
  //         if (Object.keys(updatedCart[itemId]).length === 0) {
  //           delete updatedCart[itemId];
  //         }
  //       }
  //     }
  //     return updatedCart;
  //   });
  // };
  





  const updateQuantity = async (itemId, size, quantity) => {
    if (!token) {
      toast.error("User is not authenticated. Please log in.");
      return;
    }
  
    try {
      const payload = { itemid: itemId, size, quantity };
      const response = await axios.post(
        `${backendUrl}/api/cart/update`,
        payload,
        { headers: { Authorization: `Bearer ${token}` } }
      );
  
      if (response.data.success) {
        toast.success(response.data.message || "Cart updated successfully!");
  
        // Update cart state locally
        setCartItems((prevCart) => {
          const updatedCart = { ...prevCart };
  
          if (quantity > 0) {
            if (!updatedCart[itemId]) {
              updatedCart[itemId] = {};
            }
            updatedCart[itemId][size] = quantity;
          } else {
            delete updatedCart[itemId][size];
            if (Object.keys(updatedCart[itemId]).length === 0) {
              delete updatedCart[itemId];
            }
          }
  
          return updatedCart;
        });
      } else {
        toast.error(response.data.message || "Failed to update cart.");
      }
    } catch (error) {
      console.error("Error updating cart:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "An error occurred while updating the cart.");
    }
  };
  










  /**
   * Calculate Cart Total Amount
   */
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartitems) {
      const product = products.find((p) => p._id === itemId);
      if (product) {
        for (const size in cartitems[itemId]) {
          totalAmount += product.price * cartitems[itemId][size];
        }
      }
    }
    return totalAmount;
  };

  /**
   * Fetch Product Data
   */
  const getProductData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.product);
      } else {
        toast.error(response.data.message || 'Failed to fetch products.');
      }
    } catch (error) {
      console.error('Error fetching products:', error.message);
      toast.error(error.message || 'An error occurred while fetching products.');
    }
  };

  /**
   * Fetch User's Cart Data
   */
  const getUserCart = async () => {
    if (!token) return;

    try {
      const response = await axios.post(
        `${backendUrl}/api/cart/get`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (response.data.success) {
        setCartItems(response.data.cartData);
      } else {
        toast.error(response.data.message || 'Failed to fetch cart data.');
      }
    } catch (error) {
      console.error('Error fetching cart:', error.message);
      toast.error(error.message || 'An error occurred while fetching the cart.');
    }
  };

  /**
   * Initialize Products and Cart Data on Component Mount
   */
  useEffect(() => {
    getProductData();
    if (token) {
      getUserCart();
    }
  }, []);

  /**
   * Handle Token Changes
   */
  useEffect(() => {
    if (!token && localStorage.getItem('token')) {
      const storedToken = localStorage.getItem('token');
      setToken(storedToken);
      getUserCart();
    }
  }, [token]);

  /**
   * Context Values
   */
  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartitems,
    setCartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,
    setToken,
    token,
  };

  return <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>;
};

export default ShopContextProvider;
