import Item from './item';

function AddressItem(props) {
	const { address, phone, email, country = 'Germany' } = props;
	return (
		<div className="col-lg-3 text-center text-md-left">
			<div className="widget-odd widget-last widget-first widget-1 widget-theme-wrapper widget_no_background">
				<div id="mwt_bloginfo-4" className="widget widget_bloginfo">
					<h3 className="widget-title">{`${country}`}</h3>
					<ul className="list-unstyled  count">
						<li>
							<Item
								value={address}
								title={'Address'}
								icon={'fa fa-map-marker'}
							/>
						</li>
						<li>
							<Item value={phone} title={'Phone'} icon={'fa fa-phone'} />
						</li>
						{/* <li>
							<Item value={email} title={'Mail'} icon={'fa fa-envelope'} />
						</li> */}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default AddressItem;
