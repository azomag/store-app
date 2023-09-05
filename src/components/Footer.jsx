import React from 'react';
import { FaFacebook,FaInstagram,FaTwitter,FaGithub } from 'react-icons/fa';
const Footer = () => {
  return (
    <div>
      <div className='bg-gray-800 w-full h-[30vh]'>
      
      <div className='flex justify-center items-center p-5 pt-20 '>
<FaInstagram size={25}className='mr-6 text-gray-300  hover:text-orange-500 cursor-pointer duration-300'/>
<FaFacebook size={25}className='mr-6 text-gray-300  hover:text-orange-500 cursor-pointer duration-300'/>
<FaTwitter size={25}className='mr-6 text-gray-300  hover:text-orange-500 cursor-pointer duration-300'/>
<FaGithub size={25} className=' text-gray-300 hover:text-orange-500 cursor-pointer duration-300'/>
    </div>
    
  
    <p className='text-gray-400 text-[13px] text-center pt-4'>Dev.Magi : @Azomag mohamed</p>
      </div>
    </div>
  );
}

export default Footer;
