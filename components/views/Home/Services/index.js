import ServicesItem from '../../../widgets/ServicesItem';

function Services() {
	return (
		<section className="ds ms s-pt-60 s-pb-55 s-pt-lg-100 s-pb-lg-100 s-pt-xl-145 s-pb-xl-145">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-12 ">
						<div className="service-isotope isotope row masonry-layout c-gutter-30 c-mb-60 mb--60">
							<ServicesItem
								title={'Web Development'}
								icon={'fa fa-code fa-lg'}
								description={
									'This is the right place to get a productive and highly engaging web development solutions for your custom business needs.'
								}
							/>
							<ServicesItem
								title={'Mobile Development'}
								icon={'fa fa-mobile fa-2x'}
								description={
									'We help you redefine your ideas and help them convert into a highly engaging mobile application.'
								}
							/>
							<ServicesItem
								title={'SEO optimization'}
								icon={'fa fa-file-text-o fa-lg'}
								description={
									'We will help you increase the quantity of your website traffic by increasing the visibility of your website through our proven SEO optimization techniques.'
								}
							/>
							<ServicesItem
								title={'UI/UX Design'}
								icon={'fa fa-object-ungroup fa-lg'}
								description={
									'With our artistics and exquisite designers, we will help you convert your ideas into aesthetically designed frames, covering all your needs and specifications.'
								}
							/>
							<ServicesItem
								title={'Machine Learning'}
								icon={'fa fa-sitemap fa-sm'}
								description={
									'Our experienced data engineers have proficiency in deploying “auto-didact” software in complex environments which yield high and improved overall performance.'
								}
							/>
							<ServicesItem
								title={'Big Data'}
								icon={'fa fa-database fa-lg'}
								description={
									'If you are looking to systematically extract and analyze useful information from big datasets, we can get along!'
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
