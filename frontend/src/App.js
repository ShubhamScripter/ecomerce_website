import './App.css';
import Navbar from './components/navbar/Navbar';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Loginsignup from './pages/Loginsignup';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Shop from './pages/Shop';
import Cart from './pages/Cart';


function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Shop/>} />
        <Route path='/mens' element={<ShopCategory category="mens" />}  />
        <Route path='/kids' element={<ShopCategory category="kids" />}  />
        <Route   path='/womens'   element={<ShopCategory category="womens" />}    />
        <Route path='/product' element={<Product/>}    />
      <Route path=':productId' element={<Product/>} />
      <Route path='/carts'  element={<Cart/>}/>
      <Route path='/login'  element={<Loginsignup/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
