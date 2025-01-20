// // // import React, { useContext, useEffect, useState } from 'react'
// // // import { useParams } from 'react-router-dom'
// // // import { ShopContext } from '../context/ShopContext';

// // // const Product = () => {

// // //   const {productId} = useParams();
// // //   const {products} = useContext(ShopContext);
// // //   const [productData,setProductData] =useState(false);
// // //   const [image,setImage] =useState('')

// // //   const fetchProductData = async ()=> {
    
// // //      products.map((item)=>{
// // //       if (item._id === productId) {
// // //         setProductData(item)
// // //         setImage(item.image[0])
// // //         return null;
// // //       }
// // //      })
// // //   }

// // //   useEffect(()=>{
// // //     fetchProductData();
// // //   },[productId, products])


// // //   return productData ?  (
// // //     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
// // //       {/* Product data  */}
// // //       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
// // //         {/* Product Image  */}
// // //         <div className='flex-l flex-col-reverse gap-3 sm:flex-row'>
// // //           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
// // //             {
// // //               productData.image.map((item,index)=>(
// // //                 <img onClick={()=>setImage(item)} src={item} key={index} className='w-[24%] sm:mb-3 flex-shrink-0 cursor-pointer' alt="" />
// // //               ))
// // //             }

// // //           </div>

// // //           <div className='w-full sm:w-[80%]'>
// // //             <img className='w-full h-auto' src={image} alt="" />

// // //           </div>

// // //         </div>
// // //       </div>
      
// // //     </div>
// // //   ) : <div className='opacity-0'></div>
// // // }

// // // export default Product




// ............AbortController......................................................................................




// // import React, { useContext, useEffect, useState } from 'react';
// // import { useParams } from 'react-router-dom';
// // import { ShopContext } from '../context/ShopContext';
// // import { assets } from '../assets/assets';
// // import Placeorder from './Placeorder';
// // import RelatedProducts from '../components/RelatedProducts';

// // const Product = () => {
// //   const { productId } = useParams();
// //   const { products, currency , addTocart } = useContext(ShopContext);
// //   const [productData, setProductData] = useState(null);
// //   const [image, setImage] = useState('');
// //   const [size, setSize] =useState('')

// //   const fetchProductData = () => {
// //     products.forEach((item) => {
// //       if (item._id === productId) {
// //         setProductData(item);
// //         setImage(item.image[0]);
// //         return null;
// //       }
// //     })
// //   }

// //   useEffect(() => {
// //     fetchProductData();
// //   }, [productId, products]);

// //   return productData ? (
// //     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
// //       {/* Product data */}
// //       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
// //         {/* Thumbnail Images */}
// //         <div className='flex-l flex flex-col-reverse gap-3 sm:flex-row'>
// //         <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
// //           {productData.image.map((item, index) => (
// //             <img
// //               onClick={() => setImage(item)}
// //               src={item}
// //               key={index}
// //               className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
// //               alt=""
// //             />
// //           ))}
// //         </div>

// //         {/* Main Product Image and Name */}
// //        <div className='w-full sm:w-[80%]'>

// //         <img className='w-full h-auto' src={image} alt="" />

// //        </div>

// //       </div>
// //       {/*------------------------------------------------ product info ---------------------------- */}
// //       <div className='flex-l'>
// //         <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
// //         <div className='flex items-center gap-l mt-2'>
// //           <img src={assets.star_icon} alt="" className="w-3 5" />
// //           <img src={assets.star_icon} alt="" className="w-3 5" />
// //           <img src={assets.star_icon} alt="" className="w-3 5" />
// //           <img src={assets.star_icon} alt="" className="w-3 5" />
// //           <img src={assets.star_dull_icon} alt="" className="w-3 5" />
// //           <p className='pl-2'>(122)</p>

// //         </div>
// //         <p className='mt-5 text-3xl font-medium'> {currency}{productData.price} </p>
// //         <p className='mt-5 text-gray-700 w-4/5'>{productData.description} </p>

// //         <div className='flex flex-col gap-4 my-8'>
// //           <p>Select Size</p>
// //           <div className='flex gap-2'>
// //             {
// //               productData.sizes.map((item, index)=>(
// //                 <button onClick={(()=>setSize(item))} className={`border py-2 px-4 bg-gray-200 ${item === size ? 'border-orange-500' : ' '}`} key = {index}>{item}</button>
// //               ))
// //             }

