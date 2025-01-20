// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { backendUrl, currency } from '../App'
// import { toast } from 'react-toastify'

// const List = () => {


//   const [list, setList] = useState([])

//   const fetchList = async () => {
//     try {
      

//       const respones = await axios.get(backendUrl + '/api/product/list')
//       if (respones.data.success) {
//         setList(respones.data.product)
//       }
//       else{
//         toast.error(respones.data.message)
//       }
      

//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
      
//     }
//   }

//   useEffect(() => {
//     fetchList()
//   },[])



//   return (
//     <>
//         <p className='mb-2'>All Product List</p>
//         <div className=' flex flex-col gap-2'>
//           {/* ------------------List Table Title------------ */}
//           <div className='hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm '>
//             <b>Image</b>
//             <b>Name</b>
//             <b>Category</b>
//             <b>Price</b>
//             <b className='text-center'>Action</b>
//           </div>
//           {/* ---------------------------Product list------------------- */}
//           {
//             list.map((item,index) => (
//               <div className='grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm'  key={index}>
//                 <img className='w-12 h-12 object-cover rounded' src={item.image[0]} alt="" />
//                 <p>{item.name}</p>
//                 <p> {item.category} </p>
//                 <p> {currency} {item.price}</p>
//                 <p className=' text-right md:text-center cursor-pointer text-lg text-blue-500 hover:text-red-700'>X</p>
//                 </div>
            
//             ))

//             // list.map((item, index) => (
//             //   <div 
//             //     className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm" 
//             //     key={index}
//             //   >
//             //     <img 
//             //       className="w-12 h-12 object-cover rounded" 
//             //       src={item.image?.[0] || 'https://via.placeholder.com/100'} 
//             //       alt={item.name || 'Product'} 
//             //     />
//             //     <p>{item.name || 'No Name Available'}</p>
//             //     <p>{item.category || 'No Category'}</p>
//             //     <p>{currency} {item.price || '0.00'}</p>
//             //     <p 
//             //       className="text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700"
//             //       onClick={() => alert(`Delete action for ${item.name}`)} // Placeholder action for delete
//             //     >
//             //       X
//             //     </p>
//             //   </div>
//             // ))
            

            
//           }
//         </div>
//     </>
//   )
// }

// export default List




// ---------------------------------------------------------------------------------------2nd-------------------------------------------------------------------










import axios from "axios";
import React, { useEffect, useState } from "react";
import { backendUrl, currency } from "../App"; // Ensure these values are correctly imported
import { toast } from "react-toastify";

const List = ({token}) => {
  const [list, setList] = useState([]);

  // Fetch products from backend
  const fetchList = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`); // Ensure correct API endpoint
      if (response.data.success) {
        setList(response.data.product); // Correct the response structure if needed
      } else {
        toast.error(response.data.message || "Failed to fetch products");
      }
    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred while fetching the products");
    }
  };

  const removeProduct = async (id) => {
    try {
      

      const respones = await axios.post(backendUrl + '/api/product/removed', {id} , {headers:{token}})
      if (respones.data.success) {
        toast.success(respones.data.message)
        await fetchList();
      } else{
        toast.error(respones.data.message)
      }

    } catch (error) {
      console.error(error);
      toast.error(error.message || "An error occurred while fetching the products");
    }
  }

  // Fetch products on component mount
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="product-list">
      <p className="mb-2">All Product List</p>

      <div className="flex flex-col gap-2">
        {/* List Table Header */}
        <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className="text-center">Action</b>
        </div>

        {/* Product List */}
        {list.length > 0 ? (
          list.map((item, index) => (
            <div
              key={item._id || index} // Prefer _id if it exists in your database
              className="grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 border p-2"
            >
              <img
                src={item.image && item.image[0] ? item.image[0] : "https://via.placeholder.com/150"}
                alt={item.name}
                className="w-16 h-16 object-cover"
              />
              <p>{item.name}</p>
              <p>{item.category || "N/A"}</p>
              <p>
                {currency} {item.price || "N/A"}
              </p>
              {/* <button className="text-blue-500 hover:text-red-700">X</button> */}
              <p  onClick={()=> removeProduct(item._id)} className="text-blue-500 hover:text-red-700">X</p>
            </div>
          ))
        ) : (
          <p>No products available.</p>
        )}
      </div>
    </div>
  );
};

export default List;

















// -------------------------------------------------------------------3rd----------------------------------------------------


// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { backendUrl, currency } from '../App';
// import { toast } from 'react-toastify';

// const List = () => {
//   const [list, setList] = useState([]);

//   // Fetch the product list from the backend
//   const fetchList = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/product/list`);
//       if (response.data.success) {
//         setList(response.data.products);
//       } else {
//         toast.error(response.data.message || 'Failed to fetch product list.');
//       }
//     } catch (error) {
//       console.error('Error fetching product list:', error);
//       toast.error(error.message || 'An error occurred while fetching the product list.');
//     }
//   };

//   useEffect(() => {
//     fetchList();
//   }, []);

//   return (
//     <>
//       <p className="mb-2">All Product List</p>
//       <div className="flex flex-col gap-2">
//         {/* List Table Title */}
//         <div className="hidden md:grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center py-1 px-2 border bg-gray-100 text-sm">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b className="text-center">Action</b>
//         </div>

//         {/* Product List */}
//         {list.length > 0 ? (
//           list.map((item, index) => (
//             <div
//               className="grid grid-cols-[1fr_3fr_1fr] md:grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
//               key={index}
//             >
//               <img
//                 className="w-12 h-12 object-cover rounded"
//                 src={item.image?.[0] || 'https://via.placeholder.com/100'}
//                 alt={item.name || 'Product'}
//               />
//               <p>{item.name || 'No Name Available'}</p>
//               <p>{item.category || 'No Category'}</p>
//               <p>
//                 {currency} {item.price || '0.00'}
//               </p>
//               <p
//                 className="text-right md:text-center cursor-pointer text-lg text-red-500 hover:text-red-700"
//                 onClick={() => alert(`Delete action for ${item.name}`)} // Placeholder delete action
//               >
//                 X
//               </p>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">No products available.</p>
//         )}
//       </div>
//     </>
//   );
// };

// export default List;
