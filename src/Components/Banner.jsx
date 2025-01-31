import React from 'react'

const Banner = ({data}) => {
  return (
    <div className='min-h-[550px] flex justify-center items-center py-12'>
        <div className='mx-auto'>
            <div  style={{backgroundColor: data.bgColor}} className='grid grid-cols-3 gap-6 items-center text-white rounded-3xl justify-center'>
                {/* first col */}
                <div
                data-aos = 'zoom-out' 
                data-aos-duration = '500'
                data-aos-once = 'true'
                className='p-6 sm:p-8 '>
                    <p className='text-sm'>{data.discount}</p>
                    <h1 className='upppercase text-4xl lg:text-7xl font-bold'>
                        {" "}
                        {data.title}
                        </h1>
                    <p className='text-sm'>{data.date}</p>
                </div>
                {/* second col */}
                <div 
                data-aos = 'fade-up' 
                data-aos-duration = '1000'
                data-aos-once = 'true'
                className='h-full flex items-center justify-center p-6 sm:p-8 '>
                    <img src={data.image} alt="headphone" className='scale-125 w-[250px] md:w-[340px] mx-auto drop-shadow-2xl object-cover ' 
                    />
                </div>
                {/* third col */}
                <div 
                data-aos = 'zoom-out' 
                data-aos-duration = '500'
                data-aos-once = 'true'
                className='flex flex-col justify-centergap-4 px-6 sm:x-8'>
                    <p className='font-bold text-xl'>{data.title2}</p>
                    <p className='text-3xl sm:text-5xl font-bold'>{data.title3}</p>
                    <p className='text-sm tracking-wide leading-5'>{data.title4}</p>
                    <div>
                        <button className='bg-white text-primary py-2 px-4 rounded-full mt-4'>Shop Now</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Banner