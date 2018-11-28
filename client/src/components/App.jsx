import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import MyComponent from './MyComponent.jsx';

const API_KEY = 'dc6zaTOxFJmzC';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			abilities: ['Access to state', 'Utilize components', 'Use FontAwesome and SASS'],
			rendered: false,
			gifs: []
		}
	}

	componentWillMount() {
		fetch(`http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=10`)
			.then(response => response.json())
			.then((response) => {
				console.log(response)
				this.setState({
					rendered: true,
					gifs: response.data
				})
			})
			.catch((err) => {
				console.log(err)
			})
	}

	render() {
		if(this.state.rendered) {
			return (
				<div>
					{this.state.gifs.map(gif => {
						return (
							<div key={gif.id} >
								<img src={gif.images.downsized_medium.url} alt={gif.title} />
								<p>{gif.title}, {gif.rating}, {gif.import_datetime}</p>
								<p>{gif.username}</p>
							</div>
						)
					})
					}
				</div>
			)
		}
			return (<div>Loading!</div>)

	}
}
