import React from 'react';
import Helmet from 'react-helmet';

import ServicesDetailsView from '../../../components/widgets/ServicesDetails';
import Paragraph from '../../../components/widgets/ServicesDetails/Paragraph';

function ServicesDetails() {
	return (
		<div>
			<Helmet>
				<title>SEO</title>
				<meta property="og:description" content="Services | SEO Page" />
			</Helmet>
			<React.Fragment>
				<ServicesDetailsView
					title={'SEO optimization'}
					image={'/static/images/service02-1000x750.jpg'}
					details={
						'We will help you increase the quantity of your website traffic by increasing the visibility of your website through our proven SEO optimization techniques.'
					}
				/>
				<section className="ls s-pb-50">
					<div className="container">
						<div className="row">
							<Paragraph
								heading={'User Experience'}
								icon={'fa fa-object-group'}
								text={
									'Nobody wants to land on a spammy website that takes years to load, right? That’s bound to lead to a high bounce rate. Moreover, there is evidence to suggest that the search engine giant does reward sites that have low bounce rates with higher page ranking.'
								}
							/>
							<Paragraph
								heading={'On Page SEO'}
								icon={'fa fa-paper-plane'}
								text={
									'While the times where just delivering the best-quality content would make you stand out from the crowd are long gone, our on-page SEO techniques will help you achieve more audience.'
								}
							/>
							<Paragraph
								heading={'Off Page SEO'}
								icon={'fa fa-bolt'}
								text={
									'Off-page SEO is not only about the links, it goes deeper than that. Depending on your marketing goals, we’ll help you develop a perfect strategy to cover the most important part of SEO optimization.'
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
