import BreadCrumb from '../BreadCrumb';

function ServicesDetails(props) {
	const { title, image, details } = props;
	return (
		<div>
			<section className="page_title ds s-pt-265 s-pb-30 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
				<BreadCrumb page={title} isServices={true} />
			</section>
			<section className="ls page_content s-py-60 s-py-md-90 s-py-xl-150 c-gutter-60">
				<div className="container pb-5">
					<div className="row">
						<div id="content" className="col-lg-10 offset-lg-1">
							<article className="text-center post-1451 fw-portfolio type-fw-portfolio status-publish has-post-thumbnail hentry fw-portfolio-category-gallery">
								<div className="vertical-item post item-gallery text-center">
									<div className="item-media">
										<img
											src={image}
											width={1170}
											height={500}
											alt="service-detail"
											className="attachment-techup-full-width size-techup-full-width wp-post-image"
										/>
									</div>
									<div className="item-content mt-3 text-center">
										<div className="divider-20" />
										{/* <h5 className="mt-0">{title}</h5> */}
										<p>{details}</p>
									</div>
								</div>
							</article>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default ServicesDetails;
