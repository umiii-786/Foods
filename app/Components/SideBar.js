import React from 'react'
import cartlogo from "../../public/cartlogo.png"
import dele from "../../public/delete.png"
import Image from 'next/image'
import Link from 'next/link'
const SideBar = (props) => {
  return (
    <>
      <div className='fixed bottom-3 right-7 bg-white w-[60px] h-[60px] rounded-full flex justify-center items-center cursor-pointer checkcart shadow-gray-500 shadow-2xl'
        style={props.orderitem.length > 0 ? { animationName: "bouncer" } : { animationName: "umair" }}>
        <Image
          src={cartlogo}
          width={30}
          height={30}
          alt="Picture of the author"
          className='relative bottom-0'

          onClick={props.showsidebar}
        />
      </div>
  


      <div className='xsm:w-[300px]   max-w-[250px] h-[100vh] bg-white fixed top-0 transition-all z-30' style={props.sidebar}>
        <div className='cross_h1 w-[90%] mx-3   my-2 flex justify-between'><h1 className='font-bold text-xl font-serif max-w-[100px]'>My Order</h1>
          <button className='font-bold border-black border-2 px-2 py-0 rounded-lg' onClick={props.hidesidebar}>X</button></div>
        {props.orderitem.length > 0 ? props.orderitem.map((item) => {
          return <>
     <div className='w-[90%] flex h-[80px] items-center rounded-lg mx-auto bg-white shadow-slate-400 shadow-md my-2' key={item[0].id}>
              <img src={item[0].img} className='xsm:w-[50px] xsm:h-[50px] w-[40px] h-[40px]  mx-2' />
              <div className='flex flex-col'>
                <div className='flex justify-between items-center'><h1 className='font-bold text-md xsm:w-[150px]  my-1'>{item[0].name}</h1>
                  <Image src={dele}
                    alt='delete'
                    width={20}
                    height={20} className="cursor-pointer" onClick={() => {
                      props.removeitem(item[0].id)
                    }} />

                </div>
                <div className='flex justify-between w-[90%] m-auto'>
                  <span className=' text-green-500 font-bold'>&#x20AC;{item[0].price}</span>

                </div>
              </div>
            </div>

          </>

        }) : ""}
        <div className='absolute bottom-1 w-full'>
          <hr />
          <span className='font-bold xsm:mx-4 mx-2  text-lg my-1'>items :</span><span className=' text-green-500 font-bold text-lg my-1'>{props.orderitem.length}</span>
          <div className='xsm:mx-4 mx-2 flex my-1 max-w-[250px]'><h1 className='font-bold xsm:text-lg text-base'>Total Amount :</h1><span className=' text-green-500 font-bold xsm:text-lg xsm:mx-2 text-base'>&#x20AC;  {props.itemprice.price}</span></div>
          <button className='font-bold w-[90%] mx-4 my-1 rounded-md py-2 bg-green-500 text-white'>
          {props.orderitem.length>0?<Link href="/Ordered" >Checkout</Link>:<Link href="/">Checkout</Link>}</button>
        
        </div>
      </div>

    </>
  )
}

export default SideBar
