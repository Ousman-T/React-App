import ProductListItem from './ProductListItem';
function ProductList(props) {
    const { products, addToCart, cart } = props
    return products.map(product => <ProductListItem 
        product={product} 
        key={product.id} 
        addToCart={addToCart} 
        cart={cart}/>)
}

export default ProductList;