// //           </div>

// //         </div>
// //           <button onClick={()=>addTocart(productData._id,size)} className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'>ADD TO CART</button>
// //           <button></button>
// //           <hr  className='mt-8 sm:w-4/5'/>
// //           <div className='text-sm text-gary-500 mt-5 flex flex-col gap-l'>
// //             <p>100% Origina product.</p>
// //             <p>Cash on delivery is available on this product.</p>
// //             <p>easy return and exchange policy within 7 days.</p>

// //           </div>
// //       </div>

// //       </div>

// //       {/* ----------------------------------------Description and reviwe ------------------------------------ */}
// //       <div className='mt-20'>
// //         <div className='flex'>
// //           <b className='border px-5 py-3 text-sm'>Description</b>
// //           <p className='border px-5 py-3 text-sm'>Reviwes (122) </p>

// //         </div>
// //         <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
// //           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, consequatur? Minus assumenda corporis vero, animi sunt expedita id perferendis aliquid sit, quasi maxime</p>
// //            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam perspiciatis distinctio recusandae excepturi atque quasi numquam similique omnis molestias, fugiat ratione quis dolor suscipit quos quo dicta cupiditate soluta.</p>
// //         </div>

// //       </div>

// //       {/*-------------------- Display related products ----------------------------- */}
// //       <RelatedProducts category={productData.category} subCategory={productData.subCategory} />

// //     </div>
// //   ) : (
// //     <div className='opacity-0'></div>
// //   );
// // }

// // export default Product;











