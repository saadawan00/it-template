import Link from 'next/link';

function StoriesItem(props) {
	const { image, title, page } = props;
	return (
		<div className="isotope-item item-layout-item-regular col-lg-4 col-md-4 col-sm-6 col-xs-12 gallery gallery-tilled pointer">
			<Link href={`/Services/${page}`}>
				<div className="vertical-item item-gallery content-absolute text-center ds">
					<div className="item-media">
						<img
							src={image}
							width={800}
							height={800}
							alt="Successes Image"
							className="attachment-techup_square size-techup_square wp-post-image"
						/>
						<div className="media-links"></div>
					</div>
					<div className="item-content">
						<h6>
							<a>{title}</a>
						</h6>
					</div>
				</div>
			</Link>
		</div>
	);
}

export default StoriesItem;
