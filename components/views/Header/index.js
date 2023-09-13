import Link from 'next/link';

import MobileMenu from './MobileNenu';

function Header() {
	return (
		<div className="page_header_wrapper ds affix-top-wrapper fixed-top">
			<header className="page_header without-dots justify-nav-center ds s-overlay affix-top">
				<div className="d-none d-lg-block">
					<div className="web-header">
						<div className="width-20">
							<Link href="/">
								<a rel="home" className="logo logo_image_and_text">
									<img
										className="logo-color"
										src="/static/images/logo.png"
										alt="terabytes"
									/>
									<span className="logo-text">TeraBytes</span>
								</a>
							</Link>
						</div>
						<div className="col-9 flex-menu d-none d-lg-block width-70">
							<nav className="top-nav">
								<ul
									id="menu-main_menu"
									className="sf-menu nav sf-js-enabled sf-arrows touch-action"
								>
									<li className="menu-item menu-item-_type menu-item-object-page">
										<Link href="/SuccessStory">
											<a>Success Stories</a>
										</Link>
									</li>
									<li className="menu-item menu-item-_type menu-item-object-page">
										<Link href="/Services">
											<a>Services</a>
										</Link>
									</li>
									<li className="menu-item menu-item-_type menu-item-object-page">
										<Link href="/Technologies">
											<a>Technologies</a>
										</Link>
									</li>
									<li className="menu-item menu-item-_type menu-item-object-page">
										<Link href="/Blogs">
											<a>Blogs</a>
										</Link>
									</li>
									<li className="menu-item menu-item-_type menu-item-object-page">
										<Link href="/AboutUs">
											<a>About</a>
										</Link>
									</li>
									<li className="menu-item menu-item-_type menu-item-object-page">
										<Link href="/Careers">
											<a>Careers</a>
										</Link>
									</li>
									<li className="menu-item menu-item-_type menu-item-object-page">
										<Link href="/ContactUs">
											<a className="btn btn-maincolor text-center p-3 mt-2">
												<span>Contact</span>
											</a>
										</Link>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</div>
				<div className="d-block d-lg-none">
					<div className="d-flex flex-row justify-content-between width-95">
						<div>
							<Link href="/">
								<a rel="home" className="logo logo_image_and_text">
									<img
										className="logo-color"
										src="/static/images/logo.png"
										alt="terabytes"
									/>
									<span className="logo-text">TeraBytes</span>
								</a>
							</Link>
						</div>
						<div className="mt-2 mr-2">
							<MobileMenu />
						</div>
					</div>
				</div>
			</header>
		</div>
	);
}

export default Header;
