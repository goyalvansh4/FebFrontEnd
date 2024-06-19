import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import Home from './components/Home/Home'
import Footer from './components/Footer'
import About from './components/About/About';
import {Outlet} from 'react-router-dom'

function App() {
  

  return (
    <>
      <Header />
      {/* <Home />
      <About/> */}
      <Outlet />
      <Footer />
    </>
  )
}

export default App
