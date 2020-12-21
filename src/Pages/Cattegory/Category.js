import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import { fetchProducts } from './../../Redux/product/productActions';
import { categorizeProducts } from './../../utility/products';

const Category = ({fetchProducts, categories}) => {
    console.log(categories)
    useEffect(() => {
        //CDM
        fetchProducts()
    },[])
    return (
        <div>
            <h1>Category page</h1>
        </div>
    )
}

var actions = {
    fetchProducts
}

var mapState = (state) => ({
    categories: categorizeProducts(state.products)
})

export default connect(mapState,actions)(Category)
