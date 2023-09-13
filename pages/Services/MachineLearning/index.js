import React from 'react';
import Helmet from 'react-helmet';

import ServicesDetailsView from '../../../components/widgets/ServicesDetails';
import Paragraph from '../../../components/widgets/ServicesDetails/Paragraph';

function ServicesDetails() {
	return (
		<div>
			<Helmet>
				<title>Machine Learning</title>
				<meta
					property="og:description"
					content="Services | Machine Learning Page"
				/>
			</Helmet>
			<React.Fragment>
				<ServicesDetailsView
					title={'Machine Learning'}
					image={'/static/images/machine-learning.jpeg'}
					details={
						'Our experienced data engineers have proficiency in deploying “auto-didact” software in complex environments which yield high and improved overall performance.'
					}
				/>
				<section className="ls s-pb-50">
					<div className="container">
						<div className="row">
							<Paragraph
								heading={'Analysis Scoping'}
								icon={'fa fa-search-plus'}
								text={
									'First, we understand your business problem and once we ascertain there is a fit for Machine Learning, we work in collaboration to chalk out a pathway, and list down the requirements.'
								}
							/>
							<Paragraph
								heading={'Design and Architecture'}
								icon={'fa fa-tachometer'}
								text={
									'Machine Learning solutions are based on data. If you have data needed to train the models, we will perform a primary analysis phase to find trends and correlations.'
								}
							/>
							<Paragraph
								heading={'Model Development'}
								icon={'fa fa-map-signs'}
								text={
									'We run hundreds of experiments in parallel to developing a machine learning model. A model is the backbone of a machine learning system – trained on past data it can predict the future trends or read the text or images.'
								}
							/>
							<Paragraph
								heading={'Platform Implementation'}
								icon={'fa fa-server'}
								text={
									'We connect the model with a RESTFUL API or a front-end application, developing all necessary features in an intuitive interface for users to access the model.'
								}
							/>
						</div>
					</div>
				</section>
			</React.Fragment>
		</div>
	);
}

export default ServicesDetails;
