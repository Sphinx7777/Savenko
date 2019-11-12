import React from "react";
import s from "./Header.module.scss";
import logo from "../Images/logo.ico";
import contacts from "../Images/contacts.ico";
import {Contacts} from "./Contacts";


export const Header = ({setStatusShowContacts, showContacts}) => {

	const toggleShowContacts = () => setStatusShowContacts(!showContacts);

	return (
		<div className={s.headerWrapper}>
			<div className={s.header}>
				<img className={s.headerLogo}
						 src={logo}
						 alt=""
				/>
				<div className={s.headerTitle}>
					Savenko & Co...
				</div>
				<div className={s.headerContactsBtnMenu}
						 onClick={toggleShowContacts}>
					<img className={s.contactsBtnImg}
							 src={contacts}
							 alt=""
					/>
					<span>
						Контакты
					</span>
				</div>
			</div>
			<Contacts {...{showContacts}}/>
		</div>
	)
};



