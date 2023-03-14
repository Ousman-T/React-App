import { useState } from "react";
import { nikeData } from './Data/nikeData';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

function App() {
  const [data, setData] = useState(nikeData)
  const [cart, setCart] = useState([]);
  return (
    <div className="">
      <Header shoppingCart={cart}/>
      <ProductList products={data} addToCart={setCart} cart={cart}/>
      <Footer />

    </div>
  );
}

export default App;
