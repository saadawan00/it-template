import Link from 'next/link';

function ServicesItem(props) {
	const { icon, title, description } = props;
	return (
		<div className="isotope-item col-xl-4 col-lg-4 col-md-6 col-sm-6 digital pointer">
			<Link href="/Services">
				<div className="media text-left text-lg-left">
					<div className="icon-styled fs-28 links-maincolor mw-50">
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
			</Link>
		</div>
	);
}

export default ServicesItem;
