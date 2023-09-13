import React from 'react';
import App from 'next/app';
import Head from 'next/head';

import Header from '../components/views/Header';
import Footer from '../components/views/Footer';
import Error404 from '../components/views/Error';

class MyApp extends App {
	render() {
		const { Component, pageProps } = this.props;

		return (
			<React.Fragment>
				<Head>
					<link rel="shortcut icon" href="/static/images/logo.png" />
				</Head>

				<div id="wrapper" className="dashboard">
					<Header />
					<main>
						{pageProps && pageProps.statusCode === 404 ? (
							<Error404 />
						) : (
							<Component {...pageProps} />
						)}
					</main>
					<Footer />
				</div>
			</React.Fragment>
		);
	}
}

export default MyApp;
