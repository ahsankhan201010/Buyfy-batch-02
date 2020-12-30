import React, {useEffect} from "react";
import { connect } from 'react-redux';
import { fetchCategoryProducts, clearProducts } from './../../Redux/product/productActions';
import ProductCard from './../../Components/ProductCard/ProductCard';


const CategoryProducts = ({
  match: {
    params: { category },
  },
  fetchCategoryProducts,
  products,
  clearProducts
}) => {
    useEffect(() => {
        //CDM
        fetchCategoryProducts(category)
        return () => {
          clearProducts()
        }
    },[])
    console.log(products)
  return (
    <div>
      <h1> {category} Products page</h1>
      {products.map(product => <ProductCard key={product.title} {...product} />)}
    </div>
  );
};

var actions = {
    fetchCategoryProducts,
    clearProducts
}

var mapState = (state) => ({
    products: state.products
})

export default connect(mapState,actions)(CategoryProducts)
