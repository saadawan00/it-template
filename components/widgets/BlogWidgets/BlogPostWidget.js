import React from 'react';
import Link from 'next/link';

function BlogPostWidget(props) {
	const {
		title,
		tagList,
		majorTag,
		postDate,
		description,
		headerImage,
	} = props;

	return (
		<Link href="/Blogs/Post/ScrumLifecycle">
			<article className="vertical-item type-post ls readmore-hidden post-1637 post status-publish format-standard has-post-thumbnail hentry category-software tag-networking tag-security">
				<div className="item-media entry-thumbnail post-thumbnail  ">
					<img
						width={1660}
						height={800}
						src={headerImage}
						className="attachment-techup_rectangle size-techup_rectangle wp-post-image"
					/>
				</div>
				<span className="comments">
					<a href="">{majorTag}</a>
				</span>
				<div className="item-content item-content-under ls">
					<h2 className="mt-0 mb-10">
						<a href="" rel="bookmark">
							{title}
						</a>
					</h2>
					<div className="item-meta">
						<span>
							<a href="" rel="bookmark">
								<time
									className="published entry-date"
									dateTime="2019-05-17T14:06:05+00:00"
								>
									{postDate}
								</time>
							</a>
						</span>
					</div>
					<div className="entry-content mt-20">
						<p>{description}</p>
					</div>
					<div className="meta-wrap">
						<div className="tag-wrapper mt-30 mb--10">
							<p>
								<span className="tag-links cat-links">
									{tagList.map((item, index) => (
										<a href="" rel="tag" key={`tag - ${index}`}>
											{item}
										</a>
									))}
								</span>
							</p>
						</div>
					</div>
				</div>
			</article>
		</Link>
	);
}

export default BlogPostWidget;
