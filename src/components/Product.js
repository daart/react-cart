import React from 'react';

const Product = ({ item, quantifier, removeItem }) => {
	return (
		<div className="l_product-item">
			<div className="l_item-description">
				<strong>id# :</strong>
				{ ' ' }
				<span>
					{ item.id }
				</span>
				{ ' ' }
				<span>{ item.title }</span>
			</div>
			
			<div className="l_item-controlls">
				<button 
					onClick={() => quantifier(item.id, +1)}
				>
					+
				</button>
				{ ' ' }
				<strong>{ item.qty }</strong>
				{ ' ' }
				<button
					disabled={ item.qty <= 1 ? true : false } 
					onClick={() => quantifier(item.id, -1)}
				>
					-
				</button>

				{ ' ' }

				<button 
					onClick={ () => removeItem(item.id) }
				>
					X
				</button>
			</div>

		</div>
	)
}

export default Product;