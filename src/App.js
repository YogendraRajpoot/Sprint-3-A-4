import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './component/Home';
import { Product } from './component/Product';
import { Navbar } from './component/Navbar';
import { ProductDetails } from './component/ProductDetails';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/products' element={<Product/>}/>
        <Route path='/products/:userid' element={<ProductDetails/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
