import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingUp from './Pages/LoginSingUp';

function App() {
  return (
    <div  className='overflow-hidden'>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory category="mens" />} /> 
          <Route path="/womens" element={<ShopCategory category="womens" />} /> 
          <Route path="/kids" element={<ShopCategory category="kids" />} /> 
          <Route path="/product" element={<Product/>} />
          <Route path=":productId" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSingUp/>} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
