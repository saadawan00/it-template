import ServicesItem from '../../../widgets/ServicesItem';

function Services() {
	return (
		<section className="ds ms s-pt-60 s-pb-55 s-pt-lg-100 s-pb-lg-100 s-pt-xl-145 s-pb-xl-145">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-12 ">
						<div className="service-isotope isotope row masonry-layout c-gutter-30 c-mb-60 mb--60">
							<ServicesItem
								title={'SaaS Companies'}
								icon={'fa fa-desktop fa-lg'}
								description={
									'We provide SaaS companies a solution to streamline operations, improve connectivity, optimise costs and give your business a competitive advantage.'
								}
							/>
							<ServicesItem
								title={'Financial Services'}
								icon={'fa fa-usd fa-2x'}
								description={
									'We provide robust solutions to the highly complex financial problems which have large data volumes, real time processing, unique business logic and licensing restrictions.'
								}
							/>
							<ServicesItem
								title={'Digital Enterprises'}
								icon={'fa fa-files-o fa-lg'}
								description={
									'Using technology for your business internal and external operations is what gives you an edge over your contenders in this highly competitive world.'
								}
							/>
							<ServicesItem
								title={'Health Care'}
								icon={'fa fa-heartbeat fa-lg'}
								description={
									'HealthTech is a highly specialized domain which requires deep knowledge of not only the industry and its ecosystem but also a sound understanding of its regulations and interoperability standards.'
								}
							/>
							<ServicesItem
								title={'Enterprise Solutions'}
								icon={'fa fa-cogs fa-sm'}
								description={
									'We help enterprises deliver their next big idea through our proven innovation and delivery framework. Whether you want a new start or you need to scale your development capability, we provide the firepower to help you succeed.'
								}
							/>
							<ServicesItem
								title={'Tech Startups'}
								icon={'fa fa-users fa-lg'}
								description={
									'We can not only help you develop your idea but we can also advise you on some important aspects as we have worked with some big startups and learned along the road.'
								}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
export default Services;
