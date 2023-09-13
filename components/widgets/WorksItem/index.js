function WorksItem(props) {
	const { image, title } = props;
	return (
		<div className="icon-box text-center text-lg-center">
			<div className="media-image">
				<img src={image} alt="step image" />
			</div>
			<h5 className="mb-0 text-center">{title}</h5>
		</div>
	);
}

export default WorksItem;
