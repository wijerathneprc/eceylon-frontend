

import {Routes, Route} from 'react-router';
import './App.css'
import { HomePage } from './pages/home_page/HomePage';
import { LoginPage} from './pages/login_page/LoginPage'
import { ProductPage } from './pages/ProductPage';
import { RegisterPage } from './pages/RegisterPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/product' element={<ProductPage />} />
 
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />
    </Routes>
      
    </>
  )
}

export default App
