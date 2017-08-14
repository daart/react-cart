import React from 'react';

import Product from './Product';

const ProductList = ({ products, removeProduct, quantyFier }) => {
	return (
		<div className="l_proudct-list">
			<ul>
				{ 
					products.map(product => (
						<li 
							key={ product.id } 
						>
							<Product 
								quantyFier={ quantyFier }
								removeProduct={ removeProduct }
								product={ product }
							/>
						</li>
					))
				}
			</ul>
		</div>
	)
}

export default ProductList;