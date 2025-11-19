

import {Routes, Route} from 'react-router';
import './App.css'
import { HomePage } from './pages/home_page/HomePage';
import { LoginPage} from './pages/login_page/LoginPage'
import { ProductPage } from './pages/product_page/ProductPage';
import { RegisterPage } from './pages/register_page/RegisterPage';
import { ForgetPasswordPage } from './pages/forget_password_page/ForgetPasswordPage';
import { StorePage } from './pages/store_page/StorePage';
import { CartPage } from './pages/cart_page/CartPage';
import { ProfilePage } from './pages/profile_page/ProfilePage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/product' element={<ProductPage />} />
 
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
      <Route path='/forget-password' element={<ForgetPasswordPage />} />
      <Route path='/estore' element={<StorePage />} />
      <Route path='/cart' element={<CartPage />} />
       <Route path='/profile' element={<ProfilePage />} />


    </Routes>
      
    </>
  )
}

export default App
