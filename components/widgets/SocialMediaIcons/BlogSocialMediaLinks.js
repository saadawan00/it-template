import React from 'react';

function BlogSocialMediaLinks(props) {
	const { link, platform} = props;

	return (
		<div className="apsc-each-profile">
			<a className={`apsc-${platform}-icon clearfix`} href={link} target="_blank">
				<div className="apsc-inner-block">
					<span className="social-icon">
						<i className={`fa fa-${platform} apsc-${platform}`} />
						<span className="media-name to-uppercase">{platform}</span>
					</span>
				</div>
			</a>
		</div>
	);
}

export default BlogSocialMediaLinks;
