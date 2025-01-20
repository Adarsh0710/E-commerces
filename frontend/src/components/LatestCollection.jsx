// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext'
// import Title from './Title';
// import ProductItem from './ProductItem';

// const LatestCollection = () => {


//     const { products } = useContext(ShopContext);
//     const [latestProducts,setLatestProducts]= useState();

//     useEffect(()=> {
//         setLatestProducts(products.slice(0,10));
       
//     },[])
   

//   return (
//     <div className='my-10'>
//          <div className='text-center py-8 text-3xl'>
//             <Title text1={'LATEST'} text2={'COLLECTION'} />
//             <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base  text-gray-600'>
//                 Lorem dolor sit, amet consectetur adipisicing elit. Ab eveniet quos praesentium magni ad similique quam facere suscipit distinctio consectetur. Repudiandae tenetur officiis, ut numquam hic quia magnam pariatur in.
//             </p>

//          </div>
//           {/* Render Products */}
// //             <div className='grid grid-cols-2 sm:grid-cols- md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
//                {
//                     latestProducts.map((item, index) => (
//                         <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
//                     ))
//                 }
//             </div>
    
//     </div>
//   )
// }

// export default LatestCollection


// // import React, { useContext } from 'react';

// // import { ShopContext } from '../context/ShopContext';

// // const LatestCollection = () => {
// //   const { products } = useContext(ShopContext);

// //   return (
// //     <div>
// //       {products && products.length > 0 ? (
// //         products.map((product) => (
// //           <div key={product.id}>
// //             <h2>{product.name}</h2>
// //             <p>{product.price}</p>
// //           </div>
// //         ))
// //       ) : (
// //         <p>No products available</p>
// //       )}
// //     </div>
// //   );
// // };

// // export default LatestCollection;


import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {
    const { products } = useContext(ShopContext);
    const [latestProducts, setLatestProducts] = useState([]);

    useEffect(() => {
        if (products) {
            setLatestProducts(products.slice(0, 30)); // Fixed the typo here
        }
    }, [products]); // Added products as a dependency

    return (
        <div className='my-10'>
            <div className='text-center py-8 text-3xl'>
                <Title text1={'LATEST'} text2={'COLLECTION'} />
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600'>
                    Lorem dolor sit, amet consectetur adipisicing elit. Ab eveniet quos praesentium magni ad similique quam facere suscipit distinctio consectetur. Repudiandae tenetur officiis, ut numquam hic quia magnam pariatur in.
                </p>
            </div>
            {/* Render Products */}
            <div className='grid grid-cols-2 sm:grid-cols- md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {
                    latestProducts.map((item, index) => (
                        <ProductItem key={item._id} id={item._id} image={item.image} name={item.name} price={item.price} />
                    ))
                }
            </div>
        </div>
    );
}

export default LatestCollection
