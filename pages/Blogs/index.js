import React from 'react';
import Helmet from 'react-helmet';

import BreadCrumb from '../../components/widgets/BreadCrumb';
import BlogAside from '../../components/widgets/BlogWidgets/BlogAside';
import BlogPostWidget from '../../components/widgets/BlogWidgets/BlogPostWidget';

function Blogs() {
	return (
		<div>
			<Helmet>
				<title>Blogs</title>
				<meta property="og:title" content={'Blogs'} />
				<meta
					property="og:image"
					content={`https://res.cloudinary.com/dtgjzzpv8/image/upload/v1583616441/blogs/pywwspzg5xl5y1ujo0ll.jpg`}
				/>
			</Helmet>

			<div>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb page="Blogs" />
				</section>

				<section className="ls page_content s-py-60 s-py-md-90 s-py-xl-150 c-gutter-60">
					<div className="container">
						<div className="row">
							<div className="col-12 col-xs-12 col-lg-7 col-xl-8 column-main">
								<BlogPostWidget
									id={'scrum_lifecycle'}
									majorTag="Business"
									postDate="March 08, 2020"
									headerImage="https://res.cloudinary.com/dtgjzzpv8/image/upload/v1583616441/blogs/pywwspzg5xl5y1ujo0ll.jpg"
									title="Scrum Lifecycle - The Incremental Approach Bringing Expected Results"
									tagList={['Scrum', 'Project Management']}
									description="Scrum is probably the most wide-spread Agile framework today. It is considered an upgrade compared to traditional product development practices and is recognized by professionals from various industries all over the globe. Despite the fact the Scrum idea first emerged in 1986, it has gained the greatest popularity in this era of technological revolution. "
								/>
							</div>

							<BlogAside
								categories={[
									'Digital',
									'Networking',
									'New',
									'Security',
									'Software',
									'Project Management',
								]}
								popularPost={[
									{
										thumbnail:
											'https://res.cloudinary.com/dtgjzzpv8/image/upload/v1583616441/blogs/pywwspzg5xl5y1ujo0ll.jpg',
										title:
											'Scrum Lifecycle - The Incremental Approach Bringing Expected Results',
										date: 'March 08, 2020',
									},
								]}
							/>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default Blogs;
