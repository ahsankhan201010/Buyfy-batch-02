import React, {useEffect} from 'react'
import CategoryList from './../../Components/CategoryList/CategoryList';
import { connect } from 'react-redux';
import { clearProducts } from './../../Redux/product/productActions';

const Category = ({clearProducts}) => {
    useEffect(() => {
        return () => {
            //CWU
            clearProducts()
        }
    },[])

    return (
        <div>
            <CategoryList/>
        </div>
    )
}

var actions = {
    clearProducts
}

export default connect(null,actions)(Category)
