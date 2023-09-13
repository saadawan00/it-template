import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const initialProps = await Document.getInitialProps(ctx);
		return { ...initialProps };
	}

	render() {
		return (
			<Html>
				<Head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />

					<link rel="stylesheet" type="text/css" href="/static/css/fonts.css" />
					<link rel="stylesheet" type="text/css" href="/static/css/next.css" />
					<link rel="stylesheet" type="text/css" href="/static/css/main.css" />
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/css/fonts2.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/css/icomoon.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/css/font-awesome.css"
					/>
					<link
						rel="stylesheet"
						type="text/css"
						href="/static/css/bootstrap.min.css"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
