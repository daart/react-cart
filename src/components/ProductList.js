import React from 'react';

import Product from './Product';

const ProductList = ({ items, removeItem, quantifier }) => {
	return (
		<div className="l_product-list">
			<ul>
				{ items.map(item => (
						<li 
							key={ item.id }
						>
							<Product 
								removeItem={ removeItem }
								quantifier={ quantifier }
								item={ item } 
							/>	
						</li>
					))
				}
			</ul>
		</div>
	)
}	

export default ProductList;	
