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
					И Ф О
				</div>
				<div className={s.contactItem}>
					Телефон
				</div>
				<div className={s.contactItem}>
					Телефон2
				</div>
				<div className={s.contactItem}>
					Вайбер
				</div>
				<div className={s.contactItem}>
					Почта
				</div>
				<div className={s.contactItem}>
					Прочее ....
				</div>
			</div>
		</div>
	)
};


