import axios from 'axios'
import React, { useState } from 'react'
import { backendUrl } from '../App'
import { toast } from 'react-toastify'

export const Login = ({setToken}) => {
  
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const onSubmitHandler =  async (e) => {
    try {
       e.preventDefault();
       const response = await axios.post(backendUrl + '/api/user/admin',{email,password})
       if (response.data.success) {
           setToken(response.data.token)
       }
       else{
        toast.error(response.data.message)
       }
       

    } catch (error) {
      console.log(error);
      toast.error(error.message)
    }
  }



  return (
    <div className='min-h-screen flex items-center justify-center w-full'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 max-w-md'>
            <h1 className='text-2xl font-bold mb-4'>Admin Panel</h1>
            <form onSubmit={onSubmitHandler}>
                <div className='mb-3 min-w-72'>
                    <p  className='text-sm font-medium text-gray-700 mb-2'>Email Address</p>
                    <input onChange={(e)=> setEmail(e.target.value)} value={email} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="email" placeholder='your@email.com' required />
                </div>
                <div className='mb-3 min-w-72'>
                    <p className='text-sm font-medium text-gray-700 mb-2' >Password</p>
                    <input onChange={(e)=> setPassword(e.target.value)} value={password} className='rounded-md w-full px-3 py-2 border border-gray-300 outline-none' type="password" placeholder='Enter your password' required />
                </div>
                <button  className='mt-2 w-full py-2 px-4 rounded-md text-white bg-blue-500' type='submit'> Login </button>
            </form>
        </div>
    </div>
  )
}



// import React, { useState } from 'react';

// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Handle login logic here
//     console.log('Email:', email, 'Password:', password);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100">
//       <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
//         <h1 className="text-2xl font-bold text-center text-gray-800">Admin Login</h1>
//         <form onSubmit={handleSubmit} className="mt-6">
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input
//               type="email"
//               placeholder="Enter your email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <div className="mb-4">
//             <label className="block text-sm font-medium text-gray-700">Password</label>
//             <input
//               type="password"
//               placeholder="Enter your password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
//               required
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             Login
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-center text-gray-600">
//           Forgot Password?{' '}
//           <a href="#" className="text-blue-500 hover:underline">
//             Click Here
//           </a>
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Login;
