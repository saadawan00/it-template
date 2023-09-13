import React from 'react';
import { map } from 'lodash';

import BlogSocialMediaLinks from '../../widgets/SocialMediaIcons/BlogSocialMediaLinks';

function BlogAside(props) {
	const { categories, popularPost } = props;

	return (
		<aside className="col-12 col-xs-12 col-lg-5 col-xl-4 column-sidebar">
			<div className="widget-even widget-2 widget-theme-wrapper widget_no_background">
				<div id="categories-2" className="links-grey widget widget_categories">
					<h3 className="widget-title">Categories</h3>
					<ul>
						{categories.map((item, index) => (
							<li className="cat-item" key={`cat-${index}`}>
								<a href="">{item}</a>
							</li>
						))}
					</ul>
				</div>
			</div>
			<div className="widget-odd widget-3 widget-theme-wrapper widget_no_background">
				<div id="apsc_widget-2" className="widget widget_apsc_widget">
					<div className="apsc-icons-wrapper clearfix apsc-theme-4">
						<BlogSocialMediaLinks
							platform="facebook"
							link="https://www.facebook.com/infoterabytes/"
						/>
						<BlogSocialMediaLinks
							platform="twitter"
							link="https://www.twitter.com/"
						/>
						<BlogSocialMediaLinks
							platform="linkedin"
							link="https://www.linkedin.com/company/terabytes-inc/about/"
						/>
					</div>
				</div>
			</div>
			<div className="widget-even widget-4 widget-theme-wrapper widget_no_background">
				<div className="widget widget_popular_entries">
					<h3 className="widget-title">Popular Posts</h3>
					<ul className="list-unstyled">
						{map(popularPost, ({ thumbnail, title, date }, index) => (
							<li
								key={`post-${index}`}
								className="media post type-post status-publish format-video has-post-thumbnail hentry category-security tag-networking post_format-post-format-video"
							>
								<a href="" className="media-left">
									<img
										width={150}
										height={150}
										src={thumbnail}
										sizes="(max-width: 150px) 100vw, 150px"
										className="attachment-thumbnail size-thumbnail wp-post-image"
									/>
								</a>
								<div className="media-body">
									<h4>
										<a className="mb-2" href="">
											{title}
										</a>
									</h4>
									<div className="item-meta">
										<span className="widget-post-date">
											<i className="fa fa-clock-o color-main mr-2" />
											{date}
										</span>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</div>
		</aside>
	);
}

export default BlogAside;
