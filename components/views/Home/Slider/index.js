import Link from 'next/link';

function Slider() {
	return (
		<div className="slider-wrapper" id="home">
			<div className="slider-inner-wrapper">
				<div className="slider-content-wrapper">
					<div className="borderd-header">
						<div className="Slider-Main-Header">
							Adaptive to your business
							<div className="Slider-Main-Sub-Header">
								and empowering your digital future.
							</div>
							<Link href="/ContactUs">
								<a className="btn btn-maincolor">
									<span>Toss Around</span>
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Slider;
