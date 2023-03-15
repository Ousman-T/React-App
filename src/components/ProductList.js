import ProductListItem from './ProductListItem';
// context
import { ProductContext } from '../App';
import { useContext } from "react";


function ProductList() {
    // consume data from context
    const productContextValue = useContext(ProductContext);
    console.log(productContextValue.data);
    return productContextValue.data.map(product => <ProductListItem
        product={product}
        key={product.id}
    />)
}

export default ProductList;