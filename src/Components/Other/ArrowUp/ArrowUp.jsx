import React from "react";
import s from "./ArrowUp.module.scss";
import arrow_up from "../../Images/arrow_up.ico";

let toTheTop = () => {
	window.scrollTo(0, 0);
};


export class ArrowUp extends React.PureComponent {

	state = {
		arrowUpShow: false
	};

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll);
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll = (event) => {

		let scrollTop = event.currentTarget.pageYOffset;
		if (scrollTop > 300) {
			this.setState({
				arrowUpShow: true
			});
		} else if (scrollTop < 300)
			this.setState({
				arrowUpShow: false
			});
	};

	render() {

		return (
			<div className={s.footer}
					 onClick={(e) => e.stopPropagation()}>
				{
					this.state.arrowUpShow &&
					<img className={s.arrowUp}
							 src={arrow_up}
							 alt=""
							 onClick={toTheTop}/>}
			</div>
		)
	}
}