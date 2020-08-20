import React, { Component } from 'react'
import ProductCard from './ProductCard';

export class ProductList extends Component {
    
    render() {
        return (
            <div className="p-4">
                <div className="row">
                    {this.props.products.map(product => (
                        <div className="col col-12 col-lg-4" key={product.id}>
                            <ProductCard  product={product}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ProductList
