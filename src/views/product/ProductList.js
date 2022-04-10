import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { productRemove } from "../../state-management/actions/productAction";

export const ProductList = () => {
    const products = useSelector(store => store.productState);
    const dispatch = useDispatch();

    return (
        <div>
            <h2>Products :</h2>
            <ul>
                {products.map(item => 
                    <li key={item.id}>{item.title} - {item.price} - 
                    <button onClick={() => dispatch(productRemove(item.id))}>Remove</button></li>
                    )}
            </ul>
        </div>
    )
}
