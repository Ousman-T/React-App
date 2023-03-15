import {useContext} from "react"
import { ProductContext } from "../App";

function ProductListItem(props){
    const {product} = props;
//    consuiming context
    const productContextValue = useContext(ProductContext)
    // console.log(productContextValue);

    const {cart, setCart} = productContextValue
    const handleAddToCart = () => {
        setCart([...cart, product])
    }
    return(
        <div key={product.id}>
                            <h6>{product.name}</h6>
                            <img src={product.image} width="200" alt={product.name}/>
                            <p>{product.description}</p>
                            <p>${product.price}</p>
                            <button onClick={handleAddToCart}>Add To Cart</button>
                        </div>
    )
}


export default ProductListItem;