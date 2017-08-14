import React, { Component } from 'react';

const formReset = {
	title: 'New Item',
	qty: 1,
	price: 0
};

class newItemForm extends Component {
	state = formReset
	
	inputHandler = (e) => {
		let { name, value } = e.target;
		this.setState({
			[name]: value
		})
	}
	
	formHandler = (e) => {
		e.preventDefault();
		let { addNewItem } = this.props;

		addNewItem(this.state);

		this.setState(formReset);
	}

	render() {
		console.log(this.state);

		return (
			<div className="l_add-new-form">
				<form 
					onSubmit={ this.formHandler }
				>
					<fieldset>
						<label htmlFor="title">
							<input
								name="title"
								onChange={ this.inputHandler }
								type="text"
								value={ this.state.title } 
							/>
							{ ' ' }
							title
						</label>
					</fieldset>

					<fieldset>
						<label htmlFor="price">
							<input
								name="price"	
								onChange={ this.inputHandler }
								type="number"
								step="0.01"
								value={ this.stateprice } 
							/>
							{ ' ' }
							price
						</label>
					</fieldset>

					<fieldset>
						<label htmlFor="qty">
							<input
								name="qty"
								onChange={ this.inputHandler }
								type="number"
								value={ this.state.qty } 
							/>
							{ ' ' }
							qty
						</label>
					</fieldset>

					<button 
						type="submit"
					>
						Add New
					</button>
				</form>

			</div>
		)
	}
}

export default newItemForm;