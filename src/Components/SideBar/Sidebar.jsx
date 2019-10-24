import s from "./SideBar.module.scss";
import React from "react";
import {NavLink} from "react-router-dom";


export const SideBar = () => {
	return (
		<div className={s.sideBarWrapper}>
			<div className={s.sideBar}>
				<NavLink className={s.sideBarItem} activeClassName={s.activeItem} to='/'>Содержимое</NavLink>
				<div> </div>
				<NavLink className={s.sideBarItem} activeClassName={s.activeItem} to='/photo'>Фотогалерея</NavLink>
			</div>

		</div>
	)
};

