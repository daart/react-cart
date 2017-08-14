import React, { Component } from 'react';

// components
import Product from './Product';
import AddItemForm from './Form';
import Totals from './Totals';
import ProductList from './ProductList';

class Root extends Component {
	state = {
		items: [
			{
				id: ''+ Math.random() * 10,
				title: '42" sony samartTV',
				qty: 1,
				price: 499.98
			},
			{
				id: ''+ Math.random() * 10,
				title: 'haedset Phillips',
				qty: 2,
				price: 49.95
			},
			{
				id: ''+ Math.random() * 10,
				title: 'mcbook pro 13" retina (2017)',
				qty: 1,
				price: 1399.99
			}
		]
	};

	quantifier(id, dx) {
		this.setState({
			items: this.state.items.map(item => ({ ...item, qty: item.id === id ? item.qty += dx : item.qty }))
		});
	}

	removeItem(id) {
		this.setState({
			items: this.state.items.filter(item => item.id !== id) 
		});
	}

	addNewItem(newItem) {
		console.log(newItem);

		this.setState({
			items: [
			...this.state.items,
			{...newItem, id: '' + Math.random() * 10 }  
			]
		})
	}

	render() {
		let { items } = this.state;

		return (
			<div className="l_wrapper">
				<AddItemForm 
					addNewItem={ this.addNewItem.bind(this) }
				/>
				
				<ProductList 
					items={ items } 
					removeItem={ this.removeItem.bind(this) }
					quantifier={ this.quantifier.bind(this) }
				/>
				
				<Totals 
					items={ items }
				/>

			</div>
		)
	}
}

export default Root;