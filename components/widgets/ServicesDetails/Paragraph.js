import AboutItem from "../AboutItem";

function Paragraph(props) {
	const { heading, text, icon } = props;
	return (
		<div className="col-xs-12 col-12 col-lg-4 p-4">
			<div className="special-heading text-left text-md-left">
			<AboutItem
				icon={icon}
				title={heading}		
			/>
			</div>
			{/* <h5 className="special-heading text-left text-md-left">
				<span className="d-inline-block">{heading}</span>
			</h5> */}
			<div className="fw-divider-space top-margin-25" />
			<p style={{"text-align":"center"}} >{text}</p>
		</div>
	);
}

export default Paragraph;
