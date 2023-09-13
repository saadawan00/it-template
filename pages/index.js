import React, { Fragment } from 'react';
import Head from 'next/head';

import Works from '../components/views/Home/Works';
import Slider from '../components/views/Home/Slider';
import Services from '../components/views/Home/Services';
import ChooseUs from '../components/views/Home/ChooseUs';
import WhoWeServe from '../components/views/Home/WhoWeServe';
import TrustWorthy from '../components/views/Home/TrustWorthy';
import FeaturedWork from '../components/views/Home/FeaturedWork';

function Home() {
	return (
		<Fragment>
			<Head>
				<title>Terabytes inc.</title>
			</Head>
			<div className="fw-page-builder-content">
				<Slider />
				<Works />
				<Services />
				<ChooseUs />
				<WhoWeServe />
				<FeaturedWork />
				<TrustWorthy />
			</div>
		</Fragment>
	);
}

export default Home;
