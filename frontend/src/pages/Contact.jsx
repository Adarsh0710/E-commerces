import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsLetter'

const Contact = () => {
  return (
    <div>
      <div className=' text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px]' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className=' font-semibold text-xl text-gray-600'>Our Store</p>
          <p className=' text-gray-500'>502319 Hyderabad, Telangana <br /> flat-no. 23456, Patanchreu,SriRam Colony </p> 
          <p className=' text-gray-500'><br /> Email : trunkandtusk09@gmail.com</p>
          <p className='font-semibold text-2xl text-gray-800'>Careers at trunkandtusk </p>
          <p className='text-gray-600'>Learn more about our team</p>
          <button className='border border-blue-600 px-8 py-4 text-sm hover:bg-blue-300 hover: text-whi transition-all duration-500 '>Learn More</button>

        </div>

      </div>
      <NewsletterBox />
    </div>
  )
}

export default Contact
