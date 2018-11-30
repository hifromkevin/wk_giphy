import React from 'react';

const Gif = ({ gif, handleGifClick }) => (
	<img 
		className="gif__image" 
		data-toggle="modal" 
		data-target="#gifModal" 
		src={gif.images.fixed_height.url} 
		alt={gif.title} 
		onClick={() => handleGifClick(gif) } 
		width={gif.images.fixed_height.width}
		height={gif.images.fixed_height.height}
	/>
);

export default Gif;