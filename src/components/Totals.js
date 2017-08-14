import React from 'react';

const Totals = ({ products }) => {
	let totals = products.reduce((prev, next) => (
		{ ...prev, 
			price: prev.price + (next.price * next.qty), 
			qty: prev.qty + next.qty 
		}
	), { price: 0, qty: 0 });
	
	let { price, qty } = totals;

	return (
		<div className="l_totals-footer">
			<div className="l_total__price">
				<span>Total Cost : </span>
				{ ' ' }
				<strong>${ price.toFixed(2) }</strong>
			</div>
			<div className="l_total__products">
				<span>Total Items Count : </span>
				{ ' ' }
				<strong>{ qty }</strong>
			</div>
		</div>	
	)
}

export default Totals;