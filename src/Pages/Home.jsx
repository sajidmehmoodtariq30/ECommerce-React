import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Services from '../Components/Services'
import Banner from '../Components/Banner'
import BestProducts from '../Components/bestProduct/BestProducts'

import headphone from '../assets/hero/headphone.png'

import { BannerData } from '../../Api/Data'

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Services />
      <Banner data = {BannerData}/>
      <BestProducts />
    </div>
  )
}

export default Home