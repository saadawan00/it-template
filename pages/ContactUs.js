import React, { useState } from 'react';
import Helmet from 'react-helmet';
import { get, cloneDeep, assign } from 'lodash';

import oFormSchema from '../shared/formSchema';
import validateField from '../shared/validateForm';

import Contact from '../components/widgets/ContactUs';
import BreadCrumb from '../components/widgets/BreadCrumb';
import ContactPopUp from '../components/widgets/ContactPopUp';

function ContactUs() {
	const [valueState, handleValue] = useState('');
	const [displayModal, setDisplayModal] = useState(false);
	const [formData, setFormData] = useState(cloneDeep(oFormSchema));

	const updateFormData = formData => setFormData(formData);

	function validateFormData(oFormData = {}) {
		let validateFlag = true;
		Object.keys(oFormData).forEach(item => {
			const tempFormData = validateField(item, oFormData);
			setFormData(tempFormData);
			validateFlag = tempFormData[item].status && validateFlag;
		});

		return validateFlag ? true : false;
	}

	async function handleSubmitForm() {
		const oFormData = {
			name: get(formData, 'name.value'),
			email: get(formData, 'email.value'),
			phone: get(formData, 'phone.value'),
			message: get(formData, 'message.value'),
		};

		const body = JSON.stringify({ text: JSON.stringify(oFormData) });
		return await fetch(
			'https://hooks.slack.com/services/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',
			{
				'Content-type': 'application/json',
				method: 'POST',
				body: `${body}`,
			}
		);
	}

	function handleChange(event) {
		!!event.target.value && handleValue(event.target.value);
		const { value, name } = event.target;
		if (!name) return;
		const tempFormData = assign({}, formData);
		if (tempFormData[name]) {
			tempFormData[name].value = value;
		}
		updateFormData(tempFormData);
	}

	function handleSubmit(event) {
		event.preventDefault();
		if (validateFormData(formData)) {
			handleSubmitForm();
			setFormData(cloneDeep(oFormSchema));
			setDisplayModal(!displayModal);
		}
	}
	return (
		<div>
			<Helmet>
				<title>Contact Us</title>
				<meta property="og:image" content="/static/images/map.png" />
			</Helmet>
			<React.Fragment>
				<section className="page_title ds s-pt-265 s-pb-90 s-pt-xl-235 s-pb-xl-90 s-pt-md-265 s-pb-90 s-pt-lg-225 s-parallax cover-background s-overlay pages-banner">
					<BreadCrumb page="Contact Us" />
				</section>
				<div className="fw-page-builder-content">
					<section className="ls c-mb-40 s-pt-60 s-pb-10 s-pt-lg-100 s-pb-lg-50">
						<div className="container">
							<div className="row justify-content-center">
								{/* <Contact
									type={'Phone '}
									description={'Call customer services '}
									detail={'on +49 15 901622954'}
									icon={'fa fa-phone'}
								/>
								<Contact
									type={'Address '}
									description={'Warschauer Platz 11-13, '}
									detail={'Berlin, DE 10245 '}
									icon={'fa fa-map-marker'}
								/> */}
								<Contact
									type={'Email Address '}
									description={'info@terabytes.info'}
									icon={'fa fa-envelope-o'}
								/>
								<Contact
									type={'Opening Hours '}
									description={'24/7, round the clock'}
									icon={'ico ico-clock'}
								/>
							</div>
						</div>
					</section>
					<section className="container-px-0 ls ms c-gutter-60 s-pt-0 s-pb-0">
						<div className="container-fluid">
							<div className="row align-items-center">
								<div className="col-xs-12 col-12 col-lg-6 ">
									<img src="static/images/map.png" />
								</div>
								<div className="col-xs-12 col-12 col-lg-4 col-lg-5 col-xl-4 ">
									<div className="p-30    ">
										<div className="fw-divider-space hidden-lg hidden-xl top-margin-10" />
										<div className="form-wrapper  ">
											<form>
												<div className="wrap-forms">
													<div className="row c-gutter-30 c-mb-30" />
													<div className="row c-gutter-30 c-mb-30">
														<div className="col-xs-12 col-12 form-builder-item">
															<div className="form-group has-placeholder">
																<div className="input-wrapper">
																	<input
																		type="text"
																		id="name"
																		name="name"
																		placeholder="Name"
																		required={true}
																		value={get(formData, 'name.value')}
																		onChange={handleChange}
																		className={`${
																			!get(formData, 'name.status')
																				? 'input-error'
																				: null
																		}`}
																	/>
																	<i className="fa fa-user negative-margined" />
																</div>
															</div>
														</div>
													</div>
													<div className="row c-gutter-30 c-mb-30">
														<div className="col-xs-12 col-12 form-builder-item">
															<div className="form-group has-placeholder">
																<div className="input-wrapper">
																	<input
																		id="email"
																		type="text"
																		name="email"
																		placeholder="Email"
																		required={true}
																		value={get(formData, 'email.value')}
																		onChange={handleChange}
																		className={`${
																			!get(formData, 'email.status')
																				? 'input-error'
																				: null
																		}`}
																	/>
																	<i className="fa fa-envelope negative-margined" />
																</div>
															</div>
														</div>
													</div>
													<div className="row c-gutter-30 c-mb-30">
														<div className="col-xs-12 col-12 form-builder-item">
															<div className="form-group has-placeholder">
																<div className="input-wrapper">
																	<input
																		id="phone"
																		type="text"
																		name="phone"
																		placeholder="Phone"
																		required={true}
																		value={get(formData, 'phone.value')}
																		onChange={handleChange}
																		className={`${
																			!get(formData, 'phone.status')
																				? 'input-error'
																				: null
																		}`}
																	/>
																	<i className="fa fa-phone negative-margined" />
																</div>
															</div>
														</div>
													</div>
													<div className="row c-gutter-30 c-mb-30">
														<div className="col-xs-12 col-12 form-builder-item">
															<div className="form-group has-placeholder">
																<div className="input-wrapper">
																	<textarea
																		id="message"
																		name="message"
																		placeholder="How can I help you?"
																		required={true}
																		value={get(formData, 'message.value')}
																		onChange={handleChange}
																		className={`${
																			!get(formData, 'message.status')
																				? 'textarea-error'
																				: null
																		}`}
																	/>
																</div>
															</div>
														</div>
													</div>
													<div className="row c-gutter-30 c-mb-30" />
												</div>
												<div className="wrap-forms">
													<div className="row c-gutter-30 c-mb-30">
														<div className="col-12 col-sm-12 mb-0 mt-45">
															<a
																className="btn btn-maincolor submit-button"
																onClick={handleSubmit}
															>
																<span>Submit</span>
															</a>
														</div>
													</div>
												</div>
											</form>
										</div>
										<div className="fw-divider-space divider-30 divider-lg-20" />
									</div>
								</div>
							</div>
						</div>
					</section>
					{!!displayModal ? <ContactPopUp {...{ setDisplayModal }} /> : null}
				</div>
			</React.Fragment>
		</div>
	);
}

export default ContactUs;
