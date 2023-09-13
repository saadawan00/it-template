import {
	TwitterIcon,
	FacebookIcon,
	LinkedinIcon,
	WhatsappIcon,
	TwitterShareButton,
	LinkedinShareButton,
	FacebookShareButton,
	WhatsappShareButton,
} from 'react-share';

function SocialMediaLink(props) {
	const { url } = props;

	const shareUrl = `https://www.terabytes.info/Blogs/Post/${url}`;

	return (
		<div className="post-social-media text-right mb-2">
			<LinkedinShareButton url={shareUrl}>
				<a className="pr-1 pointer">
					<LinkedinIcon size={24} round={true} />
				</a>
			</LinkedinShareButton>
			<TwitterShareButton url={shareUrl}>
				<a className="pr-1 pointer">
					<TwitterIcon size={24} round={true} />
				</a>
			</TwitterShareButton>
			<FacebookShareButton url={shareUrl}>
				<a className="pr-1 pointer">
					<FacebookIcon size={24} round={true} />
				</a>
			</FacebookShareButton>
			<WhatsappShareButton url={shareUrl}>
				<a className="pr-1 pointer">
					<WhatsappIcon size={24} round={true} />
				</a>
			</WhatsappShareButton>
		</div>
	);
}

export default SocialMediaLink;
