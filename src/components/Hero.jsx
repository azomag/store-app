import React from 'react';
import burger from '../components/assets/burger.jpg'
const Hero = () => {
  return (
    <div className='max-w-[1640px] p-3 mx-auto'>
      <div className='  relative flex justify-center items-center '>
        <div className='absolute w-full h-full flex justify-center items-center bg-black/40 rounded-3xl'>
          <h1 className='text-[70px] text-center font-[500]  text-white lg:text-[150px] animate-pulse '>Best <span className='font-[800]  text-orange-500'>Foods</span></h1>
        </div>
      <img className='w-full max-h-[500px] object-cover rounded-3xl' src={burger} alt="/"  />
      </div>
    </div>
  );
}

export default Hero;
