import React from 'react';
import Helmet from 'react-helmet';

import AboutItem from '../../../components/widgets/AboutItem';
import ServicesDetailsView from '../../../components/widgets/ServicesDetails';
import Paragraph from '../../../components/widgets/ServicesDetails/Paragraph';

function ServicesDetails() {
	return (
		<div>
			<Helmet>
				<title>Web Development</title>
				<meta property="og:description" content="Services | Web Development" />
			</Helmet>
			<React.Fragment>
				<ServicesDetailsView
					title={'Web Development'}
					image={'/static/images/service01-1000x750.jpg'}
					details={`This is the right place to get a productive and highly engaging web development solutions for your custom business needs.
					Fast track your undertakings using our straight forward application process.
					`}
				/>
				<section className="ls s-pb-50">
					<div className="container">
						<div className="row">
							<Paragraph
								heading={'Frontend Development'}
								icon={'fa fa-code fa-lg'}
								text={
									'Our expertise in full-stack front-end helps to design aspiring and state-of-the-art, web and mobile solutions.'
								}
							/>
							<Paragraph
								heading={'Backend Development'}
								icon={'fa fa-cubes'}
								text={
									'We construct cloud-based back-end solutions for mobile, web, work area frameworks that scale with your developing needs.'
								}
							/>
							<Paragraph
								heading={'Experience Design'}
								icon={'fa fa-object-group'}
								text={
									'With our broad ability in UI/UX structure and front-end advancement, we manufacture web applications with wonderful client encounters.'
								}
							/>
							<Paragraph
								heading={'Full Stack Development'}
								icon={'fa fa-object-ungroup fa-lg'}
								text={
									'We give dexterous programming designing to the full range of advancements from basic frontend prototyping to the high-performing backend.'
								}
							/>
							<Paragraph
								heading={'QA Testing'}
								icon={'fa fa-bug'}
								text={
									'A wide range of independent software QA and testing services that adhere to the highest levels of security and industry standards.'
								}
							/>
							<Paragraph
								heading={'Support'}
								icon={'fa fa-life-ring'}
								text={
									'SLA based platform support with different maintenance plans to avoid any downtime, manage feature enhancements & maintenance of your app.'
								}
							/>
						</div>
					</div>
				</section>

				<section className="ls page_content s-py-60 s-py-md-90 s-py-xl-10 c-gutter-60">
					<div className="container pb-5">
						<div className="row">
							<div id="content" className="col-lg-10 offset-lg-1">
								<article className="text-center post-1451 fw-portfolio type-fw-portfolio status-publish has-post-thumbnail hentry fw-portfolio-category-gallery">
									<div className="vertical-item post item-gallery text-center">
										<div className="item-content mt-3 text-center">
											<div className="divider-20" />
											<h1 className="special-heading text-center text-md-center ">
												<span className="d-inline-block font-weight-medium border-left pt-2">
													<span className="colored">How</span> We Do It
												</span>
											</h1>
											{/* <p>
											Fast track your undertakings using our straight forward
											three-advance application improvement process.
										</p> */}
										</div>
									</div>
								</article>
							</div>
						</div>
					</div>
				</section>
				<section className="ls s-pb-50">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-12 col-lg-4 p-4">
								<AboutItem
									icon={'fa fa-file-text-o'}
									title={'Requirements Gathering'}
								/>
								<div className="fw-divider-space top-margin-25" />
								<li>Requirements Definition</li>
								<li>Analyzing the requirements</li>
								<li>Documenting the process</li>
								<li>Provide initial design</li>
							</div>
							<div className="col-xs-12 col-12 col-lg-4 p-4">
								<AboutItem
									icon={'fa fa-sitemap'}
									title={'Development & Testing'}
								/>
								<div className="fw-divider-space top-margin-25" />
								<li>Frontend & backend development</li>
								<li>Weekly Client Feedback (SCRUM)</li>
								<li>Singular Value Decomposition</li>
								<li>QA Testing</li>
								<li>Deployment</li>
							</div>
							<div className="col-xs-12 col-12 col-lg-4 p-4">
								<AboutItem
									icon={'fa fa-cogs'}
									title={'Support & Maintenance'}
								/>
								<div className="fw-divider-space top-margin-25" />
								<li>SLA Based Support</li>
								<li>L3 and Production Support Services</li>
								<li>Operational support where needed</li>
								<li>On-going Support</li>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		</div>
	);
}

export default ServicesDetails;
