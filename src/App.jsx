import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BedRoomProducts from './pages/BedRoomProducts'
import HomePage from './pages/HomePage';
import SingleProductPage from './pages/SingleProductPage';
import ShopingBag from './pages/ShopingBag';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/BedRoomProductsPage' element={<BedRoomProducts/>}/>
          <Route path='/SingleProductPage' element={<SingleProductPage/>}/>
          <Route path='/ShopingBag' element={<ShopingBag/>}/>

        </Routes>
      </Router>
     
    </div>
  )
}

export default App