import React from 'react';
import Helmet from 'react-helmet';

import BreadCrumb from '../components/widgets/BreadCrumb';

function Technologies() {
	return (
		<div>
			<Helmet>
				<title>Technologies</title>
				<meta property="og:description" content="Technologies Page" />
			</Helmet>
			<React.Fragment>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb page="Technologies" />
				</section>
				<div className="fw-page-builder-content">
					<section className="ls s-pt-60 s-pb-60 s-pt-md-90 s-pb-md-90 s-pt-xl-50 s-pb-xl-50">
						<div className="container">
							<div className="row">
								<div className="col-xs-12 col-12">
									<div className="isotope-wrapper isotope row masonry-layout c-gutter-30 c-mb-30">
										<div className="p-lr-20">
											The team at Terabytes consists of developers with a wide
											range of cross-platform experience in developing state of
											the art applications for web, mobile and custom software
											development. We can offer you a complete range of
											solutions for your next project regardless of the
											platform.
										</div>
										<div className="technologies-wrapper">
											<img src="static/images/Bootstrap.png" />
											<img src="static/images/CSS.png" />
											<img src="static/images/HTML.png" />
											<img src="static/images/Angular.png" />
											<img src="static/images/VueJS.png" />
											<img src="static/images/Javascript.png" />
											<img src="static/images/reactjs.png" />
											<img src="static/images/typescript.png" />
											<img src="static/images/MongoDB.png" />
											<img src="static/images/NodeJS.png" />
											<img src="static/images/RubyOnRails.png" />
											<img src="static/images/NextJS.png" />
											<img src="static/images/Saas.png" />
											<img src="static/images/java.png" />
											<img src="static/images/spring.png" />
											<img src="static/images/art.png" />
											<img src="static/images/eslintlogo.png" />
											<img src="static/images/Ionic.png" />
											<img src="static/images/aws.png" />
										</div>
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

export default Technologies;
