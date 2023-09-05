import React from 'react';
import { categories } from './data/data.js';

const Categories = () => {
  return (
    <div className='max-w-[1640px] px-4 py-12'>
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6' >

{categories.map((item, index) => (
<div key= {index} className='bg-gray-100 rounded-lg shadow-gray-700 shadow-lg p-4 flex flex-col items-center hover:bg-orange-500 duration-500 hover:scale-105 ease-in-out'>
  <h2 className='text-[20px] font-[500] text-black'>{item.name}</h2>
  <img  src={item.image} alt={item.name} className='w-[100px]'/>
  </div>


))}
      </div>
    
    </div>
  );
}

export default Categories;
