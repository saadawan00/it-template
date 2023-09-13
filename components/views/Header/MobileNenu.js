import Link from 'next/link';
import React, { useState } from 'react';

function MobileMenu() {
	const [displayNavbar, setDisplayNavbar] = useState(false);
	const toggleNavbar = () => setDisplayNavbar(!displayNavbar);

	return (
		<div className="d-block d-xl-none">
			<div className="mobile_menu">
				<div className="mob_menu_container">
					<div className="mob_menu_logo"></div>
					<div className="burger_nav" onClick={toggleNavbar}>
						<div className="btn_nav">
							{!displayNavbar ? (
								<i className="fa fa-bars fa-2x white-coloring"></i>
							) : (
								<i className="fa fa-times fa-2x black-font"></i>
							)}
						</div>
					</div>
				</div>
			</div>

			{displayNavbar && (
				<>
					<div className="mob_nav">
						<div className="nav">
							<div className="mobMenu">
								<Link href="/SuccessStory">
									<a onClick={toggleNavbar}>Success Stories</a>
								</Link>
								<Link href="/Services">
									<a onClick={toggleNavbar}>Services</a>
								</Link>
								<Link href="/Technologies">
									<a onClick={toggleNavbar}>Technologies</a>
								</Link>
								<Link href="/AboutUs">
									<a onClick={toggleNavbar}>About Us</a>
								</Link>
								<Link href="/Blogs">
									<a onClick={toggleNavbar}>Blogs</a>
								</Link>
								<Link href="/Careers">
									<a onClick={toggleNavbar}>Careers</a>
								</Link>
								<Link href="/ContactUs">
									<a onClick={toggleNavbar}>Contact</a>
								</Link>
							</div>
						</div>
						<div
              className="mob_nav_positioning"
							onClick={toggleNavbar}
						>
							<i className="fa fa-times fa-2x black-font"></i>
						</div>
					</div>
				</>
			)}
		</div>
	);
}

export default MobileMenu;
