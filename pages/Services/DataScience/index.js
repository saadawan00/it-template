import React from 'react';
import Helmet from 'react-helmet';

import ServicesDetailsView from '../../../components/widgets/ServicesDetails';
import AboutItem from '../../../components/widgets/AboutItem';

function ServicesDetails() {
	return (
		<div>
			<Helmet>
				<title>Data Science</title>
				<meta
					property="og:description"
					content="Services | Data Science Page"
				/>
			</Helmet>
			<React.Fragment>
				<ServicesDetailsView
					title={'Data Science'}
					image={'/static/images/service04-1000x750.jpg'}
					details={
						'Drive your business the way it suits you using advanced data science techniques.'
					}
				/>

				<section className="ls s-pb-50">
					<div className="container">
						<div className="row">
							<div className="col-xs-12 col-12 col-lg-3 p-4">
								<AboutItem icon={'fa fa-database'} title={'Data Extraction'} />
								<div className="fw-divider-space top-margin-25" />
								<li>
									<label>Structured and Unstructured</label>
								</li>
								<li>
									<label>Data Transformation</label>
								</li>
								<li>
									<label>RDBMS & Big Data</label>
								</li>
								<li>
									<label>Distributed File System (HDFS)</label>
								</li>
								<li>
									<label>Data Profiling</label>
								</li>
							</div>
							<div className="col-xs-12 col-12 col-lg-3 p-4">
								<AboutItem
									icon={'fa fa-crosshairs'}
									title={'Featured Engineering'}
								/>
								<div className="fw-divider-space top-margin-25" />
								<div>
									<li>
										<label>Locality Sensitive Hashing</label>
									</li>
									<li>
										<label>Principal Component Analysis</label>
									</li>
									<li>
										<label>Singular Value Decomposition</label>
									</li>
									<li>
										<label>Text Transformation</label>
									</li>
									<li>
										<label>Vectorization, Indexer</label>
									</li>
								</div>
							</div>
							<div className="col-xs-12 col-12 col-lg-3 p-4">
								<AboutItem icon={'fa fa-cogs'} title={'Optimization'} />
								<div
									className="fw-divider-space top-margin-25"
									style={{ 'margin-top': '37px' }}
								/>
								<li>
									<label>Hyper parameter Tuning</label>
								</li>
								<li>
									<label>Gradient Descent, SGD</label>
								</li>
								<li>
									<label>Ensemble & Boosting</label>
								</li>
								<li>
									<label>Log-loss, F-measure, P-Recall</label>
								</li>
							</div>
							<div className="col-xs-12 col-12 col-lg-3 p-4">
								<AboutItem icon={'fa fa-truck'} title={'Deployment'} />
								<div
									className="fw-divider-space top-margin-25"
									style={{ 'margin-top': '37px' }}
								/>
								<li>
									<label>Model Deployment</label>
								</li>
								<li>
									<label>Model Serving</label>
								</li>
								<li>
									<label>Model Pipeline</label>
								</li>
								<li>
									<label>Model Analysis</label>
								</li>
								<li>
									<label>Managed Deployment</label>
								</li>
							</div>
						</div>
					</div>
				</section>
			</React.Fragment>
		</div>
	);
}

export default ServicesDetails;
