import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Link } from 'react-router-dom';

export default function ProductCard(props) {
  let { product } = props;
  return (
    <div className='product-card mb-4'>
      <div className='card p-4'>
        <Link to={`/products/${product.id}`}>
          <img
            className='card-img-top'
            src={product.image}
            alt={product.title}
          />
        </Link>
        <div className='card-body'>
          <h5 className='card-title'>{product.title}</h5>
          <div className='card-text'>{product.description}</div>
          <p className='price pt-3'>
            <strong>$ {(product.price_per / 100).toFixed(2)}</strong>
          </p>

          <div
            className='add-to-cart bg-info 
            ml-auto text-light
            d-flex align-items-center 
            justify-content-center'
            data-toggle='tooltip'
            data-placement='left'
            title='Add to cart'
          >
            <MdAddShoppingCart />
          </div>
        </div>
      </div>
    </div>
  );
}
