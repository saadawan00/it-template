import React from 'react';
import Helmet from 'react-helmet';

import ServicesDetailsView from '../../../components/widgets/ServicesDetails';
import Paragraph from '../../../components/widgets/ServicesDetails/Paragraph';

function ServicesDetails() {
	return (
		<div>
			<Helmet>
				<title>UI/UX</title>
				<meta property="og:description" content="Services | UI/UX Page" />
			</Helmet>
			<React.Fragment>
				<ServicesDetailsView
					title={'UI/UX Design'}
					image={'/static/images/service05-1000x750.jpg'}
					details={
						'With our artistics and exquisite designers, we will help you convert your ideas into aesthetically designed frames, covering all your needs and specifications.'
					}
				/>
				<section className="ls s-pb-50">
					<div className="container">
						<div className="row" style={{ 'text-align': 'center' }}>
							<Paragraph
								heading={'User Research'}
								icon={'fa fa-hourglass-half'}
								text={
									'Before getting our hands grimy, we do broad research to develop your user personas, in order to map your product’s full customer journey.'
								}
							/>
							<Paragraph
								heading={'Rapid Prototyping'}
								icon={'fa fa-bullseye'}
								text={
									'We make models and test our thoughts with genuine clients. Along these lines we can truly get more feedback  about your forthcoming items ease of use.'
								}
							/>
							<Paragraph
								heading={'UX Design'}
								icon={'fa fa-link'}
								text={
									'We unite proficient client experience plan and first class innovation to convey convincing encounters that illuminate business difficulties and satisfy individuals.'
								}
							/>
							<Paragraph
								heading={'Development'}
								icon={'fa fa-terminal'}
								text={
									'Our product engineers work together with designers to guarantee that items we convey to our customers are immaculate as a matter of fact, plan and innovation points of view.'
								}
							/>
							<Paragraph
								heading={'Usability Testing'}
								icon={'fa fa-magic'}
								text={
									'We partner with our clients  to assemble items that address genuine client needs. This accentuation on human-focused plan implies that the items we manufacture convey convincing encounters.'
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
