import React from 'react'
import Headings from '../../Shared/Headings'
import ProductCard from '../bestProduct/ProductCard'

import Img1 from '../../assets/product/p-1.jpg'
import Img2 from '../../assets/product/p-2.jpg'
import Img3 from '../../assets/product/p-3.jpg'
import Img4 from '../../assets/product/p-4.jpg'
import Img5 from '../../assets/product/p-5.jpg'
import Img6 from '../../assets/product/p-7.jpg'
import Img7 from '../../assets/product/p-9.jpg'

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Boat Headphone",
    price: "1200",
    aosDelay: "0"
  },
  {
    id: 2,
    img: Img2,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200"
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    price: "320",
    aosDelay: "400"
  },
  {
    id: 4,
    img: Img4,
    title: "Printed",
    price: "220",
    aosDelay: "600"
  },
  {
    id: 5,
    img: Img5,
    title: "Boat Headphone",
    price: "1200",
    aosDelay: "0"
  },
  {
    id: 6,
    img: Img6,
    title: "Rocky Mountain",
    price: "420",
    aosDelay: "200"
  },
  {
    id: 7,
    img: Img7,
    title: "Goggles",
    price: "320",
    aosDelay: "400"
  },
  {
    id: 8,
    img: Img1,
    title: "Printed",
    price: "220",
    aosDelay: "600"
  },
]

const bestProducts = () => {
  return (
    <div>
        {/* Header Section */}
        <Headings title= "Best Products" subtitle= "Our Best Products"/>
        {/* Body Section */}
        <ProductCard data = {ProductsData}/>
    </div>
  )
}

export default bestProducts