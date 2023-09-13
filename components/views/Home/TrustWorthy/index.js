import Link from 'next/link';

function TrustWorthy() {
	return (
		<section className="overflow-visible ds ms s-pt-55 s-pb-55 s-pt-md-90 s-pb-md-90 s-pt-lg-0 s-pb-lg-0">
			<div className="container">
				<div className="row">
					<div className="col-xs-12 col-12 col-lg-6 ">
						<img
							className="position-absolute absolute-img hidden-xs hidden-sm hidden-md left bottom"
							src="static/images/man.png"
							alt=""
						/>
					</div>

					<div className="col-xs-12 col-12 col-lg-6 text-center text-sm-left text-md-left ">
						<div className="fw-divider-space divider-lg-90 divider-xl-150" />
						<h1 className="special-heading text-center text-md-left ">
							<span className="d-inline-block bold">A team you can </span>
						</h1>
						<h2 className="special-heading text-center text-md-left ">
							<span className="d-inline-block color-main thin">Trust</span>
						</h2>
						<div className="fw-divider-space divider-20" />
						<h6 className="special-heading text-center text-md-left ">
							<span className="d-inline-block thin">
								We are a young and energetic team of enthusiastic professionals
								who believe in out-of-the-box solution. Our team has been
								motivated to meet the needs of our clients and to find ways that
								make things work differently.
							</span>
						</h6>
						<div className="fw-divider-space divider-50 divider-lg-70" />
						<div className=" several-buttons">
							<Link href="/ContactUs">
								<a className="btn btn-maincolor">
									<span>Start Now</span>
								</a>
							</Link>
							<Link href="/AboutUs">
								<a className="btn btn-outline-maincolor">
									<span>Learn More</span>
								</a>
							</Link>
						</div>
						<div className="fw-divider-space divider-lg-90 divider-xl-150" />
					</div>
				</div>
			</div>
		</section>
	);
}

export default TrustWorthy;
