import React from 'react';

const Product = ({ product, removeProduct, quantyFier }) => {
	return (
		<div className="l_product">
			<div className="l_product-desc">
				<strong>ID#: </strong> { product.id }
				{ ' ' }
				<span>{ product.title }</span>
				{ ' ' }
				<span>Price :</span>
				{ ' ' }
				<strong>${ product.price }</strong>
				{ ' '}
				<button 
					onClick={ () => removeProduct(product.id) }
					type="button" 
				>
					x
				</button>
			</div>

			<div className="l_product-controls">
				<button 
					type="button"
					onClick={() => quantyFier(product.id, +1)}
				>
					+
				</button>	
				{ ' ' }
				<strong>{ product.qty }</strong>
				{ ' ' }
				<button 
					type="button"
					disabled={ product.qty <= 1 ? true : false }
					onClick={() => quantyFier(product.id, -1)}
				>
					-
				</button>	
			</div>

		</div>
	);
}

export default Product;