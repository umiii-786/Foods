import React from 'react'

const Items = (props) => {
  return (
  <>
     
        <div className='lg:w-[90%] md:w-[90%]  w-[94%] md:my-6   md:mx-auto md:block mx-2 flex flex-col items-center' >
       <div className='grid  lg:grid-cols-3 md:grid-cols-2'>
        {props.fooddata.map((elemet) => {
          return (
            <>
         
              <div className='lg:max-w-[300px] lg:min-h-[370px] md:max-w-[340px] md:min-h-[380px] lg:mx-0    max-w-[400px] xsm:min-h-[440px] min-h-[400px] inline-flex flex-col items-center bg-white my-5 rounded-md shadow-md shadow-gray-400' key={elemet.id}>
                <img src={elemet.img} className='lg:w-[200px] lg:h-[120px] md:w-[220px] md:h-[130px] xsm:w-[250px] xsm:h-[170px] 
                 my-3 lg:hover:w-[205px] mx:3 lg:hover:h-[125px] md:hover:h-[135px] md:hover:w-[225px] transition-all xxsm:w-[200px] xxsm:h-[120px]' />
                <div className='w-[90%]  relative my-4'><h1 className='font-bold lg:text-lg max-w-[170px] md:text-xl xsm:text-2xl xxsm:text-xl'>{elemet.name}</h1>
                  <span className='absolute right-2 top-0 text-green-500 font-bold text-lg md:text-xl  xsm:text-2xl xxsm:text-xl'>	&#x20AC;{elemet.price}</span></div>
                <div className='w-[90%] md:text-lg text-xl' >{elemet.desc.slice(0, 60)}....</div>
                <div className='w-[90%] flex justify-between my-3'><div className='flex justify-center items-center'><img src={elemet.star} className='w-[25px] h-[20px]' /> <h1 className='font-bold lg:text-lg md:text-xl xsm:text-2xl '>{elemet.rating}</h1></div>
                  <button className='px-3 py-1 bg-green-500 text-white font-bold rounded-lg xsm:py-2 xsm:px-4' onClick={() => {
                    props.itemsadd(elemet.id)
                  }}>Add to Cart</button>
                </div>
              </div>
             
            </>
          )
        })}
      </div>
      </div>

 
      </>
  )
}

export default Items
