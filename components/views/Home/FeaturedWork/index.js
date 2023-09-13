import FeaturedIcon from '../../../widgets/FeaturedIcon';

function FeaturedWork() {
	return (
		<section className="ls ms s-pt-50 s-pb-55 s-pt-lg-100 s-pb-lg-100 s-pt-xl-150 s-pb-xl-145 white-background">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-12">
						<h1 className="special-heading text-center text-md-center">
							<span className="d-inline-block font-weight-medium border-left pt-2">
								<span className="colored">Our </span> Featured Work
							</span>
						</h1>
						<div className="fw-divider-space divider-30 divider-lg-70"/>
						<div className="row text-center justify-content-center">
							<FeaturedIcon icon="static/images/build.png" />		
							<FeaturedIcon imageWidth={"70"} icon="static/images/readout_Logo.png" />
							<FeaturedIcon icon="static/images/skyline.png" />
							<FeaturedIcon icon="static/images/lrmis.png" />
							<FeaturedIcon icon="static/images/limetac.png" />
							<FeaturedIcon icon="static/images/telus.png" />
							<FeaturedIcon icon="static/images/widespread-logo.png" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default FeaturedWork;
