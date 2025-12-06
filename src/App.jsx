import React from 'react'
import Navbar from './components/Navbar'
import TopBanner from './components/TopBanner'
import GridCard from './components/GridCard'
import Technology from './components/Technology'
import ProductsServices from './components/ProductsServices'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <TopBanner />
      <GridCard />
      <Technology />
      <ProductsServices />
      <Testimonials />
      <Footer />
    </div>
  )
}

export default App