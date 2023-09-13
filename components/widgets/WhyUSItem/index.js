function WhyUsItem(props) {
	const { title, description } = props;
	return (
		<div>
			<div className="fw-divider-space divider-40 divider-lg-60"/>
			<h6 className="special-heading text-center text-md-left ">
				<span className="d-inline-block color-grey thin special">
					<span>{title}</span>
				</span>
			</h6>
			<div className="fw-divider-space top-margin-10" />
			<div className="fw-divider-space top-margin-25" />
			<p className=" text-center text-md-left ">
				<span className="d-inline-block color-font">{description}</span>
			</p>
		</div>
	);
}

export default WhyUsItem;
