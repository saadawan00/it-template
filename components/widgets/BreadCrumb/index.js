import Link from 'next/link';

function BreadCrumb(props) {
	const { page, isBlog, isServices } = props;
	return (
		<div className="container">
			<div className="row">
				<div className="col-sm-12 text-center">
					<h1>{page}</h1>
					<ol className="breadcrumb">
						<li className="breadcrumb-item first-item">
							<Link href="/">
								<a>Homepage</a>
							</Link>
						</li>
						{!!isServices && (
							<li className="breadcrumb-item first-item">
								<Link href="/Services">
									<a>Services</a>
								</Link>
							</li>
						)}
						{!!isBlog && (
							<li className="breadcrumb-item first-item">
								<Link href="/Blogs">
									<a>Blogs</a>
								</Link>
							</li>
						)}
						<li className="breadcrumb-item last-item">{page}</li>
					</ol>
				</div>
			</div>
		</div>
	);
}

export default BreadCrumb;
