import React, { useContext, useEffect, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Eye, EyeOff } from 'lucide-react';

const Login = () => {
  const [currentState, setCurrentState] = useState('Login');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [showPassword, setShowPassword] = useState(false); // New state for eye toggle

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(backendUrl + '/api/user/register', { name, email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(backendUrl + '/api/user/login', { email, password });
        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.message);
    }
  };

  const handleForgotPassword = async () => {
    try {
      const response = await axios.post(backendUrl + '/api/user/forgot-password', { email });
      if (response.data.success) {
        toast.success('Password reset link sent to your email.');
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error('Failed to send reset link. Please try again.');
    }
  };

  useEffect(() => {
    if (token) {
      navigate('/');
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800'>
      <div className='inline-flex items-center gap-2 mb-2 mt-10'>
        <p className='prata-regular text-3xl'>{currentState}</p>
        <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
      </div>
      {currentState === 'Login' ? '' : <input onChange={(e) => setName(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
      <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
      
      <div className='relative w-full'>
        <input
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type={showPassword ? 'text' : 'password'}
          className='w-full px-3 py-2 border border-gray-800 pr-10'
          placeholder='Password'
          required
        />
        <span
          onClick={togglePasswordVisibility}
          className='absolute top-1/2 right-3 transform -translate-y-1/2 cursor-pointer text-gray-500'
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </span>
      </div>

      <div className='w-full flex justify-between text-sm mt-[-8px]'>
        <p className='cursor-pointer' onClick={handleForgotPassword}>Forgot your password?</p>
        {currentState === 'Login' ? (
          <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer'>Create account</p>
        ) : (
          <p onClick={() => setCurrentState('Login')} className='cursor-pointer'>Login Here</p>
        )}
      </div>

      <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign In' : 'Sign Up'}</button>
    </form>
  );
}

export default Login;



























// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/ShopContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';

// const Login = () => {

//   const [currentstate, setCurrentState] = useState('Login');
//   const { token, setToken, navigate, backendUrl } = useContext(ShopContext)
//   const [name, setname] = useState('')
//   const [password, setPassword] = useState('')
//   const [email, setEmail] = useState('')

//   const onSubnithandler = async (event) => {
//     event.preventDefault();
//     try {
//       if (currentstate === 'Sign Up') {


//         const response = await axios.post(backendUrl + '/api/user/register', { name, email, password })
//         if (response.data.success) {

//           setToken(response.data.token)
//           localStorage.setItem('token', response.data.token)
//         } else {
//           toast.error(response.data.message)
//         }


//       }
//       else {

//         const respones = await axios.post(backendUrl + '/api/user/login', { email, password })
//         if (respones.data.success) {

//           setToken(respones.data.token)
//           localStorage.setItem('token', respones.data.token)
//         }
//         else {
//           toast.error(respones.data.message)
//         }



//       }



//     } catch (error) {
//       console.log(error);
//       toast.error(error.message)
//     }
//   }
  
//   useEffect(()=>{

//     if (token) {
//       navigate('/')
//     }

//   },[token])


//   return (
//     <form onSubmit={onSubnithandler} className='flex flex-col items-centerw-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800 '>
//       <div className='inline-flex items-center gap-2 mb-2 mt-10'>
//         <p className='libre-baskerville-bold text-3xl'>{currentstate}</p>
//         <hr className='border-none h-[1.5px] w-8 bg-gray-800' />

//       </div>
//       {currentstate === 'Login' ? '' : <input onChange={(e) => setname(e.target.value)} value={name} type="text" className='w-full px-3 py-2 border border-gray-800' placeholder='Name' required />}
//       <input onChange={(e) => setEmail(e.target.value)} value={email} type="email" className='w-full px-3 py-2 border border-gray-800' placeholder='Email' required />
//       <input onChange={(e) => setPassword(e.target.value)} value={password} type="password" className='w-full px-3 py-2 border border-gray-800' placeholder='Password' required />
//       <div className='w-full flex justify-between text-sm mt-[-8px]'>
//         <p className='cursor-pointer'>Forgot your password</p>
//         {
//           currentstate === 'Login'
//             ? <p onClick={() => setCurrentState('Sign Up')} className=' cursor-pointer'>Create account</p>
//             : <p onClick={() => setCurrentState('Login')} className=' cursor-pointer'>Login Here </p>
//         }

//       </div>
//       <button className='bg-black text-white font-light px-8 py-2 mt-4'>{currentstate === 'Login' ? 'Sign In' : 'Sign Up'}</button>
//     </form>
//   )
// }

// export default Login
