import React from 'react'
import Home from '../pages/Home'
import Tarif from '../pages/Tarif'
import Contact from '../pages/Contact'
import { BrowserRouter } from 'react-router'

const App = () => {
  return (
    <BrowserRouter>
    <Home/>
    <Tarif/>
    <Contact/>
    </BrowserRouter>
  )
}

export default App