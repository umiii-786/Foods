
"use client"
import React, { useState } from 'react'



const Header = (props) => {
  const [burgur_Items,set_burgur_items]=useState({
    top:"-380px"
  })
  const hamburgur=()=>{
    if(burgur_Items.top.includes("-380px")){
      set_burgur_items({
        top:"0px"
      })
    }

    else{
      console.log("hello from else")
      set_burgur_items({
        top:"-380px"
      }) 
    }
  }
  return (
    <>
    <div className='hamburgur w-12 h-12 border-black absolute top:0 right-12 cursor-pointer md:hidden z-20 ml-4 mt-2' onClick={hamburgur}  id="burgur">
         <div className='line w-12 h-[6px] bg-black my-[7px]'>

         </div>
         <div className='line w-12 h-[6px] bg-black my-[7px]'>
          
         </div>
         <div className='line w-12 h-[6px] bg-black my-[7px]'>
          
         </div>
    </div>
  <div className='flex md:flex-col flex-col-reverse md:static absolute w-full transition-all md:bg-gray-100  bg-green-500 z-10 ' style={burgur_Items}>
    <div className='flex md:w-full md:flex-row md:h-[70px] md:my-3 md:justify-between md:static flex-col '>
    <div className='date_and_heading md:mx-14 md:static absolute top-0'>
      <h1 className='mx-4  md:text-xl text-2xl my-1 md:text-green-500 font-extrabold text-white'>21,oct,Sunday</h1>
      <h1 className='mx-4  md:text-xl text-2xl font-bold my-1'>FLavoro Foods</h1>
    </div>

    <input type='text' placeholder='search here' value={props.searchval} onChange={props.search} className='md:w-[200px] max-w-[250px] mx-4 h-[44px] py-2 px-2 md:mx-16 rounded-md border border-gray-500 mb-3'/>

  </div>

  <div className='foods w-[100%] md:my-[40px] mt-6 relative'>
    <h1 className='font-bold md:text-2xl md:static text-3xl md:mx-16 md:block hidden' >Find the Best Food</h1>
    <div className='md:my-5 mt-12 mb-2 flex md:flex-row flex-col md:mx-16 mx-4 '>
      <button className='px-2 my-2 py-1 md:text-black font-bold bg-black text-white md:bg-gray-300 rounded-md md:mr-3 hover:bg-green-500 hover:text-white md:my-0  md:w-[85px] max-w-[250px]
' onClick={props.all}>ALL</button>
      <button className='px-2 my-2 py-1 md:text-black font-bold bg-black text-white md:bg-gray-300 rounded-md md:mx-3 hover:bg-green-500 hover:text-white md:my-0  md:w-[85px] max-w-[250px]' onClick={props.response}>Lunch</button>
      <button className='px-2 my-2 py-1 md:text-black font-bold bg-black text-white md:bg-gray-300 rounded-md md:mx-3 hover:bg-green-500 hover:text-white md:my-0 md:w-[85px] max-w-[250px]' onClick={props.response}>Breakfast</button>
      <button className='px-2 my-2 py-1 md:text-black font-bold bg-black text-white md:bg-gray-300 rounded-md md:mx-3 hover:bg-green-500 hover:text-white md:my-0 md:w-[85px] max-w-[250px]' onClick={props.response}>Dinner</button>
      <button className='px-2 my-2 py-1 md:text-black font-bold bg-black text-white md:bg-gray-300 rounded-md md:mx-3 hover:bg-green-500 hover:text-white md:my-0 md:w-[85px] max-w-[250px]' onClick={props.response}>Snacks</button>
    </div>
  </div>
  </div>
  <h1 className='w-[90%] text-center text-3xl font-bold mx-2 inline-block mt-[150px] md:hidden'>Find the Best Food</h1>
  </>
  )
}

export default Header
