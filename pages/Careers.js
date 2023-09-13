import React from 'react';
import Head from 'next/head';
import Helmet from 'react-helmet';

import BreadCrumb from '../components/widgets/BreadCrumb';
import CareerCard from '../components/widgets/CareerCard';

function Careers() {
	return (
		<div>
			<Head>
				<title>Careers</title>
				<meta property="og:description" content="Career Page" />
				<meta
					property="og:image"
					content={
						'https://res.cloudinary.com/dtgjzzpv8/image/upload/v1584610788/gpixogkbumys12zqiqy6.webp'
					}
				/>
			</Head>
			<React.Fragment>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb page="Careers" />
				</section>
				<div className="fw-page-builder-content">
					<section className="ls s-pt-60 s-pb-60 s-pt-md-90 s-pb-md-90 s-pt-xl-50 s-pb-xl-50">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-12">
									<div className="isotope-wrapper isotope row masonry-layout c-gutter-30 c-mb-30">
										<CareerCard
											position="Frontend Developer (ReactJs)"
											experince="2+ years"
											numberOfOpenings="2 Openings"
										/>
										<CareerCard
											position="UI/UX Designer"
											experince="1+ years"
											numberOfOpenings="1 Opening"
										/>
										<CareerCard
											position="Backend Developer (NodeJs)"
											experince="2+ years"
											numberOfOpenings="2 Openings"
										/>
										<CareerCard
											position="Business Development Executive"
											experince="Experience Fresh to 1 year"
											numberOfOpenings="1 Opening"
										/>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</React.Fragment>
		</div>
	);
}

export default Careers;
