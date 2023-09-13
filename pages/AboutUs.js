import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import AboutItem from '../components/widgets/AboutItem';
import BreadCrumb from '../components/widgets/BreadCrumb';

function AboutUs() {
	return (
		<div>
			<Helmet>
				<title>About Us</title>
				<meta  property="og:description" content="Helmet application" />
			</Helmet>
			<Fragment>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb page="About Us" />
				</section>
				<div className="fw-page-builder-content">
					<section className="ls c-gutter-60 s-pt-60 s-pb-60 s-pt-md-90 s-pb-md-90 s-pt-xl-150 s-pb-xl-150">
						<div className="container">
							<div className="row align-items-center">
								<div className="col-xs-12 col-12 col-lg-6 mb-5">
									<div className="img-wrap img-left">
										<img
											src="static/images/side02-470x630.jpg"
											width={470}
											height={630}
										/>
										<img
											src="static/images/side01-470x630.jpg"
											width={470}
											height={630}
										/>
									</div>
								</div>
								<div className="col-xs-12 col-12 col-lg-6 ">
									<h4 className="special-heading text-center text-md-left">
										<span className="d-inline-block border-left">
											<span className="colored">About</span> Us
										</span>
									</h4>
									<div className="fw-divider-space divider-30 divider-lg-50" />
									<p>
										TeraBytes is one of the leading software development company
										who believe in remote first. Our tech-savvy geeks are available for hiring and you can make 
										an engineering team for yourself in under 48 hours. We are
										committed to develop innovative software solutions to help
										you grow your business and get an edge over your contenders.
									</p>
									<p>
										Our processes help us stand out from others and gain the
										trust of our clients. Few of the methodologies we follow
										are:
									</p>
									<div className="fw-divider-space divider-30 divider-lg-50" />
									<div className="service-isotope isotope row masonry-layout c-gutter-30 c-mb-30 mb--30">
										<div className="d-sm-flex">
											<AboutItem
												icon={'fa fa-file-text-o'}
												title={'Complete Transparency'}
												description={
													'Using a combination of various communication and project management tools.'
												}
											/>
											<AboutItem
												icon={'fa fa-fighter-jet'}
												title={'Swift Start'}
												description={
													'We can get into action as soon as you’re ready to start work.'
												}
											/>
										</div>
										<div className="d-sm-flex">
											<AboutItem
												icon={'fa fa-sliders'}
												title={'Domain Specialists'}
												description={
													'We compose teams based on your specific requirements.'
												}
											/>
											<AboutItem
												icon={'fa fa-line-chart'}
												title={'Commitment to Deadlines'}
												description={
													'Meeting deadlines with best quality work is our first priority.'
												}
											/>
										</div>
										<div className="d-sm-flex">
											<AboutItem
												icon={'fa fa-clock-o'}
												title={'Time Zone Overlap'}
												description={
													'We make ourselves available and work according to your time-zone to ensure 24/7 availability.'
												}
											/>
											<AboutItem
												icon={'fa fa-calendar-check-o'}
												title={'After Launch Support'}
												description={
													'We address your bugs and issues for 30 days after we go live as product development is an ongoing process'
												}
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</Fragment>
		</div>
	);
}

export default AboutUs;
