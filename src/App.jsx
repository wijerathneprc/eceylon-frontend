

import {Routes, Route} from 'react-router';
import './App.css'
import { HomePage } from './pages/home_page/HomePage';
import { LoginPage} from './pages/login_page/LoginPage'
import { ProductPage } from './pages/ProductPage';

function App() {

  return (
    <>
    <Routes>
      <Route path='/product' element={<ProductPage />} />
 
      <Route path='/' element={<HomePage />} />
      <Route path='/login' element={<LoginPage />} />
    </Routes>
      
    </>
  )
}

export default App
