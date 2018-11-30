import React, { Component } from 'react';

export default class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			term: ''
		}

		this.changeTerm = this.changeTerm.bind(this);
		this.submitting = this.submitting.bind(this);
	}

	changeTerm(e) {
		this.setState({
			term: e.target.value
		})
	}

	submitting(e) {
		e.preventDefault();
		this.props.getGifs('search', this.state.term);
		this.setState({
			term: ''
		})
	}

	render() {
		return (
			<div>
				<form onSubmit={ this.submitting } >
					<input value={ this.state.term } onChange={ this.changeTerm } /> <button className="btn btn-outline-primary">Search!</button>
				</form>
			</div>
		)
	}
}