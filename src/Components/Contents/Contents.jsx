import React from "react";
import s from "./Contents.module.scss";
import forest from "../Images/forest.jpg";
import arrow_up from "../Images/arrow_up.ico";
let toTheTop = () => {
	window.scrollTo(0, 0);
};



export const Contents = ({setStatusShowContacts}) => {

	return (
		<div className={s.contentsWrapper} onClick={()=>setStatusShowContacts(false)}>
			<div className={s.contents} >
				<div className={s.contentsItem}>
					<img className={s.contentsImg}  src={forest} alt=""/>
					<div className={s.contentsDescription}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi error in ullam unde! Aliquam
						consectetur dignissimos doloribus nihil quis, quod suscipit temporibus totam voluptatum! Lorem
						ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, doloribus esse impedit
						iste quis tenetur voluptate! Adipisci aliquid cupiditate, dolorem, doloremque dolores esse expedita id
						ipsa iste labore quaerat quo quos rem reprehenderit sunt! Ab corporis, dignissimos distinctio ea esse
						excepturi impedit laudantium non odio quas repellat sequi veniam.
					</div>
				</div>
				<div className={s.contentsItem}>
					<img className={s.contentsImg}  src={forest} alt=""/>
					<div className={s.contentsDescription}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi error in ullam unde! Aliquam
						consectetur dignissimos doloribus nihil quis, quod suscipit temporibus totam voluptatum! Lorem
						ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, doloribus esse impedit
						iste quis tenetur voluptate! Adipisci aliquid cupiditate, dolorem, doloremque dolores esse expedita id
						ipsa iste labore quaerat quo quos rem reprehenderit sunt! Ab corporis, dignissimos distinctio ea esse
						excepturi impedit laudantium non odio quas repellat sequi veniam.
					</div>
				</div>
				<div className={s.contentsItem}>
					<img className={s.contentsImg}  src={forest} alt=""/>
					<div className={s.contentsDescription}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi error in ullam unde! Aliquam
						consectetur dignissimos doloribus nihil quis, quod suscipit temporibus totam voluptatum! Lorem
						ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, doloribus esse impedit
						iste quis tenetur voluptate! Adipisci aliquid cupiditate, dolorem, doloremque dolores esse expedita id
						ipsa iste labore quaerat quo quos rem reprehenderit sunt! Ab corporis, dignissimos distinctio ea esse
						excepturi impedit laudantium non odio quas repellat sequi veniam.
					</div>
				</div>
				<div className={s.contentsItem}>
					<img className={s.contentsImg}  src={forest} alt=""/>
					<div className={s.contentsDescription}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi error in ullam unde! Aliquam
						consectetur dignissimos doloribus nihil quis, quod suscipit temporibus totam voluptatum! Lorem
						ipsum dolor sit amet, consectetur adipisicing elit. Alias consectetur, doloribus esse impedit
						iste quis tenetur voluptate! Adipisci aliquid cupiditate, dolorem, doloremque dolores esse expedita id
						ipsa iste labore quaerat quo quos rem reprehenderit sunt! Ab corporis, dignissimos distinctio ea esse
						excepturi impedit laudantium non odio quas repellat sequi veniam.
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab eligendi error in ullam unde! Aliquam
						consectetur dignissimos doloribus nihil quis, quod suscipit temporibus totam voluptatum! Lorem

					</div>
				</div>
			</div>
			<img className={s.arrowUp} src={arrow_up} alt="" onClick={toTheTop}/>
		</div>
	)
};