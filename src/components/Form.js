import React, { Component } from 'react';

const defaultForm = {
  price: 0,
  title: 'unnamed',
  qty: 1
}

class AddItemForm extends Component {
	state = defaultForm;

	inputHandler(e) {
		let { name, value } = e.target;
		this.setState({
			[name]: value
		});		
	}

	formHandler = (e) => {
		e.preventDefault();
		
		this.props.addNewItem(this.state);
		this.setState(defaultForm);
	}
	
	render() {
		return (
			<div className="l_form-container">
				<form 
					onSubmit={ this.formHandler }
				>
					<fieldset>
						<label htmlFor="">
							Title: 
							<input 
								name="title"
								type="text"
								onChange={ this.inputHandler.bind(this) }
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
								value={ this.state.price }
								onChange={ this.inputHandler.bind(this) }
							/>
						</label>
					</fieldset>
					<fieldset>
						<label htmlFor="">
							qty: 
							<input 
								name="qty"
								type="number"
								value={ this.state.qty }
								onChange={ this.inputHandler.bind(this) }
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

export default AddItemForm;