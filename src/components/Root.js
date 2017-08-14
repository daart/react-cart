import React, { Component } from 'react';

// components
import ProductList from './ProductList';
import NewProductForm from './NewProductForm';
import Totals from './Totals';

class Root extends Component {
	state = {
		products: [
			{
				id: '' + Math.random() * 10,
				title: '42" Samsung smartTV',
				price: 699.99,
				qty: 1
			},
			{
				id: '' + Math.random() * 10,
				title: 'headSet Phillips',
				price: 39.95,
				qty: 2
			},
			{
				id: '' + Math.random() * 10,
				title: 'GTX-980 MSI videoCard',
				price: 499.99,
				qty: 1
			},
			{
				id: '' + Math.random() * 10,
				title: 'mcBook pro 13" retina (2017)',
				price: 1499.49,
				qty: 1
			}
		]
	}
	
	clearCart = () => {
		this.setState({
			products: []
		})
	}

	addNewItem = ({ qty, title, price }) => {

		this.setState({
			products: [
				...this.state.products,
				{
					id: '' + Math.random() * 10,
					qty,
					title,
					price
				}
			]
		})
	}

	removeProduct = (id) => {
		this.setState({
			products: this.state.products.filter(product => product.id !== id)
		})
	}

	quantyFier = (id, dx) => {
		this.setState({
			products: this.state.products.map(product => (
				{ ...product, qty: product.id === id ? product.qty += dx : product.qty }
			))
		})
	}

	render() {
		let { products } = this.state;

		return (
			<div className="l_wrapper">

				<NewProductForm
					addNewItem={ this.addNewItem }					 
				/>
				<ProductList 
					products={ products }
					removeProduct={ this.removeProduct }
					quantyFier={ this.quantyFier }
				/>
				
				<Totals 
					products={ products } 
				/>

				<button 
					onClick={ this.clearCart }
				>
					Clear Cart
				</button>
			</div>
		)
	}
}

export default Root;