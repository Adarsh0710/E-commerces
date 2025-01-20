import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetter from '../components/NewsLetter'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t'>
        <Title text1={'About'} text2={'Us'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-700'>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio qui ab, aspernatur eveniet fugit dolorem ad at beatae iste quis aliquam ratione maiores suscipit dignissimos illo ipsa impedit, natus deleniti.</p>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore accusamus veritatis eos modi et, consequuntur esse? Iusto eligendi, optio animi, quod, itaque nam ratione excepturi consequatur tempora aperiam vitae nihil.</p>

             <b className='text-gray-900'>Our Mission</b>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis non quam doloribus unde natus et ipsa repellat sapiente dignissimos culpa. Corrupti est odit iusto quibusdam tempora. Qui inventore nobis harum!</p>
        </div>

      </div>

      <div className=' text-xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'}/>

      </div>
      <div className=' flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Quality Assurance:</b>
          <p className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusamus facere iure porro sequi eveniet cumque fugit rerum quis deleniti. </p>
        </div>

        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Convenience:</b>
          <p className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusamus facere iure porro sequi eveniet cumque fugit rerum quis deleniti. </p>
        </div>

        <div className='border px-10 md-px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <b>Exceptional Customer Service</b>
          <p  className=' text-gray-700'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, accusamus facere iure porro sequi eveniet cumque fugit rerum quis deleniti. </p>
        </div>
      </div>
     <NewsLetter/>
      
    </div>
  )
}

export default About
