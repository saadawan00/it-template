import WhyUsItem from '../../../widgets/WhyUSItem';

function ChooseUs() {
	return (
		<section
			id="section-WhyUs"
			style={{ backgroundImage: 'url(/static/images/bg03.jpg)' }}
			className="ls ms s-pt-55 s-pb-55 s-pt-lg-100 s-pb-lg-100 s-pt-xl-150 s-pb-xl-145 s-parallax cover-background s-overlay s-overlay mobile-overlay"
		>
			<h6 className="d-none">Reasons</h6>
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-12 col-lg-6 ">
						<h3 className="special-heading text-center text-md-left">
							<span className="d-inline-block color-dark font-weight-regular border-left">
								Few Reasons
							</span>
						</h3>
						<h2 className="special-heading text-center text-md-left">
							<span className="colored d-inline-block font-weight-regular border-left">
								Why Choose Us
							</span>
						</h2>
						<WhyUsItem
							title={'Clients'}
							description={
								'We have successfully worked with organizations around the globe who have made a global impact in improving lives worldwide.'
							}
						/>
						<WhyUsItem
							title={'Projects'}
							description={
								'Our team of meticulous software engineers, top-notch designers and experienced project managers help to turn business ideas into extraordinary products which drive business values.'
							}
						/>
						<WhyUsItem
							title={'Reporting & Analysis'}
							description={
								'We use Agile Based Project Management approach with cloud based tools in order to ensure round the clock visibility.'
							}
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ChooseUs;
