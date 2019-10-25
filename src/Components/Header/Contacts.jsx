import React from "react";
import s from "./Header.module.scss";
import classNames from 'classnames/bind';

let clName = classNames.bind(s);


export const Contacts = ({showContacts}) => {
	let contactsWrapper = clName({
		contactsWrapper: true,
		show: showContacts
	});
	return (
		<div className={contactsWrapper} onClick={(event)=>event.stopPropagation()}>
			<div className={s.contacts}>
				<div className={s.contactItem}>
					dfdrfdrdr dfddr fdsfdfdfdfdf
				</div>
				<div className={s.contactItem}>
					drerererer
				</div>
				<div className={s.contactItem}>
					erererere
				</div>
				<div className={s.contactItem}>
					erererere
				</div>
			</div>
		</div>
	)
};


