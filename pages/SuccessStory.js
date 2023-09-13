import React from 'react';
import Helmet from 'react-helmet';

import BreadCrumb from '../components/widgets/BreadCrumb';
import StoriesItem from '../components/widgets/StoriesItem';

function Portfolio() {
	return (
		<div>
			<Helmet>
				<title>Success Stories</title>
				<meta property="og:description" content="Success Stories Page" />
			</Helmet>
			<React.Fragment>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb page="Success Stories" />
				</section>
				<div className="fw-page-builder-content">
					<section className="ls s-pt-60 s-pb-60 s-pt-md-90 s-pb-md-90 s-pt-xl-150 s-pb-xl-150">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-12">
									<div className="isotope-wrapper isotope row masonry-layout c-gutter-30 c-mb-30">
										<StoriesItem
											title={'Absolute Chocalate'}
											image={'static/images/abs-choclate.png'}
											description={
												'Absolut Chocolate is an online platform to design customised cakes. It uses latest technologies such as ReactJS, NodeJS, MongoDB and a micro-service architecture to give users an unparalleled experience with minimum overhead.'
											}
										/>
										<StoriesItem
											imageWidth={'50'}
											title={'Palacalle'}
											image={'static/images/palacalle.png'}
											description={
												'Palacalle Baseball is an online streaming platform to help students learn baseball through video tutorials. Real time progress, assignment submission and teacher management is maintained for smooth flow of activities. Latest technologies such as VueJS, NodeJS, MongoDB and AWS are used to enhance user experience.'
											}
										/>
										<StoriesItem
											title={'Widespread Electric Sales'}
											image={'static/images/widespread-logo.png'}
											description={
												'Widespread Electrical Sales provides the best services it could offer and to keep overhead to a minimum. The second version of the solution was built using latest technologies which enhanced the overall performance. '
											}
										/>
										<StoriesItem
											imageWidth={'60'}
											title={'Lrmis'}
											image={'static/images/lrmis.png'}
											description={
												'Land Records Management Information System for the Government of Pakistan to manage records dynamically.'
											}
										/>
										<StoriesItem
											imageWidth={'70'}
											title={'SUELO'}
											image={'static/images/build.png'}
											description={
												'An Online Real Estate brokerage firm to target overseas citizens to help invest in real estate in their respective countries.'
											}
										/>
										<StoriesItem
											imageWidth={'70'}
											title={'LimeTac'}
											image={'static/images/limetac.png'}
											description={
												'LimeTAC is a unique system that connects all trading partners in a seamless way, eliminating barriers associated with traditional information silos.'
											}
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

export default Portfolio;
