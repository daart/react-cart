import React, { Component } from 'react';

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
			items: this.state.items.map(item => {
					if(item.id === id) {
						if(item.qty >= 1) {
							item.qty += dx;
						} 
						if(item.qty === 0) {
							item.qty = 1;
						}
					}
					return item; 
				}
			)
		});
	}

	removeItem(id) {
		this.setState({
			items: this.state.items.filter(item => item.id !== id) 
		});
	}

	render() {
		let { items } = this.state;

		let totalItems = items.reduce((prev, next) => {
			return +prev + +next.qty;
		}, 0);
		
		let totalPrice = items.reduce((prev, next) => {
			return +(prev + (next.price * next.qty)).toFixed(2);
		}, 0)
		
		console.log(this.state);

		return (
			<div className="l_wrapper">
				<AddItemForm />
				
				<div className="l_product-list">
					<ul>
						{ items.map(item => (
								<li 
									key={ item.id }
								>
									<Product 
										quantifier={ this.quantifier.bind(this) }
										item={ item } 
									/>	
								</li>
							))
						}
					</ul>
				</div>
				
				<Totals 
					tPrice={ totalPrice }
					tItemsCnt={ totalItems }
				/>

			</div>
		)
	}
}

class AddItemForm extends Component {
	state = {
		title: 'unnamed',
		qty: 0,
		price: 0
	}

	titleHandler(e) {
		this.setState({
			title: e.target.value
		});		
	}

	priceHandler(e) {
		this.setState({
			price: e.target.value
		});		
	}

	qtyHandler(e) {
		this.setState({
			qty: e.target.value
		});		
	}

	addNewItem(formData) {
		// this.setState({
		// 	items: [
		// 	...this.state.items, 
		// 	{ 
		// 		formData.qty, formData.price, formData.title 
		// 	}]
		// })
	}

	formHandler(e) {
		e.preventDefault();
		let { price, title, qty } = this.state;
		let formData = { price, title, qty };

		this.addNewItem(formData);
	}
	

	render() {
		console.log(this.state);

		return (
			<div className="l_form-container">
				<form 
					onSubmit={() => console.log('submit')}
				>
					<fieldset>
						<label htmlFor="">
							Title: 
							<input 
								name="title"
								type="text"
								onChange={ this.titleHandler.bind(this) }
								value={ this.state.title }
							/>
						</label>
					</fieldset>
					<fieldset>
						<label htmlFor="">
							Price: 
							<input 
								name="price"
								type="number"
								onChange={ this.priceHandler.bind(this) }
							/>
						</label>
					</fieldset>
					<fieldset>
						<label htmlFor="">
							qty: 
							<input 
								name="qty"
								type="number"
								onChange={ this.qtyHandler.bind(this) }
							/>
						</label>
					</fieldset>
					<button 
						type="submit" 
					>
						Add item
					</button>
				</form>
			</div>
		)
	}
}

const Product = ({ item, quantifier }) => {
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
					onClick={() => quantifier(item.id, -1)}
				>
					-
				</button>

				{ ' ' }

				<button 
					onClick={() => console.log('remove')}
				>
					X
				</button>
			</div>

		</div>
	)
}

const Totals = ({ tPrice, tItemsCnt }) => {
	return (
		<div className="l_totals-footer">
			<div className="l_t-price">
				Total Price : <strong>{ tPrice }</strong> 
			</div>
			<div className="l_t-items">
				Total Items : <strong>{ tItemsCnt }</strong> 
			</div>
		</div>
	)
}

export default Root;