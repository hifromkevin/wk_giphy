import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import Search from './Search.jsx';

const API_KEY = 'dc6zaTOxFJmzC';

export default class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			abilities: ['Access to state', 'Utilize components', 'Use FontAwesome and SASS'],
			rendered: false,
			initialGifs: [],
			gifs: [],
			isSearch: false
		}

		this.getGifs = this.getGifs.bind(this);
		this.isSearchMode = this.isSearchMode.bind(this);
	}

	componentWillMount() {
		this.getGifs('trending');
	}

	getGifs(typeOfQuery, term) {
		let url;
		console.log('QUERY', typeOfQuery)
		if (typeOfQuery === 'search') {
			url = `http://api.giphy.com/v1/gifs/search?q=${term}&api_key=${API_KEY}&limit=2`;
			this.setState({
				isSearch: true
			})
		} else {
			url = `http://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=5`;
		}
console.log(url)
		fetch(url)
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

	isSearchMode() {
		if(this.state.isSearch) {
				return <button onClick={ () => { 
						this.setState({ isSearch: false })
						this.getGifs('trending') 
					}}
				>Show Trending</button>
		}
	}

	render() {
		if(this.state.rendered) {
			return (
				<div>
				  <Search getGifs={this.getGifs} />
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

				{ this.isSearchMode() }
				</div>
			)
		}
			return (<div>Loading!</div>)

	}
}
