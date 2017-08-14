import React from 'react';

const Totals = ({ items }) => {
	let totals = items.reduce((prev, next) => (
		{...prev, price: prev.price + (next.price * next.qty), qty: prev.qty + next.qty }
	), { price: 0, qty: 0 });
	
	let { price, qty } = totals;

	return (
		<div className="l_totals-footer">
			<div className="l_t-price">
				Total Price : <strong>{ price.toFixed(2) }</strong> 
			</div>
			<div className="l_t-items">
				Total Items : <strong>{ qty }</strong> 
			</div>
		</div>
	)
}

export default Totals;