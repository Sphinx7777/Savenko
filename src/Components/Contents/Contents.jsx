import React from "react";
import s from "./Contents.module.scss";
import forest from "../Images/forest.jpg";





export const Contents = () => {

	return (
		<div className={s.contentsWrapper}>
			<div className={s.contents}>

					<img className={s.contentsImg}  src={forest} alt=""/>

				<div className={s.contentsItem}>
					ккккккккк кккккккккк кккк
				</div>
				<div className={s.contentsItem}>
				ккккккккк ккккккккк  кккккккккккк
				</div>
				<div className={s.contentsItem}>
				кккккккккк  ккккккк кккккк кккк
				</div>
			</div>
		</div>
	)
};