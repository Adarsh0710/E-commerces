import React from 'react'
import { Route, Routes , useLocation} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Cart from './pages/Cart'
import Collention from './pages/Collection'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Orders from './pages/Orders'
import Product from './pages/Product'
import Placeorder from './pages/Placeorder'
import Navebar from './components/Navebar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




const App = () => {
  // return (
  //   <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vm]'>
  //     <ToastContainer />
  //      <Navebar/>
  //      <SearchBar />
  //      <Routes>
  //       <Route path='/' element={<Home/>}/>
  //       <Route path='/about' element={<About/>}/>
  //       <Route path='/contact' element={<Contact/>}/>
  //       <Route path='/collection' element={<Collention/>}/>
  //       <Route path='/product/:productId' element={<Product/>}/>
  //       <Route path='/cart' element ={<Cart/> }/>
  //       {/* <Route path='/login' element={<Login/>}/> */}
  //       <Route path='/orders' element={<Orders/>}/>
  //       <Route path='/placeorder' element={<Placeorder/>}/>
  //       {/* <Route path='/footer' element={<Footer/>} /> */}
  //      </Routes>
  //      <Footer/>


  //      <Routes>
  //      <Route path='/login' element={<Login/>}/>
  //      </Routes>
      

  const location = useLocation();

  // Pages where the footer should not appear
  const hideFooterPages = ['/login'];

  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer />
      <Navebar />
      <SearchBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/collection' element={<Collention/>}/>
        <Route path='/product/:productId' element={<Product />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/placeorder' element={<Placeorder/>}/>
        <Route path='/login' element={<Login/>}/>
      </Routes>

      {/* Conditionally render Footer */}
      {!hideFooterPages.includes(location.pathname) && <Footer />}
    </div>
  )
}

export default App
