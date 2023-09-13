import React from 'react';
import Helmet from 'react-helmet';

import list from '../../../shared/data/blogPosts';

import BreadCrumb from '../../../components/widgets/BreadCrumb';
import BlogAside from '../../../components/widgets/BlogWidgets/BlogAside';
import SocialMediaLinks from '../../../components/widgets/SocialMediaShare';

function BlogPost() {
	const {
		id,
		title,
		category,
		date,
		tags,
		headerImage,
		para1,
		para2,
		heading3,
		heading4,
		heading5,
		para3,
		quote,
		quoteAuthor,
		quoteDate,
		para4,
		para5,
	} = list[0];

	return (
		<div>
			<Helmet>
				<title>{title}</title>
				<meta property="og:image" content={headerImage} />
			</Helmet>
			<div>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb isBlog={true} page={title} />
				</section>

				<section className="ls page_content s-py-60 s-py-md-90 s-py-xl-150 c-gutter-60">
					<div className="container">
						<div className="row">
							<div className="col-12 col-xs-12 col-lg-7 col-xl-8 column-main">
								<article className="vertical-item single-post  post-1637 post type-post status-publish format-standard has-post-thumbnail hentry category-software tag-networking tag-security">
									<div className="item-media entry-thumbnail post-thumbnail  ">
										<img
											width={1920}
											height={1280}
											sizes="(max-width: 1920px) 100vw, 1920px"
											src={headerImage}
											className="attachment-post-thumbnail: size-post-thumbnail: wp-post-image"
										/>
									</div>
									<span className="comments">
										<a href="">{category}</a>
									</span>
									<div className="item-content item-content-under ls ">
										<div className="item-meta ">
											<span>
												<a href="" rel="bookmark">
													<time
														className="published entry-date"
														dateTime="2019-05-17T14:06:05+00:00"
													>
														{date}
													</time>
												</a>
											</span>
										</div>

										<div className="entry-content mt-20">
											<p>{para1}</p>
											<p>{para2}</p>
											<br />
											{!!heading3 && <h5>{heading3}</h5>}
											<p>{para3}</p>
											{!!quote && (
												<blockquote>
													<p>{quote}</p>
													<footer>
														By {quoteAuthor}
														<br />
														{quoteDate}
													</footer>
												</blockquote>
											)}
											<br />
											{!!heading4 && <h5>{heading4}</h5>}
											<p dangerouslySetInnerHTML={{ __html: para4 }} />
											{!!heading5 && <h5>{heading5}</h5>}
											<p dangerouslySetInnerHTML={{ __html: para5 }} />
										</div>

										<div className="meta-wrap">
											<div className="tag-wrapper mt-20 mb--10">
												<SocialMediaLinks url={id} />
											</div>
										</div>

										<div className="meta-wrap">
											<div className="tag-wrapper mt-20 mb--10">
												<p>
													<span className="tag-links cat-links">
														{tags.map((tag, index) => (
															<a href="" rel="tag" key={index}>
																{tag}
															</a>
														))}
													</span>
												</p>
											</div>
										</div>
									</div>
								</article>
							</div>

							<BlogAside
								categories={[
									'Digital',
									'Networking',
									'New',
									'Security',
									'Software',
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

export default BlogPost;
