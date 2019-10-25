import React from "react";
import s from "./PhotoGallery.module.scss";
import {ArrowUp} from "../Other/ArrowUp/ArrowUp";



export const PhotoGallery = ({setStatusShowContacts}) => {

	return (
		<div className={s.photoWrapper} onClick={()=>setStatusShowContacts(false)}>
			<div className={s.photo}>
				<div className={s.photoItem}>
					фффффф  фффффф ффффффффф
				</div>
				<div className={s.photoItem}>
				фффффффф фффффффффффф фффф
				</div>
				<div className={s.photoItem}>
				фффффффффффф ффффффффф фффффф
				</div>
				<div className={s.photoItem}>
					ффффффффф фффффффффф ффффф
				</div>
			</div>
			<ArrowUp />
		</div>
	)
};