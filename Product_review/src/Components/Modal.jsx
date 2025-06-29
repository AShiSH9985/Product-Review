import React from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';

const Modal = () => {
  return ( 
    <div className='backdrop-blur-md w-90 bg-white bg-opacity-75'>
           <div className='flex flex-row justify-end align-items justify-between'>
                <input type="text" className='h-12 ml-4 mt-4 w-96 p-2 border-2'  placeholder='Search' />
                <X className='mt-4 mr-4'/>
           </div>
        <div className=' w-full h-16 mb-4 flex flex-col justify-center items-center border-b-2'>
            <h1 className=' text-gray-400'>Search for products, services, brands and categories</h1>
        </div>
        <div className='h-80 w-full flex flex-row items-center justify-center'>
            <div className='h-80 w-1/2 pl-4 pb-2 flex flex-col justify-between'>
                <h1 className=' '><Link to=''>Air Fryers</Link></h1>
                <h1 className=' '><Link to=''>Mattresses</Link></h1>
                <h1 className=' '><Link to=''>Travel Insurence</Link></h1>
                <h1 className=' '><Link to=''>Caravans</Link></h1>
                <h1 className=' '><Link to=''>Microwaves</Link></h1>
                <h1 className=' '><Link to=''>Battery Lawn Mowers</Link></h1>
                <h1 className=' '><Link to=''>Front Loading Washing Machines</Link></h1>
                <h1 className=' '><Link to=''>Health Insurance</Link></h1>
                <h1 className=' '><Link to=''>Car Insurance</Link></h1>
            </div>

            <div className='h-80 w-1/2 pl-4 pb-2 flex flex-col justify-between'>
                <h1 className=' '><Link to=''>Internet Service Providers</Link></h1>
                <h1 className=' '><Link to=''>Coffee Machines</Link></h1>
                <h1 className=' '><Link to=''>Electric Heaters</Link></h1>
                <h1 className=' '><Link to=''>Stick & Cordless Vacuum Cleaners</Link></h1>
                <h1 className=' '><Link to=''>BBQs</Link></h1>
                <h1 className=' '><Link to=''>Garment Steamers</Link></h1>
                <h1 className=' '><Link to=''>Portable Fridges/ Freezers</Link></h1>
                <h1 className=' '><Link to=''>Home Builders</Link></h1>
                <h1 className=' '><Link to=''>Clothes</Link></h1>
            </div>
        </div>
    </div>
  )
}

export default Modal   