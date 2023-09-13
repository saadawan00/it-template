import React from 'react';
import Helmet from 'react-helmet';

import BreadCrumb from '../../components/widgets/BreadCrumb';
import ServicesPageItem from '../../components/widgets/ServicesPageItem';

function Services() {
	return (
		<div>
			<Helmet>
				<title>Services</title>
				<meta property="og:description" content="Services Page" />
				<meta
					propert="og:image"
					content={
						'https://res.cloudinary.com/dtgjzzpv8/image/upload/v1584611003/isumpn364cixnmepknqh.png'
					}
				/>
			</Helmet>
			<React.Fragment>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb page="Services" />
				</section>
				<div className="fw-page-builder-content">
					<section className="ls s-pt-60 s-pb-60 s-pt-md-100 s-pb-md-100 s-pt-xl-150 s-pb-xl-150">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-12 ">
									<div className="service-isotope isotope row masonry-layout c-gutter-30 c-mb-30 mb--30">
										<ServicesPageItem
											page={'Web'}
											title={'Web Development'}
											image={'static/images/service01-1000x750.jpg'}
										/>
										<ServicesPageItem
											page={'Mobile'}
											title={'Mobile Development'}
											image={'static/images/service03-1000x750.jpg'}
										/>
										<ServicesPageItem
											page={'SEO'}
											title={'SEO optimization'}
											image={'static/images/service02-1000x750.jpg'}
										/>
										<ServicesPageItem
											page={'UIX'}
											title={'UI/UX Design'}
											image={'static/images/service05-1000x750.jpg'}
										/>
										<ServicesPageItem
											page={'MachineLearning'}
											title={'Machine Learning'}
											image={'static/images/machine-learning.jpeg'}
										/>
										<ServicesPageItem
											page={'DataScience'}
											title={'Data Science'}
											image={'static/images/service04-1000x750.jpg'}
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

export default Services;
