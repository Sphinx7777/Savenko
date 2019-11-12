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

	let contactsWrapper = clName(
		{
			contactsWrapper: true,
			show: showContacts
		});

	const stopPropaganda = event => event.stopPropagation();

	return (
		<div className={contactsWrapper}
				 onClick={stopPropaganda}>
			<div className={s.contacts}>
				<div className={s.contactItem}>
					<img className={s.contactImg}
							 src={builder}
							 alt=""
					/>
					<span>
								 Савенко Роман Батькович
							 </span>
				</div>
				<a className={s.contactItem}
					 href="tel:+380500135935">
					<img className={s.contactImg}
							 src={vodafon}
							 alt=""
					/>
					<span>
						+38 050 013 59 35
					</span>
				</a>
				<a className={s.contactItem}
					 href="tel:+380684489801">
					<img className={s.contactImg}
							 src={kievstar_2}
							 alt=""
					/>
					<span>
						+38 068 448 98 01
					</span>
				</a>
				<a className={s.contactItem}
					 href="viber://chat?number=380684489801">
					<img className={s.contactImg}
							 src={viber}
							 alt=""
					/>
					<span>
						+38 068 448 98 01
					</span>
				</a>
				<a className={s.contactItem}
					 href="mailto:Spamoglot13@gmail.com">
					<img className={s.contactImg}
							 src={mail}
							 alt=""
					/>
					<span>
						Spamoglot13@gmail.com
					</span>
				</a>
				<div className={s.contactItem}>
					Прочее ....
				</div>
			</div>
		</div>
	)
};

