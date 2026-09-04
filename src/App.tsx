import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Cart from './cart'
import Navbar from './Navbar'
import Header from './Header'
import Benefits from './Benefits'
import BrowseCategories from './BrowseCategories'
import Products from './ Products'
import { Delivery } from './Delivery'
import Subscribe from './Subscribe'

export const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-orange-50">

        <Navbar />

        <Routes>

          <Route
            path="/"
            element={
              <>
                <Header />
                <Benefits />
                <BrowseCategories />
                <Products />
                <Delivery />
                <Subscribe />
              </>
            }
          />

          <Route
            path="/cart"
            element={<Cart />}
          />

        </Routes>

      </div>
    </BrowserRouter>
  )
}