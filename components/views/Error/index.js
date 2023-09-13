import Link from 'next/link';

function Error() {
	return (
    <div className="error404">
		<section className="page_404 ds s-pt-175 s-pb-80 s-pt-sm-225 s-pb-sm-120 s-pt-lg-245 s-pb-lg-150 s-pt-xl-265 s-pb-xl-175 s-overlay pages-banner">
			<div className="container">
				<div className="row">
					<div className="col-12 column-main text-center">
						<div className="divider-md-100" />
						<div className="col-12 d-flex flex-column align-items-center">
							<div className="page-wrapper">
								<header className="page-header">
									<h3>404</h3>
									<p>
										Page Not
										<br />
										<span className="color-main">Found!</span>
									</p>
								</header>
								<div className="page-content">
									<p>
										Either something went wrong on the page doesn”t exist
										anymore.
									</p>
									<Link href="/">
										<a className="btn btn-underline">
											Go Home <i className="fa fa-chevron-right" />
										</a>
									</Link>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
    </div>
	);
}

export default Error;