import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Placeorder from './Placeorder';
import RelatedProducts from '../components/RelatedProducts';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState('');
  const [size, setSize] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  const fetchProductData = () => {
    products.forEach((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    });
  };

  useEffect(() => {
    fetchProductData();
  }, [productId, products]);

  const handleAddToCart = () => {
    if (!size) {
      alert('Please select a size');
      return;
    }
    
    addToCart(productData._id, size);
    setShowNotification(true);
    
    // Hide notification after 2 seconds
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  return productData ? (
    <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 relative'>
      {/* Notification */}
      {showNotification && (
        <div className="fixed top-4 right-4 z-50 bg-green-100 border border-green-500 rounded-lg p-4 shadow-lg animate-fade-in">
          <div className="flex items-center gap-2">
            <svg 
              className="w-5 h-5 text-green-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-green-700">Added to cart! Go to cart</span>
          </div>
        </div>
      )}

      {/* Product data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Thumbnail Images */}
        <div className='flex-l flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {productData.image.map((item, index) => (
              <img
                onClick={() => setImage(item)}
                src={item}
                key={index}
                className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
                alt=""
              />
            ))}
          </div>

          {/* Main Product Image and Name */}
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>

        {/* Product info */}
        <div className='flex-l'>
          <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
          <div className='flex items-center gap-l mt-2'>
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_icon} alt="" className="w-3 5" />
            <img src={assets.star_dull_icon} alt="" className="w-3 5" />
            <p className='pl-2'>(122)</p>
          </div>

          <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
          <p className='mt-5 text-gray-700 w-4/5'>{productData.description}</p>

          <div className='flex flex-col gap-4 my-8'>
            <p>Select Size</p>
            <div className='flex gap-2'>
              {productData.sizes.map((item, index) => (
                <button
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-200 ${
                    item === size ? 'border-orange-500' : ''
                  }`}
                  key={index}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
          >
            ADD TO CART
          </button>

          <hr className='mt-8 sm:w-4/5' />
          <div className='text-sm text-gary-500 mt-5 flex flex-col gap-l'>
            <p>100% Original product.</p>
            <p>Cash on delivery is available on this product.</p>
            <p>Easy return and exchange policy within 7 days.</p>
          </div>
        </div>
      </div>

      {/* Description and reviews */}
      <div className='mt-20'>
        <div className='flex'>
          <b className='border px-5 py-3 text-sm'>Description</b>
          <p className='border px-5 py-3 text-sm'>Reviews (122)</p>
        </div>
        <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis,
            consequatur? Minus assumenda corporis vero, animi sunt expedita id
            perferendis aliquid sit, quasi maxime
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima aliquam
            perspiciatis distinctio recusandae excepturi atque quasi numquam
            similique omnis molestias, fugiat ratione quis dolor suscipit quos quo
            dicta cupiditate soluta.
          </p>
        </div>
      </div>

      {/* Related products */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  ) : (
    <div className='opacity-0'></div>
  );
};


export default Product;













// .........................................................Product.............................................................
// import React, { useContext, useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';
// import RelatedProducts from '../components/RelatedProducts';

// const Product = () => {
//   const { productId } = useParams();
//   const { products, currency, addTocart } = useContext(ShopContext);
//   const [productData, setProductData] = useState(null);
//   const [image, setImage] = useState('');
//   const [size, setSize] = useState('');
//   const [buttonLabel, setButtonLabel] = useState('ADD TO CART');
//   const [showNotification, setShowNotification] = useState(false);

//   const fetchProductData = () => {
//     products.forEach((item) => {
//       if (item._id === productId) {
//         setProductData(item);
//         setImage(item.image[0]);
//         return null;
//       }
//     });
//   };

//   useEffect(() => {
//     fetchProductData();
//   }, [productId, products]);

//   const handleAddToCart = () => {
//     if (!size) {
//       alert('Please select a size');
//       return;
//     }

//     addTocart(productData._id, size);
//     setButtonLabel('GO TO CART');
//     setShowNotification(true);

//     // Hide notification after 2 seconds
//     setTimeout(() => {
//       setShowNotification(false);
//     }, 2000);
//   };

//   return productData ? (
//     <div className='border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100 relative'>
//       {/* Notification */}
//       {showNotification && (
//         <div className="fixed bottom-4 right-4 z-50 bg-green-100 border border-green-500 rounded-lg p-4 shadow-lg">
//           <div className="flex items-center gap-2">
//             <svg
//               className="w-5 h-5 text-green-500"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M5 13l4 4L19 7"
//               />
//             </svg>
//             <span className="text-green-700">Item added! <a href="/cart" className="underline">Go to Cart</a></span>
//           </div>
//         </div>
//       )}

//       {/* Product data */}
//       <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
//         {/* Thumbnail Images */}
//         <div className='flex-l flex flex-col-reverse gap-3 sm:flex-row'>
//           <div className='flex sm:flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
//             {productData.image.map((item, index) => (
//               <img
//                 onClick={() => setImage(item)}
//                 src={item}
//                 key={index}
//                 className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0 cursor-pointer'
//                 alt=""
//               />
//             ))}
//           </div>

//           {/* Main Product Image */}
//           <div className='w-full sm:w-[80%]'>
//             <img className='w-full h-auto' src={image} alt="" />
//           </div>
//         </div>

//         {/* Product info */}
//         <div className='flex-l'>
//           <h1 className='font-medium text-2xl mt-2'>{productData.name}</h1>
//           <div className='flex items-center gap-l mt-2'>
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_icon} alt="" className="w-3 5" />
//             <img src={assets.star_dull_icon} alt="" className="w-3 5" />
//             <p className='pl-2'>(122)</p>
//           </div>

//           <p className='mt-5 text-3xl font-medium'>{currency}{productData.price}</p>
//           <p className='mt-5 text-gray-700 w-4/5'>{productData.description}</p>

//           <div className='flex flex-col gap-4 my-8'>
//             <p>Select Size</p>
//             <div className='flex gap-2'>
//               {productData.sizes.map((item, index) => (
//                 <button
//                   onClick={() => setSize(item)}
//                   className={`border py-2 px-4 bg-gray-200 ${
//                     item === size ? 'border-orange-500' : ''
//                   }`}
//                   key={index}
//                 >
//                   {item}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <button
//             onClick={handleAddToCart}
//             className='bg-black text-white px-8 py-3 text-sm active:bg-gray-700'
//           >
//             {buttonLabel}
//           </button>

//           <hr className='mt-8 sm:w-4/5' />
//           <div className='text-sm text-gary-500 mt-5 flex flex-col gap-l'>
//             <p>100% Original product.</p>
//             <p>Cash on delivery is available on this product.</p>
//             <p>Easy return and exchange policy within 7 days.</p>
//           </div>
//         </div>
//       </div>

//       {/* Related products */}
//       <RelatedProducts
//         category={productData.category}
//         subCategory={productData.subCategory}
//       />
//     </div>
//   ) : (
//     <div className='opacity-0'></div>
//   );
// };

// export default Product;



