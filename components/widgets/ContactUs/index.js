

function Contact(props) {
	const { type, description, detail, icon } = props;
	return (
        <div className="col-xs-12 col-12 col-lg-3 col-md-6 ">
            <div className="media text-left text-lg-left">
                <div className="icon-styled fs-40 colored mw-50">
                    <i className={icon} />
                </div>
                <div className="media-body">
                    <h5 className="   text-left text-lg-left ">
                        <span>{type} </span>
                    </h5>
                    <p>
                    {description}<br />
                    {detail}
                    </p>
                </div>
            </div>
        </div>
	);
}

export default Contact;






