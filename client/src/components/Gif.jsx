import React from 'react';

const Gif = ({gif}) => (
	<div className="gif__wrapper">
		<img className="gif__image" src={gif.images.downsized_medium.url} alt={gif.title} />
		<p>{gif.title}, {gif.rating}, {gif.import_datetime}</p>
		<p>{gif.username}</p>
	</div>
);

export default Gif;