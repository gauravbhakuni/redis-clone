import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero'
import Header from './components/Header'
import Products from './components/Products'
import Stats from './components/Stats'
import CompaniesLogo from './components/CompaniesLogo'
import Story from './components/Story'
import Footer from './components/Footer'
import Underline from './components/Underline'
import PageNotFound from './components/PageNotFound'

const HomePage = () => (
  <>
    <Hero />
    <CompaniesLogo />
    <Products />
    <Underline />
    <Stats />
    <Underline />
    <Story />
  </>
)

const App = () => {
  return (
    <div className="bg-primary-background font-childlike">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App