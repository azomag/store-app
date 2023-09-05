import  React, {useState} from 'react';
import {GrMenu ,GrSearch,GrClose} from 'react-icons/gr'
import {MdShoppingCart,MdFavorite,MdWallet,MdHelp} from 'react-icons/md'
import {BsTruck,BsFillArrowDownSquareFill} from 'react-icons/bs'
import {FaUserFriends} from 'react-icons/fa'
import {GiTicket} from 'react-icons/gi'
const Navbar = () => {
  const [nav , setNav] = useState(false)
  return (
    <div className='max-w-[1640px] mx-auto flex justify-between py-3 px-4'>
      <div className='flex items-center'>
      <div onClick={()=> setNav(!nav)} className='cursor-pointer'>
        <GrMenu size={20} />
      </div>
   <h1 className='text-2xl sm:text-3xl lg:text-3xl px-5 font-bold'>Magi.<span className='text-orange-500 font-bold'>Foods</span></h1>
   
      </div>
      <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px] sm:w-[400px] lg:[500px]'>
        <GrSearch  size={20}/>
    <input type="text" className='bg-transparent p-2 w-full focus:outline-none ' placeholder='Search Food'/>
      </div>
      <button className='shadow-gray-500 shadow-lg border-none   text-black rounded-full hidden md:flex items-center py-2 hover:bg-orange-400 hover:text-white duration-300 '>
      <MdShoppingCart size={20} className='mr-2 '/>Cards 
    </button>
      {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 top-0 left-0'></div>: ''}
    

    <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-500': 'fixed top-0 left-[-100%] w-[300px] h-screen bg-white z-10 duration-500' }>
    <GrClose onClick={()=> setNav(!nav)} size={20} className='top-4 right-4 absolute cursor-pointer'/>
    <h1 className='text-2xl sm:text-2xl lg:text-3xl px-5 py-5 font-bold'>Magi.<span className='text-orange-500 font-bold'>Food</span></h1>
    <nav>
      <ul className='flex flex-col p-4 text-black'>
        <li className='flex text-xl  py-4 hover:text-gray-400 cursor-pointer'><BsTruck size={25} className='mr-4'/>Orders</li>    
        <li className='flex text-xl  py-4 hover:text-gray-400 cursor-pointer'><MdFavorite size={25} className='mr-4'/>Favorites</li>
        <li className='flex text-xl  py-4 hover:text-gray-400 cursor-pointer'><MdWallet size={25} className='mr-4'/>Wallet</li>
        <li className='flex text-xl  py-4 hover:text-gray-400 cursor-pointer'><MdHelp size={25} className='mr-4'/>Help</li>
        <li className='flex text-xl  py-4 hover:text-gray-400 cursor-pointer'><GiTicket size={25} className='mr-4'/>Promotions</li>
        <li className='flex text-xl  py-4 hover:text-gray-400 cursor-pointer'><BsFillArrowDownSquareFill size={25} className='mr-4'/>Best One</li>
        <li className='flex text-xl  py-4 hover:text-gray-400 cursor-pointer'><FaUserFriends size={25} className='mr-4'/>Invite Friends</li>

      </ul>
    </nav>
    </div>
    
    </div>
  );
}

export default Navbar;
