import React from 'react'
import Hero from '../Components/Hero'
import Category from '../Components/Category'
import Services from '../Components/Services'
import Banner from '../Components/Banner'
import headphone from '../assets/hero/headphone.png'

const BannerData = {
  discount: "30% OFF",
  title: "Fine Smile",
  date: "2021-12-31",
  image: headphone,
  title2: "Air Solo Bass",
  title3: "Winter Sale",
  title4: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptate.",
  bgColor: "#f42c37"
}

const Home = () => {
  return (
    <div>
      <Hero />
      <Category />
      <Services />
      <Banner data = {BannerData}/>
    </div>
  )
}

export default Home