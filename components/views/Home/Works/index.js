import WorksItem from '../../../widgets/WorksItem';

function Works(props) {
	return (
		<section
			id="section-24ca95c"
			className="overflow-visible ls -pt-55 s-pb-55 s-pt-lg-50 s-pb-lg-100 s-pt-xl-100 s-pb-xl-145"
		>
			<h6 className="d-none">Steps</h6>
			<div className="container">
				<div className="row align-items-center">
					<div className="col-xs-12 col-12 ">
						<h1 className="special-heading text-center text-md-center ">
							<span className="d-inline-block font-weight-medium border-left pt-2">
								<span className="colored">How</span> We Work
							</span>
						</h1>

						<div className="fw-divider-space divider-0 divider-lg-70" />
						<div className="steps ">
							<WorksItem
								title={'Planning'}
								image={'static/images/step01-400x400.jpg'}
							/>
							<WorksItem
								title={'Design'}
								image={'static/images/blog02-400x400.jpg'}
							/>
							<WorksItem
								title={'Development'}
								image={'static/images/step03-400x400.jpg'}
							/>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Works;
