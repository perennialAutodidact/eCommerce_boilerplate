import React, { Component } from 'react'
import ProductCard from './ProductCard';

export class ProductList extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    {this.props.products.map(product => (
                        <div className="col col-4">
                            <ProductCard product={product}/>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}

export default ProductList
