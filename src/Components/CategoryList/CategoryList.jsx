import React, {useEffect} from 'react'
import CategoryListItem from './../CategoryListItem/CategoryListItem';
import { connect } from 'react-redux';
import { categorizeProducts } from './../../utility/products';
import { fetchProducts } from './../../Redux/product/productActions';
import "./CategoryList.css"



const CategoryList = ({fetchProducts, categories}) => {
    console.log(categories)
    useEffect(() => {
        //CDM
        fetchProducts()
    },[])
    return (
        <div className="category-list">
            {/* <h1>category list</h1> */}
            {categories.map((category) =>  <CategoryListItem key={category.category} {...category} />)}
        </div>
    )
}

var actions = {
    fetchProducts
}

var mapState = (state) => ({
    categories: categorizeProducts(state.products)
})

export default connect(mapState,actions)(CategoryList)

