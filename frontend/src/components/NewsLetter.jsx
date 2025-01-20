import React from 'react'

const NewsLetter = () => {

    const onSubmitHandler = (event) =>{
        event.preventDefault();
    }

  return (
    <div className=' text-center'>
         <p className='text-2xl font-medium text-gray-900'>Subscribe now & get 20% off</p>
         <p className='text-gray-100 mt-3'>
            {/* add somting after woards in this  */}
         </p>
         <form onSubmit={onSubmitHandler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
            <input className='w-full sm:flex-1 outline-none 2' type="email" placeholder='Enter your email' required />
            <button type='submit' className='bg-black text-white text-xs px-10 py-4'>SUBSCRIBE </button>
         </form>


    </div>
  )
}

export default NewsLetter