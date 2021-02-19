import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import { Link } from 'react-router-dom';
import "./CategoryListItem.css"

const CategoryListItem = ({category,products}) => {
  
    return (
        <div className="category-list-item">
            <h1 className="cateogry-text"><Link to={`/category-products/${category}`}>{category}</Link></h1>
            {products.map((product) => <ProductCard key={product.title} {...product} /> )}
            {/* <Link to={`/category-products/${category}`}><button>View More</button></Link> <br/>
            --------------------------------------------------------------- */}
        </div>
    )
}

export default CategoryListItem
