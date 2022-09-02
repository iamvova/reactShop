import React from 'react'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Newletter from '../components/Newletter'
import Products from '../components/Products'
import Slider from '../components/Slider'

const Home = () => {
  return (
    <div>
        <Slider />
        <Categories />
        <Products />
        <Newletter />
        <Footer />
    </div>
  )
}

export default Home
