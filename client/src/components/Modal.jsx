import React from 'react';

const Modal = ({modal}) => (
<div className="modal" tabindex="-1" role="dialog" id="gifModal">
	<div className="modal-dialog" role="document">
		<div className="modal-content">
			<div className="modal-header">
				<h5 className="modal-title">{modal.title}</h5>
				<button type="button" className="close" data-dismiss="modal" aria-label="Close">
					<span aria-hidden="true">&times;</span>
				</button>
			</div>
			<div className="modal-body">
				<img 
					className="modal__image" 
					data-toggle="modal" 
					data-target="#gifModal" 
					src={modal && modal.images.fixed_width.url} 
					alt={modal.title} 
				/>
				<p>{modal.title}, {modal.rating}, {modal.import_datetime}</p>
				<p>{modal.username}</p>
			</div>
			<div className="modal-footer">
				<button type="button" className="btn btn-primary">Save changes</button>
				<button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
			</div>
		</div>
	</div>
</div>

);

export default Modal;