import React from "react";
import s from "./PhotoGallery.module.scss";
import {ArrowUp} from "../Other/ArrowUp/ArrowUp";
import forest from "../Images/forest.jpg";
import forest1 from "../Images/forest1.jpg";
import forest2 from "../Images/forest2.jpg";
import forest3 from "../Images/forest3.jpg";


export const PhotoGallery = ({setStatusShowContacts}) => {

	const closeShowContact = () => setStatusShowContacts(false);

	return (
		<div className={s.photoWrapper} onClick={closeShowContact}>
			<div className={s.photos}>
				<div className={s.photosItem}>
					<img className={s.photo}
							 src={forest}
							 alt=""
					/>
				</div>
				<div className={s.photosItem}>
					<img className={s.photo}
							 src={forest1}
							 alt=""
					/>
				</div>
				<div className={s.photosItem}>
					<img className={s.photo}
							 src={forest2}
							 alt=""
					/>
				</div>
				<div className={s.photosItem}>
					<img className={s.photo}
							 src={forest3}
							 alt=""
					/>
				</div>
			</div>
			<ArrowUp />
		</div>
	)
};