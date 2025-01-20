// // import React, { useContext } from 'react'
// // import { ShopContext } from '../context/ShopContext'
// // import {Link} from 'react-router-dom'
// // import Placeorder from '../pages/Placeorder';

// // const ProductItem = ({id,image,name,price}) => {


// //     const {currency} = useContext(ShopContext);


// //   return (
// //     <Link className='text-gar'  to={`/product/${id}`} >
// //            <div className=' overflow-hidden'>
// //              <img className='hover:scale-110 transition ease-in-out ' src= { image[0]} alt="" />

// //            </div>

// //            <p className='pt-3 pb-1 text-sm'>{name}</p>
// //            <p className=' text-sm font-medium '>{currency} {price} </p>
// //     </Link>
// //   )
// // }

// // export default ProductItem

import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link } from 'react-router-dom';

const ProductItem = ({ id, image, name, price }) => {
    const { currency } = useContext(ShopContext);

    return (
        <Link className='text-gar' to={`/product/${id}`}>
            <div className='overflow-hidden'>
                <img
                    className='hover:scale-110 transition ease-in-out'
                    src={image[0]}
                    alt={name} // Use name for better accessibility
                />
            </div>
            <p className='pt-3 pb-1 text-sm'>{name}</p>
            <p className='text-sm font-medium'>{currency} {price}</p>
        </Link>
    );
}

export default ProductItem

// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {
//     const { currency } = useContext(ShopContext);

//     return (
//         <Link className='text-gar' to={`/product/${id}`}>
//             <div className='overflow-hidden'>
//                 <img
//                     className='hover:scale-110 transition ease-in-out'
//                     src={Array.isArray(image) ? image[0] : image} // Check if image is an array
//                     alt={name} // Use name for better accessibility
//                 />
//             </div>
//             <p className='pt-3 pb-1 text-sm'>{name}</p>
//             <p className='text-sm font-medium'>{currency} {price}</p>
//         </Link>
//     );
// }

// export default ProductItem;


// import React, { useContext } from 'react';
// import { ShopContext } from '../context/ShopContext';
// import { Link } from 'react-router-dom';

// const ProductItem = ({ id, image, name, price }) => {
//     const { currency } = useContext(ShopContext);

//     return (
//         <Link className='text-gar' to={`/product/${id}`}>
//             <div className='overflow-hidden'>
//                 <img
//                     className='hover:scale-110 transition ease-in-out'
//                     src={Array.isArray(image) ? image[0] : image} // Check if image is an array
//                     alt={name} // Improve accessibility
//                 />
//             </div>
//             <p className='pt-3 pb-1 text-sm'>{name}</p>
//             <p className='text-sm font-medium'>{currency} {price}</p>
//         </Link>
//     );
// }

// export default ProductItem;
