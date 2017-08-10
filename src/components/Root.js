import React, { Component } from 'react';


class Root extends Component {
	state = {
		items: [
			{
				"id": 1,
				"title": "headphones",
				"price": 15.65,
				"tPrice": 15.65,
				"inStock": true,
				"qty": 1
			},
			{
				"id": 2,
				"title": "Samsung smartTV 42'",
				"price": 499.98,
				"tPrice": 499.98,
				"inStock": true,
				"qty": 1
			},
			{
				"id": 3,
				"title": "PS4",
				"price": 423.77,
				"tPrice": 423.77,
				"inStock": true,
				"qty": 1
			}
		],

		totalPrice: 0,
		totalItemsCnt: 0,
		newPrice: 0,
		newItemTitle: ''

	};

	calcItemTotals(id, operator) {

		this.setState((state, props) => {
			let { items } = state;

			items.map(item => {
				if(item.id === id) {
					if(operator === '+') {
						item.tPrice += item.price;
						item.qty += 1;
					} 

					if(operator === '-') {
						if(item.tPrice > item.price) {
							item.tPrice -= item.price;
							item.qty -= 1;
						} 
						else {

						}
					}

				}
				return item;
			})

			return {
				items
			}
		})

	}

	formHandler(e) {
		e.preventDefault();

		if(!this.state.newPrice || !this.state.newItemTitle) return
			
		this.addNewItem();
	}

	addNewItem() {
		this.setState({
			items: [...this.state.items, { 
				id: '' + Math.random() * 10, 
				tPrice: this.state.newPrice, 
				inStock: true,
				price: this.state.newPrice,
				title: this.state.newItemTitle  
			}],

			newPrice: 0,
			newItemTitle: ''
		})
	}

	newPriceHandler(e) {
		this.setState({ newPrice: isNumeric(e.target.value) ? +e.target.value : 0});
	}

	newTitleHandler(e) {
		this.setState({ newItemTitle: e.target.value })
	}

	removeItem(id) {
		this.setState({
			items: this.state.items.filter(item => item.id !== id)
		})
	}

	render() {

		let { items, totalPrice, totalItemsCnt } = this.state;
		
		let priceTotal = items.map(item => item.tPrice).reduce((prev, next) => prev + next);
		let qtyTotal = items.map(item => item.qty).reduce((prev, next) => prev + next);
		
		console.log(this.state);

		return (
			<div className="l_wrapper">
				
				<AddNewForm
					newPrice={ this.state.newPrice }
					newItemTitle={ this.state.newItemTitle }
					newPriceHandler={this.newPriceHandler.bind(this)}
					newTitleHandler={this.newTitleHandler.bind(this)} 
					formHandler={this.formHandler.bind(this)}
				/>

				<div className="items_list">
					<ul>
						{ items.map(item => (
							<Product 
								removeItem={ this.removeItem.bind(this) }
								calcItemTotals={this.calcItemTotals.bind(this)} 
								key={item.id} 
								item={item}
							/>
						))}

					</ul>
				</div>

				<Totals 
					priceTotal={ priceTotal } 
					qtyTotal={ qtyTotal } 
				/>

			</div>
		);
	}

}

const isNumeric = (n) => !isNaN(parseFloat(n) && isFinite(n));

const Product = ({ item, calcItemTotals, removeItem }) => {
	return (
		<li>
			<div>
				<storng>#:</storng>{ item.id }
				<span>{ ' ' + item.title }</span>
				
				{ ' ' }

				<button 
					type="button"
					onClick={() => removeItem(item.id) }
				>
					X
				</button>
				
				<div className="incDec_group">
					<button 
						id="inc"
						onClick={() => calcItemTotals(item.id, '+')}
					>
						+
					</button>

					<span>{ item.qty }</span>
					
					<button
						id="dec"
						onClick={() => calcItemTotals(item.id, '-')}
					>
						-
					</button>
				</div>


			</div>
		</li>
	)
}

const Totals = ({ priceTotal, qtyTotal }) => (
	<div className="totals_panel">
		<div>Total Price : <strong>{ priceTotal }</strong></div>
		<div>Total Items Count: <span>{ qtyTotal }</span></div>
	</div>
)

const AddNewForm = ({ formHandler, newTitleHandler, newPriceHandler, newPrice, newItemTitle }) => {
	return (
		<div className="create-item">
			<form onSubmit={(e) => {
					formHandler(e);
				
					console.log(e)}
				}
			>
				<fieldset>
					<label htmlFor="">
						Title : 
						<input 
							type="text"
							onChange={(e) => {
								newTitleHandler(e);
							}}
							value={ newItemTitle }
						/>

					</label>

					<label htmlFor="">
						Price : 
						<input 
							type="text"
							onChange={(e) => {
									newPriceHandler(e);
								}
							}
							value={ newPrice }
						/>

					</label>

				</fieldset>
				
				<button 
					type="submit"
				>
					Add
				</button>

			</form>
		</div>
	)
}

export default Root;