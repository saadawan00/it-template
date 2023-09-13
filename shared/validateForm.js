import { assign } from 'lodash';

export const isRequired = (str = '') =>
	str !== null ? !(str.trim().length === 0) : false;

export const isEmail = (str = '') =>
	/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
		str
	);

export const isPhoneNum = num => (num ? num.length === 12 : false);

function validateField(field = {}, oFormData) {
	const tempFormData = assign({}, oFormData);
	const fieldValue = tempFormData[field].value;
	const rules = tempFormData[field].rules;
	for (let index = 0; index < rules.length; index++) {
		switch (rules[index]) {
			case 'isRequired':
				tempFormData[field].status = isRequired(String(fieldValue));
				break;
			case 'isEmail':
				tempFormData[field].status = isEmail(fieldValue);
				break;
			case 'isPhoneNum':
				tempFormData[field].status = isPhoneNum(fieldValue);
				break;
			default:
		}
		if (!tempFormData[field].status) {
			break;
		}
	}

	return tempFormData;
}

export default validateField;
