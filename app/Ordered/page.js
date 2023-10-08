"use client"
import React, { useState } from 'react'

const page = () => {
  const [display,setdisplay]=useState({
    display:"block"
  })
  const [heading,setheading]=useState({
    display:"none"
  })

 setTimeout(()=>{
setdisplay({
  display:"none"
})
setheading({
  display:"block"
})
console.log("hello");
 },2000)
  return (
    <div className='w-full h-[100vh] flex flex-col justify-center items-center relative overflow-hidden'>
     
     <h1 className='my-0 font-bold text-3xl text-center' style={heading}>Order Successfull!</h1>
     <h2 className='my-0 text-md text-center' style={heading}>your order has been successfully placed</h2>
      <div class="box" id="box1" style={display}></div>

      <div class="box" id="box2" style={display}> </div>

      <div class="box" id="box3" style={display}></div>

      <div class="box " id="box4" style={display}> </div>

      <div class="box" id="box5" style={display}></div>

      <div class="box " id="box6" style={display}> </div>
      </div>
    
   
  )
}

export default page
