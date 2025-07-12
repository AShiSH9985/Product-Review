import React from 'react'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Cars from './Cars'

function Home() {
  return (
<>

    <nav className="bg-[#80ba27] p-4 text-white h-16 w-full text-white flex items-center py-4 justify-between">
        <div className='flex items-center justify-between w-1/2'>
          <NavLink to='/' className='text-green-900 text-2xl'>Product_Review.com</NavLink>
          <input type="text" className='h-10 w-96 p-4 rounded-md text-black' placeholder='Search'/>
        </div>
       <div className='w-1/2 flex items-center justify-end'>
        <button className='bg-green-800 h-10 w-16 rounded-lg items-center m-2'>Sign in</button>
        <button className='m-4 bg-green-900 h-10 w-32 rounded-md'>Write a review</button>
       </div>
    </nav>

    <div className='h-64 w-full bg-[url(./images/image1.png)] bg-cover flex flex-col items-center justify-center'>
    <div className='bg-green-900 bg-opacity-50 h-full w-full flex flex-col items-center justify-center'>

        <h1 className='text-4xl text-white font-bold m-2'>Know better, choose better.</h1>
        <h1 className='text-white m-4'>Reviews by people like you</h1>
        <input type="text" className='h-12 w-3/5 m-2 p-4 rounded-md text-black'  placeholder='What are you looking for?'/>
    </div>
    </div>

    <div className='h-64 w-full border-b-2 flex flex-col items-center justify-center'>
        <h1 className='font-bold m-2 text-xl'>Your opinion matters</h1>
        <p className=' m-2 '>ProductReview.com.au is a community of consumers helping each other make better purchasing decisions.</p>
        <button className='bg-green-900 h-12 w-1/2 m-8 rounded-md text-white text-xl'>Write a review</button>
    </div>

    <div className='h-64 w-full border-b-2 flex flex-col items-center justify-center'>
      <h1 className='font-bold text-2xl'>The 2025 ProductReview.com.au Awards</h1>
      <h1 className=' m-4 '>Discover Australia's best products & services of the year.</h1>
      <button className='bg-[#80ba27] h-12 w-1/2 text-xl rounded-md' >See the winners</button>
    </div>

    
    <div className=' w-full border-b-2 flex flex-col items-center'>
      <h1 className='font-bold text-xl' >Popular Categories </h1>
      <h1 className='m-2'>Browse our most popular categories</h1>

    <div className="w-full m-8 grid grid-cols-4 grid-rows-1 justify-between ">
        <Link to="https://www.productreview.com.au/c/cars">
        <div className='h-40 w-[99%] bg-[url(./images/cars.png)] m-1 bg-cover flex flex-col items-center justify-center '>
            <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl'>Cars</h1>
            </div>
        </div>
        </Link>
        <Link to="https://www.productreview.com.au/c/coffee-machines">
          <div className='h-40  w-[99%] bg-[url(./images/coffee.jpeg)] m-1 bg-cover flex flex-col items-center justify-center'>
            <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
              <h1 className='text-white font-semibold text-2xl'>Coffee Machines</h1>
            </div>
        </div>
        </Link>
        
        <Link to="https://www.productreview.com.au/c/diets-weight-loss">
          <div className='h-40  w-[99%] bg-[url(./images/diet.jpeg)] m-1 bg-cover flex flex-col items-center justify-center'>
              <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl'>Diet & Weight Loss Products</h1>
              </div>
          </div>
        </Link>

        <Link to="https://www.productreview.com.au/c/home-builders">
          <div className='h-40  w-[99%] bg-[url(./images/home_builder.jpeg)] m-1 bg-cover flex flex-col items-center justify-center'>
              <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl'>Home Builders</h1>
              </div>
          </div>
        </Link>

        <Link to=" https://www.productreview.com.au/c/prams-strollers">
          <div className='h-40  w-[99%] bg-[url(./images/prams.jpeg)] m-1 bg-cover flex flex-col items-center justify-center'>
              <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl'>Prams & Strollers</h1>
              </div>
          </div>
        </Link>

        <Link to="https://www.productreview.com.au/c/tyres">
          <div className='h-40 w-[99%] bg-[url(./images/tyre.jpeg)] m-1 bg-cover flex flex-col items-center justify-center'>
              <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl'>Tyres</h1>
              </div>
          </div>
        </Link>

        <Link to="https://www.productreview.com.au/c/vacuum-cleaners">
          <div className='h-40  w-[99%] bg-[url(./images/vaccum_cleaner.jpeg)] m-1 bg-cover flex flex-col items-center justify-center'>
              <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl'>Vaccum CLeaners</h1>
              </div>
          </div>
        </Link>

        <Link to="https://www.productreview.com.au/c/washing-machines ">
          <div className='h-40  w-[99%] bg-[url(./images/washing_machine.jpeg)] m-1 bg-cover flex flex-col items-center justify-center'>
              <div className='bg-green-900 bg-opacity-75 h-full w-full flex flex-col items-center justify-center'>
                <h1 className='text-white font-semibold text-2xl'>Washing Machines</h1>
              </div>
          </div>
        </Link>
    </div>
    </div>

    <div className="bg-zinc-100  h-32 w-full flex flex-col items-center justify-center">
      <h1 className='text-black font-bold text-2xl'>Featured Reviews</h1>
      <h1>Browse some of our latest reviews</h1>
    </div>

    <footer>
          <div className="h-60 w-full p-4 border-b-2 flex flex-row justify-between">
            <div className='w-1/2 h-full pl-8'>
              <h1 className='text-green-400 font-semibold'>Get MORE INFO</h1>
                <ul>
                  <li className='text-s m-2'><Link to=""> About Us</Link></li>
                  <li className='text-s m-2'><Link to=""> Contact Us</Link></li>
                  <li className='text-s m-2'><Link to=""> Help Centre</Link></li>
                  <li className='text-s m-2'><Link to=""> Write a Revie</Link></li>
                </ul>
            </div>
            <div className='w-1/2 h-full'>
              <div>
                <h1 className='text-green-400 font-semibold'>FOR BUSINESS</h1>
                <ul>
                  <li className='text-s m-2'><Link to=""> Overview</Link></li>
                  <li className='text-s m-2'><Link to=""> Brand Management</Link></li>
                  <li className='text-s m-2'><Link to=""> Advertising</Link></li>
                  <li className='text-s m-2'><Link to=""> Ambassador Program</Link></li>
                </ul>
            </div>
            </div>
          </div>
          <div className="h-32 w-full p-4 border-b-2">
            <p>© 2025 Product_Review.com Pty. Ltd. All Rights Reserved. General disclaimer:
              All third party trademarks, images and copyrights on this page are used for the 
              purpose of comparative advertising, criticism or review. This is a public forum 
              presenting user opinions on selected products and businesses, and as such the 
              views expressed do not reflect the opinion of Product_Review.com.</p>
          </div>
      
    </footer>

    <Cars/>

</>
  )
}

export default Home