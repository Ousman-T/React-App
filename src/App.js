import { useState, createContext } from "react";
import { nikeData } from './Data/nikeData';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';

// step 1. Creating the context
export const ProductContext = createContext(null);
function App() {
  const [data, setData] = useState(nikeData)
  const [cart, setCart] = useState([]);
  return (
    // step 2. Wrapping the components within the context provider/ passing values
    <ProductContext.Provider value={{data, cart, setCart}}>  
    <div className="">
      <Header />
      <ProductList />
      <Footer />

    </div>
    </ProductContext.Provider>
  );
}

export default App;
