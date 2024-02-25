import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Loginsignup from './pages/Loginsignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Footer from './components/Footer/Footer';
import men_banner from './components/Assests/banner_mens.png'
import women_banner from './components/Assests/banner_women.png'
import kid_banner from './components/Assests/banner_kids.png'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men" />}  />
        <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid" />}  />
        <Route   path='/womens'   element={<ShopCategory banner={women_banner} category="women" />}    />
        <Route path='/product/:productId' element={<Product/>} />
      <Route path=':productId' element={<Product/>} />
      <Route path='/cart'  element={<Cart/>}/>
      <Route path='/login'  element={<Loginsignup/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
