import React from "react";
import s from "./Header.module.scss";
import classNames from 'classnames/bind';
import builder from '../Images/builder.png';
import vodafon from '../Images/vodafon.png';
import kievstar_2 from '../Images/kievstar_2.jpeg';
import viber from '../Images/viber.ico';
import mail from '../Images/mail.ico';

let clName = classNames.bind(s);


export const Contacts = ({showContacts}) => {
	let contactsWrapper = clName({
		contactsWrapper: true,
		show: showContacts
	});
	return (
		<div className={contactsWrapper} onClick={(event) => event.stopPropagation()}>
			<div className={s.contacts}>
				<div className={s.contactItem}>
					<img className={s.contactImg} src={builder} alt=""/><span>Савенко Роман Батькович</span>
				</div>
				<a className={s.contactItem} target='_blank' rel='noopener noreferrer'
					 href="tel:+380663952488">
					<img className={s.contactImg} src={vodafon} alt=""/>
					<span>+38 066 395 24 88</span>
				</a>
				<a className={s.contactItem} target='_blank' rel='noopener noreferrer'
					 href="tel:+380663952488">
					<img className={s.contactImg} src={kievstar_2} alt=""/>
					<span>+38 066 395 24 88</span>
				</a>
				<a className={s.contactItem} target='_blank' rel='noopener noreferrer'
					 href="viber://add?number=+380663952488">
					<img className={s.contactImg} src={viber} alt=""/>
					<span>+38 066 395 24 88</span>
				</a>
				<a className={s.contactItem} target='_blank' rel='noopener noreferrer'
					 href="mailto:Spamoglot13@gmail.com">
					<img className={s.contactImg} src={mail} alt=""/>
					<span>Spamoglot13@gmail.com</span>
				</a>
				<div className={s.contactItem}>
					Прочее ....
				</div>
			</div>
		</div>
	)
};

