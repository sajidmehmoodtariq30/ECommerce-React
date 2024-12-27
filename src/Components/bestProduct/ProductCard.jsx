import React from 'react'
import Button from '../../Shared/Button'

const ProductCard = ({ data }) => {
  return (
    <div>
      <div className='grid md:grid-cols-1 grid=cols-2 sm:grid-cols-4 gap-5 place-items-center'>
        {data.map((data) => (
          <div className='group' key={data.id}>
            <div className='relative'>
              <img src={data.img}
                alt="product"
                className="h-[180px] w-[260px] object-cover rounded-md"
              />
              {/* hover button */}
              <div className='opacity-0 group-hover:opacity-100 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-full text-center group-hover:backdrop-blur-sm justify-center items-center duration-200'>
                <Button
                  text={"Add to Cart"}
                  bgColor={"bg-primary"}
                  textColor={"text-white"}
                />
              </div>
            </div>
            <div className='leading-7'>
              <h2 className="font-semibold">{data.title}</h2>
              <h2 className="font-bold">Rs. {data.price}</h2>
            </div>
          </div>
        ))}

      </div>
    </div>
  )
}

export default ProductCard