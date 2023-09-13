function FeaturedIcon(props) {
	const { icon, imageWidth } = props;
	return (
		<div className="feature-icon-size">
			<div className="col-12">
				<div className="quote-item quote-layout-11">
					<div className="quote-image">
							<img src={icon} style={{ width: `${imageWidth}%` }} alt="Feature Work" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default FeaturedIcon;
