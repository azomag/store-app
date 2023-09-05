import React from 'react';
import foods1 from '../components/assets/foods1.jpg'
import plate from '../components/assets/plate.jpg'
import foods2 from '../components/assets/foods2.jpg'
import pasta from '../components/assets/pasta.jpg'
const Smallcarts = () => {
  return (
    <div className='max-w-[1640px] mx-auto p-4 py-12 grid md:grid-cols-2 gap-6'>
      <div className='rounded-xl relative'>
<div className='absolute w-full h-full  bg-black/50 rounded-xl text-white '>
  <p className='text-2xl px-4 pt-4 font-bold'>Beef <span className='text-orange-500'>Burger</span> </p>
  <p className=' text-[20px] px-5 py-3 font-[500]'>60 DH</p>
  <button className='border-none bg-white text-black mx-4 absolute hover:text-white hover:bg-orange-500 hover:scale-105 ease-out duration-300'>Order Now</button>
</div>
<img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl ' src={foods1} alt="/" />
      </div>

      <div className='rounded-xl relative'>
<div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
  <p className='text-2xl px-4 pt-4 font-bold'>Shaurma <span className='text-orange-500'>Sandwich</span> </p>
  <p className=' text-[20px] px-5 py-3 font-[500]'>80 DH</p>
  <button className='border-none bg-white text-black mx-4 absolute hover:text-white hover:bg-orange-500 hover:scale-105 ease-out duration-300'>Order Now</button>
</div>
<img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl ' src={foods2} alt="/" />
      </div>
      

      <div className='rounded-xl relative'>
<div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
  <p className='text-2xl px-4 pt-4 font-bold'>Chicken <span className='text-orange-500'>French Fries</span> </p>
  <p className=' text-[20px] px-5 py-3 font-[500]'>50 DH</p>
  <button className='border-none bg-white text-black mx-4 absolute hover:text-white hover:bg-orange-500 hover:scale-105 ease-out duration-300'>Order Now</button>
</div>
<img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl ' src={plate} alt="/" />
      </div>

      <div className='rounded-xl relative'>
<div className='absolute w-full h-full bg-black/50 rounded-xl text-white '>
  <p className='text-2xl px-4 pt-4 font-bold'>Pasta <span className='text-orange-500'>Bolognese</span> </p>
  <p className=' text-[20px] px-5 py-3 font-[500]'>40 DH</p>
  <button className='border-none bg-white text-black mx-4 absolute hover:text-white hover:bg-orange-500 hover:scale-105 ease-out duration-300'>Order Now</button>
</div>
<img className='max-h-[160px] w-full md:max-h-[200px] object-cover rounded-xl ' src={pasta} alt="/" />
      </div>
    </div>
  );
}

export default Smallcarts;
