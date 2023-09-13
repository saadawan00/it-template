function AboutItem(props) {
	const { icon, title, description } = props;
	return (
		<div className="isotope-item col-xl-7 col-lg-7 col-md-6 col-sm-6 digital">
			<div className="media text-left text-lg-left align-center">
				<div className="icon-styled fs-40 links-maincolor mw-50">
					<a>
						<i className={icon} />
					</a>
				</div>
				<div className="media-body">
					<h5>
						<a>{title}</a>
					</h5>
					<div>
						<p>{description}</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutItem;
