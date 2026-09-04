import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Benefits from './Benefits'
import BrowseCategories from './BrowseCategories'
import Products from './ Products'
import { Delivery } from './Delivery'
import Subscribe from './Subscribe'

export const App = () => {
  return (
    <div className="bg-orange-50">
    
    <Navbar/>
    <Header/>
    <Benefits/>
    <BrowseCategories/>
    <Products/>
    <Delivery/>
    <Subscribe/>
    </div>
  )
}
