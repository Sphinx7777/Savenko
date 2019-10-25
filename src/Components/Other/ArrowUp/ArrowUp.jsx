import React,{useState} from "react";
import s from "./ArrowUp.module.scss";
import arrow_up from "../../Images/arrow_up.ico";
let toTheTop = () => {
	window.scrollTo(0, 0);
};


export const ArrowUp = () => {
	const [scroll, setScroll] = useState(false);
	const trackScroll = () => {
		window.pageYOffset > 200 ? setScroll(true) : setScroll(false);
	};
	window.addEventListener('scroll', trackScroll);
	return (
		<div className={s.footer} onClick={(e) => e.stopPropagation()}>
			{scroll && <img className={s.arrowUp} src={arrow_up} alt="" onClick={toTheTop}/>}
		</div>
	)
};