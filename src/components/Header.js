import { useContext } from "react"; 
import { ProductContext } from "../App";

function Header(){
    const productContextValue = useContext(ProductContext)
    console.log(productContextValue);
    const {cart} = productContextValue;
    return(
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart:{cart.length > 0 ? cart.length: 'Empty'}</p>
        </header>
    )
}

export default Header;