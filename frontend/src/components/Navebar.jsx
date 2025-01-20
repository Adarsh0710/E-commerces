// import React, { useState } from 'react';
// import { assets } from '../assets/assets';
// import { Link, NavLink } from 'react-router-dom';

// const Navbar = () => {
//     const [visible,setVisible] = useState(false)
//   return (
//     // <div className='sticky top-0 z-100 bg-white shadow w-full'>
//     <div className='flex items-center justify-between py-5 font-medium'>
//      <Link to='/'> <img src={assets.logo} className='w-36' alt="Logo" /> </Link>
      
//       <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//         <NavLink to='/' className='flex flex-col items-center gap-1'>
//           <p>HOME</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
//         </NavLink>

//         <NavLink to='/collection' className='flex flex-col items-center gap-1'>
//           <p>COLLECTION</p>
//           <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
//         </NavLink>

//         <NavLink to='/about' className='flex flex-col items-center gap-1'>
//           <p>ABOUT</p>
//           <hr className='w-2/4 border-none h-[1.9px] bg-gray-700 hidden'/>
//         </NavLink> 

//         <NavLink to='/contact' className='flex flex-col items-center gap-1'>
//           <p>CONTACT</p>
//           <hr className='w-2/4 border-none h-[1.9px] bg-gray-700 hidden '/>
//         </NavLink>
//       </ul>  
//       <div className='flex items-cnter gap-6'>
//            <img src={assets.search_icon} className='w-5 cursor-pointer' alt="" />
            
//            <div className='group relative'>
//                <img  className="w-5 cursor-pointer"  src={assets.profile_icon}  alt="" />
//                <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                   <dir className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//                     <p className='cursor-pointer hover:text-black'>My Profile</p>
                  
//                     <p className='cursor-pointer hover:text-black'>Order</p>
                  
//                     <p className='cursor-pointer hover:text-black'>Logout</p>
                  

//                   </dir>
//                </div>

//            </div>
//            <Link to='/cart' className='relative'>
//            <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
//            <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-bblack text-white  aspect-square rounded-full text-[8px]'></p>
             
//            </Link>
//            <img onClick={()=> setVisible(true)}   src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
//       </div>


//      {/*sidebar menuu for small screen  */}
//      <div  className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
//          <div className='flex flex-col text-gray-600'>
//           <div onClick={()=>setVisible(false)} className='flex items-center gap-2 p-4'>
//              <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
//              <p>Back</p>
//             </div>
//             <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/'>HOME</NavLink>
//             <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/collectipn'>COLLECTION</NavLink>
//             <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/about'>ABOUT</NavLink>
//             <NavLink onClick={()=> setVisible(false)} className='py-2 pl-6 border' to='/contact'>CONTACT</NavLink>
           
//          </div>
//      </div>
//     </div>
//   //  {/* </div> */}
//   )
// }

// export default Navbar;



// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Link, NavLink } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {
    const [visible, setVisible] = useState(false);
    const {setShowSearch ,  getCartCount , navigate, token ,setToken, setCartItems } = useContext(ShopContext)

    const logout = () => {
        navigate('/login');
        localStorage.removeItem('token'); // Remove token from localStorage
        setToken(''); // Reset token in the context
        setCartItems({}); // Clear cart items
         // Redirect to the login page
    };

    const toggleSidebar = () => {
        setVisible(!visible);
    };

    return (
        <div className='sticky top-0 z-50 bg-white shadow w-full'>
            <div className='flex items-center justify-between py-5 font-medium'>
                <Link to='/'>
                    <img src={assets.logo} className='w-36' alt="Logo" />
                </Link>

                <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                    <NavLink 
                        to='/' 
                        className={({ isActive }) => 
                            `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                        }
                    >
                        <p>HOME</p>
                    </NavLink>
                    <NavLink 
                        to='/collection' 
                        className={({ isActive }) => 
                            `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                        }
                    >
                        <p>COLLECTION</p>
                    </NavLink>
                    <NavLink 
                        to='/about' 
                        className={({ isActive }) => 
                            `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                        }
                    >
                        <p>ABOUT</p>
                    </NavLink>
                    <NavLink 
                        to='/contact' 
                        className={({ isActive }) => 
                            `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                        }
                    >
                        <p>CONTACT</p>
                    </NavLink>
                </ul>

                <div className='flex items-center gap-6'>
                    <img onClick={()=>setShowSearch(true)} src={assets.search_icon} className='w-7 cursor-pointer' alt="Search" />
                    <div className='group relative'>
                    
                        <img onClick={()=> token ? null : navigate('/login')} className="w-5 cursor-pointer" src={assets.profile_icon} alt="Profile" />
                      {/*   Dropdown Menu   */}

                      { token &&  
                       <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
                            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
                                <p className='cursor-pointer hover:text-black'>My Profile</p>
                                <p onClick={()=> navigate('/orders')} className='cursor-pointer hover:text-black'>Order</p>
                                <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
                            </div>
                        </div>}
                    </div>
                    <Link to='/cart' className='relative'>
                        <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
                        <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                    </Link>
                    <img onClick={toggleSidebar} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="Menu" />
                </div>
            </div>

            {/* Full-width Navbar for small screens */}
            <div className={`flex flex-col bg-white w-full sm:hidden transition-all duration-300 ${visible ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
                <NavLink 
                    onClick={toggleSidebar} 
                    className={({ isActive }) => 
                        `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                    } 
                    to='/'
                >
                    HOME
                </NavLink>
                <NavLink 
                    onClick={toggleSidebar} 
                    className={({ isActive }) => 
                        `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                    } 
                    to='/collection'
                >
                    COLLECTION
                </NavLink>
                <NavLink 
                    onClick={toggleSidebar} 
                    className={({ isActive }) => 
                        `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                    } 
                    to='/about'
                >
                    ABOUT
                </NavLink>
                <NavLink 
                    onClick={toggleSidebar} 
                    className={({ isActive }) => 
                        `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
                    } 
                    to='/contact'
                >
                    CONTACT
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
































































// import React, { useContext, useState } from 'react';
// import { Link, NavLink, useNavigate } from 'react-router-dom';
// import { ShopContext } from '../context/ShopContext';
// import { assets } from '../assets/assets';

// const Navbar = () => {
//     const [visible, setVisible] = useState(false);
//     const { setShowSearch, getCartCount, token, setToken, setCartItems } = useContext(ShopContext);
//     const navigate = useNavigate();

//     const logout = () => {
//         localStorage.removeItem('token'); // Remove token from localStorage
//         setToken(''); // Reset token in the context
//         setCartItems({}); // Clear cart items
//         navigate('/login'); // Redirect to the login page
//     };

//     const toggleSidebar = () => {
//         setVisible(!visible);
//     };

//     return (
//         <div className='sticky top-0 z-50 bg-white shadow w-full'>
//             <div className='flex items-center justify-between py-5 font-medium'>
//                 {/* Logo */}
//                 <Link to='/'>
//                     <img src={assets.logo} className='w-36' alt="Logo" />
//                 </Link>

//                 {/* Navigation Links (Desktop) */}
//                 <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
//                     <NavLink 
//                         to='/' 
//                         className={({ isActive }) => 
//                             `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                         }
//                     >
//                         <p>HOME</p>
//                     </NavLink>
//                     <NavLink 
//                         to='/collection' 
//                         className={({ isActive }) => 
//                             `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                         }
//                     >
//                         <p>COLLECTION</p>
//                     </NavLink>
//                     <NavLink 
//                         to='/about' 
//                         className={({ isActive }) => 
//                             `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                         }
//                     >
//                         <p>ABOUT</p>
//                     </NavLink>
//                     <NavLink 
//                         to='/contact' 
//                         className={({ isActive }) => 
//                             `flex flex-col items-center gap-1 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                         }
//                     >
//                         <p>CONTACT</p>
//                     </NavLink>
//                 </ul>

//                 {/* User Actions */}
//                 <div className='flex items-center gap-6'>
//                     {/* Search Icon */}
//                     <img
//                         onClick={() => setShowSearch(true)}
//                         src={assets.search_icon}
//                         className='w-7 cursor-pointer'
//                         alt="Search"
//                     />

//                     {/* Profile / Logout Dropdown */}
//                     <div className='group relative'>
//                         {token ? (
//                             <>
//                                 <img
//                                     className='w-5 cursor-pointer'
//                                     src={assets.profile_icon}
//                                     alt="Profile"
//                                 />
//                                 <div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4'>
//                                     <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
//                                         <p className='cursor-pointer hover:text-black'>My Profile</p>
//                                         <p className='cursor-pointer hover:text-black'>Order</p>
//                                         <p onClick={logout} className='cursor-pointer hover:text-black'>
//                                             Logout
//                                         </p>
//                                     </div>
//                                 </div>
//                             </>
//                         ) : (
//                             <Link to='/login'>
//                                 <img
//                                     className='w-5 cursor-pointer'
//                                     src={assets.profile_icon}
//                                     alt="Login"
//                                 />
//                             </Link>
//                         )}
//                     </div>

//                     {/* Cart */}
//                     <Link to='/cart' className='relative'>
//                         <img src={assets.cart_icon} className='w-5 min-w-5' alt="Cart" />
//                         <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>
//                             {getCartCount()}
//                         </p>
//                     </Link>

//                     {/* Mobile Menu Icon */}
//                     <img
//                         onClick={toggleSidebar}
//                         src={assets.menu_icon}
//                         className='w-5 cursor-pointer sm:hidden'
//                         alt="Menu"
//                     />
//                 </div>
//             </div>

//             {/* Mobile Navigation Menu */}
//             <div
//                 className={`flex flex-col bg-white w-full sm:hidden transition-all duration-300 ${
//                     visible ? 'max-h-screen' : 'max-h-0 overflow-hidden'
//                 }`}
//             >
//                 <NavLink 
//                     onClick={toggleSidebar} 
//                     className={({ isActive }) => 
//                         `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                     } 
//                     to='/'
//                 >
//                     HOME
//                 </NavLink>
//                 <NavLink 
//                     onClick={toggleSidebar} 
//                     className={({ isActive }) => 
//                         `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                     } 
//                     to='/collection'
//                 >
//                     COLLECTION
//                 </NavLink>
//                 <NavLink 
//                     onClick={toggleSidebar} 
//                     className={({ isActive }) => 
//                         `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                     } 
//                     to='/about'
//                 >
//                     ABOUT
//                 </NavLink>
//                 <NavLink 
//                     onClick={toggleSidebar} 
//                     className={({ isActive }) => 
//                         `py-2 pl-6 border-b border-gray-300 ${isActive ? 'border-b-2 border-black text-black' : ''}`
//                     } 
//                     to='/contact'
//                 >
//                     CONTACT
//                 </NavLink>
//             </div>
//         </div>
//     );
// };

// export default Navbar;




















































