import React,{useState,useEffect} from "react";
import s from "./Contents.module.scss";
import forest from "../Images/forest.jpg";
import forest1 from "../Images/forest1.jpg";
import forest2 from "../Images/forest2.jpg";
import forest3 from "../Images/forest3.jpg";
import {ArrowUp} from "../Other/ArrowUp/ArrowUp";
import {withRouter} from "react-router-dom";





const Contents = ({setStatusShowContacts,...props}) => {

	let [finish,setFinish] = useState(null);
	let [start,setStart] = useState(null);
	const clearTouch = () => {
		setStart(null);
		setFinish(null);

	};
	useEffect(()=>{
		if(finish &&(start-finish)>100){
			clearTouch();
      props.history.push('/photo');
		}
	},[finish,start,props.history]);


	return (
		<div className={s.contentsWrapper} onClick={()=>setStatusShowContacts(false)}>
			<div className={s.contents}
					 onTouchEnd={(event) => {
						 setFinish(event.changedTouches[0].screenX);
					 }}
					 onTouchStart={(event) => {
						 setStart(event.changedTouches[0].screenX);
					 }}>
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
					<img className={s.contentsImg}  src={forest1} alt=""/>
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
					<img className={s.contentsImg}  src={forest2} alt=""/>
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
					<img className={s.contentsImg}  src={forest3} alt=""/>
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
			<ArrowUp />
		</div>
	)
};
export default withRouter(Contents)