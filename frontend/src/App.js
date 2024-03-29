import Navbar from './Components/Navbar';
import { BrowserRouter ,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Cart from './Pages/Cart';
import LoginSingUp from './Pages/LoginSingUp';
import Footer from './Components/Footer';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div  className='overflow-hidden '>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Shop/>} />
          <Route path="/mens" element={<ShopCategory banner={men_banner} category="men" />} /> 
          <Route path="/womens" element={<ShopCategory banner={women_banner} category="women" />} /> 
          <Route path="/kids" element={<ShopCategory banner={kid_banner} category="kid" />} /> 
          <Route path="/product" element={<Product/>} />
            <Route path="/product/:productId" element={<Product/>} />
          <Route path="/cart" element={<Cart/>} />
          <Route path="/login" element={<LoginSingUp/>} />
        </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
