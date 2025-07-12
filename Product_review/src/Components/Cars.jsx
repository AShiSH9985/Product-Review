import React from 'react'
import cretaImg from '../images/Cars/creta.jpeg';
import DefenderImg from '../images/Cars/defender.jpeg';
import XUVImg from '../images/Cars/xuv.jpeg';
import ScorpioImg from '../images/Cars/scorpio.jpeg';
import TharImg from '../images/Cars/thar.jpeg';
import NexonImg from '../images/Cars/nexon.jpeg';
import PunchImg from '../images/Cars/punch.jpeg';
import BrezzaImg from '../images/Cars/brezza.jpeg';
import FortunerImg from '../images/Cars/fortuner.jpeg';

const Cars = () => {
  return (
        <>
        <div className='w-full h-full bg-gray-900 grid grid-cols-3  gap-6 p-4 flex flex-col items-center pl-4 pr-4'>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={DefenderImg} alt="Defender" className='rounded-md h-64 w-full'/>
                    <h1 className='text-black text-xl m-2'>Defender</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={XUVImg} alt="XUV" className='rounded-md h-64 w-full'/>
                <h1 className='text-black text-xl m-2'>Mahindra XUV 3XO</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
              <img src={cretaImg} alt="Creta" className='rounded-md h-64 w-full'/>
                <h1 className='text-black text-xl m-2'>Hyundai Creta</h1>
                  <div>
                   <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={ScorpioImg} alt="Scorpio" className='rounded-md h-64 w-full'/>
                <h1 className='text-black text-xl m-2'>Mahindra Scorpio</h1>
                  <div>
                   <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={TharImg} alt="Thar"  className='rounded-md h-64 w-full'/>
                <h1 className='text-black text-xl m-2'>Mahindra Thar 4x4</h1>
                  <div>
                   <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={NexonImg} alt="Nexon" className='rounded-md h-64 w-full' />
                <h1 className='text-black text-xl m-2'>Tata Nexon</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={PunchImg} alt="Punch" className='rounded-md h-64 w-full'/>
                <h1 className='text-black text-xl m-2'>Tata Punch</h1>
                  <div>
                   <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={BrezzaImg} alt="Brezza" className='rounded-md h-64 w-full'/>
               <h1 className='text-black text-xl m-2'>Maruti Brezza</h1>
                  <div>
                   <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>
            <div className="h-96 w-auto p-2 bg-white border-2 rounded-md flex flex-col items-center ">
               <img src={FortunerImg} alt="Fortuner" className='rounded-md h-64 w-full'/>
                <h1 className='text-black text-xl m-2'>Toyota Fortuner</h1>
                  <div>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Add Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Delete Review</button>
                    <button className='h-8 w-32 bg-blue-600 text-white rounded-md border-2 pl-2 pr-2 m-1'>Show Review</button>
                  </div>
            </div>


        </div>
    </>
  )
}

export default Cars