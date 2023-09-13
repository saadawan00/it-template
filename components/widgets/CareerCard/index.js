import React from 'react';

function CareerCard(props) {
	const { position, experince, numberOfOpenings } = props;
	return (
		<div className="col-lg-4 col-md-6 my-3">
			<div className="card-career card-careers-position card-events border-0">
				<h4>{position}</h4>
				<p>- Experience{experince}</p>
				<p>- {numberOfOpenings}</p>
				<a className="btn-career-link pt-5">Apply now at info@terabytes.info</a>
			</div>
		</div>
	);
}

export default CareerCard;
