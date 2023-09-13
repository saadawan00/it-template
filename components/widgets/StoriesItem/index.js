function ServicesPageItem(props) {
	const { image, imageWidth = 100, title, description } = props;
	let classes = `attachment-techup_small_rectangle size-techup_small_rectangle wp-post-image`
	return (
		<div className="isotope-item col-xl-4 col-lg-4 col-md-6 col-sm-6 digital">
			<div className="vertical-item box-shadow text-center text-lg-center h-100">
				<div className="item-media story-image-wrapper">
					<img
						src={image}
						width={1000}
						height={750}
						style={{ width: `${imageWidth}%` }}
						alt="Services Image"
						className={classes}
					/>
				</div>
				<div className="item-content cont-padding-2">
					<h6 className="fw-500 special-heading text-center text-lg-center">
						<span className="underline text-uppercase">
							<a>{title}</a>
						</span>
					</h6>
					<p className="mt-4">{description}</p>
				</div>
			</div>
		</div>
	);
}

export default ServicesPageItem;
