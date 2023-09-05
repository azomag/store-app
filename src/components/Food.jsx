import React, { useState } from 'react';
import { data } from '../components/data/data.js';

const Food = () => {

  const [foods, setFoods] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterType = (category) => {
    setFoods(
      data.filter((item) => {
        return item.category === category;
      })
    );
  };

  //   Filter by price
  const filterPrice = (price) => {
    setFoods(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className='max-w-[1640px] m-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center uppercase'>
        Menu Items
      </h1>

      {/* Filter Row */}
      <div className='flex flex-col lg:flex-row justify-between'>
        {/* Fliter Type */}
        <div>
          <p className='font-bold text-gray-700'>Filter Type</p>
          <div className='flex justfiy-between flex-wrap'>
            <button
              onClick={() => setFoods(data)}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300'
            >
              All
            </button>
            <button
              onClick={() => filterType('burger')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              Burgers
            </button>
            <button
              onClick={() => filterType('pizza')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              Pizza
            </button>
            <button
              onClick={() => filterType('salad')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              Salads
            </button>
            <button
              onClick={() => filterType('chicken')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              Chicken
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className='font-bold text-gray-700'>Filter Price</p>
          <div className='flex justify-between max-w-[390px] w-full'>
            <button
              onClick={() => filterPrice('30DH')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              30DH
            </button>
            <button
              onClick={() => filterPrice('40DH')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              40DH
            </button>
            <button
              onClick={() => filterPrice('50DH')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              50DH
            </button>
            <button
              onClick={() => filterPrice('70DH')}
              className='m-1 border-none bg-orange-400 shadow-lg text-white font-[500]  hover:bg-gray-100 hover:shadow-xl hover:text-black duration-300 '
            >
              70DH
            </button>
          </div>
        </div>
      </div>

      {/* Display foods */}
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
        {foods.map((item, index) => (
          <div
            key={index}
            className='border-none shadow-lg rounded-xl hover:scale-105 duration-300'
          >
            <img
              src={item.image}
              alt={item.name}
              className='w-full h-[200px] object-cover rounded-t-lg'
            />
            <div className='flex justify-between px-2 py-6'>
              <p className='font-[500] text-orange-600 mx-3'>{item.name}</p>
              <p>
                <span className='font-[600] shadow-xl bg-gray-100 px-4  text-black p-1 rounded-full'>
                  {item.price}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Food;