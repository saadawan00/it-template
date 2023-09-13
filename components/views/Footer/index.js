import React, { useState, useEffect } from 'react';

import AddressItem from '../../widgets/AddressItem';
import SocialMediaIcons from '../../widgets/SocialMediaIcons';

function Footer() {
	const [scrollValue, setScrollValue] = useState(true);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
	}, []);

	const handleScroll = () => {
		const lastScrollY = window.scrollY;
		setScrollValue(lastScrollY);
	};

	const ScrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	const getYear = () => {
		let date = new Date();
		return date.getFullYear();
	}

	return (
		<div>
			<footer className="page_footer ds s-pt-60 s-pb-0 s-pt-xl-100 s-pb-xl-40 s-pt-md-90 s-pb-md-30">
				<div className="container">
					<div className="row">
						<div className="col-lg-7 text-center text-md-left">
							<div className="widget-odd widget-last widget-first widget-1 widget-theme-wrapper widget_no_background">
								<div id="mwt_bloginfo-2" className="widget widget_bloginfo">
									<h3 className="widget-title">about us</h3>
									<div className="description">
										Our tech-savvy geeks are committed to develop innovative
										software solutions to help you grow your business and get an
										edge over your contenders.
									</div>
									<SocialMediaIcons />
									<div className="icon-inline " style={{ margiTop: '20px' }}>
										<div className="icon-styled">
											<i className={`fa fa-envelope color-main fontsize_16`} />
										</div>
										<p style={{ marginTop: '3px' }}>
											<span className="color-darkgrey font-weight-regular">
												<strong>
													<a href="mailto:info@terabytes.info">
														info@terabytes.info
													</a>
												</strong>
											</span>
										</p>
									</div>
									{/* <Item value={'info@terabytes.info'} title={'Mail'} icon={'fa fa-envelope'} /> */}
								</div>
							</div>
						</div>
						{/* <AddressItem
							country={'Head Office (Germany)'}
							phone={'+49 1590 1622954'}
							// email={'example@example.com'}
							address={'Warschauer Platz 11-13, Berlin, Germany'}
						/>
						<AddressItem
							country={'Canada Office'}
							phone={'+1 (226) 260-3952'}
							// email={'example@example.com'}
							address={'2 Robert Speck Pkwy, Mississauga, Ontario, Canada'}
						/>
						<AddressItem
							country={'USA Office'}
							phone={'+1 (404) 861-4078'}
							// email={'example@example.com'}
							address={'Frost Ln Lithonia, Georgia, USA. '}
						/> */}
					</div>
				</div>
			</footer>
			{scrollValue >= 370 && (
				<div className="customer-service">
					<a onClick={ScrollToTop}>
						<span>
							<i className="fa fa-angle-up" aria-hidden="true" />
						</span>
					</a>
				</div>
			)}
			<section className="page_copyright ds ms s-pt-20 s-pb-20 s-pb-20 s-pb-20 s-pb-20 s-pb-20">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-sm-12 text-center">
							All Rights Reserved © {getYear()} Terabytes
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Footer;